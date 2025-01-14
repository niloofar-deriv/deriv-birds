import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {GamesPage} from "./pages/GamesPage";
import {BFlyerPage} from "./pages/BFlyerPage";
import {HomePage} from "./pages/HomePage";
import {HistoryPage} from "./pages/HistoryPage";
import {AuthPage} from "./pages/AuthPage";
import {AboutUsPage} from "./pages/AboutUsPage";

import Leaderboard from './pages/Leaderboard';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/game/:id" exact>
                    <GamesPage />
                </Route>
                <Route path="/game">
                    <BFlyerPage/>
                </Route>
                <Route path="/history">
                    <HistoryPage />
                </Route>
                <Route path="/about_us">
                    <AboutUsPage />
                </Route>
                <Route path="/leaderboard">
                    <Leaderboard />
                </Route>
                
                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
