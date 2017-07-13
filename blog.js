let posts = [
    {
        title: "First Post",
        copy: "content",
        date: "06/09/2017"
    },
    {
        title: "Second Post",
        copy: "content",
        date: "06/09/2017"
    }
];


let page = document.getElementById("posts");
posts.forEach(function(item){
    page.innerHTML+=`<li>${(item.title + item.copy + item.date)}</li>`;
});


