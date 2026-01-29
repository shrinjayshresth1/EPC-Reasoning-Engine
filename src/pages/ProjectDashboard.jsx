import { useState } from 'react';
import Header from '../components/layout/Header';
import { IoCalendarOutline, IoWalletOutline, IoWarningOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './ProjectDashboard.css';

const ProjectDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const budgetItems = [
        { name: 'Civil Works', amount: '₹42.5 Cr', icon: '●' },
        { name: 'Procurement', amount: '₹28.0 Cr', icon: '●' },
        { name: 'Legal & Permits', amount: '₹15.2 Cr', icon: '●' },
        { name: 'RESERVES', amount: '₹14.3 Cr', icon: '', isReserve: true }
    ];

    const milestones = [
        { name: 'Structure: Main Overpass', progress: 46, color: 'var(--color-accent-green)' },
        { name: 'Landscaping & Paving', progress: 12, color: 'var(--color-text-tertiary)' }
    ];

    const activities = [
        {
            id: 1,
            title: 'AI Risk Analysis',
            description: 'Material cost for steel increased by 8.4%. Risk status elevated to HIGH.',
            time: '14m ago',
            icon: 'risk',
            color: 'var(--color-error)'
        },
        {
            id: 2,
            title: 'Milestone Approved',
            description: 'Rajesh Kumar approved "Foundation Phase I" completion report.',
            time: '2h ago',
            icon: 'milestone',
            color: 'var(--color-accent-green)'
        },
        {
            id: 3,
            title: 'Document Added',
            description: 'Site-Survey-Final_v2.pdf added to Project Documents.',
            time: 'Yesterday',
            icon: 'document',
            color: 'var(--color-text-tertiary)'
        }
    ];

    return (
        <div className="page project-dashboard">
            <Header title="PRJ-2024-001" showSearch showMenu />

            <div className="project-header">
                <h1 className="project-title">Highway Phase II</h1>

                <div className="completion-section">
                    <div className="completion-header">
                        <span className="completion-label">PROJECT COMPLETION</span>
                        <span className="completion-status">ON SCHEDULE</span>
                    </div>
                    <div className="completion-value">67%</div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '67%' }}></div>
                    </div>
                    <div className="target-date">
                        <IoCalendarOutline />
                        <span>Target: Dec 15, 2024</span>
                    </div>
                </div>

                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-label">
                            <IoWalletOutline />
                            BUDGET
                        </div>
                        <div className="metric-value">₹100 Cr</div>
                        <div className="metric-change positive">+2.4%</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-label">
                            <IoWarningOutline />
                            RISK LEVEL
                        </div>
                        <div className="metric-value">HIGH</div>
                        <div className="metric-badge critical">● CRITICAL</div>
                    </div>
                </div>
            </div>

            <div className="tabs">
                <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                    Overview
                </button>
                <button className={`tab ${activeTab === 'risks' ? 'active' : ''}`} onClick={() => setActiveTab('risks')}>
                    Risks
                </button>
                <button className={`tab ${activeTab === 'timeline' ? 'active' : ''}`} onClick={() => setActiveTab('timeline')}>
                    Timeline
                </button>
                <button className={`tab ${activeTab === 'docs' ? 'active' : ''}`} onClick={() => setActiveTab('docs')}>
                    Docs
                </button>
            </div>

            <div className="dashboard-content">
                <div className="section">
                    <div className="section-header">
                        <h3 className="section-title">BUDGET ALLOCATION</h3>
                        <button className="view-all-btn">View All</button>
                    </div>
                    <div className="budget-list">
                        {budgetItems.map((item, index) => (
                            <div key={index} className={`budget-item ${item.isReserve ? 'reserve' : ''}`}>
                                <div className="budget-info">
                                    {item.icon && <span className="budget-icon">{item.icon}</span>}
                                    <span className="budget-name">{item.name}</span>
                                </div>
                                <span className="budget-amount">{item.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">
                        <h3 className="section-title">UPCOMING MILESTONES</h3>
                        <IoChevronForwardOutline className="chevron-icon" />
                    </div>
                    <div className="milestones-list">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="milestone-item">
                                <div className="milestone-header">
                                    <span className="milestone-name">{milestone.name}</span>
                                    <span className="milestone-progress">{milestone.progress}%</span>
                                </div>
                                <div className="milestone-bar">
                                    <div className="milestone-fill" style={{ width: `${milestone.progress}%`, backgroundColor: milestone.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h3 className="section-title">RECENT ACTIVITY</h3>
                    <div className="activity-list">
                        {activities.map((activity) => (
                            <div key={activity.id} className="activity-item">
                                <div className="activity-icon" style={{ backgroundColor: activity.color }}></div>
                                <div className="activity-content">
                                    <h4 className="activity-title">{activity.title}</h4>
                                    <p className="activity-description">{activity.description}</p>
                                </div>
                                <span className="activity-time">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDashboard;
