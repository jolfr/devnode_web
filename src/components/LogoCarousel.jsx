import React from "react";
import Slider from "react-slick";

import {client1} from '../img/dummies/clients/client1.png'
import {client2} from '../img/dummies/clients/client2.png'
import {client3} from '../img/dummies/clients/client3.png'
import {client4} from '../img/dummies/clients/client4.png'
import {client5} from '../img/dummies/clients/client5.png'
import {client6} from '../img/dummies/clients/client6.png'

export class LogoCarousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={client1} alt = "" className='client-logo'/>
                </div>
                <div>
                    <img src={client2} alt = "" className='client-logo'/>
                </div>
                <div>
                    <img src={client3} alt = "" className='client-logo'/>
                </div>
                <div>
                    <img src={client4} alt = "" className='client-logo'/>
                </div>
                <div>
                    <img src={client5} alt = "" className='client-logo'/>
                </div>
                <div>
                    <img src={client6} alt = "" className='client-logo'/>
                </div>
            </Slider>
        );
    }
}