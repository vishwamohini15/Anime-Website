console.log("ftts");
let showimg=document.querySelector(".detail-page")

let id=localStorage.getItem("animeId")
console.log(id);

const getDetailed= async()=>{
     let url=await fetch(`https://api.jikan.moe/v4/anime/${id}`)
     let respose=await url.json()
     console.log(respose);
     console.log(respose.data.title);
     console.log(respose.data.images.jpg.image_url);
     console.log(respose.data.genres[0].name);

showimg.innerHTML=`
     <div class="img-box">
          <img src='${respose.data.images.jpg.image_url}'alt="">

     </div>
     <div class="detail">
     <h1>${respose.data.title}</h1>
     <h2>${respose.data.genres[0].name}</h2>
     <h2>${respose.data.genres[1].name}</h2>

     <h3>${respose.data.duration} </h3>
</div>

`



}


getDetailed()