import React from 'react'
import './LinkBook.css'

const LinkBook = () => {
  const imageFiles = Array.from(
    { length: 10 },
    (_, index) => `linkbookServiceImg${index + 1}.png`
  )

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <h1>📘 링북</h1>
        <p>
          👉 Landing Page URL (현재는 서버가 중단된 상태입니다) :{' '}
          <a className="link" target="_blank" href="https://linkbook.tk/">
            https://linkbook.tk/
          </a>
        </p>
        <p>
          👉 Github:{' '}
          <a
            className="link"
            target="_blank"
            href="https://github.com/dong-onion/LinkBook"
          >
            https://github.com/dong-onion/LinkBook
          </a>
        </p>
        <h2>🚀 서비스 소개</h2>
        <p>카테고리별로 북마크 모음집을 관리 하는 웹사이트 입니다.</p>
        <p>
          비슷한 관심사를 가진 사람들끼리 서로의 북마크를 공유하면 좋겠다라는
          생각을 시작으로 개발하게 되었습니다.
        </p>
        <p>
          북마크 스크랩, 태그 및 제목을 통한 검색, 마이페이지에서 나만보기 설정,
          북마크 정렬 및 필터링, 댓글, 좋아요, Chrome Extension 을 통한 북마크
          등록이 가능합니다.
        </p>
        <h2>⚒️ 기술 스택</h2>
        <p className="skills">
          Typescript Next.js Styled-Component Chrome api Context api
        </p>
      </div>
      <h2>🧑‍💻 개발 내용</h2>
      <h3>1. 폴더리스트 페이지</h3>
      <p>
        유저가 원하는 태그 및 인기순, 최신순 등으로 폴더리스트 나열 및 데이터
        바인딩
      </p>
      <p>페이지네이션 구현</p>
      <h3>2. 공통 컴포넌트</h3>
      <p>카드, 버튼, 프로필, 스켈레톤 등의 공통 컴포넌트 마크업</p>
      <p>React Query를 사용한 상태관리</p>
      <h3>3. 로그인(Extension)</h3>
      <p>
        웹사이트와의 로그인 연동을 위해 chrome api를 통해 브라우저 쿠키에
        접근하여 쿠키의 토큰을 읽기 및 저장기능 구현
      </p>
      <p>
        refresh token과 access token을 분리하여, expire time이 지나면 refresh
        token을 이용해서 access token을 재발급
      </p>
      <p>로그인 요청에 대한 응답으로 refresh token을 받아서 cookie에 저장</p>
      <h3>4. 북마크 및 북마크 폴더 생성</h3>
      <p>api를 통해 크롬 익스텐션에서 북마크와 북마크 폴더 생성 기능 구현</p>
      <p>chrome api 를 통해 현재 페이지 url을 api를 통해 서버에 전달</p>
      <p>context api를 활용해 북마크정보 전역상태관리</p>
      <h2>📷 서비스 화면</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {imageFiles.slice(0, 6).map((fileName, i) => (
          <img
            key={i}
            style={{ maxWidth: 800, padding: '10px 10px' }}
            src={require(`../assets/linkbookImages/${fileName}`)}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageFiles.slice(6).map((fileName, i) => (
          <img
            key={i}
            style={{ maxWidth: 400, padding: '10px 10px' }}
            src={require(`../assets/linkbookImages/${fileName}`)}
          />
        ))}
      </div>
      <h2>📈 성장 경험</h2>
      <h3>Chrome Extension</h3>
      <p>
        Chrome Extension을 활용하면 북마크의 취지에 맞게 편의성을 극대화시킬 수
        있다고 생각해서, chrome api를 활용해 chrome extension 개발도
        진행했습니다. extension 을 처음 개발해보기도 했고 한글로된 자료또한
        부족하여 쉽진 않았지만 chrome api 문서와 stackover flow를 참고해서 끝내
        목표했던 기능을 완성함으로써 좋은 경험을 쌓았습니다.
      </p>
      <h3>Next.js</h3>
      <p>
        Next.js 의 장점중 하나인 SSR에 대해 학습을 진행했고, 그 과정에서 CSR과
        SSR 에 대한 개념을 확실하게 숙지할수 있었습니다.
      </p>
      <h3>TypeScript</h3>
      <p>
        JavaScript 대신 TypeScript를 사용해서 개발을 진행했습니다. typescript의
        정적 타이핑을 통해 컴파일단계에서 오류를 포착할 수 있었고, 코드 품질을
        개선하고 더 큰 코드베이스에서 버그를 줄이는 데 도움이 되었습니다.
        전반적으로 TypeScript를 사용하면 보다 안정적이고 유지 관리 가능한 코드를
        만들 수 있다는 것을 알게 되었습니다.
      </p>
      <h3>컨벤션</h3>
      <p>
        코드컨벤션, 가독성, 함수 네이밍 컨벤션등 기능구현외에 많은 것들을
        신경쓰면서 프로젝트를 진행했고, 이전에 경험했던 프로젝트보다 좀더
        체계적이고 완성도도 높은 결과물이 나와서 뿌듯했습니다. 어떻게 하면 좋은
        협업 경험을 할 수 있는지 고민하는 과정에서 Conventional Commits을
        이용하여 커밋 컨벤션을 맞추었습니다.
      </p>
      <h3>PR과 이슈 단위</h3>
      <p>
        Git flow를 사용하고, 모든 팀원의 이슈와 코드 리뷰를 강제하면서 이슈와 PR
        단위에 대해 다시 생각해보게 되었습니다. 코드 리뷰를 하다 보니 부피가 큰
        PR에 대해서 부담감이 느껴졌고 코드 이해도도 떨어지게 되었습니다.
        팀원들의 피드백과 코드 리뷰를 반복하여, 단위가 매우 컸던 개발 초기
        이슈와 달리 공통된 핵심 기능 혹은 도메인별로 이슈 단위를 가져갈 수 있게
        되었습니다.
      </p>
      <h2>ℹ️ INFO</h2>
      <p>기간 : 2022.07 ~ 2022.08</p>
      <p>팀 구성 : 프론트엔드 4명, 백엔드 4명</p>
    </div>
  )
}

export default LinkBook
