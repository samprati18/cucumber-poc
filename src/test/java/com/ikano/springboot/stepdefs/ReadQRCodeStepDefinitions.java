package com.ikano.springboot.stepdefs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ikano.springboot.model.GenerateQRCodeResponse;
import com.ikano.springboot.model.QRCode;
import com.ikano.springboot.model.ReadQRCode;
import com.ikano.springboot.model.ResponseHeaders;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import static io.restassured.RestAssured.given;

public class ReadQRCodeStepDefinitions {

    private Response response;
    private ValidatableResponse json;
    private RequestSpecification request;

    private String ENDPOINT_READ_QR_CODE = "http://3.124.99.106:8086/ikano/readQRCode";


    @Given("the merchant will execute (.*)")
    public void the_merchant_will_execute(String apiName) {
        System.out.println("Executing service " + apiName);
    }

    @When("merchant  enter details")
    public void merchant_enter_details() throws IOException, ParseException {

        JSONParser parser = new JSONParser();

        Object obj = parser.parse(new FileReader(
                "./output.json"));

        JSONObject jsonObject = (JSONObject) obj;

       String qrCodeBase64 = (String) jsonObject.get("qrCodeBase64");

     //   System.out.println("qrCode -----" + QRCode.getInstance());
      //  qrCodeBase64.replaceAll()
        ReadQRCode readQRCode = new ReadQRCode();
        readQRCode.setCustomerId("925903");
        readQRCode.setAmount(12344L);
        readQRCode.setQrCodeBase64(QRCode.getInstance());


        response = given()
                .contentType("application/json")
                .body(convertToRequest(jsonObject.toString()))
                .header("Authorization", "Basic OTI1OTAzOnBhc3N3b3Jk")
                .when()
                .post(ENDPOINT_READ_QR_CODE);

        System.out.println("response ----" + response.body().prettyPrint());

    }


    @Then("merchant should read qr code from api")
    public void merchant_should_read_qr_code_from_api() {
        response.then().statusCode(200);
        System.out.println("response: " + response.prettyPrint());
    }


    private ReadQRCode convertToRequest(String jsonText) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(jsonText, ReadQRCode.class);
        } catch (Exception e) {
            return null;
        }
    }
}
