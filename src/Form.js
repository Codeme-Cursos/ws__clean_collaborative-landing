import React from 'react'
import Logo from './images/Banner1.png'

const Form = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={Logo} alt="" width="100%"/>
                </div>
                <form className="col-md-6" action="">
                    <div className="form-group">
                        <label htmlFor="">Email address</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input className="form-control" type="password" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form