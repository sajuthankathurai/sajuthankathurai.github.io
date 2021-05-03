String.prototype.replaceAll = function (search, replacement) {
  let target = this;
  return target.split(search).join(replacement);
};
var functions = {
  isVPP() {
    const cultures = ["en-us", "de-de", "en-au", "en-ca", "en-gb", "en-in", "en-my", "en-nz", "en-ph", "en-sg", "es-ar", "pt-br", "es-mx", "es-cl", "es-co", "es-pe", "es-es", "fr-fr", "it-it", "nl-nl", "pt-pt"];
    return cultures.includes(digitalData.culture.culture);
  },
  isFreeTechSupport() {
    const cultures = ["en-us", "en-gb", "en-ca", "fr-ca", "en-au", "en-in", "en-my", "en-nz", "en-ph", "en-sg", "ko-kr", "zh-cn", "zh-tw", "zh-hk"];
    return cultures.includes(digitalData.culture.culture);
  },
  isIDTP() {
    const cultures = ["en-us"];
    const affiliates = ["0", "739", "662", "714"];
    return cultures.includes(digitalData.culture.culture) && affiliates.includes(digitalData.affiliate.affid);
  },
  isRetentionPackageMix() {
    /*   const packages=["539", "540", "541", "535", "536", "537"]; */
    const affiliates = ["105", "714", "662", "1357", "0", "885", "1000", "739"];
    if (digitalData.affiliate != null && digitalData.affiliate.affid != null) { 
      return affiliates.includes(digitalData.affiliate.affid)
    }
    return false;
  },
  isHP() {
    const cultures = ["en-us"];
    const affiliates = ["1067"];
    return cultures.includes(digitalData.culture.culture) && affiliates.includes(digitalData.affiliate.affid);
  },
  isARenabled() {
    const affiliates = ["0", "384", "718", "843", "850", "1049", "1216", "1250", "1267", "1268", "1269", "1271", "1273", "1274", "1275", "1276", "1277", "1278", "1279", "1280", "1281", "1282", "1283", "1284", "1285", "1286", "1287", "1288", "1289", "1290", "1291", "1292", "1293", "1391", "1399", "1400", "1406", "1463", "1465", "1466", "1467", "1468"];
    return affiliates.includes(digitalData.affiliate.affid);
  },
  expdt(format) {
    if (
      digitalData &&
      digitalData.subscription &&
      digitalData.subscription.expdt &&
      digitalData.subscription.expdt != ""
    ) {
      var expdt = digitalData.subscription.expdt;
      var actualDate = new Date(
        expdt.substring(0, 4),
        expdt.substring(4, 6),
        expdt.substring(6, 8)
      );
      var month = actualDate.getMonth(),
        fullYear = actualDate.getFullYear(),
        halfYear = actualDate
          .getFullYear()
          .toString()
          .substr(-2),
        date = actualDate.getDate();
      var updatedFormat = "";
      var customFormat = format.toLowerCase();
      if (customFormat.includes("mm")) {
        updatedFormat = customFormat.replaceAll("mm", month);
      }
      if (customFormat.includes("dd")) {
        updatedFormat = updatedFormat.replaceAll("dd", date);
      }
      if (customFormat.includes("yy")) {
        var yearField = updatedFormat.substring(
          updatedFormat.indexOf("y"),
          updatedFormat.lastIndexOf("y") + 1
        );
        if (yearField.length == 4) {
          updatedFormat = updatedFormat.replaceAll("yyyy", fullYear);
        } else if (yearField.length == 2) {
          updatedFormat = updatedFormat.replaceAll("yy", halfYear);
        }
      }
      return updatedFormat;
    }
    return "";
  },
  flattenObject(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        var temp = flattenObject(obj[key]);
        for (var key2 in temp) {
          newObj[key2] = temp[key2];
        }
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  },
  isARToggleRequired(data, callBack, callBackParams) {
    var criterias = [{ countryCode: "US", state: ["VT"], arToggleState: false }, { countryCode: "IN", arToggleState: false }, { countryCode: "DE", arToggleState: true }];
    var dataResources = flattenObject(data);
    var matchCount = 0;
    var matchFound = false;
    var keyData = [];
    var matchingFields = "";
    var customParams = null;
    criterias.forEach(function (criteria) {
      Object.keys(criteria).forEach(function (key) {
        if (key != "arToggleState") {
          keyData = Array.isArray(criteria[key]) ? criteria[key] : [criteria[key]];
          if (keyData.includes(dataResources[key])) {
            matchCount++;
          }
        }
      });
      if (matchCount == Object.keys(criteria).length - 1) {

        matchingFields = Object.keys(criteria);
        matchingFields.splice(matchingFields.indexOf("arToggleState"), 1);
        customParams = { arToggleState: criteria["arToggleState"], customFields: matchingFields.join(",") };
        if (typeof callBack == "function")
          callBack(customParams, callBackParams);
        matchFound = true;
      }
      matchCount = 0;
    });
    return matchFound;
  },
  featureSupport(cultureSupported, packageIdSupported, affidSupported) {
    if (cultureSupported.indexOf(digitalData.cartCulture.cultureCode) != -1 &&
      packageIdSupported.indexOf(digitalData.cartItems[Object.keys(digitalData.cartItems)[0]].pkg_id) != -1 &&
      affidSupported.indexOf(digitalData.cartAffiliate.affid) != -1) {
      return true;
    }
    return false;
  },
  isVPPEnabled() {
    const cultureSupported = ["en-us"];
    const packageIdSupported = ["521"];
    const affidSupported = ["0"];

    return featureSupport(cultureSupported, packageIdSupported, affidSupported);
  },
  isMIPEnabled() {
    const cultureSupported = ["en-us"];
    const packageIdSupported = ["430"];
    const affidSupported = ["1"];

    return featureSupport(cultureSupported, packageIdSupported, affidSupported);
  },
  isVPNEnabled() {
    const cultureSupported = ["en-us"];
    const packageIdSupported = ["430"];
    const affidSupported = ["0"];

    return featureSupport(cultureSupported, packageIdSupported, affidSupported);
  },
  enableCVSPayment(affid) {
    let affidList = ["0", "101", "1108"];
    if (affidList.indexOf(affid) != -1) {
      return true;
    }
    return false;
  },
  isEnableCVSPayment() {
    if (window.enableCVSPayment != undefined) {
      if (document.querySelector("div[data-instance=vue]") && document.querySelector("div[data-instance=vue]").__vue__ && document.querySelector("div[data-instance=vue]").__vue__.$store) {
        var paymentOptions = Object.assign({}, document.querySelector("div[data-instance=vue]").__vue__.get("digitalData.payments.culturePayments"));
        for (var item in paymentOptions) {
          if (item == "103") {
            var affid = document.querySelector("div[data-instance=vue]").__vue__.get("digitalData.cartAffiliate.affid") || "0";
            if (window.enableCVSPayment(affid)) {
              paymentOptions[item].isActivePayment = true;
            } else {
              paymentOptions[item].isActivePayment = false;
            }
          }
        }
        document.querySelector("div[data-instance=vue]").__vue__.set({ key: "digitalData.payments.culturePayments", value: paymentOptions });
      }
    }
  },
  getLegacyEnabledEcardURL(cultureToRedirect) {
    const ecardLegacyURL = "https://home.mcafee.com/Secure/RedeemCard/ECards.aspx";
    const cmsEnabledCultures = ["cs-cz", "da-dk", "de-ch", "de-de", "el-gr", "en-au", "en-ca", "en-gb", "en-in", "en-my", "en-nz", "en-ph", "en-sg", "en-us", "es-ar", "es-cl", "es-co", "es-es", "es-mx", "es-pa", "es-pe", "fi-fi", "fr-ca", "fr-ch", "fr-fr", "hr-hr", "hu-hu", "it-it", "ja-jp", "ko-kr", "nb-no", "nl-nl", "pl-pl", "pt-br", "pt-pt", "ru-ru", "sk-sk", "sv-se", "tr-tr", "zh-cn", "zh-hk", "zh-tw"];
    if (typeof cultureToRedirect != "undefined" && cultureToRedirect != "" && !cmsEnabledCultures.includes(cultureToRedirect)) {
      return ecardLegacyURL.concat("?culture=", cultureToRedirect);
    } else {
      return "";
    }
  },
  isWin10S() {
    var osInfo = false;

    if (window.external.getHostEnvironmentValue('os-mode').indexOf("{\"os-mode\":\"2\"}") != -1) {
      osInfo = true;
    }

    return osInfo;
  },
  getBrowserInfo() {
    var currentDate = new Date();
    var browserInfo = {};
    browserInfo.UserAgent = navigator.userAgent;
    browserInfo.AcceptHeader =
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
    browserInfo.Language = navigator.language;
    browserInfo.ColorDepth = screen.colorDepth;
    browserInfo.ScreenHeight = screen.height;
    browserInfo.ScreenWidth = screen.width;
    browserInfo.TimeZoneOffset = currentDate.getTimezoneOffset();
    browserInfo.JavaEnabled = navigator.javaEnabled();
    browserInfo.Origin = window.location.origin;
    return browserInfo;
  },
  isDynamicFeatureSupported() {
    const cultureSupported = ["en-us"];
    const packageIdSupported = ["430", "521", "610", "609", "540", "536", "541", "535"];
    const affidSupported = ["739", "1000", "885", "714", "977", "897", "747", "752", "997", "773", "795", "687", "707", "976", "837", "810", "836", "903", "755", "896", "1209", "1067", "1226", "1221", "1214", "1081", "1126", "1045", "1050", "1140", "1130", "1084", "1097", "1232", "1230", "1224", "1208", "1264", "1234", "1242", "1266", "1237", "1250", "1235", "1348", "1359", "1358", "1360", "1357", "1330", "1294", "1456", "1451", "1441", "1439", "1440", "1522", "1380", "1388", "400", "0", "105", "667", "662", "532", "676", "648", "605", "685", "84", "518", "370", "448", "677", "606", "643", "128", "440", "550", "449", "101"];

    if (cultureSupported.indexOf(digitalData.culture.culture) != -1 &&
      (packageIdSupported.indexOf(digitalData.qs.uspkg) != -1 || packageIdSupported.indexOf(digitalData.qs.upsellpkg_id) != -1) &&
      affidSupported.indexOf(digitalData.affiliate.affid) != -1) {
      return true;
    }
    return false;
  },
  getQSParam(param) {
    var param = param.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + param + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, ' '));
  },
  arSignupEnabled() {
    var paymentOptions = Object.assign({}, document.querySelector("div[data-instance=vue]").__vue__.get("digitalData.payments.culturePayments"));
    for (var item in paymentOptions) {
      if (item != "100") {
        document.querySelector("div[data-instance=vue]").__vue__.set({ key: "digitalData.payments.culturePayments[" + item + "].isActivePayment", value: false });
      }
    }
  }
}
var digitalData = window.digitalData || {};
digitalData.tempPromoApplied = true;
document.addEventListener("registerDirectivesEvent", (eve) => {
  Object.assign(eve.detail.vueInstance.config.globalProperties, functions);
});