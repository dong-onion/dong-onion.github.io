import React from 'react'

const GameBu = () => {
  const imageFiles = Array.from(
    { length: 8 },
    (_, index) => `gamebuServiceImg${index + 1}.png`
  )

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <h1>🏃 껨부</h1>
        <p>
          👉 Landing Page URL (현재는 서버가 중단된 상태입니다) :{' '}
          <a
            className="link"
            target="_blank"
            href="https://gamebu-dh2mrhd61-team-yohan.vercel.app/"
          >
            https://gamebu-dh2mrhd61-team-yohan.vercel.app/
          </a>
        </p>
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
      <h3>1. 채널 페이지</h3>
      <p>화면 마크업 작업</p>
      <p>무한스크롤 및 낙관적 업데이트를 통한 유저 경험 개선</p>
      <p>api 연동을 통한 데이터 바인딩 및 태그, 인기순 등의 필터링</p>
      <h3>2. 포스트 디테일 페이지</h3>
      <p>화면 마크업 작업</p>
      <p>댓글 기능 구현, 좋아요,댓글에 따른 낙관적 업데이트 적용</p>
      <h3>3. 공통 컴포넌트 작업, 공통 함수 생성</h3>
      <p>storybook을 활용하여 카드, 태그, 배지 등 공통 컴포넌트 작업</p>
      <p>각각의 기능별로 디렉토리를 구별하여 api 함수 생성및 util 함수 생성</p>

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
            src={require(`../assets/gamebuImages/${fileName}`)}
          />
        ))}
      </div>
      <h2>📈 성장 경험</h2>
      <h3>성능 최적화</h3>
      <p>
        useMemo와 useCallback 을 활용하여 값과 함수를 메모하여 애플리케이션
        성능을 최적화하기 위해 시도했습니다.
      </p>
      <p>
        그 과정에서 useMemo와 useCallback 의 차이를 알게 되었고, 리렌더링과
        종속성에 관한 개념을 정리 할 수 있었습니다.
      </p>
      <h3>디자인 패턴</h3>
      <p>
        Container-Presenter 패턴을 적용시켜 비즈니스 로직을 다루는 컴포넌트와
        prop을 내려받고 UI로직을 다루는 컴포넌트를 분리하여 적용시켰습니다.
      </p>
      <p>
        그 과정에서 prop drilling이 발생하여 코드 가독성이 저하되는 문제를
        겪었고 react의 context api를 사용하여 해당 이슈를 해결했습니다.
      </p>
      <p></p>
      <h2>ℹ️ INFO</h2>
      <p>프로그래머스 데브코스에서 진행한 팀 프로젝트 입니다.</p>
      <p>기간 : 2022.05 ~ 2022.06</p>
      <p>팀 구성 : 프론트엔드 5명</p>
    </div>
  )
}

export default GameBu
