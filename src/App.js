import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import HomePageA from './site_A/HomePageA';
import PageA1 from './site_A/PageA1';
import PageA2 from './site_A/PageA2';
import PageA3 from './site_A/PageA3';
import HomePageB from './site_B/HomePageB';
import PageB1 from './site_B/PageB1';
import PageB2 from './site_B/PageB2';
import PageB3 from './site_B/PageB3';
import HomePageC from './site_C/HomePageC';
import PageC1 from './site_C/PageC1';
import PageC2 from './site_C/PageC2';
import PageC3 from './site_C/PageC3';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="site_a" element={<HomePageA />} >
            <Route index element={<PageA1 />} />
            <Route path="page_2" element={<PageA2 />} />
            <Route path="page_3" element={<PageA3 />} />
          </Route>
          <Route path="site_b" element={<HomePageB />} >
            <Route index element={<PageB1 />} />
            <Route path="/site_b/page_2" element={<PageB2 />} />
            <Route path="/site_b/page_3" element={<PageB3 />} />
          </Route>
          <Route path="/site_c" element={<HomePageC />} >
            <Route index element={<PageC1 />} />
            <Route path="/site_c/page_1" element={<PageC1 />} />
            <Route path="/site_c/page_2" element={<PageC2 />} />
            <Route path="/site_c/page_3" element={<PageC3 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
