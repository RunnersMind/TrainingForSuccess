import React from 'react';
import { Container } from 'reactstrap';
import './Footer.css';

const Footer = (props) => {
    return (
<div>
<Container fluid>
<div className="footer footer-dark bg-dark text-white pt-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-sm-12">
                    <div className="social-networks">
                        <a href="https://twitter.com/runality" target="_blank" className="twitter"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/runality/" target="_blank" className="facebook"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/runalitysocial/" target="_blank" className="instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                    <button type="button" className="footer-button btn text-center btn-outline-light pl-3 p-r-4"><a href="mailto:example@email.com">Contact Us</a></button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p><small>© 2018 Copyright Runality</small></p>
        </div>
        </div>
    </Container>
    </div>

    );
};

export default Footer;