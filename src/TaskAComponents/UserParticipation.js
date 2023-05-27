import React, { useState } from 'react';
import AnotherUserParticipation from './AnotherUserParticipation';

const UserParticipation = (props) => {
    const { pollData, handleVote } = props;
    const [ currentVote, setCurrentVote ] = useState(pollData.choices[0].label);

    const changeCurrentVote = (event) => {
        setCurrentVote(event.target.value)
    }

    return (
        <div className={"participation"}>
            <form action="">
                <label htmlFor="language">Select Your Preferred Choice:  </label>
                <select name="language" value={currentVote} onChange={changeCurrentVote}>
                    {
                        pollData.choices.map(
                            choice => (<option value={choice.label}> { choice.label }</option>)
                        )
                    }
                </select>
                <br />
                <button onClick={(e) => handleVote(e, currentVote) }>Submit Your Vote</button>
            </form>
            <AnotherUserParticipation />
        </div>
    );
}
 
export default UserParticipation;