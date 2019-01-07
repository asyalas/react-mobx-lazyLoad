
import React from 'react';
import  stores  from 'stores';
import { Provider } from 'mobx-react';
import { Switch, LoadableRoute as Route,BrowserRouter } from 'router';
export default ()=>{
  return(
    <Provider {...stores} >
      <BrowserRouter>
        <Switch>
            <Route path="/"  exact loader={() => import('./demo')} />
            <Route path="/hooks"  exact loader={() => import('./hooks')} />
            <Route path="/mobx"  exact loader={() => import('./mobx')} />
          </Switch>
      </BrowserRouter>
    </Provider>
  )
} 



