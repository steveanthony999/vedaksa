import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-container'>
        <Link to='/' className='Navbar-left'>
          <h1 className='Navbar-logo'>
            <span>ve</span>Daksa
          </h1>
        </Link>
        <Link to='/login' className='Navbar-right'>
          <FiLogIn />
          <p>login</p>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
