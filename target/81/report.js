$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_CustomerLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Login - Happy Path",
  "description": "Purpose of this API is to validate the customer id and password.\r\nAnd return the success/invalid message  based on the validation on customer id and password",
  "id": "customer-login---happy-path",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Valid customer id and password  and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8027/ikano/customerLogin\"",
  "id": "customer-login---happy-path;valid-customer-id-and-password--and-response-contains-the-success-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the customerLogin requests \"CustomerLoginRequest\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Customer provide user name as \u003ccustomerID\u003e and password as \u003cPASSWORD\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Customer should get valid response from the API",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "customer-login---happy-path;valid-customer-id-and-password--and-response-contains-the-success-message;",
  "rows": [
    {
      "cells": [
        "customerID",
        "PASSWORD",
        "HTTPSTATUSCODE",
        "RESPONSMESSAGE"
      ],
      "line": 21,
      "id": "customer-login---happy-path;valid-customer-id-and-password--and-response-contains-the-success-message;;1"
    },
    {
      "cells": [
        "925903",
        "password",
        "200",
        "Login successfully"
      ],
      "line": 22,
      "id": "customer-login---happy-path;valid-customer-id-and-password--and-response-contains-the-success-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Valid customer id and password  and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8027/ikano/customerLogin\"",
  "id": "customer-login---happy-path;valid-customer-id-and-password--and-response-contains-the-success-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the customerLogin requests \"CustomerLoginRequest\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Customer provide user name as 925903 and password as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Customer should get valid response from the API",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\"CustomerLoginRequest\"",
      "offset": 27
    }
  ],
  "location": "CustomerLoginStepDefinitions.existing_customer_login_into_module(String)"
});
formatter.result({
  "duration": 310962499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "925903",
      "offset": 30
    },
    {
      "val": "password",
      "offset": 53
    }
  ],
  "location": "CustomerLoginStepDefinitions.customer_is_providing_userName_and_password(String,String)"
});
formatter.result({
  "duration": 5022489700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginStepDefinitions.verify_valid_response()"
});
formatter.result({
  "duration": 983396900,
  "status": "passed"
});
formatter.uri("02_CustomerLoginNegScenario.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Login - Negative Scenario",
  "description": "Purpose of this API is to validate the customer id and password.\r\nAnd return the invalid message  based on the validation on customer id and password",
  "id": "customer-login---negative-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Invalid customer id and password  and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8027/ikano/customerLogin\"",
  "id": "customer-login---negative-scenario;invalid-customer-id-and-password--and-response-contains-the-success-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the customer is requesting  \"CustomerLoginRequest\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "customer provide invalid user name as \u003ccustomerID\u003e and password as \u003cPASSWORD\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "customer should get invalid credentials  response from the API",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "customer-login---negative-scenario;invalid-customer-id-and-password--and-response-contains-the-success-message;",
  "rows": [
    {
      "cells": [
        "customerID",
        "PASSWORD",
        "HTTPSTATUSCODE",
        "RESPONSMESSAGE"
      ],
      "line": 21,
      "id": "customer-login---negative-scenario;invalid-customer-id-and-password--and-response-contains-the-success-message;;1"
    },
    {
      "cells": [
        "925903",
        "password1234",
        "403",
        "Invalid Credentials"
      ],
      "line": 22,
      "id": "customer-login---negative-scenario;invalid-customer-id-and-password--and-response-contains-the-success-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid customer id and password  and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8027/ikano/customerLogin\"",
  "id": "customer-login---negative-scenario;invalid-customer-id-and-password--and-response-contains-the-success-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the customer is requesting  \"CustomerLoginRequest\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "customer provide invalid user name as 925903 and password as password1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "customer should get invalid credentials  response from the API",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " \"CustomerLoginRequest\"",
      "offset": 27
    }
  ],
  "location": "CustomerLoginNegativeScenarioStepDefinitions.existing_customer_login_into_module(String)"
});
formatter.result({
  "duration": 366400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "925903",
      "offset": 38
    },
    {
      "val": "password1234",
      "offset": 61
    }
  ],
  "location": "CustomerLoginNegativeScenarioStepDefinitions.customer_is_providing_userName_and_password(String,String)"
});
formatter.result({
  "duration": 108202000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginNegativeScenarioStepDefinitions.verify_valid_response()"
});
formatter.result({
  "duration": 5935100,
  "status": "passed"
});
formatter.uri("03_GetCustomerDetails.feature");
formatter.feature({
  "line": 1,
  "name": "GetCustomerInfo - Happy Path scenarios",
  "description": "Purpose of this API is to fetch the customer details from SAAS/Master Data.\r\nAnd return the success/invalid message  based on the validation on customerId",
  "id": "getcustomerinfo---happy-path-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Valid customer id  and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.24.154:8085/ikano/srh\"",
  "id": "getcustomerinfo---happy-path-scenarios;valid-customer-id--and-response-contains-the-success-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# and \"CustomerLoginURL\" - You need to make function which will read the this string and config/properties file have key value pair which will hold the API #end   points"
    }
  ],
  "line": 14,
  "name": "the customerLogin is requesting for \"GetCustomerDetails\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Customer provide customerId as \u003ccustomerNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Customer should get response from the API",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "getcustomerinfo---happy-path-scenarios;valid-customer-id--and-response-contains-the-success-message;",
  "rows": [
    {
      "cells": [
        "customerNumber",
        "searchMode",
        "HTTPSTATUSCODE"
      ],
      "line": 21,
      "id": "getcustomerinfo---happy-path-scenarios;valid-customer-id--and-response-contains-the-success-message;;1"
    },
    {
      "cells": [
        "109106047",
        "C",
        "200"
      ],
      "line": 22,
      "id": "getcustomerinfo---happy-path-scenarios;valid-customer-id--and-response-contains-the-success-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Valid customer id  and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.24.154:8085/ikano/srh\"",
  "id": "getcustomerinfo---happy-path-scenarios;valid-customer-id--and-response-contains-the-success-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# and \"CustomerLoginURL\" - You need to make function which will read the this string and config/properties file have key value pair which will hold the API #end   points"
    }
  ],
  "line": 14,
  "name": "the customerLogin is requesting for \"GetCustomerDetails\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Customer provide customerId as 109106047",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Customer should get response from the API",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\"GetCustomerDetails\"",
      "offset": 36
    }
  ],
  "location": "GetCustomerInfoStepDefinitions.existing_customer_requests_for_accountId(String)"
});
formatter.result({
  "duration": 342799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "109106047",
      "offset": 31
    }
  ],
  "location": "GetCustomerInfoStepDefinitions.customer_is_providing_customerId(String)"
});
formatter.result({
  "duration": 2325492300,
  "status": "passed"
});
formatter.match({
  "location": "GetCustomerInfoStepDefinitions.verify_response()"
});
formatter.result({
  "duration": 12582701,
  "status": "passed"
});
formatter.uri("04_GenerateQRCode.feature");
formatter.feature({
  "line": 1,
  "name": "GenerateQRCode - Happy Path scenarios",
  "description": "Purpose of this API is to generate QR Code for customer.\r\nAnd return the success/invalid message  based on the validation on customerId and amount",
  "id": "generateqrcode---happy-path-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Valid customer id and amount and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8086/ikano/generateQRCode\"",
  "id": "generateqrcode---happy-path-scenarios;valid-customer-id-and-amount-and-response-contains-the-success-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the customer  is executing  \"GenerateQRCode\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Customer enters customerId \u003ccustomerId\u003e and amount as \u003camount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Customer should receive qr code from api",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "generateqrcode---happy-path-scenarios;valid-customer-id-and-amount-and-response-contains-the-success-message;",
  "rows": [
    {
      "cells": [
        "customerId",
        "amount",
        "HTTP STATUS CODE"
      ],
      "line": 21,
      "id": "generateqrcode---happy-path-scenarios;valid-customer-id-and-amount-and-response-contains-the-success-message;;1"
    },
    {
      "cells": [
        "925903",
        "12344",
        "200"
      ],
      "line": 22,
      "id": "generateqrcode---happy-path-scenarios;valid-customer-id-and-amount-and-response-contains-the-success-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Valid customer id and amount and response contains the success message",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8086/ikano/generateQRCode\"",
  "id": "generateqrcode---happy-path-scenarios;valid-customer-id-and-amount-and-response-contains-the-success-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the customer  is executing  \"GenerateQRCode\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Customer enters customerId 925903 and amount as 12344",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Customer should receive qr code from api",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " \"GenerateQRCode\"",
      "offset": 27
    }
  ],
  "location": "GenerateQRCodeStepDefinitions.the_customer_is_executing_qr_code(String)"
});
formatter.result({
  "duration": 341300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "925903",
      "offset": 27
    },
    {
      "val": "12344",
      "offset": 48
    }
  ],
  "location": "GenerateQRCodeStepDefinitions.customer_enters_customerId_and_amount(String,String)"
});
formatter.result({
  "duration": 491757300,
  "status": "passed"
});
formatter.match({
  "location": "GenerateQRCodeStepDefinitions.customer_should_receive_qr_code_from_api()"
});
formatter.result({
  "duration": 14150200,
  "status": "passed"
});
formatter.uri("05_ReadQRCode.feature");
formatter.feature({
  "line": 1,
  "name": "ReadQRCode - Happy Path scenarios",
  "description": "Purpose of this API is to read QR Code for customer.\r\nAnd return the success/invalid message",
  "id": "readqrcode---happy-path-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Merchant will read the qr code",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8086/ikano/readQRCode\"",
  "id": "readqrcode---happy-path-scenarios;merchant-will-read-the-qr-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the merchant will execute  \"ReadQRCode\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "merchant  enter details",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "merchant should read qr code from api",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "readqrcode---happy-path-scenarios;merchant-will-read-the-qr-code;",
  "rows": [
    {
      "cells": [
        "HTTP STATUS CODE"
      ],
      "line": 20,
      "id": "readqrcode---happy-path-scenarios;merchant-will-read-the-qr-code;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 21,
      "id": "readqrcode---happy-path-scenarios;merchant-will-read-the-qr-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Merchant will read the qr code",
  "description": "\r\nPreconditions for testing the scenario:\r\n1. The customer exists in DB.\r\n2. Rest API is deployed and up and running on server \"http://3.124.99.106:8086/ikano/readQRCode\"",
  "id": "readqrcode---happy-path-scenarios;merchant-will-read-the-qr-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the merchant will execute  \"ReadQRCode\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "merchant  enter details",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "merchant should read qr code from api",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " \"ReadQRCode\"",
      "offset": 26
    }
  ],
  "location": "ReadQRCodeStepDefinitions.the_merchant_will_execute(String)"
});
formatter.result({
  "duration": 531300,
  "status": "passed"
});
formatter.match({
  "location": "ReadQRCodeStepDefinitions.merchant_enter_details()"
});
formatter.result({
  "duration": 701478600,
  "status": "passed"
});
formatter.match({
  "location": "ReadQRCodeStepDefinitions.merchant_should_read_qr_code_from_api()"
});
formatter.result({
  "duration": 1555099,
  "status": "passed"
});
});