$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/MenuNavigation.feature");
formatter.feature({
  "name": "Menu Navigation",
  "description": "  As a shopper\n  I need to be able to navigate\n  In order to find what I need",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Shopper has navigated to the store",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.shopper_has_navigated_to_the_store()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Main category navigation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.step({
  "name": "Shopper navigates \"DRESSES\" then \"SUMMER DRESSES\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.shopper_navigates_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Category name should be \"SUMMER DRESSES\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.the_Category_name_should_be(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".cat\\-name\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027C02Y962ZJG5H\u0027, ip: \u0027fe80:0:0:0:4b0:f1a3:67db:ac57%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/mx/00cycdxj78j...}, goog:chromeOptions: {debuggerAddress: localhost:59957}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 57364350cc7cbfdc4071ea3fbb400796\n*** Element info: {Using\u003dclass name, value\u003dcat-name}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.fred.stepDefinitions.Stepdefinitions.the_Category_name_should_be(Stepdefinitions.java:60)\n\tat ✽.the Category name should be \"SUMMER DRESSES\"(file:src/test/resources/features/MenuNavigation.feature:12)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/RegisterForNewsletter.feature");
formatter.feature({
  "name": "Register For Newsletter",
  "description": "  As a shopper\n  In order to stay informed via newsletter\n  I need to bee able to register my email",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@NewsletterRegistration"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Shopper has navigated to the store",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.shopper_has_navigated_to_the_store()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid email address error message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NewsletterRegistration"
    }
  ]
});
formatter.step({
  "name": "Shopper registers a \"invalid\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.shopper_registers_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A \"Invalid email\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.a_message_is_displayed(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".alert\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027C02Y962ZJG5H\u0027, ip: \u0027fe80:0:0:0:4b0:f1a3:67db:ac57%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/mx/00cycdxj78j...}, goog:chromeOptions: {debuggerAddress: localhost:60011}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b2e83a6a7c388e05c56ff22fd3745f79\n*** Element info: {Using\u003dclass name, value\u003dalert}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.fred.stepDefinitions.Stepdefinitions.a_message_is_displayed(Stepdefinitions.java:46)\n\tat ✽.A \"Invalid email\" message is displayed(file:src/test/resources/features/RegisterForNewsletter.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});