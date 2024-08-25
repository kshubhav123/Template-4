import React from 'react'
import "../../assets/car/car.css"
import NavIcon from "../../assets/images/car/nav_icon.png"
import PlayStore from "../../assets/images/car/playstore.png"
import MacStore from "../../assets/images/car/mac_store.png"
import Easily from "../../assets/images/car/banner_easily_vector.png"
import Car from "../../assets/images/car/car_banner.png"
import CarFrame from "../../assets/images/car/car_banner_frame.png"
import Honda from "../../assets/images/car/Honda.png"
import Nissan from "../../assets/images/car/Nissan.png"
import AudiIcon from "../../assets/images/car/Audi_icon.png"
import Acura from "../../assets/images/car/Acura.png"
import Jaguar from "../../assets/images/car/Jaguar.png"
import Volvo from "../../assets/images/car/Volvo.png"
import Audi from "../../assets/images/car/Audi.png"
import Vector from "../../assets/images/car/Vector.png"
import AudiCard from "../../assets/images/car/audi_card.png"
import BMWCard from "../../assets/images/car/bmw_card.png"
import LamboCard from "../../assets/images/car/lambo_card.png"
import JaguarCard from "../../assets/images/car/jagura_card.png"
import Test1 from "../../assets/images/car/test_1.png"
import Test2 from "../../assets/images/car/Test_2.png"
import Vector_1 from "../../assets/images/car/Vector_1.png"
import IPhone from "../../assets/images/car/iphone_car.png"




export const Cars = () => {
  return (
    <>
      <Header />
      <Banner />
      <Steps />
      <Details />
      <Cards />
      <Testimonials />
      <Mobile />
      <Footer />
    </>
  )
}

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg px-5 py-5">
        <div class="container-fluid w-100">
          <a class="navbar-brand text-color fs-5 ps-5"> <img src={NavIcon} className='me-3' alt="brand-icon" />  Rent Car</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item active mx-3">
                <a class="nav-link" aria-current="page" href="#">Become a renter</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">Rental deals</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">How it work</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">Why choose us</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn px-4">Sign in</button>
              <button class="btn primary-color px-4">Sign up</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

const Banner = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className="row position-relative">

          {/* banner Heading */}
          <div className="col-md-6 banner-col">
            <div className='d-grid justify-content-center align-items-center banner-content w-100'>
              <div className='banner-heading text-start position-relative py-3 w-100'>Find, book and <br /> rent a car  <span className='text-color position-absolute mx-3'> Easily <img src={Easily} className='mb-5' />   </span> </div>
              <div className='fs-5 text-start my-2'>Get a car wherever and whenever you <br /> need it with your IOS and Android device.</div>
              <div className="d-flex py-4">
                <div className='me-2'> <img src={PlayStore} alt="" />   </div>
                <div className='ms-2'> <img src={MacStore} alt="" />   </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="col-md-6">
            <div className='d-flex position-relative h-100'>
              <div className='position-absolute top-0 end-0'>  <img src={CarFrame} className='h-100 w-100' />  </div>
              <div className='position-absolute top-0 py-5 my-5'>  <img src={Car} className='h-100 w-100' />  </div>
            </div>
          </div>


        </div>
      </div>

      <div className="container w-100 card p-2 border-0 shadow-lg rounded-3 my-5">
        <div className="d-flex justify-content-around align-items-center">
          <div class="item1 m-2">
            <i class="fas fa-map-marker-alt mx-3 text-outline-dark"></i>
            <span>Location</span>
            <p className='small text-secondary mt-1 ms-3'>Search Your Location</p>
          </div>
          <div class="vertical-line"></div>

          <div class="search-item mt-2">
            <i class="fas fa-calendar-alt mx-3 text-outline-dark"></i>
            <span>Pickup Date</span>
            <p className='small text-secondary mt-1 ms-3'>Tue 15 Feb,9:00</p>
          </div>

          <div class="vertical-line"></div>
          <div class="search-item mt-2">
            <i class="fas fa-calendar-alt mx-3 text-outline-dark"></i>
            <span>Return Date</span>
            <p className='small text-secondary mt-1 ms-3'>Tue 16 Feb,11:00</p>
          </div>

          <div class="ml-3">
            <button className='btn primary-color px-5 py-2 text-white '>Search</button>
          </div>

        </div>
      </div>
    </>
  )
}

