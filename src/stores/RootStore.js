
import { action, computed, observable } from 'mobx';
import {getSessionID} from 'utils/services'
const defaultState = {
  uId: '',
};

export default class RootStore {
  @observable state = { ...defaultState };

  @computed get reduxStore() {
    return this.state;
  }
  @action initCommon = () => {
    this.setState({
      uId: getSessionID()
    });
  }
  @action setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState
    };
  }
}
