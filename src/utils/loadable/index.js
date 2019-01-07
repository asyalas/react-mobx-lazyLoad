
import React,{lazy,Suspense} from 'react';
import {Spin} from 'ui'

export default ({loader,loadding,...props})=> {
    const LazyComponent = lazy(loader)
    const fallback = loadding || (<div className='container'><Spin/></div>)
    return (
      <Suspense fallback={fallback}>
          <LazyComponent
            {...props}
          />
      </Suspense>
    );
}

