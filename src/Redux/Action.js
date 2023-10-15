


export const addtocard=(data)=>{
return{
    type:"ADD_To_CARTs",
    payload:data


}
}


export const removefromcart=(data)=>{
    return{
        type:"REMOVE_FROM_CARTs",
        payload:data

    
    
    }
    }
    export const emptycart=(data)=>{
        return{
            type:"EMPTY-CART",
            payload:data
        
        
        }
        }