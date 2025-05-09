
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "./config";
import { useDispatch } from "react-redux";
import { clearCart,removeItem } from "../utils/cartSlice";

const ItemStore=()=>{
       
    const store= useSelector((store)=>store.cart.item);
    // const [totalPrice,setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const removeAll=()=>{
        dispatch(clearCart());
    }
   

    // useEffect(()=>{
    //     let total=0;
    //     store.forEach(item=>total+=item.price);
    //     setTotalPrice(total);
    // },[store]);

    // const handleRemoveItem=(itemId)=>{
    //     dispatch(removeItem(itemId));
    // }

    // const handleUpdateItem=(itemId,quantity)=>{
    //     dispatch(updateQuantity(itemId,quantity));
    // }

    // const handleClearCart=()=>{
    //     dispatch(clearCart());
    // }

    // const handleCheckout=()=>{
    //     //checkout logic
    // }

    // const handleBuyNow=()=>{
    //     //buy now logic
    // }

    // const handleContinueShopping=()=>{
    //     //continue shopping logic
    // }

    // const handlePlaceOrder=()=>{
    //     //place order logic
    // }

    // const handleAddReview
    
  
    return(
        <>
        <h1 >Cart Items -{store.length}</h1>
        <div style={{display : "flex",flexWrap:"wrap"}}>
        {store.map(data=>(
              <div className="card">
              <img src={IMG_CDN_URL + data?.imageId}/>
              <h2 style={{color : "green"}}>{data?.name}</h2>
              <h3  style={{color : "orange"}}>Price - &#8377;{data?.price/100}</h3>
              <h3  style={{color : "red"}}>{data?.category}</h3>  
               <button onClick={()=>dispatch(removeItem(data?.id))} style={{color:"white",backgroundColor:'red'}}>
                Remove</button>

              </div>
        ))}
       </div>
       {/* <h2>Total Price -{totalPrice}</h2> */}
       
       <button onClick={()=>removeAll()} style={{color:"white",padding:"5px 130px",backgroundColor:"orange",marginTop:"130px"}}>
        Clear Cart
       </button>

        </>
    )
}

export default ItemStore;