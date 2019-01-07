
import { action, computed, observable } from 'mobx';
const defaultState = {
  
};

export default class ModuleStores {
  @observable state = { ...defaultState };

  @computed get reduxStore() {
    return this.state;
  }
  @action addModel = (stores)=>{
    this.state = {
      ...stores,
      ...this.state
    }
  }
  @action delModel = (key) => {
    delete this.state[key]
  }
}
