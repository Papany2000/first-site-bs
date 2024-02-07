import Button from "../Button/Button";
import './Header.css'
import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
    
   const {user, onClose, showData, showDataUnSave} = useTelegram()
 
   
    return (
        <div className={'header'}>
            <Button onCLick={onClose}>Закрыть</Button>
            <span className={'username'} >{user}</span>
            <span className={'data'} >data={showData}</span>
            <span className={'dataUnSave'} >dataUnSave={showDataUnSave}</span>
        </div>
    )
}

export default Header;