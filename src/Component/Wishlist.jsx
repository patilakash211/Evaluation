import React from "react";

const Wishlist = () => {

    const [data, setData] = React.useState("");
    const [state,setState] = React.useState([]);
     
    function handelInput(e){
        setData(e.target.value)
       // console.log(e.target.value)
    }
    function handelSubmit() {
        setState([...state,data])
    }
    if(state.length > 3){
        document.querySelector("input").style.display = "none"
        document.querySelector("button").style.display = "none"
        alert("You cannot add more than 3 items to wishlist")
        state.pop()

    }

    return (
        <>
            <h1>WISHLIST</h1>
            <input type="text" onChange={handelInput}/>
            <button onClick={handelSubmit}>ADD</button>
            {state.map((e)=>(
               <div>
                   {e}
               </div> 
            ))}

        </>
    )
}

 export {Wishlist};