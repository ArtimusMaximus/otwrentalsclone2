import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import {
    coloriverBookingInfo1,
    coloriverBookingInfo2,
    sunsetbeachProperty1,
    sunsetbeachProperty2,
    ranchoPropertyInfo,
    sealbeachPropertyInfo,
    lakeArrowPropertyInfo,
    initialState } from './bookingdata';
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaCcDiscover } from 'react-icons/fa'



export default () => {
    const location = useLocation();

    const [bookingData, setBookingData] = useState(initialState);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        return location.pathname === '/coloradoriver1' ? setBookingData(coloriverBookingInfo1) 
        : location.pathname === '/coloradoriver2' ? setBookingData(coloriverBookingInfo2)
        : location.pathname === '/sunsetbeach1' ? setBookingData(sunsetbeachProperty1)
        : location.pathname === '/sunsetbeach2' ? setBookingData(sunsetbeachProperty2)
        : location.pathname === '/ranchomirage' ? setBookingData(ranchoPropertyInfo)
        : location.pathname === '/lakearrowhead' ? setBookingData(lakeArrowPropertyInfo)
        : location.pathname === '/sealbeach' ? setBookingData(sealbeachPropertyInfo)
        : setBookingData(initialState)
    }, [location])


    return (
        <>
            <a 
                className='btn btn-lg'
                style={{color: 'white', backgroundColor: '#95d6fa'}}
                onClick={() => {setShowModal(true);}}           
            >Booking Info</a>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body onClick={() => setShowModal(false)}>
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
                                    <td>*(See below for details)</td>
                                </tr>
                                <tr>
                                    <td>Security Deposit</td>
                                    <td>{bookingData.rates.deposit.price}</td>
                                    <td>*(See below for details)</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='col-12 d-flex justify-content-center text-center'>
                            <p style={{fontSize: '10px'}}>*{bookingData.rates.deposit.info}</p>
                            
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <p>{<FaCcMastercard size={75} />} {<FaCcVisa size={75} />} {<FaCcAmex size={75} />} {<FaCcDiscover size={75} />}</p>
                        </div>    
                    </Modal.Body>
            </Modal>
        </>
    )

}