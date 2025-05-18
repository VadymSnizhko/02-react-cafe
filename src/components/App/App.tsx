import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/Cafeinfo'
import VoteOptions from '../VoteOptions/VoteOptions';
import type { Votes, VoteType } from '../../types/votes';

function App() {
  // Стан голосів — всередині компонента App
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція голосування
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  // Функція скидання
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  );
}

export default App;
