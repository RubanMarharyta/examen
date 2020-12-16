document.addEventListener("DOMContentLoaded",
  (event) => {
      
    const title = document.getElementById("title");
    const photo = document.getElementById("photo");
    const text = document.getElementById("text");
    
    window.onload=()=>{
       $ajaxUtils
          .sendGetRequest(`https://margowww.herokuapp.com/data/0`, 
            (request) => {
              const data = (JSON.parse(request.responseText))[0];
              title.innerHTML=data.title;
              photo.src=data.photo;
              text.innerHTML=data.text;
              
            });
    }
  });