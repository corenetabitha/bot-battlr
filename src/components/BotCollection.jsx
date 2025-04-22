import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

function BotCollection({ enlistBot, bots }) {

  

  console.log(bots);
  
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClick={() => enlistBot(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;