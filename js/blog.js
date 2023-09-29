import {renderPosts} from "./ui/renderPost.js"
const url = "https://dakwa.net/wp-json/wp/v2/posts?_embed"
const allPostUrl = url + "&per_page=20"

const blogsContainer = document.querySelector(".articles")

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const posts = data;
    console.log(posts);
    blogsContainer.innerHTML = ""
    renderPosts(posts)
  }
  catch (error) {
    console.log(error)
  }
}


getPosts(url);

const viewMoreLink = document.querySelector(".view-more");
console.log(viewMoreLink)
viewMoreLink.onclick = function(){
  getPosts(allPostUrl)
  console.log("from function")

}

const images = document.querySelectorAll("img");
console.log(images);

