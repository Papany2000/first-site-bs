
import './Header.css'
import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
    
   const {user, onClose, } = useTelegram()
 
   
    return (
        <div className={'header'}>
            <button onCLick={onClose}>Закрыть</button>
            <span className={'username'} >Имя пользователя: {user}</span>
        </div>
    )
}

export default Header;