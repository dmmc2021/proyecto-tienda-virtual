import React from 'react';
import { MenuItem, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
//import { drinks } from '../../drinks';

const TipoVaso = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    /*const soloCopas =()=>{
      drinks.filter((cup)=>{
        return cup.glass="cup";
      })
    }*/




  return (
    <>

<div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >


        <MenuItem>
        <Typography sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'aboreto',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: "#facb91",
              textDecoration: 'none',
            }}>

                            Tipo vaso
        </Typography>
                            
        
        </MenuItem>

        </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Copa</MenuItem>
        <MenuItem onClick={handleClose}>Vaso corto</MenuItem>
        <MenuItem onClick={handleClose}>Vaso largo</MenuItem>
      </Menu>
    </div>



</>

  )
}

export default TipoVaso