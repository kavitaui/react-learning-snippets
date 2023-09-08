import Calendar from "react-calendar"
import FcCalendar from "react-icons/Fc"
export default function Form(){
    return(
        
        <div><div className="col-12 px-5 py-5">
            <div className="row px-5 py-5">
        Form:
            <form>
<div><label for ="fname" className="form-label"><h5>FNAME:</h5></label>
<input type ="fname" className="form-control" id="exampleFormCintrolInput1" placeholder="fname"/>
<label for ="lname" className="form-label"><h5>LNAME:</h5></label>
<input type ="lname" className="form-control" id="exampleFormCintrolInput1" placeholder="lname"/></div>

    <label for ="exampleFormControlSelect1">Example Multiple Select Cars:</label>
    <div className="form-group ">
       
    <select  className="from-control w-100" id="exampleFormControlSelect1">
        <option>audi</option>
        <option>Maruti</option> 
         <option>ballino</option>
         <option>Ford</option>
         <option>Ferrari</option>    
         <option>BMW</option>

    </select>
</div>
<div><label for ="email" className="form-label"><h5>email:</h5></label>
<input type ="email" className="form-control" id="exampleFormCintrolInput1" placeholder="email"/></div>
<label for ="calendar" className="form-label"><h5>Choose Date:</h5></label>
<input type ="text" className="form-control" id="datepicker" placeholder="Avilability"/>
<span className="cal-icon"> <FcCalendar/></span>
</form>
</div>
</div>
        </div>

    )
}