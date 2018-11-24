// src/App.jsx
import React from 'react'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Books from './pages/Books'

import './skins/devnode.css' // This changes the default color scheme

import './stylesheets/animate.css'
import './stylesheets/bootstrap.css'
import './stylesheets/bootstrap-responsive.css'
import './stylesheets/cslider.css'
import './stylesheets/custom-fonts.css'
import './stylesheets/flexslider.css'
import './stylesheets/font-awesome.css'
import './stylesheets/jcarousel.css'
import './stylesheets/overwrite.css'
import './stylesheets/slitslider.css'
import './stylesheets/style.css'

import './font/customicon/Icons.eot'
import './font/customicon/Icons.svg'
import './font/customicon/Icons.ttf'
import './font/customicon/Icons.woff'
import './font/fontawesome/FontAwesome.otf'
import './font/fontawesome/fontawesome-webfont.eot'
import './font/fontawesome/fontawesome-webfont.svg'
import './font/fontawesome/fontawesome-webfont.ttf'
import './font/fontawesome/fontawesome-webfont.woff'

import './ico/apple-touch-icon-57-precomposed.png'
import './ico/apple-touch-icon-72-precomposed.png'
import './ico/apple-touch-icon-114-precomposed.png'
import './ico/apple-touch-icon-144-precomposed.png'
import './ico/favicon.ico'
import './ico/favicon.png'

import './img/bodybg/bg1.png'
import './img/bodybg/bg2.png'
import './img/bodybg/bg3.jpg'
import './img/bodybg/bg4.png'
import './img/bodybg/bg5.png'
import './img/bodybg/bg6.png'
import './img/bodybg/bg7.png'
import './img/bodybg/bg8.jpg'
import './img/bodybg/bg9.png'
import './img/bodybg/bg10.png'

import './img/dummies/blog/65x65/thumb1.jpg'
import './img/dummies/blog/65x65/thumb2.jpg'
import './img/dummies/blog/65x65/thumb3.jpg'

import './img/dummies/blog/thumbs/img1.jpg'
import './img/dummies/blog/thumbs/img2.jpg'
import './img/dummies/blog/thumbs/img3.jpg'
import './img/dummies/blog/thumbs/img4.jpg'
import './img/dummies/blog/thumbs/no-thumb.jpg'
import './img/dummies/blog/thumbs/quote-thumb.jpg'
import './img/dummies/blog/thumbs/small1.jpg'

import './img/dummies/blog/img1.jpg'
import './img/dummies/blog/img2.jpg'
import './img/dummies/blog/img3.jpg'


const App = () =>
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/books" component={Books}/>
        </div>
    </Router>

export default App