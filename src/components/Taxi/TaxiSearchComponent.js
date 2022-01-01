import InputComponent from "../Search/InputComponent"
import DateComponent from "../Search/DateComponent"
import style from '../../styles/AlquilerCoches/headerCar.module.scss'

export default ({firstPlace, handleFirstPlace, targetPlace, handleTargetPlace,
since, handleSince, to, handleTo, time, handleTime, returnTime, handleReturnTime,
count, handleCount, goAndReturn ,handleGoAndReturn})=>
{
    
    return  <>
    <div className={style.item}>
    <h6 className={style.text}>Lugar de recogida</h6>
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
      <h6 className={style.text}>{goAndReturn?"Fecha de ida":"Fecha"}</h6>
      <DateComponent
      date = {since}
      handleChange={handleSince}
      />
      </div>

    <div className={style.item}>
    <h6 className={style.text}>Hora</h6>
    <InputComponent
    type="time"
    handlerChange={handleTime}
    value={time}
    />
    </div>

      <div className={style.item}>
    <h6 className={style.text}>Personas</h6>
    <InputComponent
    type="number"
    handlerChange={handleCount}
    value={count}
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

{goAndReturn?
      <div className={style.item}>
        <h6 className={style.text}>Hora de regreso</h6>
      <InputComponent
      type = "time"
      handleChange={handleReturnTime}
      value={returnTime}
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