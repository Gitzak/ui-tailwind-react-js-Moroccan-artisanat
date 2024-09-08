import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Spinner } from "../spinner/Spinner";

const MainLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
