import React from 'react'

function Footer() {
  return (
    <footer fixed="bottom"  className="page-footer font-small blue pt-4 bg-dark text-white" >
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">K-Cart Internet Private Limited,</h5>
                <p>Buildings Alyssa, Begonia &

                    Clove Embassy Tech Village,

                    Outer Ring Road, Devarabeesanahalli Village,

                    Bengaluru, 560103,

                    Karnataka, India</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">About</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Contact Us</a></li>
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Careers</a></li>
                    <li><a href="#!">Corporate Information</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Help</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Payments</a></li>
                    <li><a href="#!">Shipping</a></li>
                    <li><a href="#!">FAQ</a></li>
                    <li><a href="#!">Cancellation and returns</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">©2022 Copyright: Kavanvavadiya
    </div>

</footer>
  )
}

export default Footer
