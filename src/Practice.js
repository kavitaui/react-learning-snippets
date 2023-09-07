 import{useEffect, useState} from "react";
 export default function Practice(){
    const[value,setValue]=useState()
    const MyData = (a,b)=>{
        return new Promise ((resolve,rejct)=>{
            const sub =a-b;
            resolve(sub);
        })
    }
    useEffect(()=>{
        async function Main(){
            await MyData(10,2).then((result)=>{
setValue(result);
            })
        }
    })
        return(
        <div>Promise lkdfhslhf {value}</div>
    )
}