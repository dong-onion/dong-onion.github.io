import SharedLayout from './components/SharedLayout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import PaceMaker from './components/PaceMaker'
import LinkBook from './components/LinkBook'
import ScrollToTop from './ScrollToTop'
import HealthTrainer from './components/HealthTrainer'
import GameBu from './components/GameBu'
import ProjectDetail from './components/ProjectDetail'
import { pacemakerData, linkbookData } from './projectDetail'

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            {/* <Route path="projects/pacemaker" element={<PaceMaker />} /> */}
            <Route
              path="projects/pacemaker"
              element={<ProjectDetail data={pacemakerData} />}
            />
            <Route
              path="projects/linkbook"
              element={<ProjectDetail data={linkbookData} />}
            />
            {/* <Route path="projects/linkbook" element={<LinkBook />} /> */}
            <Route path="projects/gamebu" element={<GameBu />} />
            <Route path="projects/healthtrainer" element={<HealthTrainer />} />
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
