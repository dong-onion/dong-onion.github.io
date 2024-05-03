import React from 'react'
import reactqueryImg from '../assets/reactQuery.png'

const About = () => {
  return (
    <div
      style={{ marginBottom: 100, marginLeft: 'auto', marginRight: 'auto' }}
      className="container-fluid bg-light pt-5 d-flex flex-column align-items-center "
    >
      <p className="text-center lead m-4">
        안녕하세요! 프론트엔드 개발자 김동언입니다. <br /> 사람들이 많이 쓰는
        제품을 만들고 싶다는 꿈을 갖고 개발을 시작했습니다. <br />
        좋은 코드를 고민하는 것과 문제를 해결하는 것을 좋아합니다.
        <br />
      </p>
      <div style={{ marginTop: 20, display: 'flex', whiteSpace: 'pre-wrap' }}>
        <p style={{ color: '#2b7060' }}>Github : {''}</p>
        <a
          style={{ textDecoration: 'none', fontStyle: 'italic' }}
          href="https://github.com/dong-onion"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/dong-onion
        </a>
      </div>

      <div style={{ display: 'flex', whiteSpace: 'pre-wrap' }}>
        <p style={{ color: '#2b7060' }}>Email : {''}</p>
        <p>dong.onionion@gmail.com</p>
      </div>

      <div style={{ display: 'flex', whiteSpace: 'pre-wrap' }}>
        <p style={{ color: '#2b7060' }}>Algorithm blog : {''}</p>
        <a
          style={{ textDecoration: 'none', fontStyle: 'italic' }}
          href="https://velog.io/@dong_eon_/posts"
          target="_blank"
          rel="noreferrer"
        >
          https://velog.io/@dong_eon_
        </a>
      </div>

      <h3 className="pt-5 pb-2 custom-color">Languages and tools I use:</h3>

      <p className="lead">
        <img
          className="me-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="30"
          height="35"
        />
        <img
          className="me-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          width="30"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
          width="35"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          alt="next"
          width="40"
          height=""
        />
        <img
          className="m-2"
          src={reactqueryImg}
          alt="react-query"
          width="40"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          alt="redux"
          width="35"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          alt="redux"
          width="50"
          height="50"
        />

        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
          alt="jira"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
          alt="slack"
          width="30"
          height="30"
        />
        <img
          className="m-2"
          src="https://cdn.cdnlogo.com/logos/g/31/github.svg"
          alt="jira"
          width="40"
          height="40"
        />

        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git"
          width="35"
          height="35"
        />
      </p>
    </div>
  )
}

export default About
