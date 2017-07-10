var posts = [
    {
        title: "First Post",
        copy: "content",
        date: "06/09/2017"
    },
    {
        title: "First Post",
        copy: "content",
        date: "06/09/2017"
    }
];

console.log("posts", posts);

let title = "<h1>" + posts[0].title + "</h1>";

let postHolder = document.getElementById("posts");
postHolder.innerHTML += title;
