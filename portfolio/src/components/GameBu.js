import React from 'react'

const GameBu = () => {
  const imageFiles = Array.from(
    { length: 4 },
    (_, index) => `healthtrainerServiceImg${index + 1}.png`
  )

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <h1>🏃 껨부</h1>
        <p>
          👉 Github:{' '}
          <a
            className="link"
            target="_blank"
            href="https://github.com/dong-onion/Gamebu"
          >
            https://github.com/dong-onion/Gamebu
          </a>
        </p>
        <h2>🚀 서비스 소개</h2>
        <p>
          GameBu는 여러 게임과 콘텐츠를 함께 즐길 사람을 찾는 웹서비스입니다.
        </p>
        <p>
          껨부는 기존의 한 게임의 특정 콘텐츠의 유저만을 모집하는 것이 아닌,
          여러 게임, 여러 콘텐츠를 함께 즐길 유저를 모집하는 종합 게임 파티원
          구인 서비스를 목표로 합니다.
        </p>
        <p>
          멤버 모집을 위해서 해당하는 게임의 채널에 모집 포스트를 작성할 수
          있고, 사용자는 포스트에 댓글을 통해서 이 모집에 참여할 수 있습니다.
        </p>
        <p>
          통합 검색 페이지에서 키워드를 검색하면 키워드에 해당하는 사용자와
          포스트 목록을 볼 수 있습니다. 별도의 필터를 적용해서 사용자가 원하는
          것과 연관성이 높은 사용자 또는 포스트를 제공할 수 있습니다.
        </p>
        <p>
          사용자가 자신의 관심사에 맞는 채널을 즐겨찾기에 추가할 수 있습니다.
          이렇게 추가한 즐겨찾기는 좌측 상단의 햄버거 메뉴를 사용하여 바로
          접근이 가능하며, 채널 목록에서도 즐겨찾기한 채널이 상단에 표시됩니다.
        </p>
        <h2>⚒️ 기술 스택</h2>
        <p className="skills">
          Javascript React React-Router Emotion Storybook
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

export default GameBu
