import React from 'react';
import { MenuItem, Typography } from '@mui/material';
import TipoVaso from '../TipoVaso/TipoVaso';


const NavMenu = () => {

   const items = [<TipoVaso/>, "Drinks", "Prices", "About us" ];


    return (

    <>
{
    items.map((item)=>(

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

                            {item}
        </Typography>
                            
        
        </MenuItem>
    )
)
}



</>


)
}

export default NavMenu;