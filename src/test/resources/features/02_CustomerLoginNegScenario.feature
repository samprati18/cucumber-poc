Feature: Customer Login - Negative Scenario
  Purpose of this API is to validate the customer id and password.
  And return the invalid message  based on the validation on customer id and password


  Scenario Outline: Invalid customer id and password  and response contains the success message

  Preconditions for testing the scenario:
  1. The customer exists in DB.
  2. Rest API is deployed and up and running on server "http://3.124.99.106:8027/ikano/customerLogin"



    Given the customer is requesting  "CustomerLoginRequest"
    When customer provide invalid user name as <customerID> and password as <PASSWORD>
    Then customer should get invalid credentials  response from the API



    Examples:
      | customerID 	 | PASSWORD 	| HTTPSTATUSCODE  |   RESPONSMESSAGE          |
      | 925903       |password1234  |   403           |   Invalid Credentials     |

