import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onClick={() => releaseBot(bot)}
          onDischarge={() => dischargeBot(bot.id)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;