import { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';


export const CatagoryContext = createContext();

function App() {
  const [catagory, setCatagory] = useState('laptop');
  return (
    <CatagoryContext.Provider value={[catagory ,setCatagory]}>
      <p>Count value : {catagory}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CatagoryContext.Provider>
  );
}

export default App;
