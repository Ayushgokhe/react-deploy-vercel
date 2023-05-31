import React, { useState } from 'react';

const Contact = () => {

   const [data, setData] = useState({
      name: '',
      email: '',
      number: ''
   })

   const InputEvent = (event) => {
      const { name, value } = event.target;

      setData((preval) => {
         return {
            ...preval,
            [name]: value,
         }
      })
   }

   const formSubmit = (e) => {
      e.preventDefault()
      alert(`My name is ${data.name} ${data.email} `)
   }
   return (
      <>
         <div className='my-5'>
            <h1 className='text-center'>Contact US</h1>\
         </div>
         <div className='container contact_div'>
            <div className='row'>
               <div className='col-md-6 col-10 mx-auto'>
                  <form onSubmit={formSubmit}>
                     <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Name' name='name' value={data.name} onChange={InputEvent} />
                     </div>
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" placeholder='Enter your Email' name='email' value={data.email} onChange={InputEvent} />
                     </div>
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Number</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder='Enter your Number' name='number' value={data.number} onChange={InputEvent} />
                     </div>

                     <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default Contact;