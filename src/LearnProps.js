import MyCar from "./MyCar";
export default function LearnProps(){
    var obj1 ={
        car:"audi",
        color:"red",
        type:"c",
        model:"32"
    }
return(
<div>
 <MyCar item={obj1} />
</div>
)
}