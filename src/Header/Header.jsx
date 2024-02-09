
import { NavLink } from 'react-router-dom';
import './Header.css'
import { useTelegram } from '../hooks/useTelegram';
import Button from '../Button/Button';
import React from 'react';

const Header = () => {
    
   const {tg, onClose, user} = useTelegram()
   React.useEffect(() => {
     tg.ready()
   }, [])
   
    return (
        <div> 
            <Button onClick={onClose}
            >Закрыть</Button> 
            <div className={'header'}>
            <span className={'username'}>Пользователь: {user}</span>  
            <NavLink to="/">Home</NavLink>
            <NavLink to="/form">Forma</NavLink> 
            </div>
        </div>
    )
}

export default Header;