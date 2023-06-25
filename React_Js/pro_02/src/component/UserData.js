let userData=JSON.parse(localStorage.getItem('userData')) || [];

export function addUser(user){
    userData.push(user);
    localStorage.setItem('userData',JSON.stringify(userData))
}
export function getUser(user){
    return userData;
}
export default userData;