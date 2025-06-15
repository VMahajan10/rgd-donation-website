package com.temple.service;

import com.temple.model.Donation;
import java.util.List;
 
public interface DonationService {
    Donation saveDonation(Donation donation);
    Donation getDonationById(Long id);
    List<Donation> getAllDonations();
}