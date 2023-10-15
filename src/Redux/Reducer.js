

const initialState={
    carts:[]
}

 
 export const Reducer=(state=initialState, action)=>{
    switch(action.type){
     case "ADD_To_CARTs":
      const itemfind=state.carts.findIndex(item=>item.id==action.payload.id)
      if(itemfind>=0){
        state.carts[itemfind].qnty+=1;
        return{
            ...state,
            carts:[...state.carts]
        }
      }
      else{
        const temp ={...action.payload , qnty:1}
        return{
            ...state,
            carts:[...state.carts, temp]
        }
      }
      case "REMOVE_FROM_CARTs" :
        const itemfinddel=state.carts.findIndex(item=>item.id==action.payload.id)
        if(itemfinddel>=0){
          state.carts[itemfinddel].qnty-=1;
          return{
              ...state,
              carts:[...state.carts]


          }
        }
        else{
          const temp ={...action.payload , qnty:1}
          return{
              ...state,
              carts:[...state.carts, temp]
          }
        }

        case "EMPTY-CART" :
            const data=state.carts.filter((item)=>item.id !== action.payload.id);
            return{
                ...state,
                carts:data
            }


      default :
      return state
      
    }
}



