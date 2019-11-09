package com.ikano.springboot.model;

public class ResponseHeaders {

    private static ResponseHeaders singleton = null;
    private final String  authHeader;

    private ResponseHeaders(String  authHeader) {
        this.authHeader = authHeader;
    }

    public static String getInstance() {
        if(singleton == null) {
            throw new AssertionError("You have to call init first");
        }

        return singleton.authHeader;
    }

    public synchronized static ResponseHeaders init(String  authHeader) {
        if (singleton != null)
        {
            // in my opinion this is optional, but for the purists it ensures
            // that you only ever get the same instance when you call getInstance
            throw new AssertionError("You already initialized me");
        }

        singleton = new ResponseHeaders(authHeader);
        return singleton;
    }

}
