package com.ikano.springboot.services;

public class CardStatus {

	private String totalCreditLimit;
	private String availableCreditLimit;

	public String getTotalCreditLimit() {
		return totalCreditLimit;
	}

	public void setTotalCreditLimit(String totalCreditLimit) {
		this.totalCreditLimit = totalCreditLimit;
	}

	public String getAvailableCreditLimit() {
		return availableCreditLimit;
	}

	public void setAvailableCreditLimit(String availableCreditLimit) {
		this.availableCreditLimit = availableCreditLimit;
	}

}
