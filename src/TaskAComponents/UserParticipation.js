import React, { useState } from 'react';

const UserParticipation = (props) => {
    const { pollData, handleVote } = props;
    const [ currentVote, setCurrentVote ] = useState(null);

    const changeCurrentVote = (event) => {
        setCurrentVote(event.target.value)
    }

    return (
        <form action="">
            <label htmlFor="language">Select Your Preferred Choice:  </label>
            <select name="language" value={pollData.choices[0].label} onChange={changeCurrentVote}>
                {
                    pollData.choices.map(
                        choice => (<option value={choice.label}> { choice.label }</option>)
                    )
                }
            </select>
            <br />
            <button onClick={() => handleVote(currentVote) }>Submit Your Vote</button>
        </form>
    );
}
 
export default UserParticipation;