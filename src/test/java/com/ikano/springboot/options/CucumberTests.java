package com.ikano.springboot.options;


import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateExceptionHandler;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.jupiter.api.AfterAll;
import org.junit.runner.RunWith;
import org.springframework.test.context.event.annotation.AfterTestClass;
import org.springframework.test.context.event.annotation.AfterTestExecution;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.*;
import javax.mail.internet.*;
import java.io.File;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = {"com/ikano/springboot/stepdefs"},
        monochrome = true,
        plugin = {
                "html:target/basicReport", "json:target/basicReport/cucumber.json",
                "pretty:target/basicReport/cucumber-pretty.txt",
                "usage:target/basicReport/cucumber-usage.json", "junit:target/basicReport/cucumber-results.xml",
                "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}
)
public class CucumberTests {


    @AfterClass
    public static void writeExtentReport() throws IOException {

        Reporter.loadXMLConfig(new File("C:\\Users\\CucumberProjects\\CucumberEpic1\\src\\test\\resources\\extent-config.xml"));
        sendMail();

    }


    public static void sendMail() {


        String receipents = "sampratiji@gmail.com,Samprati.Sharma@ikano.se,Vinay.Nagariya@Ikano.se,KrishnaPratap.Singh@ikano.se";

        // Sender's email ID needs to be mentioned
        String from = "sendtestemailtobank@gmail.com";


        // Get system properties
        Properties properties = System.getProperties();

        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");

        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.auth", "true");
        Authenticator authenticator = new Authenticator() {
            public PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("sendtestemailtobank", "Test!123456");//userid and password for "from" email address
            }
        };

        Session session = Session.getDefaultInstance(properties, authenticator);
        session.setDebug(true);
        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            // message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(receipents));


            // Set Subject: header field
            message.setSubject("Cucumber Report");

            // Create the message part
            BodyPart messageBodyPart = new MimeBodyPart();
            // Now set the actual message
            String body = "Hi," + "\n" + "\n" + "Please find attached cucumber-report" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "Thanks" + "\n" + "Testing Team";

            messageBodyPart.setText(body);

            // Create a multipar message
            Multipart multipart = new MimeMultipart();
            // Set text message part
            multipart.addBodyPart(messageBodyPart);
            // Part two is attachment
            messageBodyPart = new MimeBodyPart();
            String filename = "C:\\Users\\CucumberProjects\\CucumberEpic1\\target\\cucumber-reports1\\report.html";
            DataSource source = new FileDataSource(filename);
            messageBodyPart.setDataHandler(new DataHandler(source));
            messageBodyPart.setFileName("cucumber-report.html");
            multipart.addBodyPart(messageBodyPart);
            // Send the complete message parts
            message.setContent(multipart);

            // Send message
            Transport.send(message);

            System.out.println("Sent message successfully....");

        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }
}




