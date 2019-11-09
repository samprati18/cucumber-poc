package com.ikano.springboot.stepdefs;

import com.ikano.springboot.model.ResponseHeaders;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;

import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;

public class CustomerLoginStepDefinitions {

    private Response response;
    private ValidatableResponse json;
    private RequestSpecification request;

    private String ENDPOINT_CUSTOMER_LOGIN = "http://3.124.99.106:8027/ikano/customerLogin";


    @Given("the customerLogin requests (.*)")
    public void existing_customer_login_into_module(String apiName) {
        System.out.println("API Name " + apiName);
    }

    @When("Customer provide user name as (.*) and password as (.*)")
    public void customer_is_providing_userName_and_password(String userName, String password) {
        JSONObject jsonObj = new JSONObject()
                .put("customerId", userName)
                .put("password", password);


        response = given()
                .contentType("application/json")
                .body(jsonObj.toString())
                .when()
                .post(ENDPOINT_CUSTOMER_LOGIN);
    }


    @Then("Customer should get valid response from the API")
    public void verify_valid_response() {
        response.then().statusCode(200);
        System.out.println("response: " + response.prettyPrint());
        System.out.println(response.getHeader("Authorization"));
        ResponseHeaders.init(response.getHeader("Authorization"));
    }


}


