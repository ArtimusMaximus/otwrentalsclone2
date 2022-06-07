import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import one from './images/coloradoriverimages/1.webp'
import two from './images/coloradoriverimages/2.webp'
import three from './images/coloradoriverimages/3.webp'
import four from './images/coloradoriverimages/4.webp'


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