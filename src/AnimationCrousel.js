
import Mycard from "./Mycard";
export default function AnimationCrousel() {
   
   
    let box;
    const interval = setInterval(()=>{
         box = document.querySelector('.product-container');
        if (box){
          clearInterval(interval);
        }
    }, 1000)
    const btnpressprev = () => {
        debugger;
        if(!box) return;
        let width = box.clientWidth;
        if(width === box.scrollLeft){
            box.scrollLeft =  0;
        }else{
            box.scrollLeft =  box.scrollLeft - 300;
        }
        
        //console.log(width)
    }
    const btnpressnxt = () => {
        if(!box) return;
        debugger;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width; 
       // console.log(width);
    }
    
    return (
        <div className="product-crousel">
            <button className="prev-btn" onClick={btnpressprev}>&lt;<p></p></button>
            <button className="next-btn" onClick={btnpressnxt}><p>&gt;</p></button>

            <div className="product-container">
                <Mycard cardno="1" />
                <Mycard cardno="2" />
                <Mycard cardno="3" />
                <Mycard cardno="4" />
                <Mycard cardno="6" />
                <Mycard cardno="7" />
                <Mycard cardno="8" />
                <Mycard cardno="9" />
                <Mycard cardno="10" />
                <Mycard cardno="11" />
                <Mycard cardno="12" />
                <Mycard cardno="13" />
                <Mycard cardno="14" />
                <Mycard cardno="15" />
                <Mycard cardno="16" />
            </div> </div>
    )
}