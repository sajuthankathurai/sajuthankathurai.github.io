function getHeaders(optionalHeaders) {
  const headers = {
    "content-type": "application/json",
    "X-Application-Type": window.digitalData?.page?.applicationType || "",
    "X-Flow-Type": window.digitalData?.page?.flowType || "",
  };

  return { ...headers, ...optionalHeaders };
}

function customizedFetch(url, optionalHeaders) {
  return fetch(url, {
    method: "GET",
    headers: getHeaders(optionalHeaders),
    //There is a need to pass credentials to fetch. This is done to make API calls work in Edge 42.
    //https://github.com/github/fetch/tree/3674c98df696d45573750aa7873814887d25689a#sending-cookies
    credentials: "same-origin",
  });
}

async function asyncGETAll(urls) {
  return await Promise.all(urls.map((url) => customizedFetch(url, {})))
    .then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          const contentType = response.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            console.log(
              "Rest call failed for URL as the response contentType is " +
                contentType
            );

            return Promise.resolve(false);
          }
          return response.json();
        })
      );
    })
    .then(function (data) {
      return data.reduce((r, c) => ({ ...r, ...c }), {});
    })
    .catch(function (error) {
      console.log("Rest call failed for URL " + error);
    });
}

console.time("Dynamic data fetch call:");
asyncGETAll(["/affiliate.json", "/subscription.json"])
  .then((responseObj) => {
    console.timeEnd("Dynamic data fetch call:");
    window.digitalData = Object.assign(window.digitalData, responseObj);
    //document.dispatchEvent(apiCompletedAndDigitalDataMergedEvent);
    //document.dispatchEvent(fireAnalyticsEvent);
  })
  .catch((err) => {
    console.log(err);
  });
