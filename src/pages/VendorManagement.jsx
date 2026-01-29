import { useState } from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';
import { IoStatsChartOutline, IoSparklesOutline } from 'react-icons/io5';
import './VendorManagement.css';

const VendorManagement = () => {
    const [activeTab, setActiveTab] = useState('materials');

    return (
        <div className="page vendor-management">
            <Header title="Vendor Management" showSearch showMenu />

            <div className="vendor-header">
                <div className="project-info">
                    <span className="project-label">PROJECT PHASE 2</span>
                    <h1 className="project-name">Structural Procurement</h1>
                </div>
                <div className="budget-info">
                    <span className="budget-label">EST. BUDGET</span>
                    <span className="budget-value">$4.5M</span>
                </div>
            </div>

            <div className="tabs">
                <button className={`tab ${activeTab === 'materials' ? 'active' : ''}`} onClick={() => setActiveTab('materials')}>
                    MATERIALS
                </button>
                <button className={`tab ${activeTab === 'services' ? 'active' : ''}`} onClick={() => setActiveTab('services')}>
                    SERVICES
                </button>
                <button className={`tab ${activeTab === 'equipment' ? 'active' : ''}`} onClick={() => setActiveTab('equipment')}>
                    EQUIPMENT
                </button>
            </div>

            <div className="comparison-header">
                <span className="comparison-label">COMPARISON MATRIX (3)</span>
                <button className="market-data-btn">MARKET DATA</button>
            </div>

            <div className="vendor-table">
                <div className="table-header">
                    <span className="header-cell vendor-col">VENDOR</span>
                    <span className="header-cell">QUOTE</span>
                    <span className="header-cell">LEAD</span>
                </div>
                <div className="vendor-row">
                    <div className="vendor-info">
                        <div className="vendor-logo">
                            <span className="vendor-initial">T</span>
                        </div>
                        <div>
                            <div className="vendor-name">Tata Steel</div>
                            <div className="vendor-grade">A+ GRADE</div>
                        </div>
                    </div>
                    <div className="vendor-quote">$1.24M</div>
                    <div className="vendor-lead">14d</div>
                </div>
            </div>

            <div className="vendor-detail-card">
                <div className="vendor-detail-header">
                    <div className="vendor-detail-logo">
                        <IoStatsChartOutline />
                    </div>
                    <div className="vendor-detail-info">
                        <h2 className="vendor-detail-name">TATA STEEL INTEL</h2>
                        <div className="vendor-rating">
                            <span className="rating-stars">★ 4.8 / 5.0</span>
                            <span className="verified-badge">VERIFIED PARTNER</span>
                        </div>
                    </div>
                    <button className="chart-btn">
                        <IoStatsChartOutline />
                    </button>
                </div>

                <div className="vendor-metrics">
                    <div className="metric-box">
                        <div className="metric-label">ON-TIME RATE</div>
                        <div className="metric-value-large">95%</div>
                    </div>
                    <div className="metric-box">
                        <div className="metric-label">AVG LEAD TIME</div>
                        <div className="metric-value-large">12 Days</div>
                    </div>
                </div>

                <div className="quote-section">
                    <div className="quote-header">
                        <span className="quote-label">ACTIVE QUOTE: TX-902</span>
                        <button className="configure-btn">CONFIGURE</button>
                    </div>

                    <div className="quote-details">
                        <div className="quote-row">
                            <span className="quote-label-text">Material Specification</span>
                            <span className="quote-value">Steel (1,000 Tonnes)</span>
                        </div>
                        <div className="quote-row">
                            <span className="quote-label-text">Unit Cost (FOB)</span>
                            <span className="quote-value">$1,240 / Ton</span>
                        </div>
                    </div>

                    <div className="ai-insight">
                        <IoSparklesOutline className="ai-icon" />
                        <span className="ai-text">AI: PRICE IS 5.2% BELOW CORRIDOR</span>
                    </div>
                </div>

                <div className="action-buttons">
                    <Button variant="secondary" fullWidth>NEGOTIATE</Button>
                    <Button variant="primary" fullWidth>PLACE ORDER</Button>
                </div>
            </div>
        </div>
    );
};

export default VendorManagement;
