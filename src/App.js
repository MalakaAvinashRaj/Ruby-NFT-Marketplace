import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import NftData from './pages/NftData';
import CreateProject from './pages/CreateProject';

export default function App() {

  return (
    <div className='bg-slate-900'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/project/:projectId' element={<Project />} />
        <Route path='/nftData' element={<NftData />} />
        <Route path='/createProject' element={<CreateProject />} />
      </Routes>
    </div>
  );
}
