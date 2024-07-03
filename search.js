let cards=document.querySelector(".cards")
let titleEL=document.querySelector(".title")
titleEL.innerText=localStorage.getItem("animeName")


let search=localStorage.getItem("animeName")
console.log(search);

const findSearchAnime=async()=>{
     console.log("kloyt");
     let url=await fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
     let respose=await url.json()
     console.log(respose);


     respose.data.forEach(element => {
// console.log(element);


cards.innerHTML +=`
 <div class ="card-a">
    <img  onclick ="searchpop('${element.trailer.embed_url}', '${element.mal_id}')" src=${element.images.jpg.image_url} alt="">
    <h4>${element.title.split(" ").slice(0,2).join(" ")} </h4>
</div>

`
     });
}

findSearchAnime()



function searchpop(url,id){
console.log(id);

     localStorage.setItem("animeId", id)
     window.location.href="detail.html";
}