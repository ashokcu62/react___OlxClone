import React, { useContext } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { user } = useContext(AuthContext)
  const { auth } = useContext(FirebaseContext)
  const navigate = useNavigate("")

  const logout = () => {
    signOut(auth).then(() => {
      console.log("signOunt Successfully")
      navigate("/login")
    }).catch((err) => {
      alert(err.message)

    })
  }
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
          
          {/* username */}

          {user ? <span> Welcome {user.displayName} </span> : <span onClick={() => { navigate('/login') }} type="button"> login </span>}   {/*can add text with user display*/}
          <hr />

        </div>
        {user && <span type="button" onClick={logout}>logout</span>}

        <div className="sellMenu"
        onClick={()=> navigate("/create")}
        >
          <SellButton></SellButton>
          <div className="sellMenuContent" >
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
