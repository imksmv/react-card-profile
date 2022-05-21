import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="wrapper">
            <Info />
            <About />
            <Footer />
        </div>
    );
};

export default App;
