import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Education"
                        description="M.S. Information Technology (Information system management)"
                        projects= "Arizona State University" />
                    <AboutCard
                        title="Web Design"
                        
                        description="I develop Front-End with coding super smooth."
                        projects="" />
                    <AboutCard
                        title="Mobile"
                        
                        description="I develop cross-platform mobile applications."
                        projects="" />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Skander Blaiti</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/UX design background. During my 4 years of work as a freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
            </div>
        </section>
    )
}

type Props = {
    title: string,
    description: string,
    projects: string
}

function AboutCard ({title, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}