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
    height: '10%',
    width: '10%'
};

const profileImageStyle = {
    width: '150px',
    height: '150px'
};

const StaffPage = () => (
    <Layout>
        <head>
            <title>Title</title>
        </head>
        <body style={bodyStyle}>
        <img style={imgStyle} src="https://preview.ibb.co/ckhb9U/Project-Pair.png" alt="logo" align="right"/>
        <h2 style={h2Style}>Staff Search</h2>
        <div class="filterbar" style={filterBarStyle}>
            <h5>Filters:            Department ▼        Skillset ▼      Duration ▼      Hours ▼</h5>
        </div>
        <ul style={liStyle}>
            <li style={liStyle}>
                <img style={imgStyle} src="http://samis-esic.mg/wp-content/uploads/2017/05/6140989632_1c8066563d_b.jpg" alt="businessman1" class="profile-image" align="left"/>
                <p style={boldStyle}>John Smith</p>
                <p>Skills: Software, Customer Service, Spanish, Java, Oracle, AWS, Blockchain, Cloud Computing</p>
                <p style={italicStyle}>For more info, click here or message John ✉ </p>
            </li>
            <li style={liStyle}>
                <img style={imgStyle} src="https://www.professionalwomanmag.com/wp-content/uploads/2018/05/business-woman.jpg" alt="businessman2" class="profile-image" align="left"/>
                <p style={boldStyle}>Jane Doe</p>
                <p>Skills: Scala, Cloud Computing, Leadership, Time Management, Project Planning, Task Delegation</p>
                <p style={italicStyle}>For more info, click here or message Jane ✉ </p>
            </li>
            <li style={liStyle}>
                <img style={imgStyle} src="https://investforkidschicago.org/wp-content/uploads/2017/05/Jimmy-Levin.jpg" alt="businessman3" class="profile-image" align="left"/>
                <p style={boldStyle}>Bob Jones</p>
                <p>Skills: Team Leadership, Team Communication, Creative Thinking, Cloud Computing, Data Analytics, Programming, Mathematics</p>
                <p style={italicStyle}>For more info, click here or message Bob ✉ </p>
            </li>
            <li style={liStyle}>
                <img style={imgStyle} src="http://samis-esic.mg/wp-content/uploads/2017/05/6140989632_1c8066563d_b.jpg" alt="businessman1" class="profile-image" align="left"/>
                <p style={boldStyle}>Acquisition of a company</p>
                <p>For more info, contact John Smith ✉ </p>
            </li>
            <li style={liStyle}/>
        </ul>
        </body>
    </Layout>
);

export default StaffPage
