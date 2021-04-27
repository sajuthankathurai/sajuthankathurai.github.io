var digitalData = {
  cacheableQSParams: [],
  cacheableDependentQSParams: [],
  utagEvent: {
    config: [
      {
        fired: "false",
        pageLoad: "false",
        defaultValue: "true",
        fireWhen: "na",
        fireCount: "multiple",
        tagName: "tm_global_buynow_clicks",
        type: "individual",
        timesFired: "0",
      },
    ],
  },
  payments: {
    culturePayments: {},
    errorDetails: [
      {
        errorMessage:
          "Payments folder is not created at:/content/dam/consumer/en-ca/ipz/payments/",
      },
    ],
  },
  cacheableDependentDataLayers: [],
  cacheableDataLayers: ["affiliateV2"],
  tealiumSettings: {
    config: {
      environmentPath: "mcafee/consumer-main/qa",
      synchronousConnection: false,
      fireAnalytics: true,
      loadInterval: "1500",
    },
  },
  utagFetch: {
    config: [
      {
        tagName: "tm_global_affiliate_code",
        config: "digitalData.affiliate.affUrlCode",
      },
      {
        tagName: "tm_global_affiliate_id",
        config: "digitalData.affiliate.affid",
      },
      {
        tagName: "tm_global_affiliate_name",
        config: "digitalData.affiliate.affname",
      },
      { tagName: "tm_global_channel", config: "digitalData.affiliate.channel" },
      { tagName: "tm_global_country", config: "digitalData.culture.country" },
      {
        tagName: "tm_global_culture_code",
        config: "digitalData.culture.culture",
      },
      { tagName: "tm_global_geo", config: "digitalData.culture.geo" },
      {
        tagName: "tm_global_businessunit",
        config: "digitalData.analytics.businessUnit",
      },
      {
        tagName: "tm_global_platform",
        config: "digitalData.analytics.platform",
      },
      {
        tagName: "tm_global_source_type",
        config: "digitalData.analytics.sourceType",
      },
      {
        tagName: "tm_global_traffic_source_type",
        config: "digitalData.analytics.trafficSourceType",
      },
      {
        tagName: "tm_global_sitesection",
        config: "digitalData.analytics.siteSection",
      },
      {
        tagName: "tm_global_sitesection_level2",
        config: "digitalData.analytics.siteSectionLevel2",
      },
      {
        tagName: "tm_global_sitesection_level3",
        config: "digitalData.analytics.siteSectionLevel3",
      },
      {
        tagName: "tm_global_3rdparty_pixels",
        config: "digitalData.analytics['3rdPartyPixels']",
      },
      {
        tagName: "tm_global_page_publish_date",
        config: "digitalData.page.publishDate",
      },
      { tagName: "tm_global_vanity_url", config: "digitalData.page.vanityURL" },
      { tagName: "tm_global_pagename", config: "digitalData.page.name" },
      {
        tagName: "tm_global_pageurl",
        config: "digitalData.page.url + window.location.search",
      },
      {
        tagName: "tm_global_purchase_product_codes",
        config:
          "Object.values(window.digitalData.offers).map(function(off){return off.packageCode}).filter(function(value, index, self) {return self.indexOf(value) === index;}).join(',')",
      },
      {
        tagName: "tm_global_purchase_product_ids",
        config:
          "Object.values(window.digitalData.offers).map(function(off){return off.packageCode.split('_')[1]}).filter(function(value, index, self) {return self.indexOf(value) === index;}).join(',')",
      },
      {
        tagName: "tm_global_cms_experience_name",
        config:
          "digitalData.experiences.selectedExperiences ? Object.values(digitalData.experiences.selectedExperiences).map(function(exp){return exp.experienceTitle}).join(',').replaceDash() :''",
      },
      {
        tagName: "tm_global_cms_segment",
        config:
          "var rule = window.digitalData.offerSegmentRules.rules.filter(function(ex) { return ex.evalResult == true})[0]; rule && rule.name ? rule.name.toLowerCase().replaceDash() : '';",
      },
      {
        tagName: "tm_global_cms_campaign_p_name",
        config: "analyticsData.getCampaignPName()",
      },
      {
        tagName: "tm_global_cms_campaign_pu_name",
        config: "analyticsData.getCampaignPUName()",
      },
      {
        tagName: "tm_global_coe",
        config:
          "digitalData.qs.ccoe ? digitalData.qs.ccoe : digitalData.analytics.coe",
      },
      {
        tagName: "tm_global_coe_level2",
        config:
          "digitalData.qs.ccoel2 ? digitalData.qs.ccoel2 : digitalData.analytics.coel2",
      },
      {
        tagName: "tm_global_cms_campaign_type",
        config:
          "digitalData.qs.cctype ? digitalData.qs.cctype : digitalData.analytics.campaignType",
      },
      {
        tagName: "tm_global_cms_campaign_sub_type",
        config:
          "digitalData.qs.ccstype ? digitalData.qs.ccstype : digitalData.analytics.campaignSubType",
      },
      {
        tagName: "tm_global_source",
        config:
          "digitalData.qs.csrc ? digitalData.qs.csrc : analyticsData.getGlobalSource()",
      },
      {
        tagName: "tm_global_source_level2",
        config:
          "digitalData.qs.csrcl2 ? digitalData.qs.csrcl2 : analyticsData.getSourceLevel2()",
      },
      {
        tagName: "tm_global_affiliate_category",
        config: "digitalData.qs.cafcat",
      },
      {
        tagName: "tm_global_loginstatus",
        config:
          "(function getLoginStatus(){switch(digitalData.qs.cls){case '1':return'unauthenticated : new';case '2':return'authenticated : new';case '3':return'authenticated : existing';case '4':return'unauthenticated: existing';default:return'unknown'}})()",
      },
      {
        tagName: "tm_global_cms_targeted_user_profile",
        config:
          "var rule = window.digitalData.offerSegmentRules.rules.filter(function(ex) { return ex.evalResult == true})[0]; digitalData.qs.cseg ? digitalData.qs.cseg : rule && rule.name ? rule.name.toLowerCase().replaceDash() : ''",
      },
      {
        tagName: "tm_global_user_profile_type1",
        config:
          "(function getUserProfileType1(){switch(digitalData.qs.cupf){case '1':return'new';case '2':return'cof';case '3':return'noncof';default:return'notfound'}})()",
      },
      { tagName: "tm_global_ak_culture", config: "digitalData.qs.ak_culture" },
      { tagName: "tm_global_ip_state", config: "digitalData.qs.ipst" },
      { tagName: "tm_global_ip_country", config: "digitalData.qs.ipcon" },
      {
        tagName: "tm_local_lp_ab_test_variant",
        config: "digitalData.qs.tm_local_lp_ab_test_variant",
      },
      { defaultValue: "", tagName: "tm_global_navigation_element" },
      { defaultValue: "", tagName: "tm_global_cms_campaign_pub_name" },
      { defaultValue: "true", tagName: "tm_global_navigation_element_click" },
      {
        tagName: "tm_local_store_page_visit",
        config:
          "digitalData.analytics.siteSection && digitalData.analytics.siteSection.toLowerCase() == 'store' ? true : false",
      },
      {
        tagName: "tm_local_landing_page_visit",
        config:
          "digitalData.analytics.siteSection && digitalData.analytics.siteSection.toLowerCase() == 'landingpages' ? true : false",
      },
    ],
    order: ["config"],
  },
  experiences: {
    totalSections: 4,
    sections: [
      {
        path:
          "/content/consumer/en-ca/landing-page/retention/mls-family/livesafe3-0-notealium/jcr:content/root/responsivegrid/offerconfig",
        personalized: false,
      },
      {
        path:
          "/content/consumer/en-ca/landing-page/retention/mls-family/livesafe3-0-notealium/jcr:content/root/responsivegrid/htmlcontentfragment_",
        personalized: false,
      },
      {
        path:
          "/content/consumer/en-ca/landing-page/retention/mls-family/livesafe3-0-notealium/jcr:content/root/responsivegrid/personalizedsection",
        personalized: false,
      },
      {
        path:
          "/content/consumer/en-ca/landing-page/retention/mls-family/livesafe3-0-notealium/jcr:content/root/responsivegrid/personalizedsection_",
        personalized: false,
      },
    ],
  },
  cart: { cartUrl: "/consumer/en-ca/ipz/checkout/2web/payment.html" },
  analytics: {
    siteSection: "landingpages",
    businessUnit: "Consumer",
    campaignType: "expiry",
    campaignSubType: "default",
    sourceType: "client:wss:tp:buy",
    trafficSourceType: "expiry",
    siteSectionLevel3: "expiry",
    siteSectionLevel2: "atp",
    platform: "web",
  },
  nonCacheableQSParams: [],
  culture: {
    geo: "na",
    continent: "AS",
    country: "canada",
    culture: "en-ca",
    countryCode: "IN",
    currencyCode: "cad",
  },
  page: {
    applicationType: "",
    publishDate: "date: 23/4/2021 time: 0:38:44 timezone: gmt-06:00",
    rules: [
      {
        expression:
          "(digitalData.subscription && (digitalData.subscription.termtype == 1 || digitalData.subscription.termtype == 0 || digitalData.subscription.daysToExpire > 0 || (digitalData.subscription.daysToExpire == 0 && digitalData.subscription.daysExpired == 0)))",
        assignment: "(digitalData.page.title='McAfee LiveSafe - Expires Soon')",
      },
      {
        expression:
          "(digitalData.subscription && (digitalData.subscription.termtype == 2 || digitalData.subscription.daysExpired > 0))",
        assignment: "(digitalData.page.title='McAfee LiveSafe - Expired')",
      },
    ],
    title: "livesafe3-0-notealium",
    path:
      "/content/consumer/en-ca/landing-page/retention/mls-family/livesafe3-0-notealium",
    subscriptionExtn: "false",
    instanceId: "livesafe3-0-notealium",
    isSessionDataEnabled: false,
    piiData: ["email"],
    vanityURL: "not available",
    cartType: "single",
    lang: "en_CA",
    navTitle: "livesafe3-0-notealium",
    disableProcessTaxCall: "false",
    themeCSS: "inherit",
    effectiveCSS: "",
    langTag: "en-CA",
    setCheckoutSessionCookie: "false",
    url:
      "http://mcafee-uat.mcafee.com/content/consumer/en-ca/landing-page/retention/mls-family/livesafe3-0-notealium.html",
    actionType: "savebillingwithARturnON",
    isAuthorMode: false,
    name: "livesafe3-0-notealium",
    overrideCSS: false,
    wcmMode: "DISABLED",
    flowType: "",
  },
  utagView: {
    config: [
      { tagName: "tm_global_affiliate_code", event: "none", pageView: "true" },
      { tagName: "tm_global_affiliate_id", event: "all", pageView: "true" },
      { tagName: "tm_global_affiliate_name", event: "none", pageView: "true" },
      { tagName: "tm_global_channel", event: "all", pageView: "true" },
      { tagName: "tm_global_country", event: "none", pageView: "true" },
      { tagName: "tm_global_culture_code", event: "all", pageView: "true" },
      { tagName: "tm_global_geo", event: "none", pageView: "true" },
      { tagName: "tm_global_businessunit", event: "none", pageView: "true" },
      { tagName: "tm_global_platform", event: "none", pageView: "true" },
      { tagName: "tm_global_source_type", event: "none", pageView: "true" },
      {
        tagName: "tm_global_traffic_source_type",
        event: "none",
        pageView: "true",
      },
      { tagName: "tm_global_sitesection", event: "none", pageView: "true" },
      {
        tagName: "tm_global_sitesection_level2",
        event: "none",
        pageView: "true",
      },
      {
        tagName: "tm_global_sitesection_level3",
        event: "none",
        pageView: "true",
      },
      { tagName: "tm_global_3rdparty_pixels", event: "none", pageView: "true" },
      {
        tagName: "tm_global_page_publish_date",
        event: "none",
        pageView: "true",
      },
      { tagName: "tm_global_vanity_url", event: "none", pageView: "true" },
      { tagName: "tm_global_pagename", event: "none", pageView: "true" },
      { tagName: "tm_global_pageurl", event: "none", pageView: "true" },
      {
        tagName: "tm_global_purchase_product_codes",
        event: "none",
        pageView: "true",
      },
      {
        tagName: "tm_global_purchase_product_ids",
        event: "all",
        pageView: "true",
      },
      {
        tagName: "tm_global_cms_experience_name",
        event: "none",
        pageView: "true",
      },
      { tagName: "tm_global_cms_segment", event: "none", pageView: "true" },
      {
        tagName: "tm_global_cms_campaign_p_name",
        event: "none",
        pageView: "true",
      },
      {
        tagName: "tm_global_cms_campaign_pu_name",
        event: "none",
        pageView: "true",
      },
      { tagName: "tm_global_coe", event: "all", pageView: "true" },
      { tagName: "tm_global_coe_level2", event: "all", pageView: "true" },
      {
        tagName: "tm_global_cms_campaign_type",
        event: "all",
        pageView: "true",
      },
      {
        tagName: "tm_global_cms_campaign_sub_type",
        event: "all",
        pageView: "true",
      },
      { tagName: "tm_global_source", event: "all", pageView: "true" },
      { tagName: "tm_global_source_level2", event: "all", pageView: "true" },
      {
        tagName: "tm_global_affiliate_category",
        event: "all",
        pageView: "true",
      },
      { tagName: "tm_global_loginstatus", event: "all", pageView: "true" },
      {
        tagName: "tm_global_cms_targeted_user_profile",
        event: "all",
        pageView: "true",
      },
      {
        tagName: "tm_global_user_profile_type1",
        event: "all",
        pageView: "true",
      },
      { tagName: "tm_global_ak_culture", event: "all", pageView: "true" },
      { tagName: "tm_global_ip_state", event: "all", pageView: "true" },
      { tagName: "tm_global_ip_country", event: "all", pageView: "true" },
      {
        tagName: "tm_local_lp_ab_test_variant",
        event: "all",
        pageView: "true",
      },
      {
        specificEvents: ["tm_global_buynow_clicks"],
        tagName: "tm_global_navigation_element",
        event: "specificEvents",
        pageView: "false",
      },
      {
        specificEvents: ["tm_global_buynow_clicks"],
        tagName: "tm_global_cms_campaign_pub_name",
        event: "specificEvents",
        pageView: "false",
      },
      {
        specificEvents: ["tm_global_buynow_clicks"],
        tagName: "tm_global_navigation_element_click",
        event: "specificEvents",
        pageView: "false",
      },
      { tagName: "tm_local_store_page_visit", event: "none", pageView: "true" },
      {
        tagName: "tm_local_landing_page_visit",
        event: "none",
        pageView: "true",
      },
    ],
  },
  nonCacheableDataLayers: [
    "geoData",
    "deviceV2",
    "orderV2",
    "userProfileV2",
    "subscriptionV2",
  ],
};
