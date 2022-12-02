import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Primary from "./sections/Primary";
import Signup from "./sections/Signup";
import Login from "./sections/Login";
import Movie from "./sections/Movie";
import "./App.css";
import "login.css";
import API from "./utils/API";
import UserContext from "./utils/UserContext";
import Home from "./sections/Home";

function App() {
    const [user, setUser] = useState();
    const [isFetchingUser, setIsFetchingUser] = useState(true);

    useEffect(() => {
        API.getCurrentUser()
            .then((res) => {
                setUser(res.data);
                setIsFetchingUser(false);
            })

            .catch((err) => {
                console.log(err);
                setIsFetchingUser(false);
            });
    }, []);

    const removeTopic = useCallback((topic) => {
        API.removeTopic({
            topic: topic,
        }).then((res) => {
            setUser(res.data);
        });
    }, []);

    const addVideo = useCallback((videos) => {
        API.addVideo({
            videos: videos,
        }).then((res) => {
            setUser(res.data);
        });
    }, []);

    const context = {
        user: user,
        addVideo: addVideo,
        removeTopic: removeTopic,
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <UserContext.Provider value={context}>
                    {isFetchingUser ? null : (
                        <Route exact path="/primary" component={Primary} />
                    )}
                    {isFetchingUser ? null : (
                        <Route exact path="/movie/:id" component={Movie} />
                    )}
                    {isFetchingUser ? null : (
                        <Route exact path="/movie" component={Movie} />
                    )}
                </UserContext.Provider>
            </Switch>
        </Router>
    );
}

export default App;