import React from 'react'; // React is a library for building user interfaces
import './App.css'; // App.css is the css file for the app
import DonationForm from './components/DonationForm';

function App() { // App is the main component of the app
  return ( // return is used to return the JSX code
    <div className="App">
      <header className="App-header">
        <h1>Radha Govind Dham</h1>
        <p>Support Our Temple's Mission</p>
      </header>
      <main>
        <DonationForm />
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign:'center'
  },
  title: {
    margin: 0,
    fontSize:'24px'
  },
  main: {
    padding: '20px'
  }
}

export default App;
