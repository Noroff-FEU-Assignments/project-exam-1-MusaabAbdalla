

const singlePostContainer  = document.querySelector(".single-blog-container");

export function renderSinglePost(post){
  singlePostContainer.innerHTML= `
        <img class="post-img" src=${post._embedded["wp:featuredmedia"][0].source_url} alt="" />
            <h3>${post.title.rendered}</h3>
            <div>${post.content.rendered}</div>
`
  console.log("this is render function")
}
