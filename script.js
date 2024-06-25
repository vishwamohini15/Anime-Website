let world = ["hii", "hello", "moskan", "khushi"]
const learnApi = async () => {
    console.log("hju");
    let url = await fetch('https://api.jikan.moe/v4/top/anime')
    let respose = await url.json()

    //  console.log(respose);
    //  console.log(respose.pagination.current_page);
    //  console.log(respose.data[0].title);
    //  console.log(respose.data[0].rating);


    respose.data.forEach(element => {
        //  console.log(element.mal_id); 
        //  console.log(respose.pagination.current_page);
        //  console.log(element.title);
        //  console.log("mohini");
        //  console.log(world[2]);
        // console.log(element.images.jpg);

        let card = document.querySelector(".card")
        //  let card2=document.querySelector(".card-2")


        card.innerHTML += `
           <div class ="card-a">
            <img  onclick="handlePop('${element.trailer.embed_url}', '${element.title}', '${element.mal_id}')" src=${element.images.jpg.image_url} alt="">

   
          <h4>${element.title} </h4>
      </div>

          `

    });
}


learnApi()







// let pop=
const getUpcoming = async () => {
    console.log("klo");
    let pop = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming')
    let hello = await pop.json()
    console.log(hello);

    hello.data.forEach((mohini) => {
        // console.log(mohini);

        let card2 = document.querySelector(".card-2")


        card2.innerHTML += `
    <div class ="card-a">
    <img  onclick="handlePop('${mohini.trailer.embed_url}')" src=${mohini.images.jpg.image_url} alt="">
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

    hii.data.forEach((arya) => {
        // console.log(arya);

        let card3 = document.querySelector(".card-3")


        card3.innerHTML += `
    <div class ="card-a">
    <img  onclick="handlePop('${arya.trailer.embed_url}')" src=${arya.images.jpg.image_url} alt="">
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
        console.log(mohini);

        let card4 = document.querySelector(".card-4")


        card4.innerHTML += `
    <div class ="card-a">
    <img  onclick="handlePop('${mohini.trailer.embed_url}', '${mohini.title}, ${mohini.mal_id})" src=${mohini.images.jpg.image_url} alt="">
    <h4>${mohini.title} </h4>
</div>
    `

    })

}

setTimeout(() => {
random()
    
}, 1000);


function handlePop(url,title,id){
    console.log(url);
    console.log(title);
    console.log(id);


    localStorage.setItem("animeId", id)
    window.location.href="detail.html";
}


