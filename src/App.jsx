import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bots data from the server
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('http://localhost:3000/bots');
        const data = await response.json();
        setBots(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bots:', error);
        setLoading(false);
      }
    };

    fetchBots();
  }, []);
  console.log(bots);
  
  // Add a bot to the army
  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release a bot from the army
  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  // Discharge a bot permanently
  const dischargeBot = async (id) => {
    try {
      await fetch(`http://localhost:8001/bots/${id}`, {
        method: 'DELETE'
      });
      
      // Remove from army and main list
      setArmy(army.filter(bot => bot.id !== id));
      setBots(bots.filter(bot => bot.id !== id));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading bots...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
        <p>Build your bot army!</p>
      </header>
      
      <main>
        <YourBotArmy 
          army={army} 
          releaseBot={releaseBot} 
          dischargeBot={dischargeBot} 
        />
        
        <BotCollection 
          bots={bots} 
          enlistBot={enlistBot} 
          army={army}
        />
      </main>
    </div>
  );
}

export default App;
