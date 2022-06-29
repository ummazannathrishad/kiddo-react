import react from 'react';
import img1 from '../assets/images/slides/img1.jpg';
import img2 from '../assets/images/slides/img2.jpg';
import img3 from '../assets/images/slides/img3.jpg';
import news2 from '../assets/images/news2.jpg';
import news3 from '../assets/images/news3.jpg';
import news4 from '../assets/images/news4.jpg';


const Body = () => {
    return(
        <main>
      
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="heading">Start Online Education</h5>
              <p className="paragraph">Free Online education template for elearning and online education institute.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="heading">Start Online Education</h5>
              <p className="paragraph">Free Online education template for elearning and online education institute.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="heading">Start Online Education</h5>
              <p className="paragraph">Free Online education template for elearning and online education institute.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card red-bg mb-3" >
                <div className="card-body">
                  <h5 className="card-title">Online Courses</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue eset nec lacus elit dor broma.</p>
                  <a href="/#">
                    <em>Read More</em>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card purple-bg  mb-3" >
                <div className="card-body">
                  <h5 className="card-title">Meet our Staff</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue eset nec lacus elit dor broma.</p>
                  <a href="/#">
                    <em>Read More</em>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card green-bg  mb-3" >
                <div className="card-body">
                  <h5 className="card-title">Latest Updates</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue eset nec lacus elit dor broma.</p>
                  <a href="/#">
                    <em>Read More</em>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card blue-bg  mb-3" >
                <div className="card-body">
                  <h5 className="card-title">Placements</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue eset nec lacus elit dor broma.</p>
                  <a href="/#">
                    <em>Read More</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="courses">
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>New Courses</h3>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img src={news2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Developer</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent ves tibuum molestie lacuiirhs. Aenean.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img src={news3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Photography </h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent ves tibuum molestie lacuiirhs. Aenean..</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img src={news4} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Audio Editing</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent ves tibuum molestie lacuiirhs. Aenean.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
      <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>About Us</h3>
              <p>Perspiciatis unde omnis iste natus error sit voluptatem. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus musull dui.</p>

                <p>Lorem ipsumulum aenean noummy endrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus. Null dui. Fusce feugiat malesuada odio.</p>
                
                <p> Lorem ipsumulum aenean noummy endrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus. Null dui. Fusce feugiat malesuada odio.</p>
                <a href="/#">read more</a>
            </div>
            <div className="col-md-4">
              <h3>Up Coming Courses</h3>
              <ul className="list-unstyled upcoming">

               <li><a href="/#"> Mathematics and Computer Science</a></li>
               <li><a href="/#">Mathematics and Philosophy</a></li> 
                <li><a href="/#">Philosophy and Modern Languages</a></li>
                <li><a href="/#">History (Ancient and Modern)</a></li>
                <li><a href="/#">classNameical Archaeology and Ancient History</a></li>
                <li><a href="/#">Physics and Philosophy</a></li>
            
            </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}
export default Body;