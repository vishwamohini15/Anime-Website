let navEL=document.querySelector(".navigation")
window.addEventListener("scroll",()=>{

if (window.scrollY >= 20) {
    navEL.style.backgroundColor="rgba(0, 0, 0, 0.374)"
}else{
    navEL.style.backgroundColor=""

}
})

const learnApi = async () => {
    console.log("hju");
    let url = await fetch('https://api.jikan.moe/v4/top/anime')
    let respose = await url.json()

    respose.data.forEach(element => {

        let card = document.querySelector(".card")

        card.innerHTML += `
           <div class ="card-a">
            <img  onclick="handlePop('${element.trailer.embed_url}', '${element.mal_id}')" src=${element.images.jpg.image_url} alt="">
   
          <h4>${element.title.split(" ").slice(0,2).join(" ")} </h4>
      </div>

          `
    });
}
learnApi()



//upcoming
const getUpcoming = async () => {
    console.log("klo");
    let pop = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming')
    let hello = await pop.json()
    console.log(hello);

    hello.data.forEach((mohini) => {
        let card2 = document.querySelector(".card-2")
        card2.innerHTML += `
    <div class ="card-a">
    <img  onclick="handlePop('${mohini.trailer.embed_url}','${mohini.mal_id}')" src=${mohini.images.jpg.image_url} alt="">
    <h4>${mohini.title} </h4>
</div>
    `

    })

}

getUpcoming()



const getPopular = async () => {
    console.log("klo");
    let popular = await fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity')
    let hii = await popular.json()
    // console.log(hii);

    hii.data.forEach(arya => {
        // console.log(arya);

        let card3 = document.querySelector(".card-3")


        card3.innerHTML += `
    <div class ="card-a">
    <img  onclick="handlePop('${arya.trailer.embed_url}','${arya.mal_id}')" src=${arya.images.jpg.image_url} alt="">
    <h4>${arya.title} </h4>
</div>
    `

    })

}

setTimeout(() => {
getPopular()
    
}, 1000);


const random = async () => {
    console.log("klo");
    let pop = await fetch('https://api.jikan.moe/v4/top/anime?filter=airing')
    let hello00 = await pop.json()
    console.log(hello00);

    hello00.data.forEach((mohini) => {
        // console.log(mohini);

        let card4 = document.querySelector(".card-4")


        card4.innerHTML += `
    <div class ="card-a">
    <img  onclick="handlePop('${mohini.trailer.embed_url}', '${mohini.mal_id}')" src=${mohini.images.jpg.image_url} alt="">
    <h4>${mohini.title} </h4>
</div>
    `

    })

}

setTimeout(() => {
random()
    
}, 2000);


function handlePop(url,id){
    console.log(url);
    // console.log(title);
    console.log(id);


    localStorage.setItem("animeId", id)
    window.location.href="detail.html";
}



let inputEL=document.querySelector(".input")

function searchAnime(){
    console.log("jklo");

    localStorage.setItem("animeName", inputEL.value)
    window.location.href="search.html";
}


