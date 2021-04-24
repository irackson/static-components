import { Link } from 'react-router-dom';

function AverageRating(props) {
    const isPreview = props.isPreview;

    return (
        <>
            {isPreview ? (
                <div className="home__average-rating-container">
                    <h4>Average Rating</h4>
                    <h2>{props.ratingCount}</h2>
                </div>
            ) : (
                <div>
                    <h2>Average Rating</h2>
                    <div>
                        <h2>Number of stars: {props.ratingCount}</h2>
                        <button
                            type="button"
                            onClick={() => {
                                props.setRatingCount(props.ratingCount + 1);
                            }}
                        >
                            Increase Rating
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                props.setRatingCount(props.ratingCount - 1);
                            }}
                        >
                            Decrease Rating
                        </button>
                    </div>
                    <footer>
                        <Link to="/">
                            <button>Return to Dashboard</button>
                        </Link>
                    </footer>
                </div>
            )}
        </>
    );
}

export default AverageRating;
