 
 import {useState} from 'react';
 export default function MyModal(){
const [modal,setmodal]=useState(false);
const box =()=>{
setmodal(!modal)
}
    return(
      <div>MyModal:
      <button onClick={()=>{box()}}>clickMe</button>
      {modal?
        <div className='box1' onClick={()=>{box()}}>
        <div>X</div></div>:null}

         </div>
    )
}