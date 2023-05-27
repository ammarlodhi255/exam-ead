

const PollDisplay = (props) => {
    const { pollData } = props

    return (
        <div className="poll-view">
            <h3>{pollData.question}</h3>
            {
                pollData.choices.map((choice) => (
                    <div key={choice.id}>
                        Label: { choice.label }, Votes: { choice.votes }
                    </div>
                ))
            }
        </div>
    );
}
 
export default PollDisplay;