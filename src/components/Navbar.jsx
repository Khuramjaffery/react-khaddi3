import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import "./Navbar.css"




function Navbar() {
  const {carts}=useSelector(state=>state.Reducer)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dwbdc08ab8/images/logo.svg" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/sale">Sale</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New in</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fabrics
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Ready  To Wear</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Chapter2</a>
        </li>

      </ul>
      <div className="icons">
      <Link to="/bag">    
      <Badge badgeContent={carts.length} color="primary">
      <MailIcon color="action" />
    </Badge>
    </Link>
   
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar