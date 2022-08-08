import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Projects" element={<Projects />} /> 
          <Route path="ContactMe" element={<ContactMe />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
