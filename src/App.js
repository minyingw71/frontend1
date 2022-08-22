import { useState } from 'react';

import List from './components/List'
import Edit from './components/Edit';
import './App.css'


function App() {

const [data, setData] = useState([])


  return (
    <div className='app'>
      <Edit add={setData}  />
      <List listData={data}  deleteData={setData}/>
    </div>
  );
}

export default App;
