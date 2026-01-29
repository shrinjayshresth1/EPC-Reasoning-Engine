import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import { IoMailOutline, IoShieldCheckmarkOutline, IoMoonOutline, IoShareSocialOutline, IoChevronForwardOutline, IoExitOutline } from 'react-icons/io5';
import './Settings.css';

const Settings = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('profile');
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [twoFactor, setTwoFactor] = useState(true);

    return (
        <div className="page settings">
            <Header title="SETTINGS" showMenu />

            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    Profile
                </button>
                <button
                    className={`tab ${activeTab === 'notifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('notifications')}
                >
                    Notifications
                </button>
                <button
                    className={`tab ${activeTab === 'system' ? 'active' : ''}`}
                    onClick={() => setActiveTab('system')}
                >
                    System
                </button>
            </div>

            <div className="settings-content">
                {activeTab === 'profile' && (
                    <>
                        <div className="profile-section">
                            <div className="profile-card">
                                <div className="profile-avatar">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" alt="Profile" />
                                    <div className="profile-verified">
                                        <IoShieldCheckmarkOutline />
                                    </div>
                                </div>
                                <div className="profile-info">
                                    <h2 className="profile-name">John Smith</h2>
                                    <p className="profile-role">SENIOR ENGINEER</p>
                                    <p className="profile-company">Global EPC Solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="section-title">ACCOUNT SECURITY</h3>

                            <div className="setting-item">
                                <div className="setting-info">
                                    <IoMailOutline className="setting-icon" />
                                    <span className="setting-label">Email Notifications</span>
                                </div>
                                <label className="toggle">
                                    <input
                                        type="checkbox"
                                        checked={emailNotifications}
                                        onChange={(e) => setEmailNotifications(e.target.checked)}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>

                            <div className="setting-item">
                                <div className="setting-info">
                                    <IoShieldCheckmarkOutline className="setting-icon" />
                                    <span className="setting-label">Two-Factor Authentication</span>
                                </div>
                                <label className="toggle">
                                    <input
                                        type="checkbox"
                                        checked={twoFactor}
                                        onChange={(e) => setTwoFactor(e.target.checked)}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="section-title">APPEARANCE</h3>

                            <div className="setting-item">
                                <div className="setting-info">
                                    <IoMoonOutline className="setting-icon" />
                                    <span className="setting-label">Display Mode</span>
                                </div>
                                <div className="mode-toggle">
                                    <button
                                        className={`mode-btn ${theme === 'light' ? 'active' : ''}`}
                                        onClick={() => theme === 'dark' && toggleTheme()}
                                    >
                                        LIGHT
                                    </button>
                                    <button
                                        className={`mode-btn ${theme === 'dark' ? 'active' : ''}`}
                                        onClick={() => theme === 'light' && toggleTheme()}
                                    >
                                        DARK
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="section-title">INTEGRATIONS</h3>

                            <div className="setting-item clickable">
                                <div className="setting-info">
                                    <IoShareSocialOutline className="setting-icon" />
                                    <div>
                                        <div className="setting-label">SharePoint</div>
                                        <div className="setting-status">CONNECTED</div>
                                    </div>
                                </div>
                                <IoChevronForwardOutline className="chevron-icon" />
                            </div>
                        </div>

                        <button className="sign-out-btn">
                            <IoExitOutline />
                            SIGN OUT
                        </button>

                        <div className="version-info">
                            VERSION 2.4.1 (BUILD 880) • EPC ENGINE V1.2
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Settings;
