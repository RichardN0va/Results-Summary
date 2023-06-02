export default function Summary() {
    return (
        <div id="container">
            <div className="summary_card">
                <p>Summary</p>
                <div className="card_details">
                    <div id="reaction">
                        <span className="name_reaction">Reaction</span>
                        <span className="score_reaction">80 / 100</span>
                    </div>

                    <div id="memory">
                        <span className="name_memory">Memory</span>
                        <span className="score_memory">92 / 100</span>
                    </div>
                    <div id="verbal">
                        <span className="name_verbal">Verbal</span>
                        <span className="score_verbal">61 / 100</span>
                    </div>

                    <div id="visual">
                        <span className="name_verbal">Visual</span>
                        <span className="score_verbal">72 / 100</span>
                    </div>
                    <button>Continue</button>
                </div>

            </div>

        </div>
    )
}