const Steps = () => {
  return (
    <>
      <div className='container py-5 my-5'>
        <div className="d-grid justify-content-center h-100 my-5 py-5 pb-0">
          <button className='btn light-primary-color rounded-2 text-color fw-normal mx-auto'> How it Works </button>
          <div className='fs-2 py-4 pb-1 text-center'> Rent with following 3 working steps</div>
        </div>
        <div className="d-flex justify-content-around w-100 p-0">
          <div class="item1 m-2 text-center">
            <i class="fas fa-map-marker-alt mx-3 text-color fs-4 p-4 light-primary-color rounded-3"></i>
            <div className='fs-5 my-2 mt-3'> Choose Location</div>
            <p className='small text-secondary mt-1 ms-3'>Choose your and find <br /> your best car</p>
          </div>
          <div class="item1 m-2 text-center">
            <i class="fas fa-calendar-alt mx-3 text-color fs-4  p-4 light-primary-color rounded-3"></i>
            <div className='fs-5 my-2 mt-3'>Pick-up Date</div>
            <p className='small text-secondary mt-1 ms-3'>Select your pick up date and
              <br /> time to book your car</p>
          </div>
          <div class="item1 m-2 text-center">
            <i class="fa-solid fa-car mx-3 text-color fs-4  p-4 light-primary-color rounded-3"></i>
            <div className='fs-5 my-2 mt-3'>Book Your Car</div>
            <p className='small text-secondary mt-1 ms-3'>Book your car and we will deliver
              <br />  it directly to you</p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-around'>
        <div><img src={Honda} alt="" /> </div>
        <div><img src={Jaguar} alt="" /> </div>
        <div><img src={Nissan} alt="" /> </div>
        <div><img src={Volvo} alt="" /> </div>
        <div><img src={AudiIcon} alt="" /> </div>
        <div><img src={Acura} alt="" /> </div>
      </div>
    </>
  )
}

const Details = () => {
  return (
    <>

      <div className="container-fluid my-5 py-5">
        <div className="row my-5">

          <div className="col-md-6 position-relative">
            <div><img src={Vector} className='audi-car-vector' alt="" /></div>
            <div><img src={Audi} className='audi-car' alt="" /></div>
          </div>


          <div className="col-md-6">
            <div className=''><button className='btn light-primary-color rounded-2 text-color fw-normal mx-auto'> WHY CHOOSE US </button></div>
            <div className='fs-2 py-4 pb-1 text-start'> We offer the best experience <br /> with our rental deals</div>

            <div className='d-flex py-3'>
              <div className='fs-3'> <i class="fa-solid fa-sack-dollar mx-3 text-color fs-4 p-2 light-primary-color rounded-3"></i> </div>
              <div className='d-grid'>
                <div className='fs-6'> Best price guaranteed</div>
                <div className='small text-secondary'>Find a lower price? We’ll refund you 100% <br /> of the difference. </div>
              </div>
            </div>

            <div className='d-flex py-2'>
              <div className='fs-3'> <i class="fa-solid fa-taxi mx-3 text-color fs-4 p-2 light-primary-color rounded-3"></i> </div>
              <div className='d-grid'>
                <div className='fs-6'> Experience driver</div>
                <div className='small text-secondary'>Don’t have driver? Don’t worry, we have many <br /> experienced driver for you. </div>
              </div>
            </div>

            <div className='d-flex py-2'>

              <div className='fs-3'> <i class="fa-solid fa-car-side mx-3 text-color fs-4 p-2 light-primary-color rounded-3"></i> </div>
              <div className='d-grid'>
                <div className='fs-6'> 24 hour car delivery</div>
                <div className='small text-secondary'>Book your car anytime and we will deliver it <br /> directly to you.</div>
              </div>
            </div>

            <div className='d-flex py-2'>
              <div className='fs-3'> <i class="fa-solid fa-comments mx-3 text-color fs-4 p-2 light-primary-color rounded-3"></i> </div>
              <div className='d-grid'>
                <div className='fs-6'> 24/7 technical support</div>
                <div className='small text-secondary'>Have a question? Contact Rentcars support <br /> any time when you have problem. </div>
              </div>
            </div>

          </div>
        </div>
      </div>







    </>
  )
}

