Feature: ReadQRCode - Happy Path scenarios
  Purpose of this API is to read QR Code for customer.
  And return the success/invalid message


  Scenario Outline: Merchant will read the qr code

  Preconditions for testing the scenario:
  1. The customer exists in DB.
  2. Rest API is deployed and up and running on server "http://3.124.99.106:8086/ikano/readQRCode"



    Given the merchant will execute  "ReadQRCode"
    When  merchant  enter details
    Then  merchant should read qr code from api


    Examples:
      |  HTTP STATUS CODE   |
      |     200            |






