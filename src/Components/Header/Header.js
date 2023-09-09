import React, {useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate();
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {/* <span>Login</span> */}
          <span>
            {user ? `Welcome ${user.displayName}` : <Link className='link' to={'/login'}>Login</Link>}
          </span>
          <hr />
        </div>
        <div>
        <span>
            {user && <a onClick={() => {
              firebase.auth().signOut();
              navigate('/login');
            }}>Logout</a>}
          </span>
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
