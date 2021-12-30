import style from '../../styles/AlquilerCoches/headerCar.module.scss'
import InputComponent from '../Search/InputComponent'
import DateComponent from '../Search/DateComponent'

export default ({firstPlace, targetPlace, goAndReturn, since, to,
handleFirstPlace, handleTargetPlace, handleGoAndReturn, handleSince, handleTo,
count, handleCount
})=>
{
    return  <>
    <div className={style.item}>
    <h6 className={style.text}>Salida desde</h6>
    <InputComponent
    handlerChange={handleFirstPlace}
    value={firstPlace}
    />
    </div>

<div className={style.item}>
    <h6 className={style.text}>Destino</h6>
    <InputComponent
    handlerChange={handleTargetPlace}
    value={targetPlace}
    />
    </div>

    <div className={style.item}>
    <h6 className={style.text}>Cantidad de pasajeros</h6>
    <InputComponent
    type="number"
    handlerChange={handleCount}
    value={count}
    />
    </div>

<div className={style.item}>
      <h6 className={style.text}>{goAndReturn?"Fecha de ida":"Fecha"}</h6>
      <DateComponent
      date = {since}
      handleChange={handleSince}
      />
      </div>

      {goAndReturn?
      <div className={style.item}>
        <h6 className={style.text}>Fecha de regreso</h6>
      <DateComponent
      date = {to}
      handleChange={handleTo}
      />
      </div>
      :""
      }
      
  <div>
      <div class="form-check">
        <input
        type="radio"
        id="goAndReturn"
        class="form-check-input"
        checked={goAndReturn}
        onChange={handleGoAndReturn.bind(this, true)}
        />
        <label 
        for="goAndReturn"
        class="form-check-label"
        name="return"
        >Ida y vuelta</label>

</div>

<div class="form-check">
<input
        type="radio"
        id="onlyGo"
        class="form-check-input"
        name="return"
        checked={!goAndReturn}
        onChange={handleGoAndReturn.bind(this, false)}
        />
        <label 
        for="onlyGo"
        class="form-check-label"
        >Solo ida</label>
</div>
</div>

    </>
}