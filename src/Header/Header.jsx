
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    
   
 
   
    return (
        <div className={'header'}>    
            <NavLink to="/" style={{marginRight: '30px'}}>Home</NavLink>
            <NavLink to="/form">Forma</NavLink>
        </div>
    )
}

export default Header;