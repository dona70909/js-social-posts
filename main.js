const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// container of each post
const containerPosts = document.getElementById("container");

// # stampare tutti gli oggetti dell'array
for(let i = 0; i<posts.length;i++){
    
    containerPosts.innerHTML +=` 
    
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i].author.name}</div>
                    
                </div>                    
            </div>
        </div>
        
        <div class="post__text">${posts[i].content}</div>
        
        <div class="post__image">
            <img src=${posts[i].media} alt="post media">
        </div> 
        
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#/" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone.
                </div>
            </div> 
        </div>            
    </div>
`;
};

//# data
const createdData = document.querySelectorAll(".post-meta__data");
for(let i=0; i<posts.length;i++){
    let newData = reverseData(posts[i].created);
    createdData[i].innerHTML += `
    <div class="post-meta__time">${newData}</div>
    
    `; 
}


// # profile pic
const profilePic = document.querySelectorAll(".post-meta__icon");
console.log(posts[0].author.name.charAt(0));
for(let i=0; i<posts.length;i++){
    if(posts[i].author.image == null){
        let nameUser = onlyCapitalLetters(posts[i].author.name);
        profilePic[i].innerHTML = `
        <p class="profile-pic"> ${nameUser}</p> 
        `;
    } else {
        profilePic[i].innerHTML = `<img class="profile-pic" src=${posts[i].author.image} alt="${posts[i].author.name}">
        `;
    }
}

// # lke buttons
const btnLikes = document.querySelectorAll(".like-button");
console.log(btnLikes);
const likedPosts = [];
console.log(likedPosts);
const likeCounterOutput = document.querySelectorAll("#like-counter-1");

btnLikes.forEach((btn,index) => {
    let clickCount = 0;
    btn.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 1) {
            singleClickTimer = setTimeout(function() {
                clickCount = 0;
                likeCounterOutput[index].innerHTML = `${posts[index].likes + 1}`;
                btn.classList.add("like-button--liked");
                likedPosts.push(posts[index].id);
                return console.log(likedPosts, posts[index].id + " id aggiunto ");
            }, 400);
        } else if (clickCount === 2) {
            clearTimeout(singleClickTimer);
            clickCount = 0;
            likeCounterOutput[index].innerHTML = `${posts[index].likes}`;
            btn.classList.remove("like-button--liked");
            likedPosts.splice(posts[index].id[index]);
            return console.log(likedPosts,posts[index].id + " id rimosso");
        };
    },false);
    
}); 

// % function
function onlyCapitalLetters (str) { 
    let newStr = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/)) {
            newStr += str[i] + " ";
        }
    }
    return newStr;
};

//# creates a new array, reverse it and generate a new string data
function reverseData(data){
    const arrayData = [];
    arrayData.push(data.substring(0,4));
    arrayData.push(data.substring(5,7));
    arrayData.push(data.substring(8,10));
    arrayData.reverse();
    let newString = arrayData[0] + "-" + arrayData[1] + "-" + arrayData[2];

    return newString;
}


/* btnLikes.forEach((btn,index) => {
    btn.addEventListener('click', function() {
        likeCounterOutput[index].innerHTML = `${posts[index].likes + 1}`;
        this.classList.add("like-button--liked");
        likedPosts.push(posts[index].id)
        return console.log(likedPosts);
    },false)
});

*/



