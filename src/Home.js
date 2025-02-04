import React from "react"
import Header from "./components/Header"
import "./Home.css"
export const Home = () => {
    return <div>
        <Header />
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Simplify Your School Management</h1>
                <p className="hero-subtitle">
                    Streamline operations, enhance communication, and provide better care with our comprehensive school management software
                </p>
                <a href="https://admin.podtree.ca/signup">
                <button className="hero-button">Try the Demo</button>
                </a>
            </div>
        </div>
    </div>
}