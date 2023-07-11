import Link from "next/link";
import React from "react";  
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function contact() {
    return (
        <header>
            <NavBar />
            
            <ul className="flex contactPadding light-bg" >
                <li><a href="tel:6028162209" target="_blank" rel="noreferrer">
                        <Image src="/icons/phone.svg" width={150} height={150} alt="phone-icon" /> </a>
                    <div className="contactText contactSpan">Contact<br/>6028162209</div>
                </li>
                
                <li>
                    <a href="https://www.linkedin.com/in/chaitrali-shinde" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={150} height={150}  alt="linkedin-icon" />
                        <div className="contactText contactSpan">Message<br/>chaitrali-shinde</div>

                    </a>
                </li>
                <li>
                    <a href="mailto:chai.shinde100@gmail.com" target="_blank" rel="noreferrer">
                        <Image src="/icons/gmail.svg" width={150} height={150} alt="gmail-icon" />
                        <div className="contactText contactSpan">Mail<br/> chai.shinde100@gmail.com</div>

                    </a>
                </li>
            </ul>
        
            <Footer/>
        </header>
      
       
    )
}