import React from 'react'
import './aboutme.css'

export default function AboutMe() {
    return (
        <section className="about" id="aboutme">
            <h1>About me</h1>
            <div className="info">
                <p>
                    I'm a Frontend Developer with a background in Computer Engineering
                    and a strong focus on building clean, responsive, and interactive web applications.
                    I’ve developed real-world projects like an e-commerce app and a Netflix clone using React,
                    JavaScript, and RESTful APIs. My experience also includes working as a teaching assistant,
                    where I helped others grow while sharpening my own technical and communication skills. I enjoy
                    turning complex problems into simple, intuitive user experiences—and I'm always looking for new
                    challenges to grow as a developer.
                </p>
                <p>
                    You want to know more?&nbsp; 
                    <a className="go-to-conact" href="#contact">
                        contact me here.
                    </a>
                </p>

            </div>
        </section>
    )
}
