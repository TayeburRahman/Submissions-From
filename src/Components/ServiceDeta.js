import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {   Fragment } from 'react'

const service=[
     {
         localPrice:50,
         price:1000,
         day:"10-20",
         key:1
     },
     {
        localPrice:520,
        price:27000,
        day:"10-20",
        key:2
     },
     {
        localPrice:100,
        price:900,
        day:"10-20",
        key:3

     },
     {
        localPrice:20,
        price:1400,
        day:"10-20",
        key:4

     },
     {
        localPrice:50,
        price:2100,
        day:"10-20",
        key:5

     },
     {
        localPrice:52,
        price:5000,
        day:"10-20",
        key:6

     }
]

 
function  ServiceDeta() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

    return (
        <Fragment> 
        <div className='row d-flex boody'
        style={{justifyContent: 'space-around'}}
        >
            <div className=' row gap-3 col-md-7 col-sm-12'>
               {
                 service.map((rs)=>(
                  <label className="card  ">
                  <input 
                         style={{marginTop:'14px'}}
                         type="radio"
                         className="radio"
                         name="plan"
                         checked />
                   <div className=" plan-details">
                   <Box className="d-flex">
                           <span className="font700 spanColor">${rs.localPrice} </span>
                           <span>/card</span>
                     </Box>
                     <Box>
                     <Typography variant="body2" className=' ' gutterBottom>  
                     ${rs.price} blanditiis tenetur
                   </Typography>
                            <span>{rs.day}/Day</span>
                     </Box>
                  </div>
                  
                 </label>
                 ))
               }
            </div>
        </div>
      
        </Fragment>
    )
}

export default  ServiceDeta
