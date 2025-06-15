package com.temple.controller; // package is the folder where the controller is located

import com.temple.model.Donation; 
// Donation is the model class
import com.temple.service.DonationService;
// DonationService is the service class

import org.springframework.beans.factory.annotation.Autowired; 
// Autowired is used to inject the dependency

import org.springframework.web.bind.annotation.RestController;
// RestController is used to create a RESTful web service
import org.springframework.web.bind.annotation.RequestMapping;
// RequestMapping is used to map the HTTP request to the method
import org.springframework.web.bind.annotation.PostMapping;
// PostMapping is used to map the HTTP POST request to the method
import org.springframework.web.bind.annotation.RequestBody;
// RequestBody is used to map the HTTP request body to the method

@RestController  // RestController is used to create a RESTful web service
@RequestMapping("/donation")  // RequestMapping is used to map the HTTP request to the method
// DonationController is the controller for the donation page
public class DonationController {
    @Autowired // Autowired is used to inject the dependency
    private DonationService donationService; // DonationService is the service class
    
    @PostMapping // PostMapping is used to map the HTTP POST request to the method
    public Donation createDonation(@RequestBody Donation donation) {
        return donationService.saveDonation(donation); // save the donation to the database
    }
    
}
