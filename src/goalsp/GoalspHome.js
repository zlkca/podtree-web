import React from 'react';
import { QRCodeCanvas } from "qrcode.react";
import Header from "../components/Header"
import './GoalspHome.css';

export const GoalspHome = () => {
    const appDownloadLink = "https://play.google.com/store/apps/details?id=com.yocompute.goalsp&pli=1";
    return <div>
        <Header />
        <div className="hero-goalsp">
            <div className="hero-goalsp-content">
                <h1 className="hero-goalsp-title">Goalsp - Goal and Task Tracker</h1>
                <p className="hero-goalsp-subtitle">
                    Discover the best way to achieve your goals with our innovative tools.
                </p>
                <div className="qr-section">
                <a href={appDownloadLink}>
                    <h3>Download the App</h3>
                </a>
                    <QRCodeCanvas
                        value={appDownloadLink}
                        size={150}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        includeMargin={true} /* Adds margin around the QR code */
                    />
                </div>
            </div>
        </div>
    </div>
}