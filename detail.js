console.log("ftts");
let showimg=document.querySelector(".detail-page")
let showVid=document.querySelector(".video-box")
let memberEL=document.querySelector(".member")

let id=localStorage.getItem("animeId")
console.log(id);

const getDetailed= async()=>{
     let url=await fetch(`https://api.jikan.moe/v4/anime/${id}`)
     let respose=await url.json()
     console.log(respose);
     console.log(respose.data.title);
     console.log(respose.data.images.jpg.image_url);
     console.log(respose.data.genres[0].name);
     console.log(respose.data.trailer.embed_url);

showimg.innerHTML=`
     <div class="img-box">
          <img src='${respose.data.images.jpg.image_url}'alt="">

     </div>
     <div class="detail">
     <h1>${respose.data.title}</h1>
     <h4>${respose.data.genres[0].name}</h4>
     
     <h4>${respose.data.genres[1].name}</h4>
     <h3>${respose.data.duration} </h3>
</div>
`

showVid.innerHTML=`
     <iframe src='${respose.data.trailer.embed_url}' frameborder="0"></iframe>

`
}

getDetailed()

const getCharacter=async()=>{
     let charct=await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
     let getCharc=await charct.json()
     console.log(getCharc.data);

     getCharc.data.forEach(element => {
          console.log(element);
          memberEL.innerHTML+=`
          <div class="character-pic">
          <img src=${element.character.images.webp.image_url} alt="">
          <h1>${element.character.name.split(" ").slice(0,1)}</h1>
     </div>
          `

     });

}
getCharacter()










