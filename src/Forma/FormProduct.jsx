import React, { useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../hooks/useTelegram';



const FormProductList = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();
    // колбек который мы вешаем на слушатель MainButton
    const onSendData = useCallback(() => {
    // получаем данные из формы    
        const data = {
            country,
            street,
            subject
        }
    // полученные данные из формы отправляем боту
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])
    // вешаем слушатель событий на кнопку MainButton
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    // получаем поле country
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    // получаем поле street
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    // получаем поле subject
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    // меняем текст кнопки MainButton
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])
    // условие видимости кнопки MainButton
    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default FormProductList;