import icon from '../meme-icon.webp';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <header className="navbar-header">
        <img src={icon} className="navbar-icon" alt="meme-icon" />
        <h3 className="navbar-title">MemeGenerator</h3>
        <p className="navbar-words">React Course-Project 3</p>
      </header> 
    </div>
  );
}

export default Navbar;
