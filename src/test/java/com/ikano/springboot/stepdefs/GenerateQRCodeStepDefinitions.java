package com.ikano.springboot.stepdefs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ikano.springboot.model.GenerateQRCodeResponse;
import com.ikano.springboot.model.QRCode;
import com.ikano.springboot.model.ReadQRCode;
import com.ikano.springboot.model.ResponseHeaders;
//import com.ikano.springboot.util.ConstructResponseUtil;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;

import static io.restassured.RestAssured.given;

public class GenerateQRCodeStepDefinitions {

    private Response response;
    private ValidatableResponse json;
    private RequestSpecification request;

    private String ENDPOINT_GENERATE_QR_CODE = "http://3.124.99.106:8086/ikano/generateQRCode";

    @Given("the customer  is executing (.*)")
    public void the_customer_is_executing_qr_code(String apiName) {
        System.out.println("Executing service " + apiName);
    }


    @When("Customer enters customerId (.*) and amount as (.*)")
    public void customer_enters_customerId_and_amount(String customerId, String amount) throws IOException {
        JSONObject jsonObj = new JSONObject()
                .put("customerId", customerId)
                .put("amount", amount);

        response = given()
                .contentType("application/json")
                .body(jsonObj.toString())
                .header("Authorization", ResponseHeaders.getInstance())
                .when()
                .post(ENDPOINT_GENERATE_QR_CODE);

        ResponseBody body = response.getBody();

        System.out.println("response from generate qr code -- " + body.asString());

        GenerateQRCodeResponse response = convertToRequest(body.asString());

        QRCode.init(response.getQrCodeBase64());

        FileWriter file = new FileWriter("./output.json");
        file.write(body.asString());
        file.flush();
        file.close();


    }

    @Then("Customer should receive qr code from api")
    public void customer_should_receive_qr_code_from_api() throws IOException {
        json = response.then().statusCode(200);
        System.out.println("response: " + response.prettyPrint());


        //GenerateQRCodeResponse qrCodeResponse = ConstructResponseUtil.constructResponse(response.toString());
        //  System.out.println("response: " + qrCodeResponse.toString());
    }


    private GenerateQRCodeResponse convertToRequest(String jsonText) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(jsonText, GenerateQRCodeResponse.class);
        } catch (Exception e) {
            return null;
        }
    }

}
