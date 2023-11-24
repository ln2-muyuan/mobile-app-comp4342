import EncryptedStorage from 'react-native-encrypted-storage';

export default async function request(method, url, body) {
    let token = null;
    const userSession = await EncryptedStorage.getItem('userSession');
    if (userSession) {
        const userSessionObj = JSON.parse(userSession);
        token = userSessionObj.token;
    }
    method = method.toUpperCase();
    const finalUrl = "https://test2-vcdx.onrender.com" + url;
    if (method === 'GET') {
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }
    return fetch(finalUrl, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json,text/plain,*/*',
            'Authorization': `Bearer ${token}`, 
        },
        body
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            return res.text().then(text => { throw new Error(text) })
        }
    })
}

export const get = (url) => request('GET', url,undefined);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);
export const patch = (url, body) => request('PATCH', url, body);