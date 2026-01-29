import { useState } from 'react';
import { IoArrowBack, IoEllipsisVertical, IoFlashOutline, IoSend, IoAttach, IoArrowUp, IoDocument } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './AIChat.css';

const AIChat = () => {
    const navigate = useNavigate();
    const [inputMessage, setInputMessage] = useState('');

    const messages = [
        {
            id: 1,
            type: 'user',
            content: 'If supplier delays 30 days, what are the liquidated damages under current contract terms?',
            timestamp: '10:42 AM'
        },
        {
            id: 2,
            type: 'ai',
            content: 'Analysis of FIDIC Silver Book Clause 12.1 and Particular Conditions reveals the following impact for a 30-day delay:',
            reliability: 92,
            sections: [
                {
                    icon: '⚖',
                    title: 'LIQUIDATED DAMAGES',
                    description: '3% of Contract Price. Clause 12.1 specifies LDs at 0.1% per day of delay.'
                },
                {
                    icon: '⏱',
                    title: 'EXTENSION OF TIME',
                    description: 'Supplier eligible for EOT only if delay is due to Employer-responsible causes per Clause 8.4.'
                }
            ],
            documents: [
                { name: 'FIDIC_SILVER_2017.PDF', icon: '📄' },
                { name: 'PARTICULAR_COND_V2.DOCX', icon: '📄' }
            ]
        }
    ];

    const actionButtons = [
        { label: 'CALCULATE CAP', action: () => { } },
        { label: 'FORCE MAJEURE', action: () => { } },
        { label: 'GENERATE MEMO', action: () => { } }
    ];

    const handleSend = () => {
        if (inputMessage.trim()) {
            // Handle send message
            setInputMessage('');
        }
    };

    return (
        <div className="page ai-chat">
            <div className="chat-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <IoArrowBack />
                </button>
                <div className="chat-header-content">
                    <h1 className="chat-title">Penalty clauses for supplier delay</h1>
                    <p className="chat-subtitle">AI REASONING CONSOLE</p>
                </div>
                <button className="menu-btn">
                    <IoEllipsisVertical />
                </button>
            </div>

            <div className="chat-messages">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.type}`}>
                        {message.type === 'user' ? (
                            <>
                                <div className="message-bubble user-bubble">
                                    <p className="message-text">{message.content}</p>
                                </div>
                                <span className="message-time">{message.timestamp}</span>
                            </>
                        ) : (
                            <div className="ai-message-container">
                                <div className="ai-header">
                                    <div className="ai-badge">
                                        <IoFlashOutline className="ai-icon" />
                                        <span>AI ASSISTANT</span>
                                    </div>
                                    <div className="reliability-badge">
                                        <span className="reliability-icon">✓</span>
                                        <span>{message.reliability}% RELIABLE</span>
                                    </div>
                                </div>

                                <div className="message-bubble ai-bubble">
                                    <p className="ai-intro-text">{message.content}</p>

                                    {message.sections && message.sections.map((section, idx) => (
                                        <div key={idx} className="info-section">
                                            <div className="section-header">
                                                <span className="section-icon">{section.icon}</span>
                                                <span className="section-title">{section.title}</span>
                                            </div>
                                            <p className="section-description">{section.description}</p>
                                        </div>
                                    ))}

                                    {message.documents && (
                                        <div className="documents-list">
                                            {message.documents.map((doc, idx) => (
                                                <div key={idx} className="document-item">
                                                    <IoDocument className="doc-icon" />
                                                    <span className="doc-name">{doc.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="chat-actions">
                <div className="action-buttons">
                    {actionButtons.map((btn, idx) => (
                        <button key={idx} className="action-btn" onClick={btn.action}>
                            {btn.label}
                        </button>
                    ))}
                </div>

                <div className="chat-input-container">
                    <button className="attach-btn">
                        <IoAttach />
                    </button>
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Ask a legal or technical question..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button className="send-btn" onClick={handleSend}>
                        <IoArrowUp />
                    </button>
                </div>

                <div className="context-info">
                    CONTEXT: NEOM-H14-POWER • REVISION 4.2
                </div>
            </div>
        </div>
    );
};

export default AIChat;
