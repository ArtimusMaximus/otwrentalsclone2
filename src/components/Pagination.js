import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export default ({ totalImgs, arr }) => {
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    const [currentPage, setCurrentPage] = useState(1)
    const [imgsPerPage, setImgsPerPage] = useState(18)

    const indexOfLastImg = currentPage * imgsPerPage
    const indexOfFirstImg = indexOfLastImg - imgsPerPage
    const currentImgs = arr.slice(indexOfFirstImg, indexOfLastImg)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const thumbStyles = {
        height: '50px',
        width: '75px',
        margin: '5px',
        borderRadius: '5px'
    };

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil( totalImgs / imgsPerPage ); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 col-md-12 col-lg-12 container faded'>
                    <h2>Photo Gallery</h2>
                    <div className='row d-flex justify-content-center'>
                        {currentImgs.map((img, i) => {
                            return (
                                <div key={i}>
                                    <a className='d-block h-100' onClick={() => {setShowModal(true); setModalData(img)}}>
                                        <img className='img-fluid' src={img} style={thumbStyles} />
                                    </a>
                                </div>
                            )
                        })}
                        <div className='row col-12 justify-content-center'>
                        <ul className='pagination'>
                            {pageNumbers.length >= 2 && pageNumbers.map((n, i) => (
                                <li key={i} className='page-item'>
                                    <a onClick={() => paginate(n)} href='#!' className='page-link' style={{textDecoration:'none', color:'inherit', fontWeight: '700'}}>
                                        {n}    
                                    </a>    
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} >
                        <Modal.Body>{<img src={modalData} style={{width:'100%', margin: '0px', borderRadius: '5px'}} />}</Modal.Body>
                    </Modal>
                </div>
            </div>
        </>
    )
}