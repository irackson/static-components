import './App.css';
import './Home.css';
import { useState } from 'react';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AverageRating from './pages/AverageRatingPage';
import Reviews from './pages/ReviewsPage';
import SentimentAnalysis from './pages/SentimentAnalysisPage';
import WebsiteVisitors from './pages/WebsiteVisitorsPage';

import { Route, Switch } from 'react-router-dom';

function App() {
    const [reviewCount, setReviewCount] = useState(1281);
    const [ratingCount, setRatingCount] = useState(4.6);
    const [sentimentList, setSentimentList] = useState([960, 122, 321]);
    const [visitorCount, setVisitorCount] = useState(821);

    return (
        <div className="App">
            <Header />

            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div className="home">
                            <Dashboard></Dashboard>
                            <Reviews
                                isPreview={true}
                                reviewCount={reviewCount}
                            ></Reviews>
                            <AverageRating
                                isPreview={true}
                                ratingCount={ratingCount}
                            ></AverageRating>
                            <SentimentAnalysis
                                isPreview={true}
                                sentimentList={sentimentList}
                            ></SentimentAnalysis>
                            <WebsiteVisitors
                                isPreview={true}
                                visitorCount={visitorCount}
                            ></WebsiteVisitors>
                        </div>
                    )}
                ></Route>
                <Route
                    path="/reviews"
                    render={(props) => (
                        <Reviews
                            reviewCount={reviewCount}
                            setReviewCount={setReviewCount}
                            {...props}
                        />
                    )}
                ></Route>
                <Route
                    path="/average-rating"
                    render={(props) => (
                        <AverageRating
                            ratingCount={ratingCount}
                            setRatingCount={setRatingCount}
                            {...props}
                        />
                    )}
                ></Route>
                <Route
                    path="/sentiment-analysis"
                    render={(props) => (
                        <SentimentAnalysis
                            sentimentList={sentimentList}
                            setSentimentList={setSentimentList}
                            {...props}
                        />
                    )}
                ></Route>
                <Route
                    path="/website-visitors"
                    render={(props) => (
                        <WebsiteVisitors
                            visitorCount={visitorCount}
                            setVisitorCount={setVisitorCount}
                            {...props}
                        />
                    )}
                ></Route>
            </Switch>
        </div>
    );
}

export default App;
