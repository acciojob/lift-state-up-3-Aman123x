import React,{useState} from "react";

const Child2=({setSelectedOption})=>{

    return(
        <div>
            <h2>Child Component 2</h2>
            <button onClick={()=>setSelectedOption("Option 2")}>Option 2</button>
        </div>
    )
}

export default Child2;