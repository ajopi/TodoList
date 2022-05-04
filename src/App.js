import React, { useState } from 'react';
import Create from './Components/Create';
import Layout from './Components/Layout';
import Ongoing from './Components/Ongoing';
import { data } from './data'
import './App.css';

function App() {
  const [myData, setMyData] = useState(data);

  return(
    <>
     <Layout>
       <Create myData={myData} setMyData={setMyData} />
       <div className='container pt-5'>
          <div className='bg-spacer py-3 rounded-pill text-white'>
            My To do List
          </div>
        </div>
       <Ongoing myData={myData}/>
     </Layout>
    </>
  );
}

export default App;
