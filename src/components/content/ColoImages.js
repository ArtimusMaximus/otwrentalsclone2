import React, { useState, useEffect } from 'react';
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'
import Modal from 'react-bootstrap/Modal'

export default () => {
    const arr = [one, two, three, four]

    const [showModal, setShowModal] = useState(false)

    const generateModal = () => {
        return arr.map(pic => {
            
            (
                <div>
                    <a onClick={() => setShowModal(true)}>
                        <img src={pic} style={{height: '200px', margin: '5px'}}  />
                    </a>
                    <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="example-modal-sizes-title-lg">
                        <Modal.Body>{<img src={pic} style={{height: '500px', margin: '5px'}}  />}</Modal.Body>
                    </Modal>
                </div>
            )

        })
    }

    useEffect(() => {
        console.log(arr)
    }, [])



    return (
        <>
        <div>
        <a onClick={() => setShowModal(true)}>
                <img src={one} style={{height: '200px', margin: '5px'}}  />
            </a>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Body>{<img src={one} style={{height: '500px', margin: '5px'}}  />}</Modal.Body>
            </Modal>
            
            <img src={two} style={{height: '200px', margin: '5px'}} />
            <img src={three} style={{height: '200px', margin: '5px'}} />
            <img src={four} style={{height: '200px', margin: '5px'}} />

            <hr />
            <div>
            
            aaaaaaaaa
            </div>
        </div>

            
        </>
    )
}