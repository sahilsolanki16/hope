import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
  <div className="container-fluid ">
    <div className='col-md-1'></div>
    <a className="navbar-brand  text-md-center " href="javascript:void(0)"><img src='img/logo-white-1-60x60.png' className='col-md-12 col-3 ' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='col-md-2'></div>
    <div className="collapse navbar-collapse " id="mynavbar">
      <ul className="navbar-nav me-auto  mx-auto">
        <li className="nav-item">
        <Link to="/" className="nav-link fs-5 ms-md-5 text-dark" >Home</Link>
         
        </li>
        <li className="nav-item">
        <Link to="About" className="nav-link fs-5 ms-md-5 text-dark" >
            About
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/Services" className="nav-link fs-5 ms-md-5 text-dark" >
            Serices
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/Contact" className="nav-link fs-5 ms-md-5 text-dark" >
            Contact
        </Link>
        </li>
        <li className="nav-item">
          <button className='ms-md-5 mt-md-2 border px-4 py-1 rounded-2 bg-t fs-5 bg-dgr  '>202-255-7890</button>
          </li>
      </ul>
    </div>
  </div>
</nav>
      <Outlet />
    </>
  )
};

export default Layout;