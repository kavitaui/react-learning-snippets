import { useContext } from "react"
import MyContext from "./MyContext"
export default function Home(){
    const contextData = useContext(MyContext)
    return(
        <div>
            <h3>{contextData.title}
            </h3>
            <p>{contextData.subtitle}</p> 
        </div>
    )
}