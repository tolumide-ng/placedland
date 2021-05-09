import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { LandingPage } from "../../components/Pages/LandingPage";
import { LoadingPage } from "../../components/Pages/LoadingPage";
// import { NotFoundPage } from "../../components/Pages/NotFoundPage";
import { setDropDownAction } from "../../store/modules/dropDown/actions";
import { RootState } from "../../store/modules/types";
import { Header } from "../../components/UI/organisms/Header";
import "./index.css";
import { Footer } from "@organisms/Footer";

const AppRouter = withRouter(() => {
    const dispatch = useDispatch();

    const dropDownSelector = useSelector(
        (state: RootState) => state.dropDownReducer
    );

    const handleCloseDropDown = () => {
        if (dropDownSelector.display) {
            dispatch(setDropDownAction(true));
        }
    };

    return (
        <div className="appwide" onClick={handleCloseDropDown}>
            <main className="appwide-container">
                <ErrorBoundary>
                    <Header />
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            <Route path="/" exact>
                                <LandingPage />
                            </Route>
                            {/* <Route path="/">
                                <NotFoundPage />
                            </Route> */}
                        </Switch>
                    </Suspense>
                    <Footer />
                </ErrorBoundary>
            </main>
        </div>
    );
});

export default AppRouter;
