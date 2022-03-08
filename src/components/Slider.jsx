
import { Carousel} from "react-bootstrap";
import React from "react";

export const Slider = () => {
    return <Carousel>
        <Carousel.Item style={{height:'100vh'}}>
            <img className="d-block w-100 " src={'https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg'} alt=""/>
            <Carousel.Caption>
                <h3>Kirill studies programm</h3>
                <p>dsfdsfknsdnvnlxcnvkl.sdvk </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:'100vh'}}>
            <img className="d-block w-100" src={'https://ocean.ru/images/news/2020/ioi-conf-1.jpg'} alt=""/>
            <Carousel.Caption>
                <h3>Kirill studies programm</h3>
                <p>dsfdsfknsdnvnlxcnvkl.sdvk </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:'100vh'}}>
            <img className="d-block w-100" src="https://cdn.britannica.com/65/161665-050-C4B1FA75/Waves-North-Shore-Oahu-Hawaiian-Islands.jpg" alt=""/>
            <Carousel.Caption>
                <h3>Kirill studies programm</h3>
                <p>dsfdsfknsdnvnlxcnvkl.sdvk </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}
