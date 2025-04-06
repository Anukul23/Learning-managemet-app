import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';
const Navbar = () => {

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div>
      <nav className='nav-bar'>
        <div className='nav-logo'>
            <h1>HermanScience</h1>
        </div>
        <div className='nav-item'>
        <ul>
  <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
  <NavLink to="/corporatetraning" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Corporate Training</NavLink>
  <NavLink to="/compliance" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Compliance</NavLink>
  <NavLink to="/upskill" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Upskilling</NavLink>
  <NavLink to="/personalizedlearning" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Personalized Learning</NavLink>
</ul>

        </div>
        <div className='nav-btn'>
        {userData ? (
        <button className="auth-btn" onClick={handleLogout}>🔓 Logout</button>
      ) : (
        <button className="auth-btn" onClick={handleLogin}>🔐 Login</button>
      )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
