import './App.css';
import PollDisplay from './TaskAComponents/PollDisplay';
import UserParticipation from './TaskAComponents/UserParticipation';
import React, { useState } from 'react';

function App() {

  const [ pollData, setPollData ] = useState({
    "question": "What is your favorite programming language?",
    "choices": [
        { "id": 1, "label": "JavaScript", "votes": 0 },
        { "id": 2, "label": "Python", "votes": 0 },
        { "id": 3, "label": "Java", "votes": 0 },
        { "id": 4, "label": "C#", "votes": 0 }]
    })

  const handleVote = (event, currentVote) => {
    event.preventDefault()
    
    const voteObject = pollData.choices.filter( (choice, index) => choice.label === currentVote )
    const voteCount = voteObject[0].votes;
    const id = voteObject[0].id;

    let newChoices = pollData.choices
    newChoices[id - 1] = {'id': id, 'label': currentVote, 'votes': voteCount + 1}
 
    setPollData(prevState => ({ ...prevState, choices: newChoices}))
  }

  return (
    <div className="App">
      <PollDisplay pollData={pollData}/>
      <UserParticipation pollData={pollData} handleVote={handleVote}/>
    </div>
  );
}

export default App;
