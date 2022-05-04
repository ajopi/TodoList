import React, { useEffect, useState } from 'react';

const Ongoing = ({myData}) => {
    // const [data, setData] = useState('');

    useEffect(() => {
        // console.log('data', data)
    }, [myData])

    
  return (
    <>
        <div className='container py-5'>
            <div className='bg-create py-4 content-rounded'>
                <div className='container bg-create-title rounded-pill p-2 w-75'>
                    On Going
                </div>
                    <div className='container w-100 d-flex flex-column align-items-center py-4 gap-4'>
                        <div className='container bg-create-title rounded-3 p-2 w-75'>
                            {myData?.map((item) => {
                                return(
                                    <div className='bg-primary' key={item.id}>
                                        <p>{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                     
                    </div>
            </div>
        </div>
    </>
  )
}

export default Ongoing