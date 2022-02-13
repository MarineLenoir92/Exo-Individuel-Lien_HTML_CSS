function askName() {
    let requestName = prompt("Quel est ton nom?")
    let responseName = "Bonjour " + requestName +  " bienvenue à Ada Tech School!"
    document.getElementById("Nom").innerHTML = responseName
  }
  
  function askBirthdayDate() {
    let requestAge = prompt("Quelle est ton année de naissance ?")
    let todayDate = new Date().getFullYear()
    let responseAge = "Vous avez " + (todayDate - requestAge) + " ans"   
    document.getElementById("Naissance").innerHTML = responseAge
  }
  
  askName()
  askBirthdayDate()
  
0