import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { history } from './helpers';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + '/'}
            exact
            component={WaitingComponent(HomePage)}
          />
          <Route
            path={process.env.PUBLIC_URL + '/about'}
            exact
            component={WaitingComponent(AboutPage)}
          />
          <Route
            path={process.env.PUBLIC_URL + '/blog'}
            exact
            component={WaitingComponent(BlogsPage)}
          />
          <Route
            path={process.env.PUBLIC_URL + '/posts/:slug'}
            exact
            component={WaitingComponent(BlogPostPage)}
          />
          <Route component={() => <div>404 Not found </div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
