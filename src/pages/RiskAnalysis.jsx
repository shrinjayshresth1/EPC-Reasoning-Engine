import { useState } from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';
import { IoFlashOutline } from 'react-icons/io5';
import './RiskAnalysis.css';

const RiskAnalysis = () => {
    const risks = [
        { id: 22, position: { row: 3, col: 2 }, color: '#00ff88', label: '#22' },
        { id: 14, position: { row: 2, col: 2 }, color: '#4a3f2f', label: '#14' },
        { id: 10, position: { row: 1, col: 2 }, color: '#ff8800', label: '#10' },
        { id: 9, position: { row: 1, col: 3 }, color: '#ff4444', label: '#9' }
    ];

    const mitigationStrategies = [
        {
            id: 1,
            text: 'Diversify vendor list for critical steel components immediately.'
        },
        {
            id: 2,
            text: 'Implement 15% safety stock buffer for Phase III site preparation.'
        },
        {
            id: 3,
            text: 'Renegotiate penalty clauses to include schedule recovery incentives.'
        }
    ];

    return (
        <div className="page risk-analysis">
            <Header title="Risk Analysis" showSearch />

            <div className="risk-header">
                <div className="risk-project">Highway Phase II</div>
                <div className="risk-version">V3.0.1</div>
            </div>

            <div className="risk-content">
                <h2 className="section-title-large">Risk Heatmap</h2>

                <div className="heatmap-container">
                    <div className="heatmap-grid">
                        {[...Array(9)].map((_, index) => {
                            const row = Math.floor(index / 3);
                            const col = index % 3;
                            const risk = risks.find(r => r.position.row === row && r.position.col === col);

                            let bgColor = '#1a1a1a';
                            if (row === 0 && col === 0) bgColor = '#2d3a2d';
                            if (row === 0 && col === 1) bgColor = '#3a2f1f';
                            if (row === 0 && col === 2) bgColor = '#3a1f1f';
                            if (row === 1 && col === 0) bgColor = '#1f2f1f';
                            if (row === 1 && col === 1) bgColor = '#2a2520';
                            if (row === 1 && col === 2) bgColor = '#3a2520';
                            if (row === 2 && col === 0) bgColor = '#1f3a2f';
                            if (row === 2 && col === 1) bgColor = '#2a2f25';
                            if (row === 2 && col === 2) bgColor = '#2a2520';

                            return (
                                <div
                                    key={index}
                                    className="heatmap-cell"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    {risk && (
                                        <div className="risk-marker" style={{ backgroundColor: risk.color }}>
                                            {risk.label}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="heatmap-labels">
                        <div className="y-axis-label">PROBABILITY</div>
                        <div className="x-axis-label">IMPACT</div>
                    </div>
                </div>

                <div className="risk-detail-card">
                    <div className="risk-detail-header">
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop"
                            alt="Risk visualization"
                            className="risk-image"
                        />
                        <div className="risk-overlay">
                            <span className="investigation-label">ACTIVE INVESTIGATION</span>
                            <h3 className="risk-title">Risk #9: Supplier ABC Delays</h3>
                            <span className="risk-badge critical">CRITICAL</span>
                        </div>
                    </div>

                    <div className="risk-metrics">
                        <div className="risk-metric">
                            <div className="metric-label">PROBABILITY</div>
                            <div className="metric-bar">
                                <div className="metric-fill" style={{ width: '80%', backgroundColor: 'var(--color-error)' }}></div>
                            </div>
                            <div className="metric-percentage">80%</div>
                        </div>
                        <div className="risk-metric">
                            <div className="metric-label">IMPACT</div>
                            <div className="metric-bar">
                                <div className="metric-fill" style={{ width: '90%', backgroundColor: 'var(--color-error)' }}></div>
                            </div>
                            <div className="metric-percentage">90%</div>
                        </div>
                    </div>

                    <div className="mitigation-section">
                        <div className="mitigation-header">
                            <IoFlashOutline className="mitigation-icon" />
                            <span className="mitigation-title">AI MITIGATION STRATEGY</span>
                        </div>

                        <div className="mitigation-list">
                            {mitigationStrategies.map((strategy) => (
                                <div key={strategy.id} className="mitigation-item">
                                    <span className="mitigation-number">{String(strategy.id).padStart(2, '0')}</span>
                                    <span className="mitigation-text">{strategy.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button variant="primary" fullWidth>Assign Mitigation</Button>
                </div>
            </div>
        </div>
    );
};

export default RiskAnalysis;
