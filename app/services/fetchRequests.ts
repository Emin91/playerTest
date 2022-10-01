export const sendRequest = async (
    serverUrl: RequestInfo,
    requestBody: {},
    method: string,
) => {
    try {
        const response = await fetch(serverUrl, {
            method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody),
        });
        return response.json();
    } catch (error) {
        console.warn('Something went wrong! ', error);
    }
};

export const sendRequestWithToken = async (
    token: string,
    serverUrl: RequestInfo,
    requestBody: object,
) => {
    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: token
                ? {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
                : {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody),
        });
        return await response.json();
    } catch (error) {
        console.warn('Something went wrong! ', error);
    }
};
export const sendRequestWithTokenFormData = async (
    token: string,
    serverUrl: RequestInfo,
    requestBody: object,
) => {
    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: token
                ? {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
                : {'Content-Type': 'multipart/form-data'},
            body: JSON.stringify(requestBody),
        });
        return await response.json();
    } catch (error) {
        console.warn('Something went wrong! ', error);
    }
};

export const getRequestWithToken = async (serverUrl: string, token: string) => {
    try {
        const response = await fetch(serverUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.warn('Something went wrong! ', error);
    }
};
