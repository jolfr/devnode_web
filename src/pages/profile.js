import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const bodyStyle = {
    fontFamily: 'Arial',
    fontColor: 'black'
};
const projectListStyle = {
    margin:'auto',
    width: '80%',
    overflow: 'hidden',
    backgroundColor: 'white'
};

const liStyle = {
    display: 'block',
    width: '100%',
    float: 'left',
    borderBottom: '1px solid rgb(175, 175, 175)',
    borderTop: '1px solid rgba(255,255,255,.2)'
};

const filterBarStyle = {
    paddingLeft: '85px',
    fontSize: '14px'
};

const aStyle = {
    color: 'white',
    fontSize: '16px'
};

const italicStyle = {
    fontStyle: 'italic'
};
const boldStyle = {
    fontWeight: 'bold',
    paddingBottom: '0px'
};

const imgStyle = {
    height: '10%',
    width: '10%'
};

const profileImageStyle = {
    width: '150px',
    height: '150px'
};

const ProfilePage = () => (
    <Layout>
        <head>
            <title>Profile</title>
        </head>
        <body>
        <hr>
            <div class="container bootstrap snippet">
                <p/>
                <div class="row">
                    <div class="col-sm-10"><h1>Profile</h1></div>
                    <div class="col-sm-2"><a style={aStyle} href="/users" class="pull-right"><img title="profile image" class="logo" src="https://preview.ibb.co/ckhb9U/Project-Pair.png"/></a></div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="text-center">
                            <img src="https://media.istockphoto.com/photos/feeling-great-about-my-corporate-choices-picture-id507296326?k=6&m=507296326&s=612x612&w=0&h=oUnzUaUlwQDnNyseNqJDWjNLWJ-Q1zqsN-0Xvk8HAgY=" class="avatar img-circle img-thumbnail" alt="avatar"/>
                            <h6>Upload a different photo...</h6>
                            <input type="file" class="text-center center-block file-upload">
                                <p/>
                                <p>John Smith</p>
                                <p>Consultant, Technology Consulting</p>
                                <p>New York, NY</p>
                            </input>

                        </div>
                    </div>
                </div>
            </div>
        </hr>
        <br>
            <div class="col-sm-9">
                <div class="tab-content">
                    <div class="tab-pane active" id="home">
                        <hr>
                            <form class="form" action="##" method="post" id="registrationForm">
                                <div class="form-group">

                                    <div class="col-xs-12">
                                        <h4>Skills</h4>
                                        <p style={italicStyle}>Big Data Analysis, Java, Python, Social Media, Project Management, Technical Writing, Databases, Cloud Computing, Blockchain</p>
                                        <p> </p>
                                        <h4>Current Projects</h4>
                                        <p style={boldStyle}>Building innovative financial services for emerging markets</p>
                                        <p style={italicStyle}>Our client was a provider of digital content and marketing for mobile operators across emerging markets. As one of the pioneers in its field, it has established itself as true world leader. Not surprisingly, it attracted the attention of private equity backers. Shortly after the transaction, Solon was asked to help the company to develop a new line of business.</p>
                                        <p/>
                                        <h4>Past Projects</h4>
                                        <p style={boldStyle}>Synergies in the booming Indian mobile communications markets</p>
                                        <p style={italicStyle}>A financial investor planned an engagement in the consolidation of Indian mobile communications providers. Solon was asked to assess the magnitude of technical synergies in merging two mobile networks – in a country where up to seven million new mobile subscribers are acquired per month. With the help of research and expert interviews, Solon developed a quantitative structure for the necessary expansion of Indian mobile networks – in just a few days. Based on the results, Solon calculated the expected savings on expenses and investments resulting from the merger of both networks.</p>
                                        <p> For references, please contact Jane Doe ✉</p>
                                    </div>
                                </div>

                            </form>
                        </hr>

                    </div>
                    <div class="tab-pane" id="messages">

                        <h2/>

                        <hr>
                            <form class="form" action="##" method="post" id="registrationForm">
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="first_name"><h4>First name</h4></label>
                                        <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="last_name"><h4>Last name</h4></label>
                                        <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                                    </div>
                                </div>

                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="phone"><h4>Phone</h4></label>
                                        <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="mobile"><h4>Mobile</h4></label>
                                        <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="email"><h4>Email</h4></label>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="email"><h4>Location</h4></label>
                                        <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="password"><h4>Password</h4></label>
                                        <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="password2"><h4>Verify</h4></label>
                                        <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <br>
                                            <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"/> Save</button>
                                            <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"/> Reset</button>
                                        </br>
                                    </div>
                                </div>
                            </form>
                        </hr>

                    </div>
                    <div class="tab-pane" id="settings">


                        <hr>
                            <form class="form" action="##" method="post" id="registrationForm">
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="first_name"><h4>First name</h4></label>
                                        <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="last_name"><h4>Last name</h4></label>
                                        <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                                    </div>
                                </div>

                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="phone"><h4>Phone</h4></label>
                                        <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="mobile"><h4>Mobile</h4></label>
                                        <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="email"><h4>Email</h4></label>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="email"><h4>Location</h4></label>
                                        <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="password"><h4>Password</h4></label>
                                        <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-xs-6">
                                        <label for="password2"><h4>Verify</h4></label>
                                        <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <br>
                                            <button class="btn btn-lg btn-success pull-right" type="submit"><i class="glyphicon glyphicon-ok-sign"/> Save</button>
                                        </br>
                                    </div>
                                </div>
                            </form>
                        </hr>
                    </div>

                </div>
            </div>
        </br>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"/>
    </body>
    </Layout>
);

export default ProfilePage
