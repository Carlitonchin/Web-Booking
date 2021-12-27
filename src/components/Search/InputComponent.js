export default ({placeholder, value, type, handlerChange})=>
{
    
    if(!type)
        type = "text"
    return <> 

                    <input
                        type={type}
                        class="form-control"
                        placeholder={placeholder}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={value}
                        onChange={handlerChange}
                    />
                    </>

}