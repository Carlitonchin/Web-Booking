export default ({placeholder, value, handlerChange})=>
{
    

    return <> 

                    <input
                        type="text"
                        class="form-control"
                        placeholder={placeholder}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={value}
                        onChange={handlerChange}
                    />
                    </>

}