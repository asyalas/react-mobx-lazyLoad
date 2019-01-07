
import fetch from 'isomorphic-fetch';
import {getSessionID} from '../services/authority'

async function customedFetch(api, opts) {
  const { method = 'GET', body = {} } = opts || {};

  // 处理URL
  const url = api;

  // 处理参数params

  // 拼接后的opts
  const options = { ...opts, method, body };

  if ( method === 'GET' || method === 'HEAD') {
    delete options.body;
  }
  const json = await fetch(url, options);
  return json;
}

export const fetchByHost = (host, withAdminId=true) => {
  return async (url, opts) => {
    const options = {
      ...opts,
      body: {
        adminId: getSessionID().uId,
        ...opts.body,
      }
    };
    if (!withAdminId) {
      delete options.body.adminId;
    }

    const res = await customedFetch(url, options);
    const json = await res.clone().json();
    if (json.code !== 1) {
      throw json;
    }
    return res;
  };
};
