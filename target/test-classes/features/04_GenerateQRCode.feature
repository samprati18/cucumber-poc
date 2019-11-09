Feature: GenerateQRCode - Happy Path scenarios
  Purpose of this API is to generate QR Code for customer.
  And return the success/invalid message  based on the validation on customerId and amount


  Scenario Outline: Valid customer id and amount and response contains the success message

  Preconditions for testing the scenario:
  1. The customer exists in DB.
  2. Rest API is deployed and up and running on server "http://3.124.99.106:8086/ikano/generateQRCode"



    Given the customer  is executing  "GenerateQRCode"
    When Customer enters customerId <customerId> and amount as <amount>
    Then Customer should receive qr code from api



    Examples:
      | customerId 	 | amount         | HTTP STATUS CODE   |
      | 925903       |  12344         |     200            |

