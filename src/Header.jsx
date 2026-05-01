import siklabGif from "./assets/images/siklab.gif";

const HEADER_STYLES = `
  .header {
    background: var(--card-bg-solid, #020617);
    border-bottom: 4px solid var(--accent-color, #ef4444);
    box-shadow: 0 4px 20px var(--shadow, rgba(0,0,0,0.5));
    position: sticky;
    top: 0;
    z-index: 999;
    transition: background 0.3s ease, border-color 0.3s ease;
  }
  .header-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 0;
    flex-wrap: wrap;
  }
  .logo-gif {
    height: 80px;
    display: block;
  }
  .nav-tabs {
    display: flex;
    gap: 0.35rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .nav-tab {
    padding: 0.4rem 0.85rem;
    border: 2px solid rgba(239,68,68,0.5);
    background: transparent;
    color: #fca5a5;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.75rem;
    white-space: nowrap;
  }
  .nav-tab:hover { background: rgba(220,38,38,0.2); }
  .nav-tab.active {
    background: #dc2626;
    border-color: #fca5a5;
    color: white;
    box-shadow: 0 0 20px rgba(220,38,38,0.5);
  }
  
  .theme-toggle-btn {
    padding: 0.4rem 0.65rem;
    border: 2px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
  }
  .theme-toggle-btn:hover {
    background: rgba(255,255,255,0.2);
    transform: scale(1.05);
  }

  .mute-btn {
    padding: 0.4rem 0.65rem;
    border: 2px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
  }
  .mute-btn:hover {
    background: rgba(255,255,255,0.2);
    transform: scale(1.05);
  }
  .mute-btn.muted {
    border-color: rgba(239,68,68,0.6);
    background: rgba(239,68,68,0.15);
  }
  
  .header-spacer { flex: 1; }
  .max-info { 
    color: var(--accent-cyan); 
    font-size: 0.75rem; 
    flex-shrink: 0; 
    white-space: nowrap; 
    transition: color 0.3s ease;
  }
  @media (max-width: 768px) { .nav-tab { font-size: 0.68rem; padding: 0.35rem 0.6rem; } }
  @media (max-width: 480px) { .logo-text { font-size: 1.1rem; } .nav-tab { padding: 0.35rem 0.55rem; font-size: 0.62rem; } }
`;

const NAV_ITEMS = [
  { key: 'home', label: 'HOME' },
  { key: 'about', label: 'ABOUT GAME' },
  { key: 'mechanics', label: 'MECHANICS' },
  { key: 'download', label: 'DOWNLOAD' },
  { key: 'feedback', label: 'FEEDBACK' },
];

export default function Header({
  activeSection, scrollToSection,
  userCount,
  lightMode, toggleTheme,
  muted, toggleMute,
}) {
  return (
    <>
      <style>{HEADER_STYLES}</style>

      <header className="header">
        <div className="container">
          <div className="header-row">
            <div className="logo">
              <img src={siklabGif} alt="SIKLAB Logo" className="logo-gif" />
            </div>
            <div className="nav-tabs">
              {NAV_ITEMS.map(({ key, label }) => (
                <button key={key} className={`nav-tab ${activeSection === key ? 'active' : ''}`} onClick={() => scrollToSection(key)}>
                  {label}
                </button>
              ))}
            </div>
            <div className="header-spacer" />

            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            >
              {lightMode ? '🌙' : '☀️'}
            </button>

            <button
              className={`mute-btn${muted ? ' muted' : ''}`}
              onClick={toggleMute}
              aria-label={muted ? "Unmute music" : "Mute music"}
              title={muted ? "Unmute music" : "Mute music"}
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}