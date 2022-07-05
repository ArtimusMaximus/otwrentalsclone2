import React, { useState, useEffect } from 'react';
import { BiCameraHome } from 'react-icons/bi';
import { ImFilm } from 'react-icons/im';
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';
import './virtualtour.css';
import NoLink from './content/images/NoLink';

export default () => {

    let location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [matterPortData, setMatterPortData] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [mpClicked, setmpClicked] = useState(false);
    

    const mpRanchoLink = "https://my.matterport.com/show/?m=ZEdd1jvH29x"
    const sunsetBeachLink1 = "https://my.matterport.com/show/?m=xZK8fEohnrn"
    const sunsetBeachLink2 = "https://my.matterport.com/show/?m=v7rzBd5KLPd"
    const lakeArrowLink = "https://my.matterport.com/show/?m=e79yedmHEa3"
    

    const lakeArrowVideo = "";
    const sunsetbeachVideo = "https://www.youtube.com/embed/jxwj9Ux0RpU";
    const ranchoMirageVideo = "https://www.youtube.com/embed/YQ9pSP12-9k";



    const noLink = "/nolink"


    useEffect(() => {
        
        // location.pathname === '/ranchomirage' ? setMatterPortData(mpRanchoLink) : null
        setMatterPortData()
    }, [location])

    const handleClick = () => {
        location.pathname === '/ranchomirage' ? setMatterPortData(mpRanchoLink) 
        : location.pathname === '/sunsetbeach1' ? setMatterPortData(sunsetBeachLink1)
        : location.pathname === '/sunsetbeach2' ? setMatterPortData(sunsetBeachLink2)
        : location.pathname === '/lakearrowhead' ? setMatterPortData(lakeArrowLink)
        : setMatterPortData(noLink)
    }

    const handleVideoClick = () => {
        location.pathname === '/ranchomirage' ? setVideoData(ranchoMirageVideo)
        : location.pathname === '/sunsetbeach1' || location.pathname === '/sunsetbeach2' ? setVideoData(sunsetbeachVideo)
        : location.pathname === '/lakearrowhead' ? setVideoData(noLink)
        : setVideoData(noLink)
    }


    const iframeStyles = {
        allowFullScreen: true,
        allow: "vr",
        width: '688px',
        height: '387px',
        frameBorder: 0,
    }
    

    return (
        <>
        <div className='container text-center'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <h2 className='text-center faded'>Virtual Tour</h2>
                        <div className='bounce'>
                            <a onClick={() => {handleClick(); setShowModal(true); setmpClicked(true);}}> 
                                <BiCameraHome size={100} />
                            </a>
                        </div>
                    </div>
                
                <div className='col-lg-6 col-md-6 col-12'>
                    <h2 className='text-center faded'>View Video</h2>
                        <div className='bounce2'>
                            <a onClick={() => {handleVideoClick(); setShowModal(true);}}> 
                                <ImFilm size={100} />
                            </a>
                        </div>
                </div>
            </div>
        </div>
        <Modal size="lg" show={showModal} onHide={() => {setShowModal(false); setmpClicked(false);}}>
            <Modal.Body>
                { mpClicked ? (
                    <div className='d-flex justify-content-center'>
                        <iframe src={matterPortData} style={iframeStyles}></iframe>
                    </div>
                    ) : (
                        <div className='d-flex justify-content-center'>
                            <iframe src={videoData} style={iframeStyles}></iframe>
                        </div>
                    )
                }
            </Modal.Body>
        </Modal>
        </>
    )
}