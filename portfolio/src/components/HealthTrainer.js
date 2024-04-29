import React from 'react'

const HealthTrainer = () => {
  const imageFiles = Array.from(
    { length: 4 },
    (_, index) => `healthtrainerServiceImg${index + 1}.png`
  )

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <h1>💪 헬스트레이너</h1>
        <p>
          👉 Github:{' '}
          <a
            className="link"
            target="_blank"
            href="https://github.com/dong-onion/HT-Frontend"
            rel="noreferrer"
          >
            https://github.com/dong-onion/HT-Frontend
          </a>
        </p>
        <h2>🚀 서비스 소개</h2>
        <p>운동루틴과 기록을 공유하는 운동 커뮤니티 어플리케이션입니다.</p>
        <p>
          혼자서 운동을 꾸준히 하는 일은 쉽지 않은데, 운동을 할 때도 다른
          사람들과 피드백을 주고받을 수 있다면 사용자들이 꾸준한 운동 습관을
          만드는데 도움을 줄 수 있을 것 같아서 개발을 시작했습니다.
        </p>
        <p>운동부위와 운동종류를 선택해 루틴을 만들수 있습니다.</p>
        <p>
          캘린더를 활용해 해당 일의 운동기록을 살펴보고 기록을 저장 할수
          있습니다.
        </p>
        <p>타이머를 활용해 운동시간을 기록 할 수 있습니다.</p>
        <p>그룹활동을 통해 그룹원 끼리 운동기록을 공유 할 수 있습니다.</p>
        <h2>⚒️ 기술 스택</h2>
        <p className="skills">
          Javascript React-Native Redux-Toolkit Redux-Thunk
        </p>
      </div>
      <h2>🧑‍💻 개발 내용</h2>
      <h3>1. 로그인</h3>
      <p>
        splash screen에서 토큰 유효성을 판별하여 login screen 과 main screen으로
        화면 이동
      </p>
      <p>로그인시 AsyncStorage 에 토큰을 저장하여 자동로그인기능 구현</p>
      <h3>2. 운동리스트 작성 및 관리 페이지</h3>
      <p>화면 마크업 작업</p>
      <p>
        redux toolkit을 사용하여 운동루틴, 리스트를 전역상태관리 + thunk를
        사용하여 비동기 처리
      </p>
      <h3>3. 프로필 화면</h3>
      <p>base64를 통한 이미지 인코딩</p>
      <p>redux toolkit을 활용한 유저정보 전역 상태관리</p>

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
            style={{ maxWidth: 200, padding: '10px 10px' }}
            src={require(`../assets/healthtrainerImages/${fileName}`)}
          />
        ))}
      </div>
      <h2>📈 성장 경험</h2>
      <h3>Git 활용</h3>
      <p>
        처음으로 다른 사람들과 함께 만들어 본 서비스였습니다. Git을 이용하여
        소스코드를 관리하고 Pull Request를 작성하여 협업했습니다. 그 과정에서
        git cherry-pick, git rebase 등 전반적인 Git에 대한 이해를 할 수 있었고,
        GitHub를 통한 프로젝트관리 방법을 이해할 수 있었습니다.
      </p>
      <h3>상태관리</h3>
      <p>
        상태관리를 위해 Redux와 Redux Toolkit을 사용했습니다. Redux를 통해
        어플리케이션의 상태를 예측 가능하게 관리할 수 있었고, Redux의 단점은
        Redux Toolkit을 통해서 많이 해결할 수 있었습니다. 또한, React의 상태
        관리 철학에 대해서 많은 고민을 해볼 수 있는 기회였습니다.
      </p>
      <p>
        더불어 이 프로젝트에서 처음으로 React를 이용해서 서비스를 만들어
        보았습니다. 다양한 라이브러리를 사용해보면서 서비스를 만드는 일의
        즐거움을 느낄 수 있었습니다.
      </p>
      <h2>ℹ️ INFO</h2>
      <p>기간 : 2022.01 ~ 2022.02</p>
      <p>팀 구성 : 프론트엔드 2명, 백엔드 2명</p>
    </div>
  )
}

export default HealthTrainer
