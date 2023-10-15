import { Widgets } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Bag.css"
import { addtocard, emptycart, removefromcart  } from '../Redux/Action'
function Bag() {
  
    const {carts}=useSelector(state=>state.Reducer)
   
  const Dispatch=  useDispatch()
  const increament=(ele)=>{
   

   
    Dispatch(addtocard(ele))

  }
  const decrement=(ab)=>{
    Dispatch(removefromcart(ab))
  }
  const delitem=(cd)=>{
    Dispatch(emptycart(cd))
  }
  const [price,Setprice]=useState(0)
  const tprice=()=>{
    let totalprice=0;
    carts.map((ac)=>{
      totalprice=ac.price.newprice * ac.qnty +totalprice
    })
   
    Setprice(totalprice)
  }
  useEffect(()=>{ 
    tprice()
  },[tprice])
 
  return (
   <>
  
    <section className="divide">
    
       
            <div className="tabler">
              <table className="table">
                <thead>
                  <tr className='head-table'>
                    <th scope="col" className="h5">
                      Shopping Bag
                    </th>
                    <th >Format</th>
                    <th >Title</th>
                    <th >Quantity</th>
                    <th >Price</th>
                  </tr>
                </thead>
                <tbody>
               
                {
                
                  carts.map(item=>{                  

 return(

 
  
    <tr>
      <th  className='pointer'  onClick={()=>delitem(item)} ><i class="fa-solid fa-trash"></i></th>
      <td className='image-bag' ><img src={item.image} alt=""  /></td>
      <td>{item.title}</td>
      <div className="bag-button">
        <div className="add"  onClick={()=>decrement(item)} ><button>-</button></div>
      {item.qnty}
      <div className="add" onClick={()=>increament(item)}  ><button>+</button></div>
      </div>
      <td>{item.price.newprice* item.qnty}</td>
      
     
       


    </tr>
)    
}) }
                  
                </tbody>
              </table>
            </div>

            
              
<ul class="list-group">
  <li class="list-group-item a">SUMMARY DETAIL </li>
  <li class="list-group-item a" >Estimate  Shipping  & tax</li>
  <li class="list-group-item b">SUBTOTAL:{price}</li>
  <li class="list-group-item b">SHIPPING DOMESTIC :100RKR</li>
  <li class="list-group-item b text-primary fw-bold f-5">Order Total:{price < 3000  ?  (price + 100) : price}</li>
  <li class="list-group-item"><button className='btn btn-primary'>CHECKOUT</button></li>
</ul>
            </section>
 
   </>
  )
}

export default Bag