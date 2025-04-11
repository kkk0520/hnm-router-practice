import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ authenticate, setAuthenticate }) => {
    console.log("네브바 권한 : ", authenticate)
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Site', '지속가능성']
    const navigate = useNavigate()
    
    const goToLogin=()=>{        
        navigate("/login")
    }
    
    const goToLogout = () => {        
        setAuthenticate(false);
        navigate("/");
    }

    const goToMain = () => {
        navigate("/");
    }

    const search = (event) =>{
        if(event.key === "Enter"){
           let keyword = event.target.value
           navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>
        <div>
            <div className="login-button" onClick={authenticate? goToLogout : goToLogin}>
                <div className="login-user"><FontAwesomeIcon icon={faUser} /></div>
                <div>{authenticate ? "로그아웃" : "로그인"}</div>
            </div>
            
            <div className="nav-section">
                <img width={100} alt=""
                    onClick={goToMain} 
                    src="https://th.bing.com/th/id/R.a280ff18ccf4ffddcc7aa3844246ca28?rik=nwrwTuniDz7fyA&riu=http%3a%2f%2fphotos.prnewswire.com%2fprnfull%2f20131009%2fNY95232LOGO&ehk=oyYBCOaR7y9%2fryZSj1hWWeh6uzJUT5PfkSEnr4tCc%2bw%3d&risl=&pid=ImgRaw&r=0" />
            </div>
            <div className="menu-area">
                <div>
                    <ul className="menu-list">
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}                
                    </ul>
                </div>
                <div className="nav-search">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" onKeyPress={(event)=>search(event)}></input>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default NavBar