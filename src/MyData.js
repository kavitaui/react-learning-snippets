
import { useState, useEffect } from "react";
import MyContext from './MyContext';
import axios from "axios";
import Home from './Home';
import MyPage from './MyPage';
export default function MyData() {
   
    const [jsonData, setJsonData] = useState();
    useEffect(() => {
        async function main() {
            try {
                const url = "https://images-kavita.s3.eu-west-1.amazonaws.com/form.json";
                const result = await axios.get(url);
                debugger;
                setJsonData(result.data)

                console.log(jsonData)
            }
            catch (error) {
                console.error('error Fetching Json:error')
            }
        }
        main();

    }, [])




    return (
        <div>
        {JSON.stringify(jsonData)}
       <MyContext.Provider value={jsonData}>
        <Home/>
      <MyPage/>
       </MyContext.Provider>
      
      </div> )
       
    }   