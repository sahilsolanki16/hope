import React from 'react'

export default function Contact() {
  return (
    <>
       {/* nav bar part start  */}
       <div className='img6'>
        
        <div className='h80'></div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6  mx-auto'>
              <h1 className='text-light text-center display-1 ms-md-3 '>contact us</h1>
              <div className='h170'></div>

            </div>
          </div>
        </div>
      </div>
      <div className='h100'></div>


                              {/* 2nd part div start  */}

      <div className='container'>
        <div className='row'>
          <div className='col-md-7 mx-auto'>
                <h1 className='text-center display-5'><b>We respond to all messages within 24 hours.</b></h1>
                <input type='text' placeholder='Your Name' className='col-md-12 col-12 border py-3 fs-5 px-3'></input>
                <input type='email' placeholder='Your Email' className='col-md-12 col-12 border py-3 fs-5 px-3 mt-3'></input>
                <input type='number' placeholder='Your Phone' className='col-md-12 col-12 border py-3 fs-5 px-3 mt-3'></input>
                <textarea rows="5" placeholder='Your Message'  className='col-md-12 col-12 border py-3 fs-5 px-3 mt-3'> 
                </textarea>
                <button className='bg-g border border-0 text-light  px-5  py-2 rounded-2 mt-md-3 fs-5'>Send Now</button>
          </div>
        </div>
      </div>


      <div className='h100'></div>

                                    {/* 3rd part div start  */}


      <div className='container-fluid bg-ow'>
           <div className='row'>
            <div className='h70'></div>
                <div className='col-md-12'>
                    <h1 className='display-5 text-center'><b>Work with me online or in-person</b></h1>
                </div>                
            </div>      
            <div className='h50'></div>
            <div className='row'>
              <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <p className='fs13 mb-1'>E-MAIL</p>
                        <p className='fs20'>contact@example.com</p>


                        <p className='mt-5 mb-1 fs13'>PHONE</p>
                        <p className='fs20'>202-555-7890</p>

                        <p className='mt-5 mb-1 fs13'>LOCATION</p>
                        <p className='fs20'>123 Fifth Avenue, NY 10160, New York, USA</p>

                        <button className='border bo-ra bg-g mt-3 '><a href="#" class="fa fa-twitter text-light fs21 t-d"></a></button>

                        <button className='border bo-ra bg-g ms-3'><a href="#" class="fa fa-instagram text-light fs21 t-d"></a></button>

                        <button className='border bo-ra bg-g ms-3'><a href="#" class="fa fa-youtube text-light fs21 t-d"></a></button>
                    </div>

                    <div className='col-md-6 col-12 mt-md-0 mt-5'>
                      <p className='fs25'>You can use this final section to write some directions to your physical location, or any other useful information.</p>

                      <p className='fs25 mt-3'><b>If you’re using this template </b> to build a website, and have any questions at all, I’d love to help!</p>

                      <p className='fs25 mt-3'>Just search for WP Maker to find our YouTube channel. Leave a comment on any video – I always reply.</p>

                      <p className='fs25 mt-3'>Thank you <b> so much </b> for watching our tutorials!</p>
                    </div>
                    <div className='col-md-1'></div>     
            </div>  
            <div className='h100'></div>
</div>


            <div className='container'>
          <div className='row'>
            <div className='h30'></div>
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
        <div className='h30'></div>
    </>
  )
}
