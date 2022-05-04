import React, { useState } from 'react';
import { addTodoList } from '../../Service';
import './Create.css'

const Create = ({myData, setMyData}) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (value) => {
        value.preventDefault()
        addTodoList(myData, setMyData, title, date);
    }

  return (
      <>
        <div className='container py-5'>
            <div className='bg-create py-4 content-rounded'>
                <div className='container bg-create-title rounded-pill p-2 w-50'>
                    Add To do List
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='container w-100 d-flex flex-column align-items-center py-4 gap-4'>
                        <div className="input-group w-75 mb-3">
                            <span className="input-group-text bg-create-label">
                                <span className='me-4'>Title</span>:
                            </span>
                            <input 
                                type="text" 
                                className="form-control bg-create-color" 
                                placeholder="Title"
                                name='title'
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group w-75 mb-3">
                            <span className="input-group-text bg-create-label">
                                <span className='me-4'>Date</span>:
                            </span>
                            <input 
                                type="date" 
                                className="form-control bg-create-color" 
                                // placeholder="Date"
                                name='date'
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className='d-flex justify-content-end w-75'>
                            <button 
                                className='btn btn-success rounded-pill py-2 px-4 btn-shadow rounded'
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Create