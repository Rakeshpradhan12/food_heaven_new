import {useState} from "react";
const Section = ({title,description,isVisible,setIsVisible})=>{
   
     return(
         <div style={{border: "1px solid black", paddingLeft:"15px",paddingBottom:"5px" , marginTop:"50px"}}>
           
             <h2 style={{color: "green"}}>{title}</h2>
            
            
             {(isVisible)? <div> <button onClick={()=>setIsVisible()} style = {{cursor: "progress", textDecoration:"underline",border:"none",background:"none",outline:"none"}}>Hide</button> <h3 style={{color: "indigo"}}>{description}</h3> </div>: <button onClick={()=>setIsVisible()} style={{cursor: "progress", textDecoration:"underline",border:"none",background:"none",outline:"none"}}>show</button>}
           
         </div>
     )
}

const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState();
    return(
        <div>
             <h1 style={{color : "red", margin: "2px",padding: "5px", fontWeight:"bold"}}>Welcome to Instamart 😎😎😎😎😎😎😎😎😎</h1>
            
            <Section 
            isVisible = {visibleSection == "About"}
            setIsVisible={()=>(visibleSection != "About") ? setVisibleSection("About"): setVisibleSection()}
            title={"About Instamart"} 
            description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}/>
            <Section 
             isVisible = {visibleSection =="Team"}
             setIsVisible={()=>(visibleSection !="Team")?setVisibleSection("Team"): setVisibleSection()}
            title={"Team Instamart"} 
            description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}/>
            <Section 
            isVisible = {visibleSection =="Careers"}
            setIsVisible={()=>(visibleSection !="Careers")?setVisibleSection("Careers"): setVisibleSection()}
            title={"Career Instamart"} 
            description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}/>
            
            
            {/* <AboutInstamart/>
            <TeamInstamart/>
            <CareerInstamart/> */}
        </div>
    )
}

export default Instamart ;