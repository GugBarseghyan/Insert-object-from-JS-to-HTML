let user = [
    {
        picLink: "./img/0.png",
        name: "Billie Eilish", 
        urlName: "billieeilish",
        Age: 15,
        ID: "A1",
        region: "Gegharkunik",
        info: "About Billieeeeee: I love bIllie, About Billieeeeee: I love bIllie: About Billieeeeee: I love bIllie: About Billieeeeee: I love bIllie, About Billieeeeee: I love bIllie: About Billieeeeee: I love bIllie, About Billieeeeee: I love bIllie: About Billieeeeee: I love bIllie,  About Billieeeeee: I love bIllie: About Billieeeeee: I love bIllie, About Billieeeeee: I love bIllie: About Billieeeeee: I love bIllie"
    },
    {
        picLink: "./img/1.png",
        name: "Netta", 
        urlName: "netta",
        Age: 45,
        ID: "A2",
        region: "Erevan",
        info: "This is text example: This is text example:This is text example :This is text example This is text example: This is text example: This is text example: This is text example: This is text example: This is text exampleThis is text example: This is text example: This is text exampleThis is text exampleThis is text exampleThis is text example: "
    },
    {
        picLink: "./img/2.jpg",
        name: "La la la li la la", 
        urlName: "lalalalilala",
        Age: 185,
        ID: "A3",
        region: "France",
        info: "Thank you bitch :D"
    },
    {
        picLink: "./img/2.jpg",
        name: "Mels", 
        urlName: "mels",
        Age: 281,
        ID: "A4",
        region: "France",
        info: "Thank you bitch :D"
    }
];

let mother = document.querySelector(".container");
for(let i = 0; i < user.length; i++){
    let userDiv = document.createElement("Div");
    userDiv.classList.toggle("Object");
    userDiv.innerHTML = `
        <img src="${user[i].picLink}">
        <h1>${user[i].name}</h1>
        <h3>${user[i].region}</h3>
        <p>${user[i].Age}</p>
        <a href="user.html"><button class="btn" id="${user[i].ID}">Մանրամասներ</button></a>`;
    mother.appendChild(userDiv);
    userInfoAll = JSON.stringify(user[i]);
    localStorage.setItem(user[i].ID, userInfoAll);
}
// debugger;
let button1 = document.querySelector("#A1");
let button2 = document.querySelector("#A2");
let button3 = document.querySelector("#A3");
let button4 = document.querySelector("#A4");

button1.onclick = function(){
    userInfo = JSON.stringify(user[0]);
    localStorage.setItem("userInfoStg", userInfo);
}
button2.onclick = function(){
    userInfo = JSON.stringify(user[1]);
    localStorage.setItem("userInfoStg", userInfo);
}
button3.onclick = function(){
    userInfo = JSON.stringify(user[2]);
    localStorage.setItem("userInfoStg", userInfo);
}
button4.onclick = function(){
    userInfo = JSON.stringify(user[3]);
    localStorage.setItem("userInfoStg", userInfo);
}