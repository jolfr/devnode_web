import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Animate from '../../css/animate.css'
import Bootstrap from '../../css/bootstrap.css'
import BootstrapResponsive from '../../css/bootstrap-responsive.css'
import CSlider from '../../css/cslider.css'
import CustomFonts from '../../css/custom-fonts.css'
import FontAwesome from '../../css/font-awesome.css'
import JCarousel from '../../css/jcarousel.css'
import Overwrite from '../../css/overwrite.css'
import Style from '../../css/style.css'
import Theme from '../../css/skins/devnode.css'

const IndexPage = () => (
    <Layout>
        <div id="wrapper">
            <section id="featured">
                {/* start slider */}
                {/* Slider */}
                <div id='nivo-slider'>
                    <div>
                        <img src="./img/advertisement.jpg" alt="Advertisement" />
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
                                    <a className="btn btn-large btn-theme btn-rounded" href="#">Request a quote</a>
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
                                            <a href="#">Learn more</a>
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
                                            <a href="#">Learn more</a>
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
                                            <a href="#">Learn more</a>
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
                                            <a href="#">Learn more</a>
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
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The City" href="../img/works/full/image-01-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-01.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 design" data-id="id-1" data-type="icon">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Office" href="../img/works/full/image-02-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-02.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-2" data-type="illustrator">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="../img/works/full/image-03-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-03.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-2" data-type="illustrator">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="../img/works/full/image-04-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-04.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-4" data-type="web">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Sea" href="../img/works/full/image-05-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-05.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-5" data-type="icon">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Clouds" href="../img/works/full/image-06-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-06.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 photography" data-id="id-2" data-type="illustrator">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="../img/works/full/image-07-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
                                            {/* Thumb Image and Description */}
                                            <img src="../img/works/thumbs/image-07.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                        </li>
                                        {/* End Item Project */}
                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span3 design" data-id="id-0" data-type="web">
                                            {/* Fancybox - Gallery Enabled - Title - Full Image */}
                                            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Dark" href="../img/works/full/image-08-full.jpg">
                                                <span className="overlay-img"/>
                                                <span className="overlay-img-thumb font-icon-plus"/>
                                            </a>
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
                            <ul id="mycarousel" className="jcarousel-skin-tango recent-jcarousel clients">
                                <li>
                                    <a href="#">
                                        <img src="../img/dummies/clients/client1.png" className="client-logo" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../img/dummies/clients/client2.png" className="client-logo" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../img/dummies/clients/client3.png" className="client-logo" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../img/dummies/clients/client4.png" className="client-logo" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../img/dummies/clients/client5.png" className="client-logo" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../img/dummies/clients/client6.png" className="client-logo" alt="" />
                                    </a>
                                </li>
                            </ul>
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
        </div>
        <a href="#" className="scrollup"><i className="icon-chevron-up icon-square icon-32 active"/></a>
        {/* javascript
      ================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        <script src="../js/jquery.js"/>
        <script src="../js/jquery.easing.1.3.js"/>
        <script src="../js/bootstrap.js"/>
        <script src="../js/jcarousel/jquery.jcarousel.min.js"/>
        <script src="../js/jquery.fancybox.pack.js"/>
        <script src="../js/jquery.fancybox-media.js"/>
        <script src="../js/google-code-prettify/prettify.js"/>
        <script src="../js/portfolio/jquery.quicksand.js"/>
        <script src="../js/portfolio/setting.js"/>
        <script src="../js/jquery.flexslider.js"/>
        <script src="../js/jquery.nivo.slider.js"/>
        <script src="../js/modernizr.custom.js"/>
        <script src="../js/jquery.ba-cond.min.js"/>
        <script src="../js/jquery.slitslider.js"/>
        <script src="../js/animate.js"/>

        {/* Template Custom JavaScript File */}
        <script src="./js/custom.js"/>

    </Layout>
);

export default IndexPage
