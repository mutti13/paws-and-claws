import React from 'react'
import { Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import "../my.css";
import { useDispatch, useSelector } from "react-redux";
function CheckoutSteps({step1, step2, step3, step4}) {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  return (
    <Nav style={{
      marginTop : '30px'
    }} className='justify-content-center mb-4 newtext'>
      <Nav.Item  className='hello'>
        {step1 ? (
             <LinkContainer to='/login'>
             <Nav.Link>
            {userInfo ? (<p>HOME</p>) 
            : 
            (<p>LOGIN</p>)}
              
          
             </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
    
          LOGIN
  
         </Nav.Link>
        )}
       
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
             <LinkContainer to='/payment'>
             <Nav.Link>
          
             SHIPPING
             
             </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
        
              SHIPPING
          
         </Nav.Link>
        )}
       
      </Nav.Item>
      
      <Nav.Item>
        {step3 ? (
             <LinkContainer to='/final'>
             <Nav.Link>
   
              PAYMENT
          
             </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
    
              PAYMENT
            
         </Nav.Link>
        )}
       
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
             <LinkContainer to='/confirm'>
             <Nav.Link className='hello'>
  
              CONFIRM ORDER
    
             </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
         
              CONFIRM ORDER
            
         </Nav.Link>
        )}
       
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
