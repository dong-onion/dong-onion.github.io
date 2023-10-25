import React from 'react'

const PaceMaker = () => {
  const imageFiles = Array.from(
    { length: 7 },
    (_, index) => `pacemakerServiceImg${index + 1}.png`
  )

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <h1>🏃 페이스메이커</h1>
        <p>
          👉 Landing Page URL:{' '}
          <a
            className="link"
            target="_blank"
            href="https://pacemaker-landing.framer.website/"
          >
            https://pacemaker-landing.framer.website/
          </a>
        </p>
        <p>
          👉 Appstore URL:{' '}
          <a
            className="link"
            target="_blank"
            href="https://apps.apple.com/sa/app/페이스메이커-달리기가-즐거워진다/id1612647235"
          >
            https://apps.apple.com/sa/app/페이스메이커-달리기가-즐거워진다/id1612647235
          </a>
        </p>
        <h2>🚀 서비스 소개</h2>
        <p>
          현재 가입자 500명, weekly active user 50명이 있는 러닝 SNS
          서비스입니다.{' '}
        </p>
        <p>WAU 1000명을 목표로 서비스를 개선하고 있습니다.</p>
        <p>
          이 앱은 Nike Run Club 과 같이 달린 기록을 저장할 수 있고, 이를
          친구들과 공유할 수 있습니다.{' '}
        </p>
        <p>사용자가 달리기를 시작하면 친구들에게 알림을 줍니다. </p>
        <p>
          달리고 있는 친구에게 응원 메세지를 남기면 친구에게 메세지를 TTS로
          읽어서 전달해줍니다.
        </p>
        <h2>⚒️ 기술 스택</h2>
        <p className="skills">Typescript React-Native Firbase React-Query</p>
      </div>
      <h2>🧑‍💻 개발 내용</h2>
      <h3>1. 로그인</h3>
      <p>Firebase auth 로그인 구현 및 마크업 작업</p>
      <p>splash screen, onboarding screen 작업</p>
      <h3>2. 메인 화면</h3>
      <p>화면 마크업 작업</p>
      <p>React Query를 사용한 상태관리</p>
      <h3>3. 포스트 카드</h3>
      <p>게시글 전체 마크업</p>
      <p>
        서버와의 통신에서 받은 firebase storage 경로를 통해 firebase에
        저장되어있는 사진을 가져와서 포스팅 기능구현
      </p>
      <h3>4. 라이브 러닝 화면</h3>
      <p>react-native-maps를 사용해서 달린경로 표시 구현</p>
      <p>화면 마크업 작업</p>
      <h3>5. 러닝 완료 화면</h3>
      <p>Carousel 기능 구현</p>
      <p>
        react-native-view-shot을 사용해서 runningMap Card를 이미지로 변경기능
        구현
      </p>
      <p>
        포스트 등록시 view shot 을 통해 생성한 이미지를 firebase storage에
        저장한 후 firebase storage 경로를 서버에 전달
      </p>
      <p>인스타그램, 페이스북 공유 기능 구현</p>
      <h3>6. 팔로우 팔로워 화면</h3>
      <p>react query mutation을 활용한 optimistic update 구현</p>
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
            src={require(`../assets/pacemakerImages/${fileName}`)}
          />
        ))}
      </div>
      <h2>📈 성장 경험</h2>
      <h3>상태 관리</h3>
      <p>
        상태관리를 위해서 React Query를 선택했습니다. React Query를 사용함으로써
        데이터 가져오기 및 상태 관리를 단순화하여 복잡한 코드 구조의 필요성을
        줄였습니다. 또한 React Query에 내장된 캐싱 및 요청 최적화 기능을 통해
        애플리케이션의 성능을 향상시켜 불필요한 요청 수와 렌더링 주기를 줄일 수
        있었습니다.
      </p>
      <h3>Firebase 인증</h3>
      <p>
        Firebase Auth를 사용하면서 자체 인증 시스템을 구축하는 것보다
        애플리케이션에서 사용자 인증을 구현하는 것이 더 편리하고 안전하다는 것을
        알게 되었습니다. 또한 사용자 데이터 저장 및 보안, 비밀번호 해싱, 암호화
        처리, 또는 보안 인증 흐름 구현을 Firebase Auth 에서 처리하므로
        애플리케이션의 기능을 구축하는 데 집중할 수 있었습니다.
      </p>
      <h3>Firebase Storage</h3>
      <p>
        해당 프로젝트는 많은 피드 게시물, 프로필 사진 등 많은 이미지를 사용하기
        때문에, 효율적으로 이미지들을 관리하고자 firebase storage를
        사용했습니다. 이미지들을 firebase storage에 저장하고 저장한 이미지
        경로(url)을 서버에 저장함으로써 효율적으로 이미지들을 관리할 수 있었고,
        서버 트래픽을 줄일 수 있었습니다.
      </p>
      <h2>ℹ️ INFO</h2>
      <p>기간 : 2022.08 ~ </p>
      <p>팀 구성 : 디자이너 1, 개발자 3 (프론트:2, 백엔드:1)</p>
    </div>
  )
}

export default PaceMaker
