import Button from "../Button/Button";
import './Header.css'
import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
    
   const {onClose, tg} = useTelegram()
  console.log(tg)
   
    return (
        <div className={'header'}>
            <Button onCLick={onClose}>Закрыть</Button>
            <span className={'username'} >{tg.initDataUnsafe?.user?.user}</span>
        </div>
    )
}

export default Header;