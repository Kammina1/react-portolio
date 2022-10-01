import logo from './logo.svg';
import './App.css';
import Layout from './views/layout';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Layout><About /></Layout>}/>
       <Route path = '/About_Me' element = {<Layout><About/></Layout>} />
       <Route path = '/Portfolio' element = {<Layout><Portfolio/></Layout>} />
       <Route path = '/Contact' element = {<Layout><Contact/></Layout>} />
       <Route path = '/Resume' element = {<Layout><Resume/></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
