import React from 'react'

function Contact() {
  return (
    <>
      <div className="Contact">
         <div className="container">
            <div className="Backbtn">
                <a href="">
                <div className="back">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                    <span>Back to Home</span>
                </div>
                </a>
                <h1>Contact With Us</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
                    minima exercitationem enim dignissimos odio unde mollitia
                    molestias deserunt nulla alias, eum saepe adipisci perferendis
                    sequi aliquid, quod qui animi?
                    </p>
                 
            </div>
                   <div className="form">
                        <h1>Contact form</h1>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">First Name <sup>*</sup></label>
                                <br />
                                <input type="text" placeholder='First name' required />
                                <br />
                                <label htmlFor="">Email <sup>*</sup></label>
                                <br />
                                <input type="email" placeholder='email122@gmail.com' required /> 
                            </div>
                            <div className="col">
                                <label htmlFor="">Last Name <sup>*</sup></label>
                                <br />
                                <input type="text" placeholder='Last name' required />
                                <br />
                                <label htmlFor="">Phone Number <sup>*</sup></label>
                                <br />
                                <input type="number" placeholder='Phone number' required />
                            </div>  
                             <label htmlFor="">Description:</label>
                            <div className="descript">
                            <textarea class="form-control" rows="10" id="ContactForm-body" name="contact[Description:]" placeholder="How Can We Help?" autocomplete="off"></textarea>
                            </div>

                            <button>Send Message</button>
                        </div>
                    </div>
         </div>
      </div>

        <div className="address container d-flex gap-5">
                            <div className="box1">
                                <h3>CALL US</h3><p>+9779811128222</p>
                                <h3>EMAIL</h3><p>mrnikeshkumar80@gmail.com</p>
                            </div>
                            <div className="box1">
                                <h3>ADDRESS</h3><p>Kathmandu-14, Tinkune</p>
                            </div>            
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0299327310095!2d85.34223307514686!3d27.685469726456606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d99470043%3A0x167d008efb47d64c!2sBroadway%20Infosys!5e0!3m2!1sen!2snp!4v1690944804666!5m2!1sen!2snp"height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    </>
  )
}

export default Contact