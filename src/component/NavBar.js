import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Site', '지속가능성']

  return (
    <div>
        <div className="login-button">
            <div className="login-user"><FontAwesomeIcon icon={faUser} /></div>
            <div>로그인</div>
        </div>
        <div className="nav-section">
            <img width={150} src="https://th.bing.com/th/id/R.a280ff18ccf4ffddcc7aa3844246ca28?rik=nwrwTuniDz7fyA&riu=http%3a%2f%2fphotos.prnewswire.com%2fprnfull%2f20131009%2fNY95232LOGO&ehk=oyYBCOaR7y9%2fryZSj1hWWeh6uzJUT5PfkSEnr4tCc%2bw%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}                
            </ul>
            <div className="nav-search">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text"></input>

            </div>
        </div>
    </div>
  )
}

export default NavBar