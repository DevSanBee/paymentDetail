import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', paddingLeft:'50%'}}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Trips" href="/drafts" />
        <LinkTab label="Recently Viewed" href="/trash" />
        <LinkTab label="Bookings" href="/spam" />
        <Avatar alt="Remy Sharp" src="profile3.jpg" />
      </Tabs>
    </Box>
  );
}
