import React from "react";

const Vegetables = () =>{
    const [count1,setCount1] = React.useState(10);
    const [count2,setCount2] = React.useState(8);
    const [count3,setCount3] = React.useState(5);
    const [count4,setCount4] = React.useState(7);

    function addT(){
       setCount1(count1 + 1);
    }
    function subT(){
        setCount1(count1 - 1);
     }

     function addP(){
        setCount2(count2 + 1);
     }
     function subP(){
         setCount2(count2 - 1);
      }

      function addC(){
        setCount3(count3 + 1);
     }
     function subC(){
         setCount3(count3 - 1);
      }

      function addO(){
        setCount4(count4 + 1);
     }
     function subO(){
         setCount4(count4 - 1);
      }
    
   


   return ( 
       <div className="main">
      <div><h1>Tomatoes:{count1} </h1></div>
      <button onClick={addT} >+</button>
      <button onClick={subT} >-</button>

      <div><h1>Potatoes:{count2} </h1></div>
      <button onClick={addP} >+</button>
      <button onClick={subP} >-</button>

      <div><h1>Carrots:{count3} </h1></div>
      <button onClick={addC} >+</button>
      <button onClick={subC} >-</button>

      <div><h1>Onions:{count4} </h1></div>
      <button onClick={addO} >+</button>
      <button onClick={subO} >-</button>

      
       </div>
   )

}

export {Vegetables};
