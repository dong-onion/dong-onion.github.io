import React from 'react'
import About from './About'
import Projects from './Projects'
import profileImg from '../assets/portfolioImages/profile.jpg'
import './Home.css'

const Home = () => {
  return (
    <section className="bg-light p-5 min-vh-100">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-center">
          <div className="header-container">
            <div className=" ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start">
              <h1
                className="fw-bold custom-font"
                style={{ textAlign: 'center' }}
              >
                안녕하세요! 프론트엔드 개발자 김동언의 포트폴리오 입니다.
              </h1>
            </div>
            <div>
              <img className="profileImg" src={profileImg} />
            </div>
          </div>
        </div>
        <About />
        <Projects />
      </div>
    </section>
  )
}

export default Home
