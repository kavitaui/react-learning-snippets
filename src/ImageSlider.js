
import { slidesData } from "./SlidesData";
export default function ImageSlider(props){
return(
    <div>{props.image}
   <h1> {props.title}</h1>
   <button>{props.cta}</button>{slidesData} </div>
)
}