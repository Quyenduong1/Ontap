import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
function MainLayout() {
  return (
    <div className={styles.container}>
      <Header />


      <Outlet />


      <Footer />
    </div>
  );
}

export default MainLayout