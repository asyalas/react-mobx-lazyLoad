
import RootStore from './RootStore';
import ModuleStores from './ModuleStores';
import { inject } from 'mobx-react';
const commonStore = new RootStore();
const moduleStores = new ModuleStores();
// 初始化
commonStore.initCommon()
let injectStores = {
    commonStore,
    moduleStores
};
 
export default injectStores;
export {
  commonStore,
  moduleStores
}
export * from './MobxProvider'
export * from 'mobx-react'
export const injectStore = (props)=>{
  if(typeof props === 'function'){
    return inject(props)
  }
  if(typeof props === 'string'){
    return inject((stores)=>{
      return {
        [props]:stores.moduleStores.state[props]
      } 
    })
  }
  if(Array.isArray(props)){
    return inject((stores)=>{
      let res = {}
      props.forEach(key=>{
        res[key] = stores.moduleStores.state[key]
      })
      return res
    })
  }
  return {}
  
}