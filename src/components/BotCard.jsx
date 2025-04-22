import React from 'react';
import './BotCard.css';

function BotCard({ bot, onClick, onDischarge, inArmy = false }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className={`bot-card ${inArmy ? 'in-army' : ''}`}>
      <div className="bot-content" onClick={onClick}>
        <div className="bot-image-container">
          <img src={avatar_url} alt={name} className="bot-avatar" />
          <span className={`bot-class ${bot_class.toLowerCase()}`}>{bot_class}</span>
        </div>
        
        <div className="bot-info">
          <h3 className="bot-name">{name}</h3>
          <p className="bot-catchphrase">{catchphrase}</p>
          
          <div className="bot-stats">
            <div className="stat">
              <span className="stat-icon">❤️</span>
              <span className="stat-value">{health}</span>
            </div>
            <div className="stat">
              <span className="stat-icon">⚔️</span>
              <span className="stat-value">{damage}</span>
            </div>
            <div className="stat">
              <span className="stat-icon">🛡️</span>
              <span className="stat-value">{armor}</span>
            </div>
          </div>
        </div>
      </div>

      {inArmy && (
        <button 
          className="discharge-btn" 
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(id);
          }}
          aria-label={`Discharge ${name}`}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default BotCard;