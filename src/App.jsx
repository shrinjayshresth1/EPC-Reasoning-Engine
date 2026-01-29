import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import BottomNav from './components/layout/BottomNav';
import SpecificationReview from './pages/SpecificationReview';
import Settings from './pages/Settings';
import ProjectDashboard from './pages/ProjectDashboard';
import VendorManagement from './pages/VendorManagement';
import RiskAnalysis from './pages/RiskAnalysis';
import AIChat from './pages/AIChat';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Navigate to="/projects" replace />} />
                        <Route path="/projects" element={<ProjectDashboard />} />
                        <Route path="/search" element={<SpecificationReview />} />
                        <Route path="/analyze" element={<RiskAnalysis />} />
                        <Route path="/vendor" element={<VendorManagement />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/chat" element={<AIChat />} />
                    </Routes>
                    <BottomNav />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;