import react from 'react';
import logo from '../assets/images/logo.png';

const Header =() =>{
    return(
        <header>
       
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <a className="navbar-brand" href="/#">
                  <img src={logo} alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link purple" href="/#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  green" href="/#" tabindex="-1" aria-disabled="true">courses</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link blue" href="/#" tabindex="-1" aria-disabled="true">price</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link orange" href="/#" tabindex="-1" aria-disabled="true">videos</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle pink" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        pages
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item one" href="/#">Home</a></li>
                        <li><a className="dropdown-item" href="/#">courses</a></li>
                        <li><a className="dropdown-item" href="/#">price</a></li>
                        <li><a className="dropdown-item" href="/#">Videos</a></li>
  
                      </ul>
                      
                    </li>
                    <li className="nav-item">
                      <a className="nav-link velbet" href="/#" tabindex="-1" aria-disabled="true">contact</a>
                    </li>
                  </ul>
                 
                </div>
              </div>
            </nav>
            
      </header> 
    );
}
export default Header;