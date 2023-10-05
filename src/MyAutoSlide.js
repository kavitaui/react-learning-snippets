import {useState,useEffect} from "react";
import { sliderData } from "./Slider-Data";
import "./Componants/slider/Slider.css";
export default function MyAutoSlide()
{
    const [currentSlide,setCurrentSlide]= useState(0)
    const slideLength= sliderData.length;
    console.log(slideLength);
    const autoScroll = true;
    let slideInterval;
    let  intwervalTme =5000;
    return(
        <div>
          {currentSlide}  
        </div>
    )
}