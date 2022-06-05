let usermain = document.querySelector(".usermain");
let StorageInfo = localStorage.getItem("userInfoStg");
let allInfo = JSON.parse(StorageInfo);

history.replaceState({}, "", "?username=" + allInfo.urlName);
document.title = allInfo.name;
usermain.innerHTML = `
<div class="aboutObject">
        <h1>${allInfo.name}</h1>
        <img src="${allInfo.picLink}">
        <h3>Region : ${allInfo.region} <br> Age : ${allInfo.Age}</h3>
        <p>${allInfo.info}</p>
    </div>
`;