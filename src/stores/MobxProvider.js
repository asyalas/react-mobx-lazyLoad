import {
  commonStore,
  moduleStores
} from 'stores'
export const MobxProvider = (props) => {
  const createStore = async (stores) => {
    let injectStores = {};
    await Promise.all(
      Object.keys(stores).map(async (storeName) => {
        const moduleFile = await stores[storeName]();
        const Store = moduleFile.default;
        const S = new Store(commonStore);
        injectStores = {
          ...injectStores,
          [storeName]: S
        };
      })
    );
    return injectStores;
  };
  createStore(props.stores).then(stores=>{
    moduleStores.addModel(stores)
  })
  return props.children
  
};