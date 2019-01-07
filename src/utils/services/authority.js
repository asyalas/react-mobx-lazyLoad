import cookies from 'js-cookie'

/**
 * 保存用户的信息到cookie
 * @param {Object} data 
 */
export function setUserInfo(data) {
  cookies.set('uId', data.uId, { expires: 1 });
}

/**
 * 清除用户uID
 */
export function getSessionID() {
  return cookies.get('uId');
}

/**
 * 清除用户cookie
 */
export function clearUserInfo() {
  cookies.remove('uId');
}