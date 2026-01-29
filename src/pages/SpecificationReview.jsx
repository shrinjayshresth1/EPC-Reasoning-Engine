import { useState } from 'react';
import Header from '../components/layout/Header';
import { IoSearchOutline, IoDocumentTextOutline, IoGitCompareOutline, IoBookmarkOutline } from 'react-icons/io5';
import './SpecificationReview.css';

const SpecificationReview = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const specifications = [
        {
            id: 1,
            type: 'STANDARD: IS (INDIAN STANDARD)',
            title: 'IS:875 Section 4.2 (Wind Loads)',
            relevance: 96,
            excerpt: '...the design wind pressure at any height shall be calculated by the relationship Pz = 0.6 Vz² where Vz is the design wind speed...',
            highlights: ['wind pressure']
        },
        {
            id: 2,
            type: 'PROJECT SPEC: CIV-001',
            title: 'Section 3.4 - Concrete Permeability',
            relevance: 88,
            excerpt: 'Concrete for foundations shall meet the permeability standards defined in ISO 7031 with maximum penetration depth...',
            highlights: ['permeability']
        },
        {
            id: 3,
            type: 'STANDARD: ASME B16.5',
            title: 'Pipe Flanges and Flanged Fittings',
            relevance: 74,
            excerpt: 'Table 2-11 Pressure-Temperature Ratings for Group 1.1 Materials...',
            highlights: []
        }
    ];

    const highlightText = (text, highlights) => {
        if (!highlights || highlights.length === 0) return text;

        let result = text;
        highlights.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            result = result.replace(regex, '<mark>$1</mark>');
        });

        return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };

    return (
        <div className="page specification-review">
            <Header title="SPECIFICATION REVIEW" showSearch showMenu />

            <div className="search-section">
                <div className="search-bar">
                    <IoSearchOutline className="search-icon" />
                    <input
                        type="text"
                        placeholder="Find clauses, specs, standards..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="filters">
                    <select className="filter-select">
                        <option>Document Type</option>
                        <option>Standard</option>
                        <option>Project Spec</option>
                    </select>
                    <select className="filter-select">
                        <option>Standard</option>
                        <option>IS</option>
                        <option>ASME</option>
                        <option>ISO</option>
                    </select>
                    <select className="filter-select">
                        <option>Project</option>
                        <option>All Projects</option>
                    </select>
                </div>

                <div className="results-count">
                    42 RESULTS FOUND ACROSS 12 DOCUMENTS
                </div>
            </div>

            <div className="specifications-list">
                {specifications.map((spec) => (
                    <div key={spec.id} className="spec-card">
                        <div className="spec-header">
                            <span className="spec-type">{spec.type}</span>
                            <span className="relevance-badge">{spec.relevance}% RELEVANCE</span>
                        </div>
                        <h3 className="spec-title">{spec.title}</h3>
                        <div className="spec-excerpt">
                            "{highlightText(spec.excerpt, spec.highlights)}"
                        </div>
                        <div className="spec-actions">
                            <button className="spec-action-btn">
                                <IoDocumentTextOutline />
                                VIEW PDF
                            </button>
                            <button className="spec-action-btn">
                                <IoGitCompareOutline />
                                COMPARE
                            </button>
                            <button className="spec-action-btn icon-only">
                                <IoBookmarkOutline />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecificationReview;
