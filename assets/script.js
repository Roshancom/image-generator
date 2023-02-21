const container = document.querySelector("#main_container");
let object = "";

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>{
    data.forEach((el)=> object += `<div class="card">
    <div class="showUserImg">
    <img src="https://robohash.org/${el.username}" alt="loading" >
    </div><div class="showUserInfo"><ul class="list">
    <li>  <b>UserName</b> :${el.username} </li>
    <li> <b>Name</b> :${el.name} </li>
    <li> <b>Email</b> :<a href ="mailto:${ el.email.toLowerCase()}" target="_blank" type="email/html">${ el.email.toLowerCase()}</a></li>
    <li> <b>Website</b> : <a href ="http://${el.website} " target="_blank" > ${ el.website} </a> </li>
    <li> <b>Phone no</b> :${el.phone} </li>
    <li> <b>Address</b> : ${el.address.street+ ", " + el.address.suite + ", " + el.address.city + ", " + el.address.zipcode }</li>
    <li> <b>Company</b> : ${el.company.name + ", " + el.company.catchPhrase} </li>
   </ul>
    </div></div>`);
    container.innerHTML = object;
});


