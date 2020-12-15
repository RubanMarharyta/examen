document.addEventListener("DOMContentLoaded",
  (event) => {
      
    const btn = document.getElementById("change");
    
    window.onload=()=>{
       $ajaxUtils
          .sendGetRequest(`https://exam-lunleo.herokuapp.com/data`, 
            (request) => {
              const data = (JSON.parse(request.responseText))[0];
              console.log(data.title);
              console.log(data.photo);
              console.log(data.text);  
              title.innerHTML=data.title;
              photo.innerHTML=data.photo;
              text.src=data.text;
              
            });
    }
  });