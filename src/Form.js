import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { FcCalendar } from "react-icons/fc";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
export default function Form() {
    const [sucessMsg, setSucessMsg] = useState("");
    const [jsonData, setJsonData] = useState();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        cars: '',
        email: '',
        calendar: '',
        Date: ''
    });
    const [error, setError] = useState({
        fname: '',
        lname: '',
        cars: '',
        email: '',

        Date: ''
    })

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        if (formValidation()) {
            setSucessMsg("Thank you for sharing details!!, we will get back to you soon.");
            setFormData({
                fname: '',
                lname: '',
                cars: '',
                email: '',

                Date: '',

            })
            setTimeout(() => {
                setSucessMsg('');
            }, 3000);
        }
        else {
            setSucessMsg("form is not valid");
        }
    }
    const handleChange = (e) => {
        debugger;
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        formValidation();
        // console.log(formData)
    }
    const formValidation = () => {
        debugger;
        let isValid = true;
        const newErrors = { ...error }
        if (formData.fname.trim() === '') {
            newErrors.fname = 'fname is required';
            isValid = false;
        }
        else {
            newErrors.fname = '';
        }
        if (formData.lname.trim() === '') {
            newErrors.lname = 'lname is required';
            isValid = false;
        }
        else {
            newErrors.lname = ''
        }
        if (formData.email.trim() === '') {
            newErrors.email = 'email is required';
            isValid = false;
        }
        else {
            newErrors.email = '';
        }
        if (formData.Date.trim() === '') {
            newErrors.Date = 'select the required date';
            isValid = false;
        }
        else {
            newErrors.Date = ''
        }
        setError(newErrors);
        return isValid;

    }
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    useEffect(() => {
        formData.Date = formatDate(date)
        setShow(false);

    }, [date, formData]);



    const formatDate = (d) => {
        if (!d) return '';
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [day, month, year].join('/');
    }
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

        <div><div className="col-12 px-5 py-5">
            <div className="row px-5 py-5">
                Form:
                <form>
                    <div><label for="fname" className="form-label"><h5>FNAME:</h5></label>
                        <input
                            type="text"
                            onChange={handleChange}
                            className={`form-control ${error.fname.length ? 'error-field' : ''} ${formData.fname ? 'sucess' : ''}`} placeholder="fname"
                            area-label="first name"
                            name='fname'
                            value={formData.fname}
                        />
                    </div>
                    <p className="popup">{error.fname.length > 0 ? error.fname : null}</p>
                    <label for="exampleFormCintrolInput1" className="form-label"><h5>LNAME:</h5></label>
                    <div>
                        <input
                            type="text"
                            onChange={handleChange}
                            className={`form-control ${error.lname.length ? 'error-field' : ''} ${formData.lname ? 'sucess' : ''}`}
                            id="exampleFormCintrolInput1"
                            placeholder="lname" name='lname'
                            value={formData.lname}
                        />
                    </div>
                    <p className="popup">{error.lname.length > 0 ? error.lname : null}</p>
                    <label for="exampleFormControlSelect1">Example Multiple Select Cars:</label>
                    <div className="form-group " onChange={handleChange}>

                        <select className={`from-control w-100 `} id="exampleFormControlSelect1">
                            <option>audi</option>
                            <option>Maruti</option>
                            <option>ballino</option>
                            <option>Ford</option>
                            <option>Ferrari</option>
                            <option>BMW</option>

                        </select>
                    </div>
                    <div><label for="email" className="form-label"><h5>email:</h5></label>
                        <input type="email" onChange={handleChange} className={`form-control ${error.email.length ? 'error-field' : ''} ${formData.email ? 'sucess' : ''}`} id="exampleFormCintrolInput1" placeholder="email" name='email' value={formData.email} /></div>

                    <div><label for="calendar" onChange={handleChange} className="form-label"><h5>Choose Date:</h5></label>
                        <input type="text" className="form-control" id="datepicker" placeholder="Avilability" name='Avilability' value={formData.Date} onClick={() => { setShow(!show) }} />
                        <span className="cal-icon w-60" > <FcCalendar /></span>
                        {show && <Calendar onChange={setDate} value={date} name="Avilability" />}</div>

                    <button type="submit " className="custom-button mt-2" onClick={handleSubmit}>Check Avilability</button>
                    <p className="message">{sucessMsg.length ? sucessMsg : null}</p>
                </form>
            </div>
        </div>
        {JSON.stringify(jsonData)}
        </div>

    )
}