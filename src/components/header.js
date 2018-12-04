import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
    <div>
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
                    <a href="#" className="toggle-link" title="Click me you'll get a surprise" data-target=".hidden-top"><i/>Open</a>
                </div>
                {/* end toggle link */}
                <div className="row nomargin">
                    <div className="span12">
                        <div className="headnav">
                            <ul>
                                <li><a href="#mySignup" data-toggle="modal"><i className="icon-user"/> Sign up</a></li>
                                <li><a href="#mySignin" data-toggle="modal">Sign in</a></li>
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
                                            Already have an account? <a href="#mySignin" data-dismiss="modal" aria-hidden="true" data-toggle="modal">Sign in</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* end signup modal */}
                        {/* Sign in Modal */}
                        <div id="mySignin" className="modal styled hide fade" tabIndex="-1" role="dialog" aria-labelledby="mySigninModalLabel" aria-hidden="true">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
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
                            <a href="index.html"><img src="../img/logo-full.png" alt="" className="logo" /></a>
                        </div>
                    </div>
                    <div className="span8">
                        <div className="navbar navbar-static-top">
                            <div className="navigation">
                                <nav>
                                    <ul className="nav topnav">
                                        <li className="dropdown">
                                            <Link to="index.html">Home</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="">Profile</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="listings">Listings</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link>Blog</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link>About</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link>Contact</Link>
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
    </div>
);

export default Header
