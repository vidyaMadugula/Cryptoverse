

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import './App.css';
import 'antd/dist/reset.css';

const App = () => {
  console.log("entered");
  return (
    <Router>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout> 
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="//crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className='footer'>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link className='f-link' to="/">Home</Link>
              <Link className='f-link' to='/cryptocurrencies'>Cryptocurrencies</Link>
              <Link className='f-link' to='/exchanges'>Exchanges</Link>
              <Link className='f-link' to='/news'>News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;









