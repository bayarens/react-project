const ACCESS_KEY = '_172BiL5qCqigNcvvr5nSYQ-WbxZzvlOiXoqbjR04A4'
const BASE_URL = 'https://api.unsplash.com/';
const endPoints = {
    random: '/photos/random/'
}

export const randomPhoto = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.random}`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}` 
        }
    })
    .then(res => res.json())
    .then(res => res);
    return response
}

export const carList = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.random}?query=car&&count=3`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
        }
    })
    return response.json();
}

export const boatList = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.random}?query=boat&&count=4`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
        }
    })
    return response.json()
}