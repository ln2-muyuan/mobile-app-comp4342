import * as Keychain from "react-native-keychain";

export default async function request(method, url, body) {
    const credentials = await Keychain.getGenericPassword();
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
            'Authorization': `Bearer ${credentials}`, 
        },
        body
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        if (res.status === 401) {
            window.location.href = `${process.env.PUBLIC_URL}/login`;
            return Promise.reject({ message: 'Please log in' });
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