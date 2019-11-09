Feature: GetCustomerInfo - Happy Path scenarios
  Purpose of this API is to fetch the customer details from SAAS/Master Data.
  And return the success/invalid message  based on the validation on customerId


  Scenario Outline: Valid customer id  and response contains the success message

  Preconditions for testing the scenario:
  1. The customer exists in DB.
  2. Rest API is deployed and up and running on server "http://3.124.24.154:8085/ikano/srh"

  # and "CustomerLoginURL" - You need to make function which will read the this string and config/properties file have key value pair which will hold the API #end   points

    Given the customerLogin is requesting for "GetCustomerDetails"
    When Customer provide customerId as <customerNumber>
    Then Customer should get response from the API



    Examples:
      | customerNumber 	 | searchMode 	 |HTTPSTATUSCODE  |
      | 109106047        |   C           |   200          |
