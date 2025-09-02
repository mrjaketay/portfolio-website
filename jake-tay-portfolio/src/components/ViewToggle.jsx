import { useView } from '../context/ViewContext';
import './ViewToggle.css';

export default function ViewToggle() {
  const { currentView, setCurrentView } = useView();

  return (
    <div className="view-toggle-container">
      <div className="view-toggle">
        <button 
          className={currentView === 'va' ? 'active' : ''}
          onClick={() => setCurrentView('va')}
        >
          👨‍💼 Virtual Assistant
        </button>
        <button 
          className={currentView === 'tech' ? 'active' : ''}
          onClick={() => setCurrentView('tech')}
        >
          💻 Technical Support
        </button>
      </div>
    </div>
  );
}