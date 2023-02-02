import './App.css';
import Home from './components/homepage/home.component';
import RegPhase from './components/newreg/regPhase.component';
import VerticalTabs from './components/sideBar/sidebar.component';
import AuthFarmer from './components/auth/auth';
import { Routes, Route, Outlet } from "react-router-dom";
import FarmerProfile from './components/farmerProfile/farmerProfile.component';

function App() {
  return (
    <>
  <Routes>
      {/* <Route path="/" element={<Navigation />}> */}
        <Route index element={<Home />} />
        <Route path="regphase" element={<RegPhase />} />
        <Route path="regst" element={<VerticalTabs />} />
        <Route path="farmerProf" element={<FarmerProfile/>}/>
        {/* <Route path="auth" element={<AuthFarmer />} /> */}
      {/* </Route> */}
    </Routes>
    {/* <Home/>
    <RegPhase/>
    <VerticalTabs/> */}
    </>
  ) 


}

export default App;



