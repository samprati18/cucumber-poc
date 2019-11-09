Feature: Customer Login - Happy Path
  Purpose of this API is to validate the customer id and password.
  And return the success/invalid message  based on the validation on customer id and password


  Scenario Outline: Valid customer id and password  and response contains the success message

  Preconditions for testing the scenario:
  1. The customer exists in DB.
  2. Rest API is deployed and up and running on server "http://3.124.99.106:8027/ikano/customerLogin"



    Given the customerLogin requests "CustomerLoginRequest"
    When Customer provide user name as <customerID> and password as <PASSWORD>
    Then Customer should get valid response from the API



    Examples:
      | customerID 	 | PASSWORD 	| HTTPSTATUSCODE  |   RESPONSMESSAGE          |
      | 925903       |password  	|   200           |   Login successfully      |

