const logout= document.getElementById("logout")
      logout.addEventListener("click",function(){
        window.sessionStorage.removeItem('loggedUserId')
      }) 