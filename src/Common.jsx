import React from 'react'
import { NavLink } from 'react-router-dom';
import './App.css'

const Common = (props) => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row jiren'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1>
                          {props.name} <strong>React.js</strong>
                        </h1>
                        <h4 className='my-3'>
                            We make some beautiful websites
                        </h4>
                        <div className='mt-3'>
                            <NavLink to={props.visit} className='btn btn-dark'>{props.btnname}</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img id='img-1' src={props.imgsrc} className='img-fluid animated' alt='hey'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Common
