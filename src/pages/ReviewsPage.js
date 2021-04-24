import { Link } from 'react-router-dom';

function Reviews(props) {
    const isPreview = props.isPreview;

    return (
        <>
            {isPreview ? (
                <div className="home__reviews-container">
                    <h4>Reviews</h4>
                    <h2>
                        {new Intl.NumberFormat('en-US').format(
                            props.reviewCount
                        )}
                    </h2>
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
        </>
    );
}

export default Reviews;
