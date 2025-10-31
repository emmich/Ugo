import React from 'react';
// import { Outlet, Link } from "react-router-dom";
import '../styles/Header.css'

export default function Header() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('UgoCV2024.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'ugocv.pdf';
            alink.click();
        })
    })
}
  return (
    <div className="header container-fluid">
      <a href="/" className="logo" onClick={onButtonClick}><img src="/assets/logo.png" alt="logo"/></a> 
      {/* <div className="right_header">
        <ul>
          <li className="links"><a href="#me">About</a></li>
          <li className="links"><a href="#works">Projects</a></li>
          <li className="links"><button onClick={onButtonClick} className="cv">Resume</button></li>
        </ul>
      </div> */}
    </div>
  )
}
