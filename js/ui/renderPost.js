
const blogsContainer = document.querySelector(".articles")
export function renderPosts(posts) {
    posts.forEach(function (post) {
        blogsContainer.innerHTML += `
            <div class="article-card">
                <img src=${post._embedded["wp:featuredmedia"][0].source_url} alt=${post.title.rendered} />
                <div>

                    <h3>${post.title.rendered}</h3>
                    <p id="active">${post.date}</p>
                    <div class="no-links">${post.excerpt.rendered}</div>
                    <a href="./blog-page.html?id=${post.id}" aria-label=""><span
                            class="link"></span></a>
                </div>
            </div>
`
    })
}
