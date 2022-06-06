import React, { useState } from 'react';
import { BiCameraHome } from 'react-icons/bi'
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './virtualtour.css'

export default () => {

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    const iframeStyles = {
        allowFullScreen: true,
        allow: "vr",
        width: '688px',
        height: '387px',
        frameBorder: 0,
    }
    const mpRanchoLink = "https://my.matterport.com/show/?m=ZEdd1jvH29x"

    return (
        <>
        <div className='container text-center'>
            <h2 className='text-center'>View Virtual Tour</h2>
                
                <div className='container col-3 bounce'>
                <a onClick={() => {setModalData(mpRanchoLink); setShowModal(true)}}>
                    
                    <BiCameraHome size={100} />
                </a>
                </div>
        </div>
        <Modal size="lg" show={showModal}  onHide={() => setShowModal(false)}>
            <Modal.Body>
                {
                    <div className='d-flex justify-content-center'>
                        <iframe src={modalData} style={iframeStyles}></iframe>
                    </div>

                    }
            </Modal.Body>
        </Modal>
        </>
    )
}