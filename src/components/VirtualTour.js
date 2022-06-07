import React, { useState, useEffect } from 'react';
import { BiCameraHome } from 'react-icons/bi'
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';
import './virtualtour.css';

export default () => {

    let location = useLocation();
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [matterPortData, setMatterPortData] = useState(null)

    const mpRanchoLink = "https://my.matterport.com/show/?m=ZEdd1jvH29x"

    const sunsetBeachLink1 = "https://my.matterport.com/show/?m=xZK8fEohnrn"
    const sunsetBeachLink2 = "https://my.matterport.com/show/?m=v7rzBd5KLPd"
    const lakeArrowLink = 'aa'


    useEffect(() => {
        console.log(location.pathname)
        // location.pathname === '/ranchomirage' ? setMatterPortData(mpRanchoLink) : null
        setMatterPortData()
    }, [location])

    const handleClick = () => {
        location.pathname === '/ranchomirage' ? setMatterPortData(mpRanchoLink) 
        : location.pathname === '/sunsetbeach1' ? setMatterPortData(sunsetBeachLink1)
        : location.pathname === '/sunsetbeach2' ? setMatterPortData(sunsetBeachLink2)
        : location.pathname === '/lakearrowhead' ? setMatterPortData(lakeArrowLink)
        : alert('Matterport error')

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
            <h2 className='text-center'>View Virtual Tour</h2>
                
                <div className='container col-3 bounce'>
                <a onClick={() => {handleClick(); setShowModal(true)}}>
                    
                    <BiCameraHome size={100} />
                </a>
                </div>
        </div>
        <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body>
                {
                    <div className='d-flex justify-content-center'>
                        <iframe src={matterPortData} style={iframeStyles}></iframe>
                    </div>

                    }
            </Modal.Body>
        </Modal>
        </>
    )
}