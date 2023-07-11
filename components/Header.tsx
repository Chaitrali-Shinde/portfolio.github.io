import Link from "next/link";
import React from "react";  
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div style={{width: 500, height: 500, color: "black", paddingTop: "4%"}}>
                    <img style={{borderRadius: '50%'}}  src="/images/chaitrali.png" width={450} height={450} alt="Chaitrali"  /> 
                </div>
                <div style={{paddingTop: "8%"}}>
                    <b className="hello">Hello</b>
                    <p style={{fontSize:"20px"}}><b>A Bit About Me</b></p>
                    <p style={{fontFamily: "Calibri Light", fontSize: "15px"}}>I am a highly motivated computer engineering graduate currently pursuing<br/>
                    a Masters degree in Information Technology. I have a strong passion for using my technical skills<br/>
                    to solve problems and improve efficiency. In my professional experience I have worked as an engineer<br/>
                    at Tata Consultancy Services and completed an internship at BOS Global where I developed applications<br/> 
                    and a windows installer. I have also completed relevant projects and have been recognized<br/>
                    in coding competitions. I have experience in cloud computing and full stack development,<br/>
                    and am eager to apply my skills and knowledge in a software engineering or cloud internship.<br/>
                    In addition to my technical abilities I am a team player with strong leadership skills<br/>
                    and a commitment to community service, as demonstrated by my volunteer work at ASU and my role<br/>
                    as a coordinator for a community service club.<br/>
                    </p>
                    <Link href={"/Resume"}><button style={{backgroundColor:"#ffa027", cursor: "pointer"}}>Resume</button></Link>
                    <Link href={"/Projects"}><button style={{backgroundColor:"#ff2a2a", margin: "5px", cursor: "pointer"}}>Projects</button></Link>
                    <Link href={"/Contact"}><button style={{backgroundColor:"#7FD7DD", cursor: "pointer"}}>
                        Contact</button></Link>
                </div>
            </div>
            
        </header>
    )
}