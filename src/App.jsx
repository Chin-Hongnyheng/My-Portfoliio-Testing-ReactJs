import { useState } from 'react'
import './App.css'

function StatusBadge({ isBusy, onToggle }) {
  return (
    <button
      type="button"
      className={`status-badge ${isBusy ? "busy" : "available"}`}
      onClick={onToggle}
      title="Click to toggle availability"
    >
      <span className="status-indicator">
        <span className="status-ping"></span>
        <span className="status-dot"></span>
      </span>
      <span className="status-text">
        {isBusy ? "Busy Learning" : "Open to Work"}
      </span>
    </button>
  )
}

function App() {
  const [isBusy, setIsBusy] = useState(false)

  return (
    <main className="app-container">
      {/* Background ambient lighting aura */}
      <div className="glow-aura" aria-hidden="true"></div>

      {/* Main Glassmorphic Profile Card */}
      <div className="profile-card">
        {/* Header: Avatar Monogram & Live Status */}
        <div className="card-header">
          <div className="avatar-wrap">
            <div className="avatar-gradient">
              <span className="avatar-initials">CH</span>
            </div>
          </div>
          <StatusBadge 
            isBusy={isBusy} 
            onToggle={() => setIsBusy((prev) => !prev)} 
          />
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">Chin Hongnyheng</h1>
          <p className="profile-role">Aspiring Full-Stack Developer &amp; Vibe Coder</p>
        </div>

        {/* Mission Statement / Bio */}
        <div className="profile-bio-box">
          <p className="profile-bio">
            My goal is to become a <strong>full-stack programmer</strong> that can develop web applications from scratch and also become a <strong>professional vibe coder with antigravity</strong>.
          </p>
        </div>

        {/* Core Competencies / Tags */}
        <div className="tags-container">
          <span className="tag">Full-Stack Development</span>
          <span className="tag">Web From Scratch</span>
          <span className="tag highlight">✦ Antigravity Vibe Coder</span>
          <span className="tag">React &amp; Modern Web</span>
        </div>

        {/* Card Footer with Current Status Note */}
        <div className="card-footer">
          <div className="status-hint">
            <span className="hint-dot"></span>
            <span className="hint-value">
              {isBusy ? "Currently focused on deep learning & building" : "Ready for web projects & full-stack opportunities"}
            </span>
          </div>
          <span className="toggle-tip">click badge to toggle</span>
        </div>
      </div>
    </main>
  )
}

export default App

