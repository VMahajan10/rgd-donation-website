package come.temple.repository; // package is used to group the classes

import com.temple.model.Donation; 
// Donation is the class that is used to store the donation data
import org.springframework.data.jpa.repository.JpaRepository; 
// JpaRepository is the interface that is used to store the donation data

@repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    // find all donations by donor name
}