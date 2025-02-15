import React from "react";
import "../styles.css"; 

const Body = () => {
  return (
    <main className="body">
      <h2>Welcome to ProjectSource</h2>
      <p>Your one-stop solution for all your needs!</p>
      <div className="button-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSebYtXZIch7ekE0LHPVswcUjRG9hjVhF5K1p7AEGJRXFRn51g/viewform?usp=header" target="_blank" rel="noopener noreferrer">
          <button className="btn">Place Your Order</button>
        </a>
        <a href="https://wa.me/7488826906" target="_blank" rel="noopener noreferrer">
          <button className="btn">Track Your Order</button>
        </a>
        <a href="https://forms.gle/dwmV3QajCsCGosRJ9" target="_blank" rel="noopener noreferrer">
          <button className="btn">Give Feedback</button>
        </a>
      </div>
    </main>
  );
};

export default Body;
