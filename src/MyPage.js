import { useContext } from "react";
import MyContext from "./MyContext";
export default function MyPage(){
    const contextData = useContext(MyContext);
    return(
        <div> 
         <h4> {contextData.name}</h4>
         <p></p> 
        </div>
    )
}