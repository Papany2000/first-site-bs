import './Button.css'
const Button = (props) => {

    return (
        <div>
            <button {...props} className={'button'} />
        </div>

    )
}

export default Button;