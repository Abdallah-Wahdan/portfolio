import React, { useState, useEffect } from "react";
import "./compStyles.css";


function Time() { 
   
   const [watch, setWatch] = useState(new Date());
   
   useEffect(() => {
   const interval = setInterval(() => {
     setWatch(new Date());
   }, 1000);
   return () => clearInterval(interval);} , []);
   
   return( 
<div className="container" > 

   <h2 className="time">{watch.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>

</div>
);

}

 export default Time;