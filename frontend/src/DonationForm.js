import React, { useState } from 'react';  
//importing react and useState from react

const DonationForm = () => {
    const [formData, setFormData] = useState({
        //name and amount are the input fields
        name: '',
        amount: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            //...formData is the spread operator to copy the existing form data
            [e.target.name]: e.target.value
            //e.target.name is the name of the input field
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add API call to submit donation
    };

    return (
        <div style={styles.container}>
            // container is the div that contains the form
            <h2 style={styles.title}>Donation Form</h2>
            // title of the form
            <form onSubmit={handleSubmit} style={styles.form}>
                // form is the form that contains the input fields
                <div style={styles.formGroup}>
                    // formGroup is the div that contains the label and input field
                    <label htmlFor="name" style={styles.label}>Full Name</label>
                    // label is the text that appears above the input field
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      //name is the name of the input field
                      value={formData.name}
                      //value is the value of the input field
                      onChange={handleChange}
                      required 
                      //required is the attribute that makes the input field required
                      style={styles.input}
                      //input is the input field
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="amount" style={styles.label}>Donation Amount</label>
                    //label is the text that appears above the input field
                    <input 
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      min="1"
                      required
                      style={styles.input}
                    />
                </div>
                
                <button type="submit" style={styles.button}>
                    Donate Now
                </button>
            </form>
        </div>
    );

};

const styles = {
    
}