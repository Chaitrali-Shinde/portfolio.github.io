import Link from "next/link";
import React from "react";  
import NavBar from "../components/NavBar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';    
import { spacing } from "@mui/system";
import Footer from "../components/Footer";



export default function Header() {
    return (
        <header>
        <NavBar />
        <Grid container spacing={2} paddingTop={10} className="light-bg">
                
          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div className="resume-title">
            <div>Tourist App (Android Application)</div>
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} className="resume-content" >
              
                  <p><b>Hack-overflow National Level Hackathon</b></p>
                  <p>
                  Built an android app utilizing Android studio for guiding tourist
                  <br/>Leveraged CNN image classifier to obtain 86% accuracy for an image recognition system
                  </p>   
            </Grid>
            </Grid>
            <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div className="resume-title" >
            <div>Kick Start-up (Web Application)</div>
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} className="resume-content">
              
                  <p><b>Smart India Hackathon Project</b></p>
                  <p>
                  Implemented a web application for connecting mentors with startups and investors. 
                  <br/>Created a community
platform for startups to add job openings and for advertisement
                  <br/>Utilized React JS, Spring Boot, Docker, MySQL, and AWS to create web platform
                  <br/>Designed a recommendation system using AWS ML API to improve efficiency of system
                  <br/>
                  </p>  
            </Grid>
            </Grid>
          </Grid>
         <Footer/>  
        </header>
    )
}