import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PerInfo from '../perInfo/perinfo.component';
import CommDetails from '../commDetails/commDetails.component';
import Farmlocdetail from '../Farm LocationDetails/farmlocdetail.component';
import Yeildinfo from '../Yeild Info/yeildinfo.component';
import Bankdetails from '../BankDetails/bankdetails.component';
import Credit from '../LandDetails/ladndetails.compo';
import AuthFarmer from '../auth/auth';
import InsuranceInfo from '../InsuaranceDetails/insurance.compo';
import Quailfication from '../QualiFicationDetails/qualification.compo';
import './sidebar.style.scss'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//     console.log("render")
//    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//      "recaptcha-container",
//      {
//        size: "invisible",
//        callback: function (response) {
//          console.log("Captcha Resolved");
//          this.onSignInSubmit();
//        },
//        defaultCountry: "IN",
//      }
//    );
//  }, []);

  return (
    <>
    <div className="menu">MENU</div>
    <Box
       className='full'
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}
    >
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className='sidebar'
      >
        <Tab label="Personal Information" />
        <Tab label="Comminucation details" />
        <Tab label="Farm locations and details"  />
        <Tab label="Yeild information"/>
        <Tab label=" Bank details" />
        <Tab label="Credit"/>
        <Tab label="Insaurance" />
        <Tab label="Quailfication"  />
        <Tab label="Business" />
      </Tabs>
      <TabPanel className="panel" value={value} index={0}>
        Personal Information 
       <PerInfo handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={1}>
        Communication Details
        <AuthFarmer handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={2}>
        Farm locations and details
        <Farmlocdetail handleNavChange={handleChange}/>
      </TabPanel>
 
      <TabPanel className="panel" value={value} index={3}>
        Yeild information
        <Yeildinfo handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={4}>
        Bank details
        <Bankdetails handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={5}>
        Credit
        <Credit handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={6}>
        Insaurance
        <InsuranceInfo handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={7}>
        Quailfication
        < Quailfication handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={8}>
        Business
      </TabPanel>
    </Box>
    </>

  );


}
