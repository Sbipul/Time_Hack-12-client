import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://www.behbehaniwatchworld.com.kw/media/f76b037d-e4ae-487e-9695-8afdced9e040/vyVHPg/rsz_rw_freelancer_2785-sc5-20001_ambiance_rvb_72dpi_forweb.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="text-warning">CATCH YOUR TIME</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://dcassetcdn.com/design_img/3080524/692628/692628_17029516_3080524_4bd6ddae_image.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="text-warning">WE WILL HELP YOU TO FIND BEST</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-black-dynamic-watch-simple-black-banner-image_182859.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="text-warning">TIME AND TIDE WAIT FOR NONE</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;