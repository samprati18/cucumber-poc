package com.ikano.springboot.util;

public class ConfigFileReader {


    public String getReportConfigPath(){
        String reportConfigPath = "C:\\Users\\CucumberProjects\\CucumberEpic1\\src\\test\\resources\\extent-config.xml";
        if(reportConfigPath!= null) return reportConfigPath;
        else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");
    }

}
