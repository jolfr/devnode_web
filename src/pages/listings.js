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
    height: '25%',
    width: '25%'
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
            <p style={boldStyle}>Filters:            Department ▼        Skillset ▼      Duration ▼      Hours ▼</p>
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
                    <p style={boldStyle}>Web Automation Data Entry Expert</p>
                    <p>Description: Developer needs to create a web automation program to perform input process to fill up a specific University enrolling page automatically!</p>
                    <p>Required Skills: Data Scraping, Python, Web Scraping, Website Design</p>
                    <p style={italicStyle}>Click here to message ✉ </p>
                </li>
                <li style={liStyle}>
                    <img style={imgStyle} src="./img/toptal-logo.png" alt="freelancer" class="profile-image" align="left"/>
                    <p style={boldStyle}>Data Entry Automation</p>
                    <p>Description: Developer needed to automate manual entry of accounting data</p>
                    <p>Required Skills: SQL, Python</p>
                    <p style={italicStyle}>Click here to message ✉ </p>
                </li>
                <li style={liStyle}/>
            </ul>
        </div>
        </body>
    </Layout>
);

export default ListingsPage
