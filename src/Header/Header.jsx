import Button from "../Button/Button";
import './Header.css'
import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
    
   const {user, onClose} = useTelegram()
   console.log(user)
   
    return (
        <div className={'header'}>
            <Button onCLick={onClose}>Закрыть</Button>
            <span className={'username'} >{user}</span>
        </div>
    )
}

export default Header;