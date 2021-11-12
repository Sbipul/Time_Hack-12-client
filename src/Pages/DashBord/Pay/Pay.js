import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Pay = () => {
    const {user} = useAuth()
    const [allMyOrders,setAllMyOrders] = useState([])
    const [acc,setAcc] = useState('')
    const [method,setMethod] = useState('')

    useEffect(()=> {
        fetch(`https://immense-falls-01294.herokuapp.com/order/${user?.email}`)
        .then(res => res.json())
        .then(data => setAllMyOrders(data))
    },[user?.email])

    let price = 0;
    for (const iterator of allMyOrders) {
        price = price +   parseInt(iterator?.price)
    }

    const selectedOption = e => {
        setMethod(e.target.value)
    }

    const handlePay = e => {
        setAcc(e.target.value)

    }
    // const num = 11
    const payBtn = () => {
        if (method.toString() === 'বাকী') {
            alert('বাকী তোর পু*তে ভরে দিবো মাদারচোদ')
        }
        else if(acc?.length !== 11){
            alert('Account number should have 11 charactar')
        }else if (typeof(acc) === 'string') {
            alert('Can\'t understand text')
        } else if (typeof(parseInt(acc)) === 'number') {
            alert('Kysa laga mera majak?')
        }
    }
    return (
        <Container>
            <small className="text-light">#pay_bill</small>
            {/* <div style={{height:'60vh'}} className="d-flex align-items-center justify-content-between"> */}
                <div className="row mt-5 py-5">
                <div className="col-12 col-md-6 text-center">
                        <h3>Total Price : ${price}</h3>
                        <div className="w-100 mx-auto">
                        <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" className="w-100 mx-auto" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="text-center">Select Method</p>
                        <div className="w-50 mx-auto d-flex py-3">
                        <div>
                            <input className="form-check-input" onClick={selectedOption}  value='বিকাশ' type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                বিকাশ
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input" onClick={selectedOption} value='রকেট' type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                রকেট
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input" onClick={selectedOption} value='নগদ' type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                নগদ
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input" onClick={selectedOption} value='বাকী' type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                বাকী
                            </label>
                        </div>
                        </div>
                        
                        <div className="w-100 d-flex align-items-center justify-content-center">
                            <input className="w-75 p-2 " onChange={handlePay} placeholder='Please enter your account number' type="phone" />
                            <button className="p-2 bg-danger text-light" onClick={payBtn}>{method?.toString() ? method : 'Method'}</button>
                        </div>
                        
                    </div>
                    
                </div>
            {/* </div> */}
        </Container>
    );
};

export default Pay;