import { useState } from "react"
import "./Card.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addtocard } from "../Redux/Action"

function Card() {
 const {carts} =useSelector(state=>state.Reducer)
   const Dispatch=useDispatch()
   const senddata=(ele)=>{
    Dispatch(addtocard(ele))
   }
    const [Products ,setProducts]=useState([{
      "id": 1,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw881383c6/images/hi-res/ala230802_purple_2.jpg?sw=400&sh=600",
        "image1": "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw64b0148a/images/hi-res/ala230802_purple_1.jpg?sw=800&sh=1200",
        "title":"Fabrics 3  Piece  Suits",

        "desc":"printed | Top Bottoms Dupatta",
        "price": {
            "oldprice": 4190 ,
            "newprice":  2933
          },
    },
    {
      "id": 2,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw87dab597/images/hi-res/ala230801_black_2.jpg?sw=400&sh=600",
       "image1":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw136a6c11/images/hi-res/ala230801_black_1.jpg?sw=800&sh=1200",
        "title":"Fabrics 3  Piece  Suits",
        "desc":"printed | Top Bottoms Dupatta",
        "price":{
            "oldprice":" 4190",
            "newprice": "2933"
            }
    },
    {
      "id":3,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwb9f354a7/images/hi-res/lla230801_green_2.jpg?sw=400&sh=600",
        "image1":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw12b76c83/images/hi-res/lla230801_green_1.jpg?sw=800&sh=1200",
        "title":"Fabrics 2 Piece  Suits",
        "desc":"printed | Top Bottoms Dupatta",
        "price":{
            "oldprice": 3190,
            "newprice": 2233,
            },
    },
    {
       "id":4,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw77f9f93f/images/hi-res/bla230804_yellow_2.jpg?sw=400&sh=600",
       "image1":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw16805631/images/hi-res/bla230804_yellow_1.jpg?sw=800&sh=1200",
        "title":"Fabrics 2 Piece  Suits",
        "desc":"printed  Emboridered | Top Bottoms Dupatta",
        "price":{
            "oldprice": 4590,
            "newprice": 3213,
            },
    },
    {
      "id": 5,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwec3ee2c5/images/hi-res/ala230801_yellow_2.jpg?sw=400&sh=600",
        "image1":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw250d38c6/images/hi-res/ala230801_yellow_1.jpg?sw=800&sh=1200",
        "title":"Fabrics 2 Piece  Suits",
        "desc":"printed | Top Bottoms Dupatta",
        "price":{
            "oldprice": 4190,
            "newprice": 2933,
            },
    },
    {
      "id": 6,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwcce31d90/images/hi-res/ala230802_orange_2.jpg?sw=400&sh=600",
       "image1":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw3195504c/images/hi-res/ala230802_orange_3.jpg?sw=800&sh=1200",
        "title":"Fabrics 3 Piece  Suits",
        "desc":"printed | Top Bottoms Dupatta",
        "price":{
            "oldprice": 4190,
            "newprice": 2933,
            },
    },
    {
      "id": 7,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw26ca8bf9/images/hi-res/ala230828_black_2.jpg?sw=400&sh=600",
       "image1":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw054b2202/images/hi-res/ala230828_black_4.jpg?sw=800&sh=1200",

       "title":"Fabrics 3 Piece  Suits",
        "desc":"printed | Top Bottoms Dupatta",
        "price":{
            "oldprice": 4190,
            "newprice": 2933,
            },
    },
    {
      "id": 8,
        "image":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwc2f413b9/images/hi-res/bla230803_maroon_2.jpg?sw=400&sh=600",
        "image1":"https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw99c0e353/images/hi-res/bla230803_maroon_4.jpg?sw=800&sh=1200",

        "title":"Fabrics 3 Piece  Suits",
        "desc":"printed Embroidered | Top Bottoms Dupatta",
        "price":{
            "oldprice": 4190,
            "newprice": 2933,
            },
    },
])

  return (
   
    <>
    <div className="cards">
    {Products.map((item)=>{
   return(
<div class="card" >
  <div className="image">
  <img src={item.image} class="card-img" alt="..."/>
 
  <div className="inner">
  <Link to={`/Products/${item.id}`}> <img src={item["image1"]} alt="" />
  </Link>
  </div>
  

  <Link to="#" class="btn " onClick={()=>senddata(item)} >Add To Bag</Link>
 </div>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.desc}</p>
    <div className="price">
      <div className="newprice">Rs{item.price.newprice}</div>
      <div className="old">Rs {item.price.oldprice}</div>
    </div>
   
     
     
  
    
  </div>
  
</div>
   )
    })}
    </div>
    </>
  )
}

export default Card
