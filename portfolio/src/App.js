import SharedLayout from './components/SharedLayout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import ProjectDetail from './components/ProjectDetail'
import { pacemakerData, linkbookData } from './projectDetail'

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
            <Route
              path="projects/pacemaker"
              element={<ProjectDetail data={pacemakerData} />}
            />
            <Route
              path="projects/linkbook"
              element={<ProjectDetail data={linkbookData} />}
            />
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
