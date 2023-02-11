import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark "  >
  <div className="container-fluid ms-2 " id='nvbr'>
    <Link className="navbar-brand text-info" to="/"> <b> CoinsMarketCap </b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-info"  to="cryptocurrencies">Cryptocurrencies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-info" to="exchanges">Exchanges</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-info" to="community">Community</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-info" to="products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-info" to="learn">Learn</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 bg-dark" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
     </div>

     
    </>
  )
}

export default Navbar