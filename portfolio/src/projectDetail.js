export const pacemakerData = {
  title: '🏃 페이스메이커',
  serviceUrl: [
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
    </p>,
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
    </p>,
  ],
  introduce: {
    title: '🚀 서비스 소개',
    content: [
      '현재 가입자 500명, weekly active user 50명이 있는 러닝 SNS 서비스입니다.',
      'WAU 1000명을 목표로 서비스를 개선하고 있습니다.',
      '이 앱은 Nike Run Club 과 같이 달린 기록을 저장할 수 있고, 이를 친구들과 공유할 수 있습니다.',
      '사용자가 달리기를 시작하면 친구들에게 알림을 줍니다.',
      '달리고 있는 친구에게 응원 메세지를 남기면 친구에게 메세지를 TTS로 읽어서 전달해줍니다.',
    ],
  },
  stack: ['Typescript', 'React-Native', 'Firbase', 'React-Query', 'Axios'],
  devDetail: [
    {
      title: '로그인 화면 개발',
      content: [
        'firebase auth의 핸드폰 인증을 이용하여 회원가입, 로그인 화면 구현',
      ],
    },
    {
      title: '피드 화면 개발',
      content: [
        'react query를 사용하여 비동기 데이터 처리 로직을 간소화 하고 캐싱을 활용하여 사용자 경험 향상',
        'flatlist의 lazyloading과 windowing을 활용하여 성능 최적화',
      ],
    },
    {
      title: '러닝 결과 화면 개발',
      content: [
        '유저가 달린경로를 지도 혹은 배경사진과 함께 커스텀하여 포스팅 할 carousel 구현',
        'react native view shot 라이브러리를 이용하여 포스팅 할 이미지를 캡쳐하고 firebase storage에 저장',
        '달린 기록 소셜 공유 기능 구현',
      ],
    },
    {
      title: 'ETC',
      content: [
        'custom hook을 사용함으로써 세부구현은 숨기고 핵심 데이터와 핵심 로직을 밖으로 노출하여 유지보수성과 가독성을 증진',
        'firebase cloud messaging을 이용한 푸시알림 기능 구현',
        'react query mutation을 활용하여 사용자 경험 향상을 위한 낙관적 업데이트 적용',
      ],
    },
  ],
  troubleShooting: [
    {
      title: '업로드 이미지 크기 이슈',
      background: [
        '유저가 업로드한 이미지가 서비스에서 이용하기에는 사이즈가 너무 커서 서비스에서 이용하기 어려웠습니다.',
        '큰 이미지로 인해 많은 저장 공간을 차지하고, 서버에 부하가 걸렸으며 이미지를 불러오는데 시간이 오래 걸리는 문제가 발생했습니다.',
      ],
      approach: [
        '이미지의 크기를 리사이징 하여 저장하는 방법을 선택하였습니다.',
        'firebase storage를 사용하여 이미지를 업로드하는 시점에 firebase function을 활용하여 이미지를 자동으로 리사이징 하였습니다.',
        'firebase function을 통해 업로드된 이미지를 필요한 크기로 리사이징하고, 리사이징된  이미지를 Storage 버킷에 저장하였습니다.',
        '이후 앱에서는 리사이징된 이미지를 사용하여 향상된 사용자 경험을 제공할 수 있었습니다.',
      ],
      wil: [
        'firebase function과 resize image extension을 이용하여 이미지를 리사이징하는 방법을 익혔습니다.',
        'TCP 프로토콜의 Receive Winodw 개념을 알게 되었습니다.',
      ],
    },
    {
      title: '업로드 이미지 크기 이슈',
      background: [
        '유저가 업로드한 이미지가 서비스에서 이용하기에는 사이즈가 너무 커서 저장 공간을 많이 차지하고, 불필요한 트래픽을 발생시키는 문제가 발생했습니다.',
      ],
      approach: [
        'firebase cloud storage로 업로드 하는 시점에 firebase function을 이용하여 필요한 크기로 리사이징된 이미지를 생성하고, 이를 이용하였습니다.',
      ],
      wil: [''],
    },
  ],
  growth: [
    {
      title: '상태 관리',
      content: (
        <p>
          상태관리를 위해서 React Query를 선택했습니다. React Query를
          사용함으로써 데이터 가져오기 및 상태 관리를 단순화하여 복잡한 코드
          구조의 필요성을 줄였습니다. 또한 React Query에 내장된 캐싱 및 요청
          최적화 기능을 통해 애플리케이션의 성능을 향상시켜 불필요한 요청 수와
          렌더링 주기를 줄일 수 있었습니다.
        </p>
      ),
    },
    {
      title: 'Firebase 인증',
      content: (
        <p>
          Firebase Auth를 사용하면서 자체 인증 시스템을 구축하는 것보다
          애플리케이션에서 사용자 인증을 구현하는 것이 더 편리하고 안전하다는
          것을 알게 되었습니다. 또한 사용자 데이터 저장 및 보안, 비밀번호 해싱,
          암호화 처리, 또는 보안 인증 흐름 구현을 Firebase Auth 에서 처리하므로
          애플리케이션의 기능을 구축하는 데 집중할 수 있었습니다.
        </p>
      ),
    },
    {
      title: 'Firebase Storage',
      content: (
        <p>
          해당 프로젝트는 많은 피드 게시물, 프로필 사진 등 많은 이미지를
          사용하기 때문에, 효율적으로 이미지들을 관리하고자 firebase storage를
          사용했습니다. 이미지들을 firebase storage에 저장하고 저장한 이미지
          key를 서버에 저장함으로써 효율적으로 이미지들을 관리할 수 있었고, 서버
          트래픽을 줄일 수 있었습니다.
        </p>
      ),
    },
  ],
}

