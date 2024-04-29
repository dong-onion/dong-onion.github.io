import React from 'react'
import ScreenHeader from './ScreenHeader'
import './ProjectDetail.css'

const ProjectDetail = ({ data }) => {
  console.log(data.troubleShooting[0].title)
  const imageFiles = Array.from(
    { length: 8 },
    (_, index) => `pacemakerServiceImg${index + 1}.png`
  )
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <h1>{data.title}</h1>
      <div className="paragraph">
        {data.serviceUrl.map((element) => element)}
      </div>
      <h2>{data.introduce.title}</h2>
      <div className="paragraph">
        {data.introduce.content.map((element) => (
          <div className="content">{element}</div>
        ))}
      </div>
      <h2>⚒️ 기술 스택</h2>
      <div className="paragraph">
        <div className="skills">{data.stack.join(' ')}</div>
      </div>
      <h2>🧑‍💻 개발 내용</h2>
      <div className="paragraph">
        {data.devDetail.map((element) => (
          <div>
            <ScreenHeader content={element.title} />
            <ul>
              {element.content.map((content) => (
                <li>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2>🧑‍🚒 트러블 슈팅</h2>
      {data.troubleShooting.map((element) => (
        <>
          <h4>➡️ {element.title}</h4>
          <div className="paragraph">
            {element.title === '한국어 입력시 keydown event 2번 발생' && (
              <img
                style={{ marginBottom: 20, width: 250, height: 250 }}
                alt="트러블슈팅 이미지"
                src={require('../assets/linkbookImages/linkbookKeyboard.png')}
              />
            )}
            <h5>🚨 문제 배경</h5>
            {element.background.map((content) => (
              <div className="content">{content}</div>
            ))}
            <h5>🛠 해결 방법</h5>
            {element.approach.map((content) => (
              <div className="content">{content}</div>
            ))}
            <h5>🔍 알게된 점</h5>
            {element.wil.map((content) => (
              <div className="content">{content}</div>
            ))}
          </div>
        </>
      ))}
      <h2>📷 서비스 화면</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {imageFiles.map((fileName, i) => (
          <img
            key={i}
            alt="pacemakerServiceImg"
            style={{ maxWidth: 200, padding: '10px 10px' }}
            src={require(`../assets/pacemakerImages/${fileName}`)}
          />
        ))}
      </div>
      <h2>📈 성장 경험</h2>
      {data.growth.map((element) => (
        <div className="paragraph">
          <h3>{element.title}</h3>
          <p>{element.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectDetail
