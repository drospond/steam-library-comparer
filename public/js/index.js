$(document).ready(function(){console.log("ready!"),$(".username-submit").on("click",function(a){if(a.preventDefault(),0<$("#user-one").val().trim().length)var b=$("#user-one").val().trim();if(0<$("#user-two").val().trim().length)var c=$("#user-two").val().trim();console.log(b),b&&c?(console.log(c),$.post("/api/steamUsers",{user:b,user:c}).done($.get("/SteamUsers/"+b+"/"+c,{userOne:b,userTwo:c}).done(()=>{$.post("/api/games",{user:b}).done(()=>{$.post("/api/games",{user:c}).done(()=>window.location.href="/SteamUsers/"+b+"/"+c)})}))):b&&$.post("/api/steamUsers",{user:b}).done($.get("/SteamUser/"+b,{userOne:b}).done(()=>{$.post("/api/games",{user:b}).done(()=>window.location.href="/SteamUser/"+b)}))})});