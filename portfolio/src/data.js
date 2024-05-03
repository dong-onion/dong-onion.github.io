import linkbookImg from './assets/linkbookImages/linkbookServiceImg4.png'
import pacemakerImg from './assets/portfolioImages/pacemakerHeaderImage.png'
import healthTrainerImg from './assets/portfolioImages/muscle.png'
import gamebuImg from './assets/portfolioImages/gamebuHeaderImage.png'

const ProjectsData = [
  {
    id: '1',
    img: pacemakerImg,
    name: '페이스메이커',
    stack: [' Typescript ', ' React Native ', ' React Query ', ' Firebase '],
    link: '/projects/pacemaker',
    description:
      '가입자 500명, Weekly Active User 50명이 있는 러닝 SNS 어플리케이션입니다.',
  },
  {
    id: '2',
    img: linkbookImg,
    name: '링북',
    stack: [
      ' Next.js ',
      ' Typescript ',
      ' emotion ',
      ' Chrome api ',
      ' Context api ',
    ],
    link: '/projects/linkbook',
    description: '카테고리별로 북마크 모음집을 관리 하는 웹사이트 입니다.',
  },

  // {
  //   id: '3',
  //   img: gamebuImg,
  //   name: '껨부',
  //   stack: [' React ', ' Javascript ', ' React Router ', ' MUI '],
  //   link: '/projects/gamebu',
  //   description: '여러 게임과 콘텐츠를 함께 즐길 사람을 찾는 웹서비스입니다.',
  // },
  // {
  //   id: '4',
  //   img: healthTrainerImg,
  //   name: '헬스 트레이너',
  //   stack: [' React Native ', ' Javascript ', ' Redux toolkit '],
  //   link: '/projects/healthtrainer',
  //   description: '운동루틴과 기록을 공유하는 운동 커뮤니티 어플리케이션입니다.',
  // },
]

export default { ProjectsData }
