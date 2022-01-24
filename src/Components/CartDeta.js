import React, { useState } from 'react'
import { ImageListItem, ListItem, Typography } from '@mui/material';
import useCart from './Hooks/useCart';
import { addToDb, removeFromDb,clearTheCart } from './fakedb';
 

function  CartDeta({displyProduct}) {
    const [click, setClick] = useState()
    const [cart, setCart] = useCart();

    String.prototype.trimEllip = function (length) {
        return this.length > length ? this.substring(0, length) + ".." : this;
      }
      

      
      // product button
      const hendelOnClick = (product) =>{
        const exists = cart.find((pd) => pd.key === product.key);
        if(!exists){
            const exists = cart.find((pd) => pd.key === product.key);
            let newCart = [];
            // if (exists) {
            //   const rest = cart.filter((pd) => pd.key !== product.key);
            //   exists.quantity = exists.quantity + 1;
            //   newCart = [...rest, product];
            // } else {
              product.quantity = 1;
              newCart = [...cart, product];
            // }
            setCart(newCart);
            addToDb(product.key);
            console.log('count 1',   cart)
          }
          else if(exists){
             const newCart = cart.filter(pd => pd.key !== product.key);
             setCart(newCart)
             removeFromDb(product.key)
            //  clearTheCart(cart)
             console.log('count 0', cart)
            }

    }
    return (
         <div className='mt-4'>
             <div className='d-flex col-md-12 col-sm-12'>
              <div className='col-6'>
              <Typography className="text-left" variant="caption" display="block" gutterBottom>
              {displyProduct.length} results
             </Typography>
              </div>
              <div className='col-6'>
              <Typography className="text-right" variant="caption" display="block" gutterBottom>
              Can't find your card? <span><button
              style={{  textDecoration: 'none', border: '0', color:"rgba(32, 191, 184)"}}
              >Add Card Manually</button> </span>
             </Typography>
              </div>
             </div>
            <div className=' ' Garamond Serif style={{height:'400px',border:'1px solid #ccc', font:'16px/26px Georgia', overflow:'auto'}}>
            <div>
                  {
                      displyProduct.map((pd)=>(
                        <ListItem
                         key={pd.key}
                         onClick={()=>hendelOnClick(pd)}
                         button>
                         <ImageListItem>
                          <img
                          className='imgCrt'
                          src={pd.img}
                          loading="lazy"
                           
                        />
                         </ImageListItem>
                         <div className='col-10'>
                         <Typography variant="subtitle2"  gutterBottom component="div">
                         {pd.name.trimEllip(25)}
                         </Typography>
                         <Typography className='text-left' variant="body2" gutterBottom component="div">
                             price ${pd.price}
                         </Typography>
                         </div>
                         <div>
                             
                         </div>
                        </ListItem>
                      ))
                  }
            </div>
             
        </div>
         </div>
    )
}

export default  CartDeta;