const Cards = () => {
  return (
    <>
      <div className='container text-center'>
        <button className='btn light-primary-color rounded-2 text-color fw-normal'> POPULAR RENTAL DEALS </button>
        <div className='fs-2 py-4 pb-1 text-center'> Most popular cars rental deals </div>
      </div>

      <div className='container my-5'>
        <div className="row">
          <div className="col-md-3">
            <div className='card shadow border-0 p-2'>
              <div className='p-5'>
                <img src={JaguarCard} className='w-100 h-100' alt="car" />
              </div>
              <div className='fs-5 ms-3 mb-1'> Jaguar XE L P250</div>
              <div className='text-secondary ms-3'> <i class="fa-regular fa-star text-warning me-2"></i>  <span className='text-dark'> 4.8 </span> <span className='small'> (2.43363) reviews  </span>  </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-regular fa-user"></i> 4 passanger </div>
                <div className=''> <i class="fa-solid fa-sliders"></i> Auto</div>
              </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-solid fa-temperature-arrow-up"></i> Air Conditioning </div>
                <div className=''> <i class="fa-solid fa-door-open"></i> 4 Door</div>
              </div>
              <div className='container'>
                <hr />
              </div>
              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''> Price </div>
                <div className=''> <b className='text-dark'>$1,800</b> <small> / day</small>  </div>
              </div>

              <button className='btn primary-color mx-3 py-2 my-2 mb-4'> Rent Now <i className='fa-solid fa-arrow-right'></i> </button>

            </div>
          </div>

          <div className="col-md-3">
            <div className='card shadow border-0 p-2'>
              <div className='p-5'>
                <img src={AudiCard} className='w-100 h-100' alt="car" />
              </div>
              <div className='fs-5 ms-3 mb-1'> Audi R8</div>
              <div className='text-secondary ms-3'> <i class="fa-regular fa-star text-warning me-2"></i>  <span className='text-dark'> 4.6 </span> <span className='small'> (1.936) reviews  </span>  </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-regular fa-user"></i> 2 passanger </div>
                <div className=''> <i class="fa-solid fa-sliders"></i> Auto</div>
              </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-solid fa-temperature-arrow-up"></i> Air Conditioning </div>
                <div className=''> <i class="fa-solid fa-door-open"></i> 2 Door</div>
              </div>
              <div className='container'>
                <hr />
              </div>
              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''> Price </div>
                <div className=''> <b className='text-dark'>$2,100</b> <small> / day</small>  </div>
              </div>

              <button className='btn primary-color mx-3 py-2 my-2 mb-4'> Rent Now <i className='fa-solid fa-arrow-right'></i> </button>

            </div>
          </div>

          <div className="col-md-3">
            <div className='card shadow border-0 p-2'>
              <div className='p-5'>
                <img src={BMWCard} className='w-100 h-100' alt="car" />
              </div>
              <div className='fs-5 ms-3 mb-1'> BMW M3</div>
              <div className='text-secondary ms-3'> <i class="fa-regular fa-star text-warning me-2"></i>  <span className='text-dark'> 4.5 </span> <span className='small'> (2.036) reviews  </span>  </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-regular fa-user"></i> 4 passanger </div>
                <div className=''> <i class="fa-solid fa-sliders"></i> Auto</div>
              </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-solid fa-temperature-arrow-up"></i> Air Conditioning </div>
                <div className=''> <i class="fa-solid fa-door-open"></i> 4 Door</div>
              </div>
              <div className='container'>
                <hr />
              </div>
              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''> Price </div>
                <div className=''> <b className='text-dark'>$1,1600</b> <small> / day</small>  </div>
              </div>

              <button className='btn primary-color mx-3 py-2 my-2 mb-4'> Rent Now <i className='fa-solid fa-arrow-right'></i> </button>

            </div>
          </div>

          <div className="col-md-3">
            <div className='card shadow border-0 p-2'>
              <div className='p-5'>
                <img src={LamboCard} className='w-100 h-100' alt="car" />
              </div>
              <div className='fs-5 ms-3 mb-1'> Lamborghini Huracan</div>
              <div className='text-secondary ms-3'> <i class="fa-regular fa-star text-warning me-2"></i>  <span className='text-dark'> 4.3 </span> <span className='small'> (1.936) reviews  </span>  </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-regular fa-user"></i> 2 passanger </div>
                <div className=''> <i class="fa-solid fa-sliders"></i> Auto</div>
              </div>

              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''><i class="fa-solid fa-temperature-arrow-up"></i> Air Conditioning </div>
                <div className=''> <i class="fa-solid fa-door-open"></i> 2 Door</div>
              </div>
              <div className='container'>
                <hr />
              </div>
              <div className='d-flex justify-content-between px-3 text-secondary my-2'>
                <div className=''> Price </div>
                <div className=''> <b className='text-dark'>$2,300</b> <small> / day</small>  </div>
              </div>

              <button className='btn primary-color mx-3 py-2 my-2 mb-4'> Rent Now <i className='fa-solid fa-arrow-right'></i> </button>

            </div>
          </div>


        </div>
      </div>

      <div className='container text-center'>
        <button className='p-2 rounded-2 border-1 border bg-white px-3'>   Show all vehicles <i className='fa-solid fa-arrow-right small ms-1'></i> </button>
      </div>
    </>
  )
}



const Testimonials = () => {
  return (
    <>
      <div className='bg-wall my-5 py-5' style={{ zIndex: "1" }}>

        <div className='container text-center py-5'>
          <button className='btn light-primary-color rounded-2 text-color fw-normal'> TESTIMONIALS</button>
          <div className='fs-2 py-4 pb-1 text-center'> What peole say about us? </div>
        </div>

        <div className='container bg-transparent'>
          <div className="cards-container bg-transparent py-3">
            <div className="card-mob border-0 shadow rounded-5" style={{ maxWidth: "720px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Test1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8 pt-3">
                  <div className="card-body">
                    <h2 className="card-title px-3">5.0 <span>Stars.</span></h2>
                    <p className="card-text px-3">
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                    </p>
                    <p className="card-text px-3">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                    <p className="fs-5 px-3 pb-0 mb-0">Charlie Johnson</p>
                    <p className="text-secondary px-3">From New York, US</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-mob border-0 shadow rounded-5" style={{ maxWidth: "720px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Test1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8 pt-3">
                  <div className="card-body">
                    <h2 className="card-title px-3">5.0 <span>Stars.</span></h2>
                    <p className="card-text px-3">
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                    </p>
                    <p className="card-text px-3">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                    <p className="fs-5 px-3 pb-0 mb-0">Charlie Johnson</p>
                    <p className="text-secondary px-3">From New York, US</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-mob border-0 shadow rounded-5" style={{ maxWidth: "720px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Test1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8 pt-3">
                  <div className="card-body">
                    <h2 className="card-title px-3">5.0 <span>Stars.</span></h2>
                    <p className="card-text px-3">
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                      <i className="fa-solid fa-star fs-6 text-warning"></i>
                    </p>
                    <p className="card-text px-3">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                    <p className="fs-5 px-3 pb-0 mb-0">Charlie Johnson</p>
                    <p className="text-secondary px-3">From New York, US</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}


const Mobile = () => {
  return (
    <>

      <div className='bg-vector-wall py-5'>
        <div className="row mx-0">
          <div className="col-md-6 d-grid justify-content-center align-items-center position-relative h-100">
            <img src={Vector_1} alt="" className='position-absolute' style={{ top: "-30%", left: "0%", zIndex: "0" }} />
            <div className='btn light-primary-color rounded-2 text-color fw-normal me-auto px-3 my-4'> DOWNLAOD</div>
            <div className='banner-heading text-start position-relative w-100 mb-2'>Download Rentcars<br /> App for  <span className='text-color position-absolute mx-3'> FREE </span> </div>
            <div className='fs-5 text-start mb-4'> For faster, easier booking and exclusive deals.</div>
            <div className="d-flex">
              <div className='me-2'> <img src={PlayStore} alt="" />   </div>
              <div className='ms-2'> <img src={MacStore} alt="" />   </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='d-flex justify-content-center'>
              <img src={IPhone} className='img-fluid' alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#051C34" }}>
        <footer class="row row-cols-1 py-5 mt-5 border-top text-white mx-0 px-0">
          <div class="col-md-4 mb-3">
            <a class="navbar-brand text-white fs-5 p-5 "> <img src={NavIcon} className='me-3' alt="brand-icon" />  RENTCARS</a>
            <ul class="nav flex-column p-5">
              <li class="nav-item mb-2 text-white mb-2"> <i class="fa-solid fa-location-dot mx-3 fs-5"></i> 25585   Alaska, 95865, USA</li>
              <li class="nav-item mb-2 text-white my-2"> <i class="fa-solid fa-phone mx-3 fs-5"></i>+652 3526 3512 45</li>
              <li class="nav-item mb-2 text-white my-2"> <i class="fa-solid fa-envelope mx-3 fs-5"></i>rentcars@gmail.com</li>
            </ul>
          </div>

          <div class="col-md-2 mb-3">
            <h5>Our Product</h5>
            <ul class="nav flex-column my-4">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Career</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Car</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Package</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Priceline</a></li>
            </ul>
          </div>

          <div class="col-md-2 mb-3">
            <h5>Resources</h5>
            <ul class="nav flex-column my-4">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Download</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Help Center</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Guides</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Partner Network</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cruises</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Developer</a></li>
            </ul>
          </div>

          <div class="col-md-2 mb-3">
            <h5>About Rentcars</h5>
            <ul class="nav flex-column my-4">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Why Choose us</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Our Story</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Investors</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Press Center</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Advertise</a></li>
            </ul>
          </div>
          <div class="col-md-1 mb-3">
            <h5>Follow us</h5>
            <ul class="nav flex-column my-4">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Facebook</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Instagram</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Youtube</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}