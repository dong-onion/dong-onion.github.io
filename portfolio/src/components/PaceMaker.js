import React from 'react'
import ScreenHeader from './ScreenHeader'
const PaceMaker = () => {
  const imageFiles = Array.from(
    { length: 8 },
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
            rel="noreferrer"
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
            rel="noreferrer"
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
        <p className="skills">
          Typescript React-Native Firbase React-Query Axios
        </p>
      </div>
      <h2>🧑‍💻 개발 내용</h2>
      <ScreenHeader content="로그인 화면 개발" />
      <ul>
        <li>
          firebase auth의 핸드폰 인증을 이용하여 회원가입, 로그인 화면 구현
        </li>
      </ul>
      <ScreenHeader content={'피드 화면 개발'} />
      <ul>
        <li>
          react query를 사용하여 비동기 데이터 처리 로직을 간소화 하고 캐싱을
          활용하여 사용자 경험 향상
        </li>
        <li>flatlist의 lazyloading과 windowing을 활용하여 성능 최적화</li>
      </ul>
      <ScreenHeader content={'러닝 결과 화면 개발'} />
      <ul>
        <li>
          유저가 달린경로를 지도 혹은 배경사진과 함께 커스텀하여 포스팅 할
          carousel 구현
        </li>
        <li>
          react native view shot 라이브러리를 이용하여 포스팅 할 이미지를
          캡쳐하고 firebase storage에 저장
        </li>
        <li>달린 기록 소셜 공유 기능 구현</li>
      </ul>
      <p>
        custom hook을 사용함으로써 세부구현은 숨기고 핵심 데이터와 핵심 로직을
        밖으로 노출하여 유지보수성과 가독성을 증진
      </p>
      <p>firebase cloud messaging을 이용한 푸시알림 기능 구현</p>
      <p>
        react query mutation을 활용하여 사용자 경험 향상을 위한 낙관적 업데이트
        적용
      </p>
      <h2>🧑‍🚒 트러블 슈팅</h2>
      <h4 style={{ color: '#5c9c91' }}>업로드 이미지 크기 이슈</h4>
      <h5>🚨 문제 배경</h5>
      <p>
        유저가 업로드한 이미지가 서비스에서 이용하기에는 사이즈가 너무 커서 저장
        공간을 많이 차지하고, 불필요한 트래픽을 발생시키는 문제가 발생했습니다.
      </p>
      <h5>😺 해결 방법</h5>
      <p>
        firebase cloud storage로 업로드 하는 시점에 firebase function을 이용하여
        필요한 크기로 리사이징된 이미지를 생성하고, 이를 이용하였습니다.
      </p>
      <h5>😄 알게된 점</h5>
      <h4 style={{ color: '#5c9c91' }}>Flatlist 무한스크롤 이슈</h4>
      <h5>🚨 문제 배경</h5>
      <p>
        피드에 무한스크롤을 구현하던 중 FlatList에서 새로운 데이터를 로드할
        때마다 이전 데이터가 사라지는 문제를 경험했습니다.
      </p>
      <h5>😺 해결 방법</h5>
      <p>
        오랜시간 구글링을 한 끝에 문제는 flex: 1 속성과 flatlist에 대한 이해
        부족 때문에 발생했다는 것을 알게 되었습니다.{' '}
      </p>
      <p>
        flex: 1 속성은 컴포넌트가 부모 컴포넌트 내에서 가능한 모든 공간을
        차지하도록 하는 역할을 합니다.
        <br /> ScrollView의 경우 모든 자식 컴포넌트를 한 번에 렌더링하기 때문에,
        ScrollView 안의 View 컴포넌트들이 flex: 1 속성을 가지고 있다면,
        <br /> 이들은 ScrollView의 전체 공간을 공평하게 나눠 가집니다. 따라서
        별도의 높이 설정 없이도 View 컴포넌트들이 잘 렌더링됩니다.
        <br />
        <br />
        하지만 FlatList의 경우 현재 화면에 보이는 항목만 렌더링하는 방식을
        사용합니다. <br />이 방식에서는 각 아이템의 높이를 알아야 하는데, flex:
        1 속성 때문에 FlatList가 아이템의 높이를 제대로 계산하지 못했고 이로
        인해 이전 데이터가 사라지는 문제가 발생했던 것이였습니다.
        <br />
        <p>
          결국 저는 아이템의 높이를 명시적으로 지정해줌으로써 문제를 해결할 수
          있었습니다.
        </p>
        <h5>😄 알게된 점</h5>
        <p>
          이 경험을 통해 flex: 1 속성의 작동 방식과 그것이 ScrollView와
          FlatList에서 어떻게 다르게 작동하는지를 깊게 이해하게 되었습니다.
        </p>
      </p>
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
        사용했습니다. 이미지들을 firebase storage에 저장하고 저장한 이미지 key를
        서버에 저장함으로써 효율적으로 이미지들을 관리할 수 있었고, 서버
        트래픽을 줄일 수 있었습니다.
      </p>
    </div>
  )
}

export default PaceMaker
