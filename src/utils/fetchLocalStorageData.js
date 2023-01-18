export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== 'undefiinedd' ?
    JSON.parse(localStorage.getItem('user')) : localStorage.clear()

    return userInfo;
}