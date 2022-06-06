import React, { useState } from 'react';
import { BiCameraHome } from 'react-icons/bi'
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default () => {

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    const iframeStyles = {
        allowFullScreen: "",
        allow: "vr",
        width: '100%',
        height: '100%',
        frameBorder: 0,
    }
    const mpRanchoLink = "https://my.matterport.com/show/?m=ZEdd1jvH29x"

    return (
        <>
        <div className='container text-center'>
            <h2 className='text-center'>View Virtual Tour</h2>
                
                <a onClick={() => {setModalData(mpRanchoLink); setShowModal(true)}}>
                    
                    <BiCameraHome size={100} />
                </a>
        </div>
        <Modal size="lg" show={showModal}  onHide={() => setShowModal(false)}>
            <Modal.Body>
                {
                    <div className='container'>
                        <iframe src={modalData} style={iframeStyles}></iframe>
                    </div>

                    }</Modal.Body>
        </Modal>
        </>
    )
}