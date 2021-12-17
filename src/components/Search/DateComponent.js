import DatePicker from "react-datepicker";

export default ({date, handleChange})=>
{
    if(!date)
        date = new Date()
    
    let m = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    
    let mounth = m.length === 1 ? "0" + m :   m;
    let day = d.length === 1? "0" + d:d;
    let dateToString = date.getFullYear() + "-" + mounth + "-" + day;
    return <>     
            <input
               type="date"
               value={dateToString}
               class="form-control"
               aria-describedby="basic-addon1"
               onChange={handleChange}
            />
    </>
            

}