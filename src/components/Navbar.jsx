import Styles from './Css Modules/NavBar.module.css';
import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';

export default function NavBar () {
    return (
    <div>
        <ul className ={Styles.navUl}>
            <a href="https://"><li>< FaHome className={Styles.navIcon} />Home</li></a>
            <a href="htttps://"><li><FaInfo className={Styles.navIcon}/>About</li></a>
        </ul>
    </div>
    )
}