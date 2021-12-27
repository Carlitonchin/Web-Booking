import { style } from "dom-helpers"
import InputComponent from "../Search/InputComponent"

export default ({firstName, lastName, email, phone, setFirstName, setLastName, setEmail, setPhone})=>
{

    function handleFirstName(e)
    {
        e.preventDefault();
        setFirstName(e.target.value)
    }

    function handleLastName(e)
    {
        e.preventDefault();
        setLastName(e.target.value)
    }

    function handleEmail(e)
    {
        e.preventDefault();
        setEmail(e.target.value)
    }

    function handlePhone(e)
    {
        e.preventDefault();
        setPhone(e.target.value)
    }


    return <>
    <div className={style.item}>
    <p>Nombre</p>
    <InputComponent
    type="text"
    handlerChange={handleFirstName}
    />
    </div>

    <div className={style.item}>
    <p>Apellidos</p>
    <InputComponent
    type="text"
    value={lastName}
    handlerChange={handleLastName}
    />
    </div>
    <div className={style.item}>
    <p>Email</p>
    <InputComponent
    type="email"
    value={email}
    handlerChange={handleEmail}
    />
    </div>
    <div className={style.item}>
    <p>Telefono</p>
    <InputComponent
    type="tel"
    value={phone}
    handlerChange={handlePhone}
    />
    </div>
    </>
}