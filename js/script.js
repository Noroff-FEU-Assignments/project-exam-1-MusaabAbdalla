

const url = "https://dakwa.net/wp-json/wp/v2/posts?_embed"
var page_number = 1;
const allPostUrl = url + "&per_page=6" + `&page=${page_number}`
const latestArticles = document.querySelector(".latest-articles")
const prevButton = document.querySelector("#prev-articles")
const nextButton = document.querySelector("#next-articles")


async function getPosts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const posts = data;
    console.log(posts);
    renderLatestPosts(posts)
  }
  catch (error) {
    console.log(error)
  }
}

function renderLatestPosts(posts){
  latestArticles.innerHTML = "";
  posts.forEach(function(post){
    latestArticles.innerHTML +=`
            <div class="latest-articles-card">
                <img src=${post._embedded["wp:featuredmedia"][0].source_url} alt="Article image" />
                <h4>${post.title.rendered}</h4>
                <div class="no-links">${post.excerpt.rendered}</div>
                <a class="button" href="./blog-page.html?id=${post.id}" >
                    <h3>Learn More</h3>
                </a>
            </div>
`
  });


}

getPosts(allPostUrl);



nextButton.onclick = function(){
  page_number = 2;
  const nextUrl = url + "&per_page=6" + `&page=${page_number}`
  getPosts(nextUrl);
  // prevButton.style.display = "block";
  // nextButton.style.display = "none";

}

prevButton.onclick = function(){
  console.log("hello")
  page_number = 1;
  const prevUrl = url + "&per_page=6" + `&page=${page_number}`
  getPosts(prevUrl);
}
