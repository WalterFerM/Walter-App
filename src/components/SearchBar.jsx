import Styles from './Css Modules/SearchBar.module.css';
import StylesBtn from './Css Modules/Card.module.css';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnsearch() {
    if(typeof onSearch === 'function'){
      const input= document.getElementById("search-input");
      onSearch(input.value);
    }
  }
  return (
  <div className={Styles.search}>
    <input type="text" name="input-city" id="search-input" placeholder="Ingesa ciudad para la busqueda..." />
    <button onClick={handleOnsearch} className={StylesBtn.closeBtn}>
      <FaSearch />
      <span>Search</span>
    </button>
  </div>
  )
};