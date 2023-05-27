import React, { useState } from 'react';
import AnotherUserParticipation from './AnotherUserParticipation';

const UserParticipation = (props) => {
    const { pollData, handleVote } = props;
    const [ currentVote, setCurrentVote ] = useState(pollData.choices[0].label);
    const [ target, setTarget ] = useState(null)

    const changeCurrentVote = (event) => {
        setCurrentVote(event.target.value)
        setTarget(event.target)
    }

    const resetUser = () => {
        setCurrentVote(null);
        target.checked = false;
    }

    return (
        <div>
            <form action="">
                <label htmlFor="language"><h2>Select Your Preferred Choice:  </h2></label>
                {
                    pollData.choices.map(
                            choice => (
                            <div>
                                <label htmlFor={'option'}>{choice.label}</label>
                                <input type="radio" value={choice.label} name={'option'} onChange={changeCurrentVote}/> 
                            </div>
                        )
                    )
                }
                <br />
                <button onClick={(e) => handleVote(e, currentVote) }>Submit Your Vote</button>
            </form>

            <AnotherUserParticipation resetUser={resetUser}/>
        </div>
    );
}
 
export default UserParticipation;