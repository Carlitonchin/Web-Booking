import style from '../../styles/Utils/payment.module.scss';
import { useState } from "react";
import InputComponent from '../Search/InputComponent'
import { useLocation } from 'react-router';
import PaymentInfo from './PaymentInfo';
import PersonalDataForm from './PersonalDataForm';
import BlueButton from './BlueButton';


export default () => {
    let { search } = useLocation()
    let query = new URLSearchParams(search);

    let event = query.get("event");
    let place = query.get("place");
    let adultCount = query.get("adultCount");
    let childCount = query.get("childCount");
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
            <h5>Tus datos</h5>
            <PersonalDataForm
            firstName={firstName}
            setFirstName={setFirstName}
            email= {email}
            setEmail={setEmail}
            lastName = {lastName}
            setLastName={setLastName}
            phone = {phone}
            setPhone={setPhone}
            />
        </div>
        <div className={style.right}>
        <div className={style.paymentContainer}>
            <PaymentInfo
            event={event}
            adultCount={adultCount}
            childCount={childCount}
            dateSince={dateSince}
            dateTo={dateTo}
            place={place}
            />

        </div>
        <div className={style.containerButton}>
        <BlueButton text="Siguiente"/>
        </div>
        </div>
    </div>
}