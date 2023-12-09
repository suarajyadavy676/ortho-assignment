let accountCreate = document.getElementById("create")
let username = document.querySelector(".email")
let key = document.querySelector(".password")

key.addEventListener("input",function(){
  let num = key.value
  if(num == localStorage.getItem("password")){
    document.querySelector(".login").addEventListener("click",function(){
      window.location.href ="blog.html"
    })
  }
})

document.querySelector(".login").addEventListener("click",function(){
  // key.addEventListener("input",function(){
  //   console.log(key.value)
  //   if(key.value == localStorage.getItem("password")){
  //     window.location.href ="https://onecompiler.com/html/3zvw8ftgr"
  //   } else{
  //     alert("inter currect")
  //   }
  // })
})
accountCreate.addEventListener('click',function(){
  window.location.href = "signup.html"
})