import {useState,useRef} from "react";

export default function StopWatch(){
    const[startTime,setStartTime]= useState(null);
    const[now,SetNow] = useState(null);
    const intervalRef = useRef(null);
     function handleStart(){
        debugger;
        setStartTime(Date.now());
        SetNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            SetNow(Date.now());
        },20)
     }
     function handleStop(){
        debugger;
        clearInterval(intervalRef.current)
     }
     let secondsPassed =0;
     if (startTime !=null && now !=null){
        secondsPassed =(Number(now) - Number(startTime))/1000;
     }

    return(
        <div>
            <h1>TimePassed:{secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}