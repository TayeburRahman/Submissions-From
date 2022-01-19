import React, { useState,useEffect, Fragment } from 'react'
import { Checkbox, ImageListItem, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
 



const service=[
     {
         localPrice:50,
         price:1000,
         day:"10-20",
         key:1
     },
     {
        localPrice:520,
        price:25000,
        day:"10-20",
        key:2
     },
     {
        localPrice:520,
        price:25000,
        day:"10-20",
        key:3

     },
     {
        localPrice:520,
        price:25000,
        day:"10-20",
        key:4

     },
     {
        localPrice:520,
        price:25000,
        day:"10-20",
        key:5

     },
     {
        localPrice:520,
        price:25000,
        day:"10-20",
        key:6

     }
]

 
function  ServiceDeta() {
    const [checked, setChecked] = React.useState(true);

    const [cls1, setCls1] = useState("green");
    const [cls2, setCls2] = useState("green");
    const [cls3, setCls3] = useState("green");
    const [cls4, setCls4] = useState("green");
    const [cls5, setCls5] = useState("green");
    const onClick1= (e)=>{
        setCls1( cls1 === "red" ? "green" : "red")
    }
    const onClick2= (e)=>{
        setCls2( cls2 === "red" ? "green" : "red")
    }
    const onClick3= (event)=>{
        setCls3( cls3 === "red" ? "green" : "red")
    }
    const onClick4= (event)=>{
        setCls4( cls4 === "red" ? "green" : "red")
    }
    const onClick5= (event)=>{
        setCls5( cls5 === "red" ? "green" : "red")
    }
    
    return (
        <Fragment> 
        <div className='row d-flex'
        style={{justifyContent: 'space-around'}}
        >
            <div className='row col-md-7 col-sm-12'>
                    <Box className='mb-3 col-md-12 col-sm-12'>
                       <ListItem button  
                        className={cls1}
                        onClick={()=>(onClick1(cls1))}
                       >
                             <ListItemIcon>
                             </ListItemIcon>
                             <ListItemText  >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $15 <span style={{     fontWeight: '400'}}>/ Cart</span>
                             </Typography>
                             </ListItemText>  
                             <ListItemText className='text-right'  >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $1000 blanditiis tenetur
                             </Typography>
                                  <Typography variant="caption" display="block" gutterBottom>
                                     12-14 Day Turnaround
                                  </Typography>
                             </ListItemText>  
                             <ListItemIcon primary="Inbox">
                             </ListItemIcon>  
                       </ListItem>
                    </Box>
                    
                    <Box className='mb-3 col-md-12 col-sm-12'>
                    <ListItem button  
                        className={cls2}
                        onClick={()=>(onClick2(cls2))}
                       >
                             <ListItemIcon>
                             </ListItemIcon>
                             <ListItemText  >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $15 <span style={{     fontWeight: '400'}}>/ Cart</span>
                             </Typography>
                             </ListItemText>  
                             <ListItemText className='text-right'  >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $1000 blanditiis tenetur
                             </Typography>
                                  <Typography variant="caption" display="block" gutterBottom>
                                     12-14 Day Turnaround
                                  </Typography>
                             </ListItemText>  
                             <ListItemIcon primary="Inbox">
                             </ListItemIcon>  
                       </ListItem>
                    </Box>
                    
                    <Box className='mb-3 col-md-12 col-sm-12'>
                    <ListItem button  
                        className={cls3}
                        onClick={()=>(onClick3(cls3))}
                       >
                             <ListItemIcon>
                             </ListItemIcon>
                             <ListItemText  >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $15 <span style={{     fontWeight: '400'}}>/ Cart</span>
                             </Typography>
                             </ListItemText>  
                             <ListItemText className='text-right' >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $1000 blanditiis tenetur
                             </Typography>
                                  <Typography variant="caption" display="block" gutterBottom>
                                     12-14 Day Turnaround
                                  </Typography>
                             </ListItemText>  
                             <ListItemIcon primary="Inbox">
                             </ListItemIcon>  
                       </ListItem>
                    </Box>
                    
                    <Box className='mb-3 col-md-12 col-sm-12'>
                    <ListItem button  
                        className={cls4}
                        onClick={()=>(onClick4(cls4))}
                       >
                             <ListItemIcon>
                             </ListItemIcon>
                             <ListItemText className='text-left'>
                             <Typography className='text-left' variant="subtitle2" gutterBottom component="div">
                               $15 <span style={{     fontWeight: '400'}}>/ Cart</span>
                             </Typography>
                             </ListItemText>  
                             <ListItemText className='text-right' >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $1000 blanditiis tenetur
                             </Typography>
                                  <Typography variant="caption" display="block" gutterBottom>
                                     12-14 Day Turnaround
                                  </Typography>
                             </ListItemText>  
                             <ListItemIcon primary="Inbox">
                             </ListItemIcon>  
                       </ListItem>
                    </Box>
                    <Box>
                    <ListItem button  
                        className={cls5}
                        onClick={()=>(onClick5(cls5))}
                       >
                             <ListItemIcon>
                             </ListItemIcon>
                             <ListItemText  >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $15 <span style={{     fontWeight: '400'}}>/ Cart</span>
                             </Typography>
                             </ListItemText>  
                             <ListItemText className='text-right'  >
                             <Typography variant="subtitle2" gutterBottom component="div">
                               $1000 blanditiis tenetur
                             </Typography>
                             <Typography variant="caption" display="block" gutterBottom>
                               12-14 Day Turnaround
                             </Typography>
                             </ListItemText>  
                             <ListItemIcon primary="Inbox">
                             </ListItemIcon>  
                       </ListItem>
                    </Box>
                    
                     
                    
                    
            </div>
        </div>
        <style>{`
        .red {box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset}
        .green {box-shadow: rgba(32, 191, 184) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset}
      `}</style>
      
        </Fragment>
    )
}

export default  ServiceDeta
