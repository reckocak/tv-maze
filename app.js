// https://api.tvmaze.com/shows
let forSearchList=[];

fetch('./tv-shows.json').then((res)=>res.json()).then((datA)=>{  //res ve datA yerine istedigimiz ismi verebilirz 

forSearchList=datA

setTvShows(forSearchList) //ekrana bastirmak icin bir fonksiyon tanimliyoruz
}
)

function setTvShows(data) {  //parantez icinde istedigimiz ismi verebiliyoruz yine..öncekinden farkli da ayni da olabilir.. cok önemli degil

    let list=document.querySelector('.tvShowList')

    list.innerHTML='';

    data.forEach((w) => {
        list.innerHTML+=`<div class='col-md-3'>
        <div class="card">
        <img src="${w.show.image.medium ? w.show.image.medium:''}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${w.show.name}</h5>
          <p class="card-text">Some quick example</p>
          <a href=${w.show.url} class="btn btn-primary">Details</a>
        </div>
      </div> 
      </div>` ;   
    });
      
}

document.querySelector('#search').oninput=(harf)=>{
  let data2= forSearchList.filter((w)=>w.show.name.toLowerCase().includes(harf.target.value.toLowerCase()))
  setTvShows(data2)


}