import { Link } from 'react-router-dom';

function WebsiteVisitors(props) {
    const isPreview = props.isPreview;

    return (
        <>
            {isPreview ? (
                <div className="home__website-visitors-container">
                    <h4>Website Visitors</h4>
                    <h2>{props.visitorCount}</h2>
                    <div className="home__visitor-hero"></div>
                </div>
            ) : (
                <div>
                    <h2>Website Visitors</h2>
                    <div>
                        <h2>Number of visitors: {props.visitorCount}</h2>
                        <button
                            type="button"
                            onClick={() => {
                                props.setVisitorCount(props.visitorCount + 1);
                            }}
                        >
                            Increase Visitors
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                props.setVisitorCount(props.visitorCount - 1);
                            }}
                        >
                            Decrease Visitors
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

export default WebsiteVisitors;
