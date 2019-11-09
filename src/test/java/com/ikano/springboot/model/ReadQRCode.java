package com.ikano.springboot.model;

public class ReadQRCode {


    private String customerId;

    private String customerName;

    private String contactDetails;

    private String qrcodeByteStream;

    private String qrCodeBase64;

    private Long creditAvailable;

    private Long amount;

    private Long leftToSpend;

    private Long dueBalance;

    private String messageStatus;

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getContactDetails() {
        return contactDetails;
    }

    public void setContactDetails(String contactDetails) {
        this.contactDetails = contactDetails;
    }

    public String getQrcodeByteStream() {
        return qrcodeByteStream;
    }

    public void setQrcodeByteStream(String qrcodeByteStream) {
        this.qrcodeByteStream = qrcodeByteStream;
    }

    public String getQrCodeBase64() {
        return qrCodeBase64;
    }

    public void setQrCodeBase64(String qrCodeBase64) {
        this.qrCodeBase64 = qrCodeBase64;
    }

    public Long getCreditAvailable() {
        return creditAvailable;
    }

    public void setCreditAvailable(Long creditAvailable) {
        this.creditAvailable = creditAvailable;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public Long getLeftToSpend() {
        return leftToSpend;
    }

    public void setLeftToSpend(Long leftToSpend) {
        this.leftToSpend = leftToSpend;
    }

    public Long getDueBalance() {
        return dueBalance;
    }

    public void setDueBalance(Long dueBalance) {
        this.dueBalance = dueBalance;
    }

    public String getMessageStatus() {
        return messageStatus;
    }

    public void setMessageStatus(String messageStatus) {
        this.messageStatus = messageStatus;
    }

    @Override
    public String toString() {
        return "GenerateQRCodeResponse{" +
                "customerId='" + customerId + '\'' +
                ", customerName='" + customerName + '\'' +
                ", contactDetails='" + contactDetails + '\'' +
                ", qrcodeByteStream='" + qrcodeByteStream + '\'' +
                ", qrCodeBase64='" + qrCodeBase64 + '\'' +
                ", creditAvailable=" + creditAvailable +
                ", amount=" + amount +
                ", leftToSpend=" + leftToSpend +
                ", dueBalance=" + dueBalance +
                ", messageStatus='" + messageStatus + '\'' +
                '}';
    }
}
