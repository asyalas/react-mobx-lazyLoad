import { observable, action } from 'mobx';
import { message,Modal } from 'ui';
export default class mobx {
    @observable state = {
      num:0
    }
    constructor(rootStore) {
      this.rootStore = rootStore;
    }
    @action setState = (newState, key = 'state') => {
      this[key] = {
        ...this[key],
        ...newState
      };
    }
    @action decrement= () => {
      this.state.num = this.state.num - 1
    }
    @action increment= () => {
      this.state.num = this.state.num + 1
    }
    @action reset= () => {
      this.state.num = 0
    }
    @action incrementSync=async () => {
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          this.setState({num:this.state.num+1})
          message.success('成功')
          Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          });;
        },2000)
      })
    }
}
