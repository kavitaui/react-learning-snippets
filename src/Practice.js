 import{useState, useEffect} from "react";

 export default function Practice(){
    const[value,setValue]= useState();
    const MyData=(a,b)=>{
        return new Promise ((resolve,reject)=>{
            const sub = a-b;
            resolve(sub);
        })
    }
    useEffect(()=>{
       async  function Main(){
       await MyData(10,2).then((result)=>{
        setValue(result)
       })
       }
       Main();
    },[])

    return(
        <div> the Promise of subtraction is:
            hello world
           {value}
        </div>
    )
}