import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Experience" element={<Experience />} /> 
          <Route path="Contact" element={<Contact />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
