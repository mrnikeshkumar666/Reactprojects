import React from 'react'
import { Link } from 'react-router-dom'

function Terms() {
  return (
    <>
          <div className="terms">
              <div className="container">
                <div className="Backbtn">
                  <Link to="/">
                    <div className="back">
                      <i class="fa-solid fa-circle-chevron-left"></i>
                      <span>Back to Home</span>
                    </div>
                  </Link>

                  <h1>Terms & Conditions</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
                    minima exercitationem enim dignissimos odio unde mollitia
                    molestias deserunt nulla alias, eum saepe adipisci perferendis
                    sequi aliquid, quod qui animi?
                  </p>
                </div>
              </div>
            </div>

            <div className="conditions">
                  <div className="container">
                <div className="tnc">
                  <h2>Terms &amp; Conditions</h2>
                </div>
                <h4><strong>1. General Condition</strong></h4>
                <p>We reserve the right to refuse service to anyone for any reason at any time.<br /> 
                  You understand that your content (not including credit card information), may be transferred unencrypted and involve 
                  (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. 
                  Credit card information is always encrypted during transfer over networks.<br /> 
                  You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or 
                  access to the Service or any contact on the website through which the service is provided, without express written permission by us.<br /> 
                  <span>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</span></p>
                <h4><strong>2. Accuracy, Completeness &amp; Timeliness of Information</strong></h4>
                <p>We are not responsible if information made available on this site is not accurate, complete or current. 
                  The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, 
                  more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br /> 
                  This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. 
                  We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. 
                  You agree that it is your responsibility to monitor changes to our site.</p> 
                <h4><strong>3. Modifications to the Service &amp; Prices</strong></h4>
                <p>Prices for our products are subject to change without notice.<br /> 
                  We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br /> 
                  We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p> 
                <h4><strong>4. Products or Services (if applicable)</strong></h4>
                <p>Certain products or services may be available exclusively online through the website. 
                  These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.<br /> 
                  We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. 
                  We cannot guarantee that your computer monitor's display of any color will be accurate.<br /> 
                  We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. 
                  We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. 
                  All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. 
                  We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
              </div>

            </div>
    </>
  )
}

export default Terms