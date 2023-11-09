import * as Keychain from "react-native-keychain";

export default async function request(method, url, body) {
    const credentials = await Keychain.getGenericPassword();
    const token = credentials.password
    method = method.toUpperCase();
    const finalUrl = "http://10.0.2.2:8800" + url;
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