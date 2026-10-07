import { useEffect, useState } from "react";

function StopWatch() {
    const [isRuning,setIsRuning]=useState(false);
    const [time,setTime]=useState(0);


    const hours = Math.floor(time / 3600000);
    const minutes=Math.floor ((time % 3600000) / 60000);
    const seconds=Math.floor ((time % 60000) / 1000);
    const moments=Math.floor((time % 1000) / 10);

useEffect(()=>{
    if (!isRuning) {
        return;
    }

    const timer=setInterval(()=>{
setTime(timer=>timer+10);
    },10)
    return()=>{
        clearInterval(timer);
    }
},[isRuning])

return(
<>

<div className="clock-container">
<h1>{String(hours).padStart(2,"0")}:{String(minutes).padStart(2,"0")}:{String(seconds).padStart(2,"0")}:{String(moments).padStart(2,"0")}</h1>
<div className="controlBtns">
<button onClick={()=>setIsRuning(true)} className="start-btn">START</button>
<button onClick={()=>setIsRuning(false)} className="pause-btn">PAUSE</button>
<button className="reset-btn" onClick={()=>{setTime(0); setIsRuning(false);} }>RESET</button>
</div>
</div>
</>
)


}
export default  StopWatch;