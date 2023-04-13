import React from 'react';
import { drinks } from '../../drinks';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/*import { BsShareFill } from 'react-icons/bs';*/
/*import IconButton from '@mui/material/IconButton';*/


 const MarketWindow = () => {
    
         
         return (
             
             <div className='market'>
                <div className="bebidas">
            {
                drinks.map((drink)=>(

<Card sx={{ width: 570, maxHeight: 165, boxShadow: "3px 3px 2px 1px rgba(0, 0, 0, 0.1)", marginBottom: "30px"}}>
    <div className="card">



    <span className="icon image">
    {/*<a href="https://www.flaticon.com/free-icons/share" title="share icons"></a>
        <IconButton>
          <BsShareFill/>
                </IconButton>*/}
      <CardMedia
        component="img"
        height="100%"
        image={drink.strDrinkThumb}
        alt={drink.strDrink}
        sx={{ width: 180 }}
      >
      </CardMedia>
      
    </span>
    <div className="content">

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Rubik, sans-serif"}}>
          {drink.strDrink}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {drink.idDrink}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant='contained' color='secondary'>Order Now</Button>
      </CardActions>
    </div>
    </div>
    </Card>
                   
                   ))
                }
                </div>
             </div>
    
  )
}

export default MarketWindow