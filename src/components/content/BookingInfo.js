import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import {
    coloriverBookingInfo1,
    coloriverBookingInfo2,
    sunsetbeachProperty1,
    sunsetbeachProperty2,
    ranchoPropertyInfo,
    sealbeachPropertyInfo,
    lakeArrowPropertyInfo
        } from './bookingdata';



export default () => {
    const location = useLocation();



    const [bookingData, setBookingData] = useState(coloriverBookingInfo1);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        return location.pathname === '/coloradoriver1' ? setBookingData(coloriverBookingInfo1) : {}
    }

    return (
        <>
            <a 
                className='btn btn-primary'
                onClick={() => {handleClick(); setShowModal(true);}}           
            >Booking Info</a>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Rates</th>
                                    <th>Cost (USD)</th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Daily</td>
                                    <td>{bookingData.rates.daily.price}</td>
                                    <td>{bookingData.rates.daily.info}</td>
                                </tr>
                                <tr>
                                    <td>Weekly (Summer)</td>
                                    <td>{bookingData.rates.weekly.summer.price}</td>
                                    <td>{bookingData.rates.weekly.summer.info}</td>
                                </tr>
                                <tr>
                                    <td>Weekly (Winter)</td>
                                    <td>{bookingData.rates.weekly.winter.price}</td>
                                    <td>{bookingData.rates.weekly.winter.info}</td>
                                </tr>
                                <tr>
                                    <td>Long Term</td>
                                    <td>$</td>
                                    <td>{bookingData.rates.longTerm}</td>
                                </tr>
                                <tr>
                                    <td>Cleaning Fee</td>
                                    <td>{bookingData.rates.cleaningFee}</td>
                                    <td>(See fine print below for details)</td>
                                </tr>
                                <tr>
                                    <td>Security Deposit</td>
                                    <td>{bookingData.rates.deposit.price}</td>
                                    <td>(See fine print below for details)</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='col-12 d-flex justify-content-center text-center'>
                            <p>{bookingData.rates.deposit.info}</p>
                            
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <p>Forms of payment</p>
                        </div>    
                    </Modal.Body>
            </Modal>
        </>
    )

}