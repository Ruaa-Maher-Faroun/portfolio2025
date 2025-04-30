import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import CV from "../../assets/Rua'a Faroun- CV.pdf";
import HomeImg from './HomeImg'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <section className={` d-flex align-items-center home`} id="home">
        <Container className='w-100'>
          <Row>

          <div className='w-50'>
            
        <h4 className="margin">Welcome 👋</h4>
        <h1 className="margin b-size">Hi! I'm Roa'a Faroun</h1>
             <h2 className="margin"> Frontend Dev | Software Engineer</h2>
            <div className="btns d-flex">

            <a href='#projects' className='btn me-3'>Projects
              <FontAwesomeIcon className="icon" icon={faArrowRight} color="#fff" />
            </a>
            <a href={CV} className='btn' target="_blank">
              Download CV
              <FontAwesomeIcon className="icon" icon={faArrowRight} color="#fff" />
            </a>
            </div>
          </div>


            <div>
                <HomeImg />
            </div>
          </Row>
        </Container>
    </section>
  )
}
