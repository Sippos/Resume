import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project01 from './pages/Project01'
import Project02 from './pages/Project02'
import Project03 from './pages/Project03'
import Project04 from './pages/Project04'
import Clothes from './pages/Clothes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/project-01" element={<Project01 />} />
      <Route path="/projects/project-02" element={<Project02 />} />
      <Route path="/projects/project-03" element={<Project03 />} />
      <Route path="/projects/project-04" element={<Project04 />} />
      <Route path="/clothes" element={<Clothes />} />
    </Routes>
  )
}

export default App
