import React from 'react'
import { Link } from 'react-router-dom'

import {LogoCarousel} from '../components/LogoCarousel'


const Home = () =>
    <div>
        <head>
            <meta charSet="utf-8"/>
            <title>Devnode Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="" />
            <meta name="author" content="" />

            {/* Google sign in */}
            <script src="https://apis.google.com/js/platform.js" async defer/>
            <meta name="google-signin-client_id" content="462887418296-9a67ol2li3j8nr918im4m9rjejmsommn.apps.googleusercontent.com"/>

            {/*
             =======================================================
              Theme Name: Flattern
              Theme URL: https://bootstrapmade.com/flattern-multipurpose-bootstrap-template/
              Author: BootstrapMade.com
              Author URL: https://bootstrapmade.com
            =======================================================
            */}
        </head>

        <body>
        <div id="wrapper">
            {/* toggle top area */}
            <div className="hidden-top">
                <div className="hidden-top-inner container">
                    <div className="row">
                        <div className="span12">
                            <ul>
                                <li><strong>We are available for any custom works this month</strong></li>
                                <li>Main office: Springville center X264, Park Ave S.01</li>
                                <li>Call us <i className="icon-phone"/> (123) 456-7890 - (123) 555-7891</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* end toggle top area */}
            {/* start header */}
            <header>
                <div className="container ">
                    {/* hidden top area toggle link */}
                    <div id="header-hidden-link">
                        <Link to="#" className="toggle-link" title="Click me you'll get a surprise" data-target=".hidden-top"><i/>Open</Link>
                    </div>
                    {/* end toggle link */}
                    <div className="row nomargin">
                        <div className="span12">
                            <div className="headnav">
                                <ul>
                                    <li><Link to="#mySignup" data-toggle="modal"><i className="icon-user"/> Sign up</Link></li>
                                    <li><Link to="#mySignin" data-toggle="modal">Sign in</Link></li>
                                    <li><Link to="#" onClick="disconnectBackend()" data-toggle="modal">Sign in</Link></li>
                                </ul>
                            </div>
                            {/* Signup Modal */}
                            <div id="mySignup" className="modal styled hide fade" tabIndex="-1" role="dialog" aria-labelledby="mySignupModalLabel" aria-hidden="true">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 id="mySignupModalLabel">Create an <strong>account</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <form className="form-horizontal">
                                        <div className="control-group">
                                            <label className="control-label" form="inputEmail">Email</label>
                                            <div className="controls">
                                                <input type="text" id="inputEmail" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label" form="inputSignupPassword">Password</label>
                                            <div className="controls">
                                                <input type="password" id="inputSignupPassword" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label" form="inputSignupPassword2">Confirm Password</label>
                                            <div className="controls">
                                                <input type="password" id="inputSignupPassword2" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="controls">
                                                <button type="submit" className="btn">Sign up</button>
                                            </div>
                                            <p className="aligncenter margintop20">
                                                Already have an account? <Link to="#mySignin" data-dismiss="modal" aria-hidden="true" data-toggle="modal">Sign in</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* end signup modal */}
                            {/* Sign in Modal */}
                            <div id="mySignin" className="modal styled hide fade" tabIndex="-1" role="dialog" aria-labelledby="mySigninModalLabel" aria-hidden="true">
                                <div className="modal-header">
                                    <button id="loginButton"type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 id="mySigninModalLabel">Login to your <strong>account</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <center>
                                        <div className="g-signin2" data-onsuccess="onSignIn"/>
                                    </center>
                                </div>
                            </div>
                            {/* end signin modal */}
                            {/* Reset Modal */}
                            <div id="myReset" className="modal styled hide fade" tabIndex="-1" role="dialog" aria-labelledby="myResetModalLabel" aria-hidden="true">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 id="myResetModalLabel">Reset your <strong>password</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <form className="form-horizontal">
                                        <div className="control-group">
                                            <label className="control-label" form="inputResetEmail">Email</label>
                                            <div className="controls">
                                                <input type="text" id="inputResetEmail" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="controls">
                                                <button type="submit" className="btn">Reset password</button>
                                            </div>
                                            <p className="aligncenter margintop20">
                                                We will send instructions on how to reset your password to your inbox
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* end reset modal */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="span4">
                            <div className="logo">
                                <Link to="index.html"><img src="../img/logo.png" alt="" className="logo" /></Link>
                            </div>
                        </div>
                        <div className="span8">
                            <div className="navbar navbar-static-top">
                                <div className="navigation">
                                    <nav>
                                        <ul className="nav topnav">
                                            <li className="dropdown active">
                                                <Link to="index.html">Home <i className="icon-angle-down"/></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="index-alt2.html">Homepage 2</Link></li>
                                                    <li><Link to="index-alt3.html">Homepage 3</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Features <i className="icon-angle-down"/></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="typography.html">Typography</Link></li>
                                                    <li><Link to="table.html">Table</Link></li>
                                                    <li><Link to="components.html">Components</Link></li>
                                                    <li><Link to="animations.html">56 Animations</Link></li>
                                                    <li><Link to="icons.html">Icons</Link></li>
                                                    <li><Link to="icon-variations.html">Icon variations</Link></li>
                                                    <li className="dropdown"><Link to="#">3 Sliders <i className="icon-angle-right"></i></Link>
                                                        <ul className="dropdown-menu sub-menu-level1">
                                                            <li><Link to="index.html">Nivo slider</Link></li>
                                                            <li><Link to="index-alt2.html">Slit slider</Link></li>
                                                            <li><Link to="index-alt3.html">Parallax slider</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Pages <i className="icon-angle-down"/></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="about.html">About us</Link></li>
                                                    <li><Link to="pricingbox.html">Pricing boxes</Link></li>
                                                    <li><Link to="testimonials.html">Testimonials</Link></li>
                                                    <li><Link to="404.html">404</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Portfolio <i className="icon-angle-down"/></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="portfolio-2cols.html">Portfolio 2 columns</Link></li>
                                                    <li><Link to="portfolio-3cols.html">Portfolio 3 columns</Link></li>
                                                    <li><Link to="portfolio-4cols.html">Portfolio 4 columns</Link></li>
                                                    <li><Link to="portfolio-detail.html">Portfolio detail</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Blog <i className="icon-angle-down"/></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="blog-left-sidebar.html">Blog left sidebar</Link></li>
                                                    <li><Link to="blog-right-sidebar.html">Blog right sidebar</Link></li>
                                                    <li><Link to="post-left-sidebar.html">Post left sidebar</Link></li>
                                                    <li><Link to="post-right-sidebar.html">Post right sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="contact.html">Contact </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* end navigation */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* end header */}
            <section id="featured">
                {/* start slider */}
                {/* Slider */}
                <div id="nivo-slider">
                    <div className="nivo-slider">
                        {/* Slide #1 image */}
                        <img src="../img/slides/nivo/bg-1.jpg" alt="" title="#caption-1" />
                        {/* Slide #2 image */}
                        <img src="../img/slides/nivo/bg-2.jpg" alt="" title="#caption-2" />
                        {/* Slide #3 image */}
                        <img src="../img/slides/nivo/bg-3.jpg" alt="" title="#caption-3" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="span12">
                                {/* Slide #1 caption */}
                                <div className="nivo-caption" id="caption-1">
                                    <div>
                                        <h2>Awesome <strong>features</strong></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                                        </p>
                                        <Link to="#" className="btn btn-theme">Read More</Link>
                                    </div>
                                </div>
                                {/* Slide #2 caption */}
                                <div className="nivo-caption" id="caption-2">
                                    <div>
                                        <h2>Fully <strong>responsive</strong></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                                        </p>
                                        <Link to="#" className="btn btn-theme">Read More</Link>
                                    </div>
                                </div>
                                {/* Slide #3 caption */}
                                <div className="nivo-caption" id="caption-3">
                                    <div>
                                        <h2>Very <strong>customizable</strong></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                                        </p>
                                        <Link to="#" className="btn btn-theme">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end slider */}
            </section>
            <section className="callaction">
                <div className="container">
                    <div className="row">
                        <div className="span12">
                            <div className="big-cta">
                                <div className="cta-text">
                                    <h3>We've created more than <span className="highlight"><strong>5000 websites</strong></span> this year!</h3>
                                </div>
                                <div className="cta floatright">
                                    <Link to="#" className="btn btn-large btn-theme btn-rounded" >Request a quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="span12">
                            <div className="row">
                                <div className="span3">
                                    <div className="box aligncenter">
                                        <div className="aligncenter icon">
                                            <i className="icon-briefcase icon-circled icon-64 active"/>
                                        </div>
                                        <div className="text">
                                            <h6>Corporate business</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                                            </p>
                                            <Link to="#">Learn more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="span3">
                                    <div className="box aligncenter">
                                        <div className="aligncenter icon">
                                            <i className="icon-desktop icon-circled icon-64 active"/>
                                        </div>
                                        <div className="text">
                                            <h6>Responsive theme</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                                            </p>
                                            <Link to="#">Learn more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="span3">
                                    <div className="box aligncenter">
                                        <div className="aligncenter icon">
                                            <i className="icon-beaker icon-circled icon-64 active"/>
                                        </div>
                                        <div className="text">
                                            <h6>Coded carefully</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                                            </p>
                                            <Link to="#">Learn more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="span3">
                                    <div className="box aligncenter">
                                        <div className="aligncenter icon">
                                            <i className="icon-coffee icon-circled icon-64 active"/>
                                        </div>
                                        <div className="text">
                                            <h6>Sit and enjoy</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                                            </p>
                                            <Link to="#">Learn more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="row">
                        <div className="span12">
                            <div className="solidline">
                            </div>
                        </div>
                    </div>
                    {/* end divider */}
                    {/* Portfolio Projects */}
                    <div className="row">
                        <div className="span12">
                            <h4 className="heading">Some of recent <strong>works</strong></h4>
                            <div className="row">
                                <section id="projects">
                                    <ul id="thumbs" className="portfolio">
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 design" data-id="id-0" datatype="web">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-01-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="The City">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-01.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 design" data-id="id-1" datatype="icon">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-02-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Office">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-02.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-2" datatype="illustrator">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-03-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-03.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-2" datatype="illustrator">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-04-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-04.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-4" datatype="web">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-05-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Sea">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-05.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-5" datatype="icon">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-06-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="Clouds">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-06.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-2" datatype="illustrator">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-07-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-07.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 design" data-id="id-0" datatype="web">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <Link to="../img/works/full/image-08-full.jpg" className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Dark">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </Link>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-08.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Projects */}
                    {/* divider */}
                    <div className="row">
                        <div className="span12">
                            <div className="solidline">
                            </div>
                        </div>
                    </div>
                    {/* end divider */}
                    <div className="row">
                        <div className="span12">
                            <h4>Very satisfied <strong>clients</strong></h4>
                            <div id="mycarousel">
                                <LogoCarousel/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="bottom">
                <div className="container">
                    <div className="row">
                        <div className="span12">
                            <div className="aligncenter">
                                <div id="twitter-wrapper">
                                    <div id="twitter">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="span3">
                            <div className="widget">
                                <h5 className="widgetheading">Browse pages</h5>
                                <ul className="link-list">
                                    <li><Link to="#">About our company</Link></li>
                                    <li><Link to="#">Our services</Link></li>
                                    <li><Link to="#">Meet our team</Link></li>
                                    <li><Link to="#">Explore our portfolio</Link></li>
                                    <li><Link to="#">Get in touch with us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="span3">
                            <div className="widget">
                                <h5 className="widgetheading">Important stuff</h5>
                                <ul className="link-list">
                                    <li><Link to="#">Press release</Link></li>
                                    <li><Link to="#">Terms and conditions</Link></li>
                                    <li><Link to="#">Privacy policy</Link></li>
                                    <li><Link to="#">Career center</Link></li>
                                    <li><Link to="#">Flattern forum</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="span3">
                            <div className="widget">
                                <h5 className="widgetheading">Flickr photostream</h5>
                                <div className="flickr_badge">
                                    <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"/>
                                </div>
                                <div className="clear">
                                </div>
                            </div>
                        </div>
                        <div className="span3">
                            <div className="widget">
                                <h5 className="widgetheading">Get in touch with us</h5>
                                <address>
                                    <strong>Flattern studio, Pte Ltd</strong><br/>
                                    Springville center X264, Park Ave S.01<br/>
                                    Semarang 16425 Indonesia
                                </address>
                                <p>
                                    <i className="icon-phone"/> (123) 456-7890 - (123) 555-7891 <br/>
                                    <i className="icon-envelope-alt"/> email@domainname.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sub-footer">
                    <div className="container">
                        <div className="row">
                            <div className="span6">
                                <div className="copyright">
                                    <p>
                                        <span>&copy; Flattern - All right reserved.</span>
                                    </p>
                                    <div className="credits">
                                        {/*
                                          All the links in the footer should remain intact.
                                          You can delete the links only if you purchased the pro version.
                                          Licensing information: https://bootstrapmade.com/license/
                                          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Flattern
                                        */}
                                        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="span6">
                                <ul className="social-network">
                                    <li><Link to="#" data-placement="bottom" title="Facebook"><i className="icon-facebook icon-square"/></Link></li>
                                    <li><Link to="#" data-placement="bottom" title="Twitter"><i className="icon-twitter icon-square"/></Link></li>
                                    <li><Link to="#" data-placement="bottom" title="Linkedin"><i className="icon-linkedin icon-square"/></Link></li>
                                    <li><Link to="#" data-placement="bottom" title="Pinterest"><i className="icon-pinterest icon-square"/></Link></li>
                                    <li><Link to="#" data-placement="bottom" title="Google plus"><i className="icon-google-plus icon-square"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <Link to="#" className="scrollup"><i className="icon-chevron-up icon-square icon-32 active"/></Link>
        {/* javascript
          ================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        <script src="%PUBLIC_URL%/js/jquery.js"/>
        <script src="%PUBLIC_URL%/js/jquery.easing.1.3.js"/>
        <script src="%PUBLIC_URL%/js/bootstrap.js"/>
        <script src="%PUBLIC_URL%/js/jcarousel/jquery.jcarousel.min.js"/>
        <script src="%PUBLIC_URL%/js/jquery.fancybox.pack.js"/>
        <script src="%PUBLIC_URL%/js/jquery.fancybox-media.js"/>
        <script src="%PUBLIC_URL%/js/google-code-prettify/prettify.js"/>
        <script src="%PUBLIC_URL%/js/portfolio/jquery.quicksand.js"/>
        <script src="%PUBLIC_URL%/js/portfolio/setting.js"/>
        <script src="%PUBLIC_URL%/js/jquery.flexslider.js"/>
        <script src="%PUBLIC_URL%/js/jquery.nivo.slider.js"/>
        <script src="%PUBLIC_URL%/js/modernizr.custom.js"/>
        <script src="%PUBLIC_URL%/js/jquery.ba-cond.min.js"/>
        <script src="%PUBLIC_URL%/js/jquery.slitslider.js"/>
        <script src="%PUBLIC_URL%/js/animate.js"/>

        {/* Template Custom JavaScript File */}
        <script src="%PUBLIC_URL%/js/custom.js"/>

        </body>
    </div>

export default Home;

