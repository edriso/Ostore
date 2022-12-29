function login(user){
    // Get Users From Local Storage.
    const users = getUsersFromLocalStorageAsArray("users") ?? [];

    // Search On Users.
    const isExist = users.find((userInArray) => {
        return  userInArray.email === user.email && userInArray.password === user.password;  
    });

    // console.log("isExist Is ", isExist);
    if(isExist)
        // alert(`Hello ${JSON.stringify(isExist.email)}`);
        window.location.href = "../index.html";
    else 
        alert(`You Are Not Login
passward or email incorrect `);
}