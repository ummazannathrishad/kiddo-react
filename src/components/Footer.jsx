import react from 'react';

const Footer = () => {
    return(
        <footer>
        <div className="footbuttom">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h4>Course Categories </h4>
                <ul className="list-unstyled list">
                  <li><a href="/#">List of Technology </a></li>
                  <li><a href="/#">List of Business  </a></li>
                  <li><a href="/#">List of Photography  </a></li>
                  <li><a href="/#">List of Language </a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Products Categories </h5>
                <ul className="list-unstyled plans">
                  <li><a href="/#">Individual Plans  </a></li>
                  <li><a href="/#">Business Plans   </a></li>
                  <li><a href="/#">Free Trial  </a></li>
                  <li><a href="/#">Academic </a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Browse by Categories </h5>
                <ul className="list-unstyled all">
                  <li><a href="/#">All Courses  </a></li>
                  <li><a href="/#">All Instructors   </a></li>
                  <li><a href="/#">All Members   </a></li>
                  <li><a href="/#">All Groups </a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Contact </h5>
                <p>Lorem reksi this dummy text unde omnis iste natus error sit volupum</p>
                <div className="contact-info">
                  <i className="fa-solid fa-location-dot"></i>
                  Kerniles 416- United Kingdom
                  <br/>
                  <i className="fa-solid fa-phone"></i>
                  +00 123 156 711
                  <br/>
                  <i className="fa-solid fa-envelope"></i>
                  youremail@email.com 
                </div>
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="social-icon ">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="/#"><i className="fa-brands fa-dribbble"></i></a>
                      <a href="/#"><i className="fa-brands fa-flickr"></i></a>
                      <a href="/#"><i className="fa-brands fa-github"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 panel">
                <div className="panel-body">
                  <ul className="list-unstyled footer-end">
                    <li>
                      <a href="index.html">Home</a>
                      <a href="about.html">About</a>
                      <a href="courses.html">Courses</a>
                      <a href="price.html">Price</a>
                      <a href="vedios.html">Videos</a>
                      <a href="contacts.html">Contacts</a>
                    </li>
                  </ul>
                </div>
  
              </div>
              <div className="col-md-6">
                <div className="panel-body  text-end">
                  <p>Copyright © 2015. Template by
                    <a href="http://webthemez.com/"> WebThemez.com
                      </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;