
import './App.css';
import Nav from './Nav';

function Header() {
  return (
    <div className="header">
    <h1 className="headertitle">Little Goat Fitness</h1>
    <Nav />
    {/* <nav class="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav> */}
    </div>
  );
}

export default Header;