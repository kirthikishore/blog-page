import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Button } from './pages/Button';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <div className='navbar'>
              <Link to='#' className='menu-bars'>
                 <FaIcons.FaBars onClick={showSidebar} />
              </Link>
              <h1 >ABCD</h1>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'onClick={showSidebar}>
              <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                  </Link>
              </li>
              {SidebarData.map((item, index) => {
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                          </Link>
                      </li>
                  );
              })}
              <li className="nav-btn">
                    <Link to='/sign-up'  className='btn-link'>
                        <Button buttonStyle='btn--outline'>
                              Sign Up
                        </Button>
                    </Link>
               </li>
            </ul>
          </nav>
         </IconContext.Provider>
        </>
    );
}

export default Navbar;

