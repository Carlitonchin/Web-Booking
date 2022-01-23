import style from '../../../styles/Alojamineto/components/subscribe.module.scss'
import InputComponent from '../../Search/InputComponent'
import BlueButton from '../../Utils/BlueButton'

export default ()=>
{
    return <div className={style.container}>
        <div className={style.top}>
            <p className={style.registerText}>Regístrate y te enviaremos las mejores ofertas para ti</p>
            <div className={style.form}>
                <div className={style.inputContainer}>
                    <InputComponent placeholder="E-mail"/>
                </div>
                <div className={style.buttonContainer}>
                    <BlueButton text="Registrate"/>
                </div>
                <div className={"btn btn-primary " + style.buttonMobile}>
                <i class="bi bi-send-fill"></i>
                </div>
            </div>
            <div className={"form-check " + style.checkContainer}>
                <input type="checkbox" id="sendApp"/>
                <label for="sendApp" className={style.info}>Envíame un enlace para descargar la app de Booking.com GRATIS</label>
            </div>
        </div>

        <div className={style.bottom}>
            <div className={style.buttonRegister}>Registra tu alojamiento</div>

            <div className={style.line}></div>
                <div className={style.containerLinks}>
                    <a className={style.link} href="#">Versión para móvil</a>
                    <a className={style.link} href="#">Tu cuenta</a>
                    <a className={style.link} href="#">Gestiona tus reservas online</a>
                    <a className={style.link} href="#">Contactar con Atención al cliente</a>
                    <a className={style.link} href="#">Conviértete en afiliado</a>
                    <a className={style.link} href="#">Booking.com Business</a>

                </div>
            
        </div>
    </div>
}