import React from 'react';
import ReactDOM from "react-dom/client";

import { HashRouter, Route, Routes } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Main from './pages/main';
import Portfolio from './pages/portfolio/portfolio';
import Cv from './pages/cv';
import Gharsemobileapp from './pages/portfolio/gharsemobileapp';
import Lesfloralies from './pages/portfolio/lesfloralies';
import Loyalwallet from './pages/portfolio/loyalwallet';
import Quaestorcoin from './pages/portfolio/quaestorcoin';
import Quaestorcoinapp from './pages/portfolio/quaestorcoinapp';
class Root extends React.Component {

  render() {
    return (
          <HashRouter basename={`${process.env.PUBLIC_URL}`}>
              <Routes>
                <Route exact path={`/`} element={<RouteWrapper component={Main} layout={App} />} />
                <Route exact path={`/portfolio`} element={<RouteWrapper component={Portfolio} layout={App} />} />
                <Route exact path={`/cv`} element={<RouteWrapper component={Cv} layout={(props) => <App hideSidebar={true} {...props} />} />} />

                <Route exact path={`/portfolio/gharse`} element={<RouteWrapper component={Gharsemobileapp} layout={App} />} />
                <Route exact path={`/portfolio/lesfloralies`} element={<RouteWrapper component={Lesfloralies} layout={App} />} />
                <Route exact path={`/portfolio/loyalwallet`} element={<RouteWrapper component={Loyalwallet} layout={App} />} />
                <Route exact path={`/portfolio/quaestorcoin`} element={<RouteWrapper component={Quaestorcoin} layout={App} />} />
                <Route exact path={`/portfolio/quaestorcoinapp`} element={<RouteWrapper component={Quaestorcoinapp} layout={App} />} />

              </Routes>
          </HashRouter>
    );
  }
}


const RouteWrapper = ({
  component: Component,
  layout: Layout,
  ...props
}) => {
  return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
