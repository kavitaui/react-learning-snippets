import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { FcCalendar } from "react-icons/fc";
import 'react-calendar/dist/Calendar.css';
export default function Form() {
    const[sucessMsg,setSucessMsg]=useState("")
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        cars: '',
        email: '',
        calendar: '',
        Date: ''
    });
    const[error,setError]=useState({
        fname: '',
        lname: '',
        cars: '',
        email: '',
        calendar: '',
        Date: ''  
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formValidation()){
            setSucessMsg("Thank you for sharing details!!, we will get back to you soon.");
        setFormData({
         fname:'',
         laname:'',
         cars:'',
         email:'',
         calendar:'',
         Date:'',

        })
        setTimeout(() => {
            setSucessMsg('');
        }, 3000);}
        else {
            setSucessMsg("form is not valid")
        }
    }
    const handleChange=(e)=>{
const name= e.target.name;
const value= e.target.value;
setFormData((prevData)=>({
    ...prevData,
    [name]:value
}))
formValidation();
} 
   const formValidation=()=>{
    let isValid = true;
    const newErrors ={...error}
    if(newErrors.fname.trim()===''){
        newErrors.fname='fname is required';
        isValid = false;
    }
    else{
        newErrors.faname='';
    }
    if(newErrors.lname.trim()===''){
        newErrors.lname='lname is required';
        isValid =false;
    }
    else{
        newErrors.lname=''
    }
    if(newErrors.email.trim()===''){
        newErrors.email='email is required';
        isValid=false;
    }
    else{
        newErrors.email='';
    }
    if(newErrors.calendar.trim()===''){
        newErrors.calendar='select the required date';
        isValid =false;
    }
    else{
        newErrors.calendar=''
    }
    setError(newErrors);
return isValid;

   }
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    useEffect(()=>{
        formData.date= formatDate(date)

    },[date,formData]);
    
  
    const formatDate =(d)=>{
        if(!d) return '';
        var month = ''+(d.getMonth()+1);
        var day = ''+ d.getDay();
        var year =''+d.getFullYear();
        if(month.length<2){
            month = '0'+month;
        }
        if(day.length<2){
            day = '0'+day;
        }
       
    }


    return (

        <div><div className="col-12 px-5 py-5">
            <div className="row px-5 py-5">
                Form:
                <form>
                    <div><label for="fname"  className="form-label"><h5>FNAME:</h5></label>
                        <input type="fname" onChange={handleChange} className={`form-control ${error.fname.length?'error-field':''} ${formData.fname?'sucess':''}`} id="exampleFormCintrolInput1" placeholder="fname" />
                       <p className="popup">{error.fname.length>0?error.fname:null}</p>
                       <label for="lname" className="form-label"><h5>LNAME:</h5></label>
                        <input type="lname"  className="form-control" id="exampleFormCintrolInput1" placeholder="lname" /></div>

                    <label for="exampleFormControlSelect1">Example Multiple Select Cars:</label>
                    <div className="form-group ">

                        <select className="from-control w-100" id="exampleFormControlSelect1">
                            <option>audi</option>
                            <option>Maruti</option>
                            <option>ballino</option>
                            <option>Ford</option>
                            <option>Ferrari</option>
                            <option>BMW</option>

                        </select>
                    </div>
                    <div><label for="email" className="form-label"><h5>email:</h5></label>
                        <input type="email" className="form-control" id="exampleFormCintrolInput1" placeholder="email" /></div>
                    <div><label for="calendar" className="form-label"><h5>Choose Date:</h5></label>
                        <input type="text" className="form-control" id="datepicker" placeholder="Avilability" onClick={()=>{setShow(!show)}} />
                        <span className="cal-icon w-50" onClick={()=>{setShow(!show)}}>{show&&<Calendar onChang={setDate} value={date} />} <FcCalendar /></span></div>

                    <button type="submit mt-2" className="custom-button">Check Avilability</button>
                </form>
            </div>
        </div>
        </div>

    )
}