
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
        <div className={'header'}> 
            <Button onClick={onClose}>Закрыть</Button> 
            <span className={'username'}>{user}</span>  
            <NavLink to="/" style={{marginRight: '30px'}}>Home</NavLink>
            <NavLink to="/form">Forma</NavLink>
        </div>
    )
}

export default Header;