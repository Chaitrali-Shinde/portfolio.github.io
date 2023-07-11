
import React from "react";  
import NavBar from "../components/NavBar";
import Grid from '@mui/material/Unstable_Grid2';    



export default function Header() {
    return (
        <header>
            <NavBar />
            <Grid container spacing={2} paddingTop={10} className="light-bg">
                
            <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div className="resume-title">
                EDUCATION
              </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} className="resume-content">

              <div><b>
              Arizona State University</b>
              </div>
              <small><i>
              Master of Information Technology (Expected Graduation: May 2024)</i>
              </small>
              <div>
              Courses: Data visualization and reporting in IT, Data in cloud for IT, Info Systems Development</div>
              <div><b>
              Savitribai Phule Pune University</b>
              </div>
              <small><i>
              Bachelor of Computer Engineering (2017 - 2021)</i>
              </small>
              <div>
             Courses: Data Structures and algorithms, Object-oriented programming, Computer networks, Operating systems, Database management system, Design and analysis of algorithms, Web technology, Data analytics</div>
            </Grid>
          </Grid>
          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div className="resume-title">
                TECHNICAL SKILLS
              </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} className="resume-content">
              <div>
              <b>Programming Languages:</b> Java, Python, C, C++, JavaScript, SQL, MongoDB
              </div>
              <div>
              <b>Framework/Libraries:</b> Bootstrap, NumPy, Pandas, React JS, Spring Boot, Bokeh
              </div>
              <div>
              <b>Tools, Databases, and OS, Platform:</b> MySQL, Git, Windows, MacOS, Linux/Unix, Docker, AWS, Azure, GCP, Tableau </div>
            </Grid>
          </Grid>
          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div className="resume-title">PROFESSIONAL EXPERIENCE </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} className="resume-content">
              <Grid spacing={3}>
                  <div><b>Tata Consultancy Services (TCS) (June 2021 - July 2022) </b> </div>
                  <p><i><small>Engineer</small></i></p>
                  <p>
                  Provided SaaS solutions to more than 15 customers on various cloud service platforms such as AWS, Azure, and GCP for cloud migration
                  <br/>Developed a python script for automation of manual pricing efforts, boosted pricing productivity
                  <br/>Led a team of 3 for three months to revise cloud services choice according to product types increased the SaaS
                  solutions competency
                  <br/>Researched and documented AWS and Azure services according to various business use-cases, enhance efficiency of services provided
                  </p>
              </Grid>
              <Grid spacing={3}>
              <div><b>BOS Global India Private Limited (August 2020 - March 2021) </b></div>
                  <p><small><i>Intern</i></small></p>
                  <p>
                  Developed an application to capture screen time and monitor employees activities during work hours
                  <br/>Reduced managing efforts by 50% by developing a web application with data analysis dashboard
                  <br/>Built windows installer in C programing language improved installers effectiveness by 70%
                  <br/>Programmed windows installer and web application using C advance installer React JS spring boot MySQL
and followed agile conventions
                  </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div className="resume-title">RELEVANT PROJECTS </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} className="resume-content">
              <Grid spacing={3}>
                  <div><b>Tourist App (Android Application)</b></div>
                  <p><small><i>Hack-overflow National Level Hackathon</i></small></p>
                  <p>
                  Built an android app utilizing Android studio for guiding tourist
                  <br/>Leveraged CNN image classifier to obtain 86% accuracy for an image recognition system
                  </p>
              </Grid>
              <Grid spacing={3}>
              <div><b>Kick Start-up (Web Application)</b></div>
                  <p><small><i>Smart India Hackathon Project</i></small></p>
                  <p>
                  Implemented a web application for connecting mentors with startups and investors. Created a community
platform for startups to add job openings and for advertisement
                  <br/>Utilized React JS, Spring Boot, Docker, MySQL, and AWS to create web platform
                  <br/>Designed a recommendation system using AWS ML API to improve efficiency of system
                  <br/>
                  </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div className="resume-title">CO-CURRICULAR ACTIVITIES</div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} className="resume-content">
              <div>
              Finalist in Smart India Hackathon 2020. Ministry/ Organization- Department of Information Technology and Biotechnology, Government of Karnataka, India
              </div>
              <div>
              Awarded as a runner up team in a Hackathon, Hack-overflow 1.0 Ministry/ Organization- Association of Computer Engineering
              </div>
              </Grid>
          </Grid>

          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div className="resume-title">POSITION OF RESPONSIBILITIES<br/> AND VOLUNTARY WORK </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2}className="resume-content" >
              <Grid spacing={3}>
                  <div><b>Arizona State University (October 2022- present) </b> </div>
                  <p><small><i>Voluntary work</i></small></p>
                  <p>
                  Lab and system setups for cloud and data lab
                  Designed and implemented on premise servers and made it available as cloud for other ASU campuses
                  </p>
              </Grid>
              <Grid spacing={3}>
              <div><b>National Service Scheme Club (August 2018 - August 2018)</b> </div>
                  <p><small><i>Coordinator</i></small></p>
                  <p>
                  Organized and conducted more than ten social events under the National Service scheme club
                  </p>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
        
        </header>
    )
}