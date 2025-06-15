import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    customAmount: ''
  });

  const predefinedAmounts = [10, 25, 50, 100, 500];

  const handleAmountSelect = (amount) => {
    setFormData({
      ...formData,
      amount: amount,
      customAmount: ''
    });
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      amount: value,
      customAmount: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Make a Donation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Donation Amount</label>
          <div style={styles.amountButtons}>
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountSelect(amount)}
                style={{
                  ...styles.amountButton,
                  backgroundColor: formData.amount === amount ? '#4CAF50' : '#f0f0f0',
                  color: formData.amount === amount ? 'white' : '#333'
                }}
              >
                ${amount}
              </button>
            ))}
          </div>
          
          <div style={styles.customAmount}>
            <label htmlFor="customAmount" style={styles.label}>Custom Amount</label>
            <div style={styles.customAmountInput}>
              <span style={styles.currencySymbol}>$</span>
              <input
                type="number"
                id="customAmount"
                value={formData.customAmount}
                onChange={handleCustomAmount}
                min="1"
                placeholder="Enter amount"
                style={styles.customInput}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="super-button">
          Donate Now
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  label: {
    color: '#555',
    fontWeight: '500',
    fontSize: '16px'
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  },
  amountButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginBottom: '15px'
  },
  amountButton: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  customAmount: {
    marginTop: '10px'
  },
  customAmountInput: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  currencySymbol: {
    position: 'absolute',
    left: '10px',
    color: '#666'
  },
  customInput: {
    padding: '10px 10px 10px 25px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%'
  }
};

export default DonationForm; 