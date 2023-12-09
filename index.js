let accountCreate = document.getElementById("create")
let username = document.querySelector(".email")
let key = document.querySelector(".password")

// key.addEventListener("input",function(){
//   let num = key.value
//   if(num == localStorage.getItem("password")){
//     document.querySelector(".login").addEventListener("click",function(){
//       window.location.href ="blog.html"
//     })
//   }
// })

document.querySelector(".login").addEventListener("click",function(){
  if(username.value == localStorage.getItem("email") && key.value == localStorage.getItem("password")){
    window.location.href ="blog.html"
  } else{
    alert("please enter currect details")
  }
})
accountCreate.addEventListener('click',function(){
  window.location.href = "signup.html"
})