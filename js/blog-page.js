import {renderSinglePost} from "./ui/renderSinglePost.js"


const url = "https://dakwa.net/wp-json/wp/v2/posts/"
const queryString = document.location.search;
const params = new URLSearchParams(queryString)
const id = params.get("id");

const postUrl = url + id + "?"+ "_embed"

 async function getPost(url){
  try{
    const response = await fetch(url);
    const data = await response.json();
    const post = data
    document.title=  post.title.rendered

    renderSinglePost(post)
    const image = document.querySelector(".post-img");
    const fsImage = document.querySelector("#fs-image")

    // When clicking on the image it will open
    // a fullscreen hidden image fsImage that has a absoulte postion
    // this will also prevent the body from scrolling
    image.onclick = function(){
      fsImage.style.backgroundImage = 'url(' + image.src + ')';
      fsImage.style.display = 'block';
      document.body.style.overflow = "hidden";
    }

    // when clicking on the full screen image
    fsImage.onclick = function(){
      document.body.style.overflow = "visible"
      fsImage.style.display ="none"


    }


    }
  catch(error){
    console.log(error)
  }
}


getPost(postUrl);
