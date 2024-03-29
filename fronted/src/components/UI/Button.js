import { useContext } from 'react';
import { ThemeContext } from '../../App';
import style from './Button.module.css';

const Button = (props) => {
    const conTheme = useContext(ThemeContext);
    const theme = conTheme.theme === 'dark';
    const styles = `${props.className} ${theme ? style["button-dark"] : style.button} ${props.className}`
    return <button onClick={props.onSubmit} className={styles}>{props.children}</button>
}

export default Button;