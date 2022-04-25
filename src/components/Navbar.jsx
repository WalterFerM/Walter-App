import Styles from './Css Modules/NavBar.module.css'

export default function NavBar () {
    return (
    <div>
        <ul className ={Styles.navUl}>
            <a href="https://"><li>Home</li></a>
            <a href="htttps://"><li>About</li></a>
        </ul>
    </div>
    )
}