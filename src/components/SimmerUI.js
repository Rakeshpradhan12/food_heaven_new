
 const Simmer=()=>{
    return(
        <>
        <div>
         <input type="text"/>
         <button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>   
        </div>   
        <div  className="restaurantList">
         { Array(20).fill("").map((e,index)=><div className="shimmer" key={index}>
            </div>)  
         }
        </div>
        </>
        
    )
    }
    export default Simmer;