export const linkbookData = {
  title: '📘 링북',
  serviceUrl: [
    <p>
      👉 Landing Page URL (현재는 서버가 중단된 상태입니다) :{' '}
      <a
        className="link"
        target="_blank"
        href="https://linkbook.tk/"
        rel="noreferrer"
      >
        https://linkbook.tk/
      </a>
    </p>,
    <p>
      👉 Github:{' '}
      <a
        className="link"
        target="_blank"
        href="https://github.com/dong-onion/LinkBook"
        rel="noreferrer"
      >
        https://github.com/dong-onion/LinkBook
      </a>
    </p>,
  ],
  introduce: {
    title: '🚀 서비스 소개',
    content: [
      '카테고리별로 북마크 모음집을 관리 하는 웹사이트 입니다.',
      '비슷한 관심사를 가진 사람들끼리 서로의 북마크를 공유하면 좋겠다라는 생각을 시작으로 개발하게 되었습니다.',
      '북마크 스크랩, 태그 및 제목을 통한 검색, 마이페이지에서 나만보기 설정, 북마크 정렬 및 필터링, 댓글, 좋아요, Chrome Extension 을 통한 북마크 등록이 가능합니다.',
    ],
  },
  stack: [
    'Typescript',
    'Next.js',
    'Styled-Component',
    'Chrome api',
    'Context api',
    'Storybook',
  ],
  devDetail: [
    {
      title: '폴더리스트 페이지',
      content: ['pagination 기법을 사용하여 효율적인 렌더링 구현'],
    },
    {
      title: '공통 컴포넌트',
      content: [
        'storybook을 이용하여 UI 테스팅의 용이성 증가와 다양한 프로퍼티, 상태 및 환경에서 컴포넌트의 모습을 문서화 하여 협업 능률성 증가',
      ],
    },
    {
      title: 'chrome extension',
      content: [
        'chrome api를 이용해 chrome extension 개발',
        'JWT Token 기반 로그인 구현',
        'react-hook-form을 사용하여 로그인 검증',
      ],
    },
  ],
  troubleShooting: [
    {
      title: '한국어 입력시 keydown event 2번 발생',
      background: [
        'Input 컴포넌트에서 검색어를 입력하면 InputResult 컴포넌트에서 받아온 data를 자동완성 해서 보여줍니다.',
        '이때 Input 컴포넌트에서 방향키를 통해 InputResult를 선택할 수 있습니다.',
        '방향키를 통해 선택하는 과정에서 한국어를 입력하고 방향키를 누르면 이벤트가 2번 발생하는 에러가 발생합니다.',
        '"테"를 검색하면 [개발 필터링 테스트, 쇼핑 필터링 테스트, 코딩 필터링 테스트...]가 나옵니다.',
        '이때 아래 방향키를 누르면 "코딩 필터링 테스트"가 선택되고 콘솔에는 ArrowDown이 2번 찍혔습니다.',
      ],
      approach: [
        '영어를 입력했을 때는 위와 같은 에러가 발생하지 않았고, 한국어를 입력했을 때만 발생하는 걸 발견하여 korean input keydown devent twice 검색 키워드를 통해 검색하였습니다.',
        '저와 같은 에러가 발생하는 깃헙 이슈를 발견하였고, 해당 이슈를 해결하는 방법을 찾아 적용하였습니다.',
        '요약하면 IME는 다양한 언어를 브라우저에서 지원하도록 변환시켜주는 어플리케이션인데, IME 과정에서 keydown 이벤트가 발생하면 OS와 브라우저 둘 다 keydown 이벤트를 처리하기 때문에 중복 이벤트가 발생하는 것이었습니다.',
      ],
      wil: [''],
    },
    {
      title: 'forwardRef',
      background: [
        '검색어를 입력하면 해당 입력된 키워드로 자동완성을 하고, 자동완성된 데이터를 클릭하면 input 요소의 value에 빈 값을 넣어주기 위해 useRef를 사용하려고 했습니다.',
        '하지만 아무리 console.log(inputRef.current)를 찍어봐도 null값만 나왔습니다.',
      ],
      approach: [
        '해결하기 위해 구글링을 하던 도중 forwardRef에 대해서 알게되었습니다.',
        'forwardRef는 부모 컴포넌트에서 자식 컴포넌트의 요소를 조작하기 위해서 사용됩니다.',
        'forwardRef를 사용하여 ref를 자식 컴포넌트로 전달하여 해결하였습니다.',
      ],
      wil: [''],
    },
  ],
  growth: [
    {
      title: 'chrome extension 개발',
      content: (
        <p>
          Chrome Extension을 활용하면 북마크의 취지에 맞게 편의성을 극대화시킬
          수 있다고 생각해서, chrome api를 활용해 chrome extension 개발도
          진행했습니다.
          <br />
          extension을 처음 개발해보기도 했고 자료또한 상대적으로 부족했지만
          끝끝내 완성함으로써 포기하지 않고 노력한다면 뭐든 할 수 있다는
          자신감을 얻었습니다.
        </p>
      ),
    },
    {
      title: 'typescript',
      content: (
        <p>
          JavaScript 대신 TypeScript를 사용해서 개발을 진행했습니다.
          <br />
          typescript의 정적 타이핑을 통해 컴파일단계에서 오류를 포착할 수
          있었고, 코드 품질을 개선하고 더 큰 코드베이스에서 버그를 줄이는 데
          도움이 되었습니다.
          <br /> 전반적으로 TypeScript를 사용하면 보다 안정적이고 유지 관리
          가능한 코드를 만들 수 있다는 것을 알게 되었습니다.
        </p>
      ),
    },
    {
      title: '컨벤션',
      content: (
        <p>
          코드컨벤션, 가독성, 함수 네이밍 컨벤션등 기능구현외에 많은 것들을
          신경쓰면서 프로젝트를 진행했고, 이전에 경험했던 프로젝트보다 좀더
          체계적이고 완성도도 높은 결과물이 나와서 뿌듯했습니다.
          <br /> 어떻게 하면 좋은 협업 경험을 할 수 있는지 고민하는 과정에서
          Conventional Commits을 이용하여 커밋 컨벤션을 맞추었습니다.
        </p>
      ),
    },
    {
      title: 'PR과 이슈 단위',
      content: (
        <p>
          Git flow를 사용하고, 모든 팀원의 이슈와 코드 리뷰를 강제하면서 이슈와
          PR 단위에 대해 다시 생각해보게 되었습니다.
          <br />
          코드 리뷰를 하다 보니 부피가 큰 PR에 대해서 부담감이 느껴졌고 코드
          이해도도 떨어지게 되었습니다. <br />
          팀원들의 피드백과 코드 리뷰를 반복하여, 단위가 매우 컸던 개발 초기
          이슈와 달리 공통된 핵심 기능 혹은 도메인별로 이슈 단위를 가져갈 수
          있게 되었습니다.
        </p>
      ),
    },
  ],
}

export default {}
