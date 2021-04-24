import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="home__dashboard-container">
            <nav>
                <Link to="/reviews">
                    <button>Reviews</button>
                </Link>
                <Link to="/average-rating">
                    <button>Average Rating</button>
                </Link>
                <Link to="/sentiment-analysis">
                    <button>Sentiment Analysis</button>
                </Link>
                <Link to="/website-visitors">
                    <button>Website Visitors</button>
                </Link>
            </nav>
        </div>
    );
}

export default Dashboard;
