import style from '../../styles/Utils/payment.module.scss';
import { useState } from "react";
import InputComponent from '../Search/InputComponent'
import { useLocation } from 'react-router';

export default () => {
    let { search } = useLocation()
    let query = new URLSearchParams(search);

    let event = query.get("event");
    let adultCount = query.get("adultCount");
    let childCount = query.get("childCount");
    let priceAdult = query.get("priceAdult");
    let priceChild = query.get("priceChild");
    let dateSince = query.get("dateSince");
    let dateTo = query.get("dateTo");

    /* if(!event || !adultCount || !priceAdult || !dateSince)
         return <h1>Error</h1>*/

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");

    return <div className={style.container}>
        <div className={style.formContainer}>
            <div className={style.formItem}>
                <p>{event}</p>
                <p>{adultCount}</p>
                <p>{priceAdult}</p>
                <p>{childCount}</p>
                <p>{priceChild}</p>
                <p>{dateSince}</p>
                <p>{dateTo}</p>
                <InputComponent
                    type="text"

                />
            </div>
        </div>
    </div>
}