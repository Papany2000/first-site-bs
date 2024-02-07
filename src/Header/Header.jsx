import Button from "../Button/Button";
import './Header.css'
import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
    
   const {user, onClose, } = useTelegram()
 
   
    return (
        <div className={'header'}>
            <Button onCLick={onClose}>Закрыть</Button>
            <span className={'username'} >Имя пользователя: {user}</span>
        </div>
    )
}

export default Header;