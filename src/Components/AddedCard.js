import React, { Fragment } from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system'; 
 import './ServiceData.css'
import useCart from './Hooks/useCart';
import { addToDb, removeFromDb,clearTheCart } from './fakedb';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



function AddedCardLast() {
    const [card, setCard] = useCart();
   const [num, setNum] = React.useState(1);
 
 
    return (
        <Fragment>
             <Fragment>
             <div className='col-12 mt-5'>
                <Typography className='text-left smHedingText' variant="none" gutterBottom >
                Added Card(s)
                </Typography>
                 <Box className="d-flex">
                     <Box className='col-6 gap-3 d-flex'>
                        <Typography variant="subtitle2" gutterBottom >
                         Qty
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom >
                         Card(s)
                        </Typography>
                     </Box>
                     <Box className="col-6">
                        <Typography variant="subtitle2" gutterBottom >
                        Value (USD)	
                        </Typography>
                     </Box>
                 </Box>
             </div>
             <hr></hr>
             <div className='col-12 mt-4'>
                  {card.map((crd) => (
                      <div className="d-flex "
                      style={{alignItems: 'center' , justifyContent: 'center'}}
                      >
                          <Box className='col-md-2 col-sm-6'>
                          <input
                            style={{padding: '7.5px 7px', border: "1px solid rgb(199 199 199)",borderRadius: '4px'}}
                            type="number"
                            min={0}
                            max={100}
                            step={1}
                            value={num}
                            onChange={e => setNum(e.target.value)}
                          />
                          </Box>
                          <Box className='col-md-1 col-sm-3'>
                          <img 
                          style={{ width: '40px',height: '56px'}}
                          src={crd.img} alt="BigCo Inc. logo"/>
                          </Box>
                          <Box className='d-grid text-left col-md-4 col-sm-8' >
                          <Typography className='XlSmallText' variant=" " gutterBottom >
                          Gate Guardian
                             </Typography>
                             <Typography className='smallText' variant=" " gutterBottom >
                             SECRET RARE
                             </Typography>
                             <Typography className='lgSmallText' variant=" " gutterBottom >
                             2002 YU-GI-OH! Booster Packs Metal
                             </Typography>
                             <Typography className='lgSmallText' variant=" " gutterBottom >
                             Raiders 0
                             </Typography>
                          </Box>
                          <Box  className='col-md-3 col-sm-6'>
                              <input
                               style={{padding: '4.5px 6px', border: "rgb(205 205 205)",borderRadius: '4px',padding: '7.5px 7px', border: "1px solid rgb(199 199 199)",borderRadius: '4px',    width: '100%'}}
                              className='textField'
                                  id="outlined-name"
                                  placeholder='$'
                                  label="$"
                                  // value={name}
                                  // onChange={handleChange}
                              />
                          </Box>
                          <Box className='col-md-2 col-sm-6'>
                          <IconButton 
                             onClick={()=> removeFromDb(crd.key) }
                             edge="end" 
                             aria-label="delete">
                             <DeleteIcon />
                          </IconButton>
                        
                          </Box>
                      </div>
                  ))}
                 
             </div>
           
             </Fragment>
        </Fragment>
    )
}

export default AddedCardLast
