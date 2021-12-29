
import InputComponent from '../Search/InputComponent'
import DateComponent from '../Search/DateComponent'
import BlueButton from '../Utils/BlueButton'
import style from '../../styles/AlquilerCoches/headerCar.module.scss'

const HeaderCoches = ({placeRent,handlePlaceRent, placeReturn, handlePlaceReturn,
  returnAtSamePlace, handleReturnAtSamePlace, since, handleSince, to, handleTo}) => {

    return <>
    <div className={style.item}>
    <h6 className={style.text}>Lugar de recogida</h6>
    <InputComponent
    handlerChange={handlePlaceRent}
    value={placeRent}
    />
    </div>


    {!returnAtSamePlace
    ?<div className={style.item}>
    <h6 className={style.text}>Lugar de devolucion</h6>
    <InputComponent
    handlerChange={handlePlaceReturn}
    value={placeReturn}
    />
    </div>
    :""}
<div className={style.item}>
      <h6 className={style.text}>Fecha de recogida</h6>
      <DateComponent
      date = {since}
      handleChange={handleSince}
      />
      </div>
      <div className={style.item}>
        <h6 className={style.text}>Fecha de devolucion</h6>
      <DateComponent
      date = {to}
      handleChange={handleTo}
      />
      </div>
      
  <div>
      <div class="form-check">
        <input
        type="radio"
        id="returnAtSamePlace"
        class="form-check-input"
        checked={returnAtSamePlace}
        onChange={handleReturnAtSamePlace.bind(this, true)}
        />
        <label 
        for="returnAtSamePlace"
        class="form-check-label"
        name="return"
        >Devolver en el mismo lugar</label>

</div>

<div class="form-check">
<input
        type="radio"
        id="notReturnAtSamePlace"
        class="form-check-input"
        name="return"
        checked={!returnAtSamePlace}
        onChange={handleReturnAtSamePlace.bind(this, false)}
        />
        <label 
        for="notReturnAtSamePlace"
        class="form-check-label"
        >Devolver en otro sitio</label>
</div>
</div>

    </>
}

export default HeaderCoches



