import SharedLayout from './components/SharedLayout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PaceMaker from './components/PaceMaker'
import LinkBook from './components/LinkBook'
import ScrollToTop from './ScrollToTop'
import HealthTrainer from './components/HealthTrainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/pacemaker" element={<PaceMaker />} />
            <Route path="projects/linkbook" element={<LinkBook />} />
            <Route path="projects/healthtrainer" element={<HealthTrainer />} />
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
