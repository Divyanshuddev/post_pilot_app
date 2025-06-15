import { Stack,IconButton, Menu, MenuItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const menuButtons=[
    "Resources",
    "Success stories",
    "Company",
    "Pricing",
    "Login",
    "Create your Account"
];
const styles={
    root:{
        display:{
            lg:"none",
            md:"none",
            sm:"flex",
            xs:"flex"
        }
    }
}
const ResponsiveMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack sx={styles.root}>
        <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
            <MenuIcon fontSize="large" />
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {
            menuButtons.map((value,index)=>{
                return(
                    <MenuItem onClick={handleClose} key={index}>{value}</MenuItem>
                )
            })
        }
      </Menu>
    </Stack>
  )
}

export default ResponsiveMenu