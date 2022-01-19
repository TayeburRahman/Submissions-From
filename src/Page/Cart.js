import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CheckoutSteps from './ CheckoutSteps'
import img from "../Image/download.svg"
import user from "../Image/download (1).svg"
import MetaData from '../MetaData'
import { Button, div, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CartDeta from '../Components/CartDeta';


function  Cart() {
  const [products, setProducts] = useState([]);
   const [value, setValue] = useState('');
  const [displyProduct,setDisplyProduct] = useState([])
  console.log(displyProduct)


  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // input search tex hendl UI. No.7 and END
        setDisplyProduct(data);
      });
  }, []);
  const hendlSearch = (event) => {
    const searchText = event.target.value;
    setValue(searchText)
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplyProduct(matchedProducts);
  }
    return (
      <div className='mainsection'>
         <MetaData title={'Cart'} />
          <div className='row fastRow'>
          <div className='d-flex container logoContainer'
             style={{justifyContent: 'space-between'}}
             >
             <div className='text-left logo'>
              <img src={user} dataReactid=".0.0"  />
             </div>
             <div className=' text-right userImage'>
               <img src={img} dataReactid=".0.0"/>
             </div>
             </div>
             <div className='text'>
               <h2>Submit Cards For Grading</h2>
             </div>
             <div className='CheckoutStepsMainPage'>
                 <CheckoutSteps  service cards className=" "></CheckoutSteps>
             </div>
          </div>
        <div className='d-grid container lastSection'>
           <div className='row d-flex mt-5 mb-4'
           style={{justifyContent: 'space-around'}}
           >
             <div className='text-left mb-4 col-md-12 col-sm-12'
             style={{margin: '50px 10px 0px 0px'}}
             >
              <h2 className='h2-style '>
              Add cards to your submission
              </h2>
                <Typography className='text-left' variant="body2" gutterBottom component="div">
                Search for a card below and click the "+" icon, then enter the   quantity and value for each card.
                </Typography>
                <Typography className='text-left' variant="body2" gutterBottom component="div">
                 quantity and value for each card.
                </Typography>
             </div>
            <div className='row' >
             <dib className='col-md-8 col-sm-12'>
               <div className='col-md-12 col-sm-12' >
               <Typography className='text-left' variant="h6" gutterBottom component="div">
               Search
               </Typography>
               <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">
                  <SearchIcon />
                  </span>
                  <input
                  onChange={hendlSearch}
                   type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
               </div>
             </div>
               { value ?
               
                 <CartDeta key={displyProduct.key}
                 displyProduct={displyProduct}
                 ></CartDeta>
             
               :
                  <div className=''>
                  <Paper elevation={3}> 
                    <div className='MuiPaper-root'
                    style={{margin: '20px'}}
                    >
                     <Typography className='text-left mt-2 mb-2' variant="h6" gutterBottom component="div">
                      Added Card(s)
                      </Typography>
                      <Typography variant="caption d-flex" display="block" gutterBottom
                      style={{
                      justifyContent: 'center'}}
                      >
                      No cards have been added yet.
                      </Typography>
                    </div>
                 </Paper>
                  </div>
                   
               }
               </dib>
               <div className='col-md-4 col-sm-12'>
               <div className='col-md-12 col-sm-12 text-left'
            style={{boxShadow: '0px 0px 0px 0.2px', padding: '10px'}}
            >
             <Typography variant="h6" gutterBottom component="div">
               Summary
            </Typography>
               </div>
               <div className='col-md-12 col-sm-12'
              style={{boxShadow: '0px 0px 0px 0.2px', padding: '10px'}}
            >
              <div className='d-flex mb-2 mt-2' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                <Typography className='text-left' variant="body2" gutterBottom component="div">
                Service Level
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                $20  / Card
                </Typography>
              </div>  
              <div className='d-flex' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Link to="/Service"
                 style={{ textDecoration: 'none', color:'#20BFB8'}}
                 >
                 <Typography variant="button" display="block" gutterBottom>
                   EDIT
                </Typography>
                 </Link>
                <Typography className='text-right' variant="caption" display="block" gutterBottom>
                $500 Max. Value Per Card
                </Typography>
              </div>  
              <br/>
              <br/>
              <div className='d-flex mb-1' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
      
                 <Typography variant="body2" display="block" gutterBottom>
                 Number of Cards:
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                0
                </Typography>
              </div>  
              <div className='d-flex' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Typography variant="body2" display="block" gutterBottom>
                 Price / Card:
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                $20
                </Typography>
              </div>  
              <br/>
              <br/>
              <div className='d-flex' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Typography variant="body2" display="block" gutterBottom>
                   EDIT
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                ($20  x 0) = $0
                </Typography>
              </div>  
               </div>
             </div>
            </div>
           </div>
          </div>
        <div className='d-flex mt-5 mb-5'
          style={{justifyContent: 'center'}}
        >
              <Link to='/Service'
              style={{  textDecoration: 'none'}}
              >
                <Button variant="outlined" startIcon={ <i class="fas fa-backward"></i>}
                 style={{padding: '10px 50px 10px 50px',  color: 'cornflowerblue'}}
                >
                </Button>
              </Link>
           {
               value ?
               <Link to="/shipping"
               style={{  textDecoration: 'none'}}
               >
               <Button variant="contained"
               style={{    padding: '10px 50px 10px 50px', background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
                >Next</Button>
               </Link>
                :  
                <Button disabled className='disabledBtn'
                style={{padding: '10px 50px 10px 50px',  color: 'cornflowerblue'}}
                > Next </Button>
                 
           }  
           
            
             
            
        </div>
     </div>
    )
}

export default  Cart;
