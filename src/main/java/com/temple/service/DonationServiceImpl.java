package com.temple.service;
// package is the folder where the service is located

import com.temple.model.Donation; // Donation is the model class
import org.springframework.stereotype.Service; 
// Service is used to mark the class as a service

// DonationServiceImpl is the implementation of the DonationService interface
@Service // Service is used to mark the class as a service
public class DonationServiceImpl implements DonationService {

    @Override 
    public Donation saveDonation(Donation donation) {
        // save the donation to the database
        return donation ;
    }

    @Override 
    public Donation getDonationById(Long id){
        // get the donation from the database
        if(id == null)
        {
            throw new DonationNotFoundException(id);
            // throw the exception if the id is null
        } 
        return null; 
        // return the donation if the id is not null
    }
}