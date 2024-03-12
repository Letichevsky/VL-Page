import React from "react";
import './Photogallery.scss';
import imgA from '../../assets/photo/IMG_9671.jpg'
import imgB from '../../assets/photo/IMG_0383.jpg'
import imgC from '../../assets/photo/IMG_9718.PNG'
import imgD from '../../assets/photo/IMG_5167.jpg'
import imgE from '../../assets/photo/IMG_1326.jpg'
import imgF from '../../assets/photo/IMG_0235.JPG'
import imgG from '../../assets/photo/IMG_9739.JPG'

import itemBG from '../../assets/img/item_bg.jpg'

class Photogallery extends React.Component {
    render() {
        return (
            <div className="galleryBox Photogallery">
                {/* PHOTO A */}
                <div className="galleryItem galleryItem1" id="a">
                    <div className="photo-front frontRotateX">
                        {/* <img src={itemBG} alt="Фото"/> */}
                    </div>
                    <div className="photo-back backRotateX">
                        <img src={imgA} alt="Фото"/>
                    </div>
                </div>
                {/* PHOTO B */}
                <div className="galleryItem galleryItem2" id="b">
                    <div className="photo-front frontRotateY" id="frontPhotoB">
                        {/* <img src={itemBG} alt="Фото"/> */}
                    </div>
                    <div className="photo-back backRotateY" id="backPhotoB">
                        <img src={imgB} alt="Фото"/>
                    </div>
                </div>
                {/* PHOTO C */}
                <div className="galleryItem galleryItem3 photo-card" id="c">
                    <div className="photo-front frontRotateY">
                        {/* <img src={itemBG} alt="Фото"/> */}
                    </div>
                    <div className="photo-back backRotateY">
                        <img src={imgC} alt="Фото"/>
                    </div>
                </div>
                {/* PHOTO D */}
                <div className="galleryItem galleryItem4" id="d">
                    <div className="photo-front frontRotateX">
                        {/* <img src={itemBG} alt="Фото"/> */}
                    </div>
                    <div className="photo-back backRotateX">
                        <img src={imgD} alt="Фото"/>
                    </div>
                </div>
                {/* PHOTO E */}
                <div className="galleryItem galleryItem5" id="e">
                    <div className="photo-front frontRotateX">
                        {/* <img src={itemBG} alt="Фото"/> */}
                    </div>
                    <div className="photo-back backRotateX">
                        <img src={imgE} alt="Фото"/>
                    </div>
                </div>
                {/* PHOTO F */}
                <div className="galleryItem galleryItem6" id="f">
                    <div className="photo-front frontRotateY">
                        {/* <img src={itemBG} alt="Фото"/> */}
                    </div>
                    <div className="photo-back backRotateY">
                        <img src={imgF} alt="Фото"/>
                    </div>
                </div>
                {/* PHOTO G */}
                <div className="galleryItem galleryItem7" id="g">
                    <div className="photo-front frontRotateY">
                        {/* <img src={itemBG} alt="Фото"/> */}
                    </div>
                    <div className="photo-back backRotateY">
                        <img src={imgG} alt="Фото"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photogallery;