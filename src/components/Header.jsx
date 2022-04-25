import Styles from './Header.module.css';

export default function Header (){
    return (
    <div className={Styles.headerModule}>
        <a href="#"><img src="https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-vector-cloud-icon-png-image_884037.jpg" alt="icono de la app-weather" /></a>
        <h1>Welcome To App-Weather</h1>
    </div>
    );
}