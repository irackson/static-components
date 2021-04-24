import { Link } from 'react-router-dom';

function Reviews(props) {
    const isPreview = props.isPreview;

    return (
        <div>
            {isPreview ? (
                <div>
                    <h4>Reviews</h4>
                    <h2>{props.reviewCount}</h2>
                </div>
            ) : (
                <div>
                    <h2>Reviews</h2>
                    <div>
                        <h2>Number of Reviews: {props.reviewCount}</h2>
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
                        </button>
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

export default Reviews;
