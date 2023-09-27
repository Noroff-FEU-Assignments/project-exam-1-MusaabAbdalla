
url = "https://dakwa.net/wp-json/wp/v2/posts?_embed"

const blogsContainer = document.querySelector(".articles")

async function getPosts() {
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

function renderPosts(posts) {
  posts.forEach(function (post) {
    blogsContainer.innerHTML += `
            <div class="article-card">
                <img src=${post._embedded["wp:featuredmedia"][0].source_url} alt="Article image" />
                <div>

                    <h3>${post.title.rendered}</h3>
                    <p id="active">September 3, 2023</p>
                    <p class="no-links">${post.excerpt.rendered}</p>
                    <a href="" aria-label=""><span
                            class="link"></span></a>
                </div>
            </div>


`



  })

}

getPosts(url);
