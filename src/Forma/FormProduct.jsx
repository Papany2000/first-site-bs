import React, { useEffect } from 'react';
import './Form.css'
import { useTelegram } from '../hooks/useTelegram';


function FormProductList() {

    const[country, setCountry] = React.useState('')
    const[street, setStreet] = React.useState('')
    const[subject, setSubject] = React.useState('phisical')
    const{tg} = useTelegram()

    React.useEffect(() => {
        // меняем текст кнопки
        tg.MainButton.setParams({
            text: 'отправить данные'
        })
    }, [])
     // сделаем прocтую валидацию
     React.useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide()
        } else {
           tg.MainButton.show()
        }
    }, [street, country])
    const onChangeCountry = (e) => setCountry(e.target.value)
    const onChangeStreet = (e) => setStreet(e.target.value)
    const onChangeSubject = (e) => setSubject(e.target.value)
  
    return (
      <div className="form">
        <h3>Введите ваши данные 2</h3>
        <input className={'input'} type="text" placeholder={'страна'} value={country} onChange={onChangeCountry}  />
        <input className={'input'} type="text" placeholder={'улица'} value={street} onChange={onChangeStreet} />
        <select className={'select'} value={subject} onChange={onChangeSubject}>
            <option value={'phisical'}>физ. лицо</option>
            <option value={'legal'}>юр. лицо</option>
        </select>
      </div>
    );
  }
  
  export default FormProductList;