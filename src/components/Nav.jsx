import { Link } from "react-router-dom"
import mo from '../imges/mo.webp'
import './Nav.css'

export default function Nav() {
  return (
    <>
  
    <nav className="navbar navbar-expand-lg  ll">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={mo} className="logo" height="50px" alt="..."/>
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/:productId">details</Link>
        </li>

         {/* to get the product with price in new tab */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="Cart2">Cart2</Link>
        </li> */}
 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">Clothes</a></li>
            <li><a className="dropdown-item" to="#">Accessoris</a></li>
            <li><a className="dropdown-item" to="#">Electronics</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    
    
    
    </>
  )
  
  
}