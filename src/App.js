import './App.css';
import Home from './components/homepage/home.component';
import RegPhase from './components/newreg/regPhase.component';
import VerticalTabs from './components/sideBar/sidebar.component';
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
  <Routes>
      {/* <Route path="/" element={<Navigation />}> */}
        <Route index element={<Home />} />
        <Route path="regphase" element={<RegPhase />} />
        <Route path="regst" element={<VerticalTabs />} />
      {/* </Route> */}
    </Routes>
    {/* <Home/>
    <RegPhase/>
    <VerticalTabs/> */}
    </>
  ) 


}

export default App;
