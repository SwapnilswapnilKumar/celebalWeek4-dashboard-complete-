import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { MantineProvider } from '@mantine/core';  

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Ecommerce, Orders, Calendar, Employees, Stacked,
  Customers, Kanban, Line, Area, Bar, Pie, Financial,Table } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>  
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
            
              <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <button
                  data-tooltip-id="settings-tooltip"
                  data-tooltip-content="Settings"
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: '50%' }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
                <Tooltip id="settings-tooltip" place="top" effect="solid" />
              </div>

              
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}

             
              <div
                className={
                  activeMenu
                    ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
                    : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
                }
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                  <Navbar />
                </div>

                <div>
                  {themeSettings && <ThemeSettings />}

                  <Routes>
                    {/* Dashboard */}
                    <Route path="/" element={<Ecommerce />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />

                    {/* Pages */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* Apps */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/table" element={<Table />} />
                    {/* Charts */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/stacked" element={<Stacked />} />
                  </Routes>
                </div>

                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </LocalizationProvider>
    </MantineProvider>
  );
};

export default App;
