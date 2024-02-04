import { useSelector } from "react-redux";

function Header() {
  const { dark, language } = useSelector((state) => state.site);
  return (
    <div>
      <h1>Header</h1>

      <div>
        <h2>Dark mode: {dark ? 'evet' : 'hayir'}</h2> 
        <h2>Movcut dil: {language}</h2>
      </div>
    </div>
  );
}

export default Header;
