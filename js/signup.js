/*-----------------------match passward----------------------*/
function onChange(passwordId ,  confirmPasswordId) {
    const password = document.getElementById(passwordId).value;
    const confirm = document.getElementById(confirmPasswordId).value;
    let massege = (confirm === password) ? '' : 'Passwords do not match';
    document.getElementById(confirmPasswordId).setCustomValidity(massege);
}
function signup (user){
    // Get Users From Local Storage.
    const users = getUsersFromLocalStorageAsArray("users") ?? [];

    // Check If User Exist In Array.
    const isExist = users.find((userInArray) => {
        return userInArray.userName === user.userName || userInArray.email === user.email;  
    });

    // console.log("isExist Is ", isExist);
    // ${JSON.stringify(isExist)}
    if(isExist)
        alert(`User is exist`);
    else 
        users.push(user);

    // Set Users To Local Storage.
    setUsersToLocalStoratage("users", users);

}
/*-------------------------------------users------------------------------------------------- */
function getUsersFromLocalStorageAsArray(keyOfLocalStorage){
    // Get Users From Local Storage.
    let users = window.localStorage.getItem(keyOfLocalStorage);

    // Convert Users From String(Json) To Array.
    users = JSON.parse(users);

    // Return Users AS Array.
    return users;
}

function setUsersToLocalStoratage(keyOfLocalStorage, usersAsArray){
    // Convert Array To Json.
    const usersAsString = JSON.stringify(usersAsArray);

    // Set Users As String To Local Storage.
    window.localStorage.setItem(keyOfLocalStorage, usersAsString);
}
/*---------------show passward in signup--------------------------- */
function Show1() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirm");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    }
    else {
      x.type = "password";
      y.type = "password";
    }
  }
  /*---------------show passward in login--------------------------- */

function Show2() {
  
    var z = document.getElementById("login-password");
    if (z.type === "password") {
      
      z.type = "text";
    }
    else {
      z.type = "password";
    }
  }
