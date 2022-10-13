import * as React from 'react';
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
       <PerInfo handleNavChange={handleChange}/>
      </TabPanel>
      <TabPanel className="panel" value={value} index={1}>
        <CommDetails handleNavChange={handleChange}/>
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
      </TabPanel>
      <TabPanel className="panel" value={value} index={6}>
        Insaurance
      </TabPanel>
      <TabPanel className="panel" value={value} index={7}>
        Quailfication
      </TabPanel>
      <TabPanel className="panel" value={value} index={8}>
        Business
      </TabPanel>
    </Box>
    </>

  );


}
