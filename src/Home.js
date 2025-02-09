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
                    <button className="hero-button">Start for Free</button>
                </a>
                <p className="hero-note">Free to use for 6 months</p>
                <p className="hero-note">No credit card required | Get started quickly</p>
            </div>
        </div>
        <div className="features">
            <h2 className="features-title">Key Features</h2>
            <div className="feature">
                <h3 className="feature-title">Enrollment Management</h3>
                <p className="feature-description">Easy registration & tracking.</p>
            </div>
            <div className="feature">
                <h3 className="feature-title">Invoice Management</h3>
                <p className="feature-description">Automated invoicing, online payments</p>
            </div>
            <div className="feature">
                <h3 className="feature-title">Attendance Tracking</h3>
                <p className="feature-description">Daily check-ins/check-outs.</p>
            </div>
        </div>
    </div>
}