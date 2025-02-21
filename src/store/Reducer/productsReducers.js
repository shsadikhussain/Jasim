import products from "./products"

let initialState = {
    allproducts:products,
    searchedproducts:products,
    cart:[],
}
const productReducer = (state=initialState,action)=>{
    if(action.type==='ADDCART'){
        let temp=[...state.allproducts]
        temp=temp.map((a)=>{
            if(a.title===action.payload.title)
            {
                a.inCart=true;
                a.count=1
                return a
            }
            else
            return a
        })
        return{...state,cart:[...state.cart,action.payload],addCart:true,searchedproducts:[...temp]}
    }
    if(action.type==='Search'){
        var temp = [...state.allproducts]
        temp=temp.filter((a)=>{
            return (
                a.title.toLowerCase().includes(action.payload.toLowerCase())
            )
        })
        return {...state,searchedproducts:[...temp]}
    }
    
    if(action.type==='Delete'){
        let temp1=[...state.allproducts]
        temp1=temp1.map((a)=>{
            if(a.title===action.payload.title)
            {
                a.inCart=false;
                return a
            }
            else
            return a
        })
        let temp = [...state.cart]
        temp.splice(action.index,1)
        return {...state,cart:[...temp],searchedproducts:[...temp1]}
    }

    if(action.type==='Inc'){
        let temp=[...state.cart]
        temp=temp.map((a)=>{
            if(a.id===action.payload.id)
            {
                a.count++
                return a
            }
            return a
        })
        return {...state,cart:[...temp]}
    }
    if(action.type==='Dec'){
        let temp=[...state.cart]
        temp=temp.map((a)=>{
            if(a.id===action.payload.id)
            {
                a.count--
                return a
            }
            return a
        })
        return {...state,cart:[...temp]}
    }

    if(action.type==='saveLater'){
        return {...state,saveLater:state.saveLater=true}
    }

    return state
}

export default productReducer