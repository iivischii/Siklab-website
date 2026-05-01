import { forwardRef } from 'react';
import { useScrollAnimation } from './Usescrollanimation';

const DOWNLOAD_STYLES = `
  @keyframes dlPopUp { 
    from { opacity:0; transform:translateY(60px) scale(0.9); } 
    to { opacity:1; transform:translateY(0) scale(1); } 
  }
  @keyframes cautionScroll {
    from { background-position: 0 0; }
    to   { background-position: 60px 0; }
  }
  .download-section {
    min-height: 100vh;
    padding: 80px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(60px) scale(0.9);
  }
  .download-section.animate-in {
    animation: dlPopUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  .download-inner {
    max-width: 1100px; width: 100%;
    display: flex; align-items: center;
    justify-content: space-between; gap: 48px;
  }

  .download-card { 
    flex: 0 0 52%;
    border-radius: 28px; 
    overflow: hidden; 
    box-shadow: 0 24px 60px var(--shadow-heavy); 
    background: #000; 
    border: 3px solid var(--accent-cyan); 
    line-height: 0;
  }
  .download-video { 
    width: 100%; height: 100%;
    display: block; object-fit: cover;
  }

  .download-buttons {
    flex: 0 0 40%; display: flex; flex-direction: column;
    align-items: flex-start; gap: 16px;
    color: var(--text-primary);
  }
  .download-heading { 
    margin: 0; font-size: 32px; 
    letter-spacing: 0.08em; text-transform: uppercase; 
    color: var(--accent-cyan);
  }
  .download-caption { margin: 0 0 8px; font-size: 16px; opacity: 0.9; }
  .download-btn-group { display: flex; flex-direction: column; gap: 16px; width: 100%; }

  .download-btn-wrap {
    position: relative;
    width: 100%;
  }

  /* Button itself stays pretty — just slightly dimmed */
  .download-btn { 
    display: flex; 
    align-items: center; 
    gap: 12px; 
    background: var(--card-bg-solid); 
    border: 2px solid var(--accent-cyan); 
    padding: 12px 20px; 
    border-radius: 12px; 
    color: var(--text-primary); 
    font-family: 'Courier New', monospace; 
    width: 100%;
    position: relative;
    overflow: hidden;
    text-align: left;
    cursor: not-allowed;
    opacity: 0.65;
    filter: saturate(0.5);
  }

  /* Animated caution tape stripes over the button */
  .download-btn-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      rgba(0, 0, 0, 0.22) 10px,
      rgba(0, 0, 0, 0.22) 20px
    );
    pointer-events: none;
    z-index: 2;
    animation: cautionScroll 1.5s linear infinite;
  }

  /* SOON badge floats above the tape */
  .download-soon {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    z-index: 3;
    background: var(--accent-cyan, #22d3ee);
    color: #000;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 3px 8px;
    border-radius: 4px;
    pointer-events: none;
    text-transform: uppercase;
  }

  .download-img { width: 40px; height: 40px; object-fit: contain; flex-shrink: 0; }
  .download-btn-label { font-size: 0.72rem; opacity: 0.8; margin-bottom: 2px; }
  .download-btn-store { font-size: 1rem; font-weight: bold; }

  @media (max-width: 1024px) {
    .download-section { padding: 60px 40px; }
    .download-inner { flex-direction: column; gap: 28px; }
    .download-card { width: 100%; max-width: 480px; }
  }
`;

const DownloadSection = forwardRef(function DownloadSection(_props, ref) {
  const [animRef, isVisible] = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <>
      <style>{DOWNLOAD_STYLES}</style>
      <section
        className={`download-section section-full ${isVisible ? 'animate-in' : ''}`}
        ref={(node) => {
          animRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        id="download"
      >
        <div className="download-inner">

          <div className="download-card">
            <video className="download-video" autoPlay loop muted playsInline>
              <source src="/src/assets/images/TRAILER.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="download-buttons">
            <h2 className="download-heading">Download Now</h2>
            <p className="download-caption">Available on mobile</p>
            <div className="download-btn-group">

              <div className="download-btn-wrap">
                <button className="download-btn" disabled>
                  <img src="/src/assets/images/girl.png" alt="APK" className="download-img" />
                  <div>
                    <div className="download-btn-label">Download on</div>
                    <div className="download-btn-store">APK File</div>
                  </div>
                </button>
                <span className="download-soon">Soon</span>
              </div>

              <div className="download-btn-wrap">
                <button className="download-btn" disabled>
                  <img src="/src/assets/images/boy.png" alt="itch.io" className="download-img" />
                  <div>
                    <div className="download-btn-label">Play the preview on</div>
                    <div className="download-btn-store">itch.io</div>
                  </div>
                </button>
                <span className="download-soon">Soon</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
});

export default DownloadSection;