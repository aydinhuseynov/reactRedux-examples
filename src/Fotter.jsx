import { useSelector, useDispatch } from "react-redux";
import { setDarkMode,setLanguage } from "./site";
import "./index.css";

function Fotter() {
    const myDispatch = useDispatch();
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["Turkish", "English"];

  const handleChange = lang =>{
    myDispatch(setLanguage(lang))
  }
 
  return (
    <div  className={dark ? 'dark' : 'white'}>
      <h1>Footer</h1>

      <div>
        {languages.map((lang, index) => (
          <button onClick={()=>handleChange(lang)} className={lang === language ? "active" : ""} key={index}>
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={()=>myDispatch(setDarkMode())}>{ dark ? 'Light moda kec' : 'Dark moda kec'}</button>
      </div>
    </div>
  );
}

export default Fotter;
