package com.ikano.springboot.model;

public class QRCode {

    private static QRCode singleton = null;
    private final String  qrCode;

    private QRCode(String  qrCode) {
        this.qrCode = qrCode;
    }

    public static String getInstance() {
        if(singleton == null) {
            throw new AssertionError("You have to call init first");
        }

        return singleton.qrCode;
    }

    public synchronized static QRCode init(String  qrCode) {
        if (singleton != null)
        {
            // in my opinion this is optional, but for the purists it ensures
            // that you only ever get the same instance when you call getInstance
            throw new AssertionError("You already initialized me");
        }

        singleton = new QRCode(qrCode);
        return singleton;
    }
}
