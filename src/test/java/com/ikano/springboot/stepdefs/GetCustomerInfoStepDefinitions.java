package com.ikano.springboot.stepdefs;

import com.ikano.springboot.model.ResponseHeaders;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;

import static io.restassured.RestAssured.given;

public class GetCustomerInfoStepDefinitions {

    private Response response;
    private ValidatableResponse json;
    private RequestSpecification request;

    private String ENDPOINT_CUSTOMER_DETAILS = "http://3.124.24.154:8085/ikano/srh";


    @Given("the customerLogin is requesting for (.*)")
    public void existing_customer_requests_for_accountId(String apiName) {
        System.out.println("Executing service " + apiName);
    }

    @When("Customer provide customerId as (.*)")
    public void customer_is_providing_customerId(String customerId) {
        System.out.println("respnse Headers " + ResponseHeaders.getInstance());
        JSONObject jsonObj = new JSONObject()
                .put("customerId", customerId)
                .put("searchMode", "C");

        response = given()
                .contentType("application/json")
                .body(jsonObj.toString())
                .when()
                .post(ENDPOINT_CUSTOMER_DETAILS);

    }


    @Then("Customer should get response from the API")
    public void verify_response() {
        response.then().statusCode(200);
        System.out.println("response: " + response.prettyPrint());
    }


}
