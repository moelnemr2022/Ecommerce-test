
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer-container">
     
      <ul className="nav justify-content-end">
    
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-facebook"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tel:017666666"><i className="bi bi-telephone-forward-fill"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mailto:mo@yahoo.com"><i className="bi bi-envelope-at"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://maps.app.goo.gl/7Kab4C9DMRonZd8j9"><i className="bi bi-geo-alt"></i></a>
        </li>
      </ul>
      <div className="contact-info">
        
        <ul>
          <li>Contact Us</li>
          <li>Email: Mo@gmail.com</li>
          <li>Address: Hamburg Str 9</li>
          <li>Phone: 017666666</li>
        </ul>
      </div>
     
    </div>

    
      <h6> © 2023 WhaleCo Inc.</h6>
      
    </>
    
  );
}

export default Footer;
