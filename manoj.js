let posts = [];

function createPost(){

    let text = document.getElementById("postText").value;

    if(text.trim()===""){
        alert("Enter a post");
        return;
    }

    let post = {
        content:text,
        likes:0,
        comments:[]
    };

    posts.unshift(post);

    document.getElementById("postText").value="";

    displayPosts();
}

function displayPosts(){

    let postContainer =
    document.getElementById("posts");

    postContainer.innerHTML="";

    posts.forEach((post,index)=>{

        postContainer.innerHTML += `
        <div class="post">
            <p>${post.content}</p>

            <div class="actions">
                <button onclick="likePost(${index})">
                ❤️ ${post.likes}
                </button>

                <button onclick="commentPost(${index})">
                💬 Comment
                </button>
            </div>
        </div>
        `;
    });
}

function likePost(index){
    posts[index].likes++;
    displayPosts();
}

function commentPost(index){

    let comment =
    prompt("Enter your comment");

    if(comment){
        alert("Comment Added");
    }
}

document.getElementById("themeBtn")
.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});