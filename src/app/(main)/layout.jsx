import React from 'react';
import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";

const MainLayout = ({children}) => {
    return (
      <>
        <Header />
        <Navbar />
        {children}
      </>
    );
};

export default MainLayout;