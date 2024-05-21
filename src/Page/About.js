import React from 'react'

export default function About() {
  return (
    <>
      {/* nav bar part start  */}
      <div className='img3'>
       
        <div className='h100'></div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6  mx-auto'>
              <h1 className='text-light text-center display-3 ms-md-3 '>about us</h1>

              <div className='h150'></div>

            </div>
          </div>
        </div>
      </div>
      <div className='h100'></div>




      {/* 2nd part div start  */}


      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-4 col-12'>
            <img src='img/6-home.jpg' className='col-md-11 col-12 rounded-2 '></img>

          </div>
          <div className='col-md-6 col-12'>
            <h1 className='display-5 text-md-start mt-5'><b>I made this design specifically for our step by step tutorial.</b></h1>
            <p className='fs24 mt-3 '>It allows me to show you <b> how easy it can be </b> to make an amazing website – by simply following along with me.</p>
            <p className='fs24'>We’ve made the design <b> super easy to adapt </b> to any industry, so you can use it to build any type of website.</p>

            <p className='fs24'>It is also <b> super easy to update. </b> For example, you can change the colors and fonts sitewide with a single click.</p>

            <p className='fs24'>This way you can <b> try different designs fast – </b> and build an amazing website in hours, instead of months.</p>
          </div>
        </div>
      </div>

      <div className='h100'></div>




      {/* 3rd part div start  */}

      <div className='container'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <h1 className='text-center'>I gave it my all to try and make this the best possible design that you can start from.</h1>
          </div>
        </div>
      </div>




      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <h1 className='display-6 text-md-start mt-5'><b>I love nature, and so Hope is a design inspired by nature.</b></h1>
            <p className='fs22 mt-3 '>But we’ve used it to build sites for psychologists, doctors, restaurants, lawyers, personal trainers, gyms, and more.</p>
            <p className='fs22'>It is also one of the first templates built using the new Container. This means your website will load super fast.</p>

            <p className='fs22'>It took many people hundreds of hours of work, and lots of love, to make this template and tutorial possible.</p>

            <p className='fs22'>But your comments on our videos, like the one you can see below, make it all worth it. Thank you so much!</p>
          </div>

          <div className='col-md-1'></div>
          <div className='col-md-5 col-12'>
            <img src='img/2-about.jpg' className='col-md-11 col-12 rounded-2 mt-5'></img>

          </div>
        </div>
      </div>


      <div className='h100'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-8 mx-auto '>
            <h1 className='text-center'>I sincerely hope this helps you make a website that you can be truly proud of!</h1>
          </div>
        </div>
      </div>


      <div className='h100'></div>


                                {/* 4th part div start  */}

      <div className='container-fluid bg-ow '>
        <div className='row'>
          <div className='col-md-5  mx-auto'>
            <center>
              <div className='col-md-2 mx-auto'>
                <img src='img/3-about.jpg' className='col-md-10 col-2 mt-5 rounded-circle'></img>
              </div>
            </center>
            <p className='text-center mt-2 mb-0'>Astrid Hartman</p>
            <center>
              <img src='img/d1.svg' className='h10'></img>
              <img src='img/d1.svg' className='h10'></img>
              <img src='img/d1.svg' className='h10'></img>
              <img src='img/d1.svg' className='h10'></img>
              <img src='img/d1.svg' className='h10'></img></center>

            <p className='text-center fs25 mt-3 mb-md-4  '>Excellent tutorial, one of the best I've seen and I sorely needed this step-by-step instruction. Thank you!</p>
            <center> <button className='border fs-5 px-4 border border-dark py-2 rounded-3 bg-dg'>What My Clients Say</button></center>

            <div className='h100'></div>

          </div>
        </div>
      </div>

                        {/* footer part div start  */}

           <div className='h50'></div>     
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 '>
            <nav className="navbar navbar-expand-sm navbar-dark ">
                    <ul className="navbar-nav me-auto mx-auto ">
                      <li>
                        <a className="nav-link text-dark fs-5"href="#">Home</a>
                      </li>
                      <li>
                        <a className="nav-link ms-md-3 text-dark fs-5" href="#">Abput</a>
                      </li>
                      <li>
                        <a className="nav-link ms-md-3 text-dark fs-5" href="#">Service</a>
                      </li>
                      <li>
                        <a className="nav-link ms-md-3 text-dark fs-5" href="#">Contact</a>
                      </li>
                    </ul>
                  
              </nav>
            </div>

          <div className='col-md-4 col-12'>
                <center><img src='img/logo-black-1.png' className='col-md-2 col-2 '></img></center>
          </div>

        <div className='col-md-4 col-12'>
                <p className='fs-5 mt-3 ms-md-5 text-center'>© 2024 Hope Starter Design</p>
        </div>
          </div>
        </div>
        <div className='h50'></div>
    </>
  )
}
