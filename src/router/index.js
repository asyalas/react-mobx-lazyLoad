import React from 'react';
import LoadableComponent from 'utils/loadable'
import {
  Route
} from 'react-router-dom';
import queryString from 'query-string'
export * from 'react-router-dom';
export class LoadableRoute extends React.Component {
  render() {
    const {loader,loading} = this.props;
    const C = (props) => {
      const parsed = queryString.parse(window.location.search);
      return (
        <LoadableComponent
          routeProps={props}
          loading={loading}
          loader={loader}
          location={{
              ...props.location,
              query: parsed,
          }}
        />
      );
    };

    return (
      <Route {...this.props} component={C} />
    );
  }
}