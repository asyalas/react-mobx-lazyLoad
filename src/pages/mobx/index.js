


import { LoadableRoute as Route, Switch } from 'router';
import React from 'react';
import { MobxProvider} from 'stores';
export default class MobxDemo extends React.Component {
  render() {
    return (
      <MobxProvider 
        stores={{
          mobx: () => import('./stores')
        }}
      >
        <Switch>
          <Route path="/mobx"  exact loader={() => import('./containers')} />
        </Switch>
      </MobxProvider>
    );
  }
}


