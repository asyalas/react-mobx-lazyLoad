
import * as React from 'react';
import { injectStore as inject, observer } from 'stores';
import {Button} from 'ui'
export default 
@inject('mobx')
@observer
class MobxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
   const {state,decrement,increment,reset,incrementSync} = this.props.mobx
    return (
      <div
        style={{height:'100%'}}
      >
       <p>reducer count:{state.num}</p>
          <div  className="App-button-group" >
            <Button  onClick={increment} >increment</Button>
            <Button  onClick={decrement} >decrement</Button>
            <Button  onClick={reset} >reset</Button>
            <Button  onClick={incrementSync} >incrementSync</Button>
          </div>
      </div>
      
    );
  }
}