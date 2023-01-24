import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from './common';
import { routes } from './routes';
import { ROUTE_ROOT } from './routes/const';
import { MainLayout } from './common/component/Layout/MainLayout';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#004C97',
          borderRadius: 6,
          fontSize: 15
        }
      }}>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to={ROUTE_ROOT} />} />

            {routes.common.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={<route.component />} />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
