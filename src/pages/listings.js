import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const bodyStyle = {
    fontFamily: 'Arial',
    fontColor: 'black',
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
    borderTop: '1px solid rgba(255,255,255,.2)',
    backgroundColor: 'white'
};

const filterBarStyle = {
    paddingLeft: '85px',
    fontSize: '14px'
};

const h2Style = {
    paddingLeft: '85px'
};

const italicStyle = {
    fontStyle: 'italic'
};
const boldStyle = {
    fontWeight: 'bold',
    paddingBottom: '0px'
};

const imgStyle = {
    height: '20%',
    width: '20%'
};

const profileImageStyle = {
    width: '150px',
    height: '150px'
};

const ListingsPage = () => (
    <Layout>
        <head>
            <title>Title</title>
        </head>
        <body style={bodyStyle}>
        <div class="filterbar" style={filterBarStyle}>
            <h6>Filters:            Department ▼        Skillset ▼      Duration ▼      Hours ▼</h6>
        </div>
        <div>
            <ul style={liStyle}>
                <li style={liStyle}>
                    <img style={imgStyle}
                         src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg"
                         alt="upwork" className="profile-image" align="left"/>
                    <p style={boldStyle}>Order Processing Automation</p>
                    <p>Description: Automate order processing from Shopify store to supplier</p>
                    <p>Required Skills: SQL, Python</p>
                    <p style={italicStyle}>Click here to message ✉ </p>
                </li>
                <li style={liStyle}>
                    <img style={imgStyle} src="./img/freelancer-logo.png" alt="freelancer" class="profile-image" align="left"/>
                    <p style={boldStyle}>Build an MVP for lead scraping SAAS</p>
                    <p>Description: I'm looking for a software developer who can create a prototype/minimum-viable-product for lead generating software.</p>
                    <p>Required Skills: C# Programming, PHP, Python, Software Architecture, Web Scraping</p>
                    <p style={italicStyle}>Click here to message ✉ </p>
                </li>
                <li style={liStyle}>
                    <img style={imgStyle} src="./img/freelancer-logo.png" alt="freelancer" class="profile-image" align="left"/>
                    <p style={boldStyle}>Bob Jones</p>
                    <p>Skills: Team Leadership, Team Communication, Creative Thinking, Cloud Computing, Data Analytics, Programming, Mathematics</p>
                    <p style={italicStyle}>Click here to message ✉ </p>
                </li>
                <li style={liStyle}>
                    <img style={imgStyle} src="./img/toptal-logo.png" alt="freelancer" class="profile-image" align="left"/>
                    <p style={boldStyle}>Acquisition of a company</p>
                    <p style={italicStyle}>Click here to message ✉ </p>
                </li>
                <li style={liStyle}/>
            </ul>
        </div>
        </body>
    </Layout>
);

export default ListingsPage
