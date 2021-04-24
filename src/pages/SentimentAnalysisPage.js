import { Link } from 'react-router-dom';

function SentimentAnalysis(props) {
    const isPreview = props.isPreview;

    return (
        <div>
            {isPreview ? (
                <div>
                    <h4>Sentiment Analysis</h4>
                    <h2>{props.sentimentList.join(', ').trim()}</h2>
                </div>
            ) : (
                <div>
                    <h2>Sentiment Analysis</h2>
                    <div>
                        <ol style={{ listStyleType: 'none' }}>
                            {props.sentimentList.map((el, i) => (
                                <div>
                                    <li>{el}</li>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            props.setSentimentList(
                                                [
                                                    ...props.sentimentList,
                                                ].map((e, z) =>
                                                    z === i ? e + 1 : e
                                                )
                                            );
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            props.setSentimentList(
                                                [
                                                    ...props.sentimentList,
                                                ].map((e, z) =>
                                                    z === i ? e - 1 : e
                                                )
                                            );
                                        }}
                                    >
                                        -
                                    </button>
                                </div>
                            ))}
                        </ol>
                        {/* <h2>Sentiment: {props.reviewCount}</h2>
                        <button
                            type="button"
                            onClick={() => {
                                props.setReviewCount(props.reviewCount + 1);
                            }}
                        >
                            Increase Reviews
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                props.setReviewCount(props.reviewCount - 1);
                            }}
                        >
                            Decrease Reviews
                        </button> */}
                    </div>
                    <footer>
                        <Link to="/">
                            <button>Return to Dashboard</button>
                        </Link>
                    </footer>
                </div>
            )}
        </div>
    );
}

export default SentimentAnalysis;
