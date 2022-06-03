import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'


export default () => {
      
    const arr = [one, two, three, four]

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)


    useEffect(() => {
        console.log(arr[0].toString())
        
    }, [])



    return (
        <>
        <div className="container row">
            <hr />
            {arr.map((pic, i) => {
            return (
                <div key={i}>
                    <a onClick={() => {setShowModal(true); setModalData(pic);}}>
                        <img key={i} src={pic} style={{height: '200px', margin: '5px', borderRadius: '5px'}} />
                    </a>
                    
                </div>
            )
        })}
        </div>
        <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Body>{<img src={modalData} style={{height: '500px', margin: '5px'}} />}</Modal.Body>
        </Modal>
        </>
    )
}