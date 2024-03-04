function nav_routing()
{
  document.getElementById("hoka1").addEventListener("click" , ()=>{
  document.body.innerHTML  = NAV  + HOME ; 
  document.getElementById("omm").addEventListener("click" , ()=>{
    nav_routing() ; 
    search() ; 
  })
  nav_routing() ; 
  })
  document.getElementById("hoka2").addEventListener("click" , ()=>{
    search() ; 
  })
  document.getElementById("hoka3").addEventListener("click" , ()=>{
    document.body.innerHTML  = NAV + ABOUT ;
    document.getElementById("omm").addEventListener("click" , ()=>{
      nav_routing() ; 
      search() ; 
    })   
    nav_routing() ; 
  })
}

let root = document.getElementById("root");

function main() {
  document.body.style.backgroundImage = "url(https://source.unsplash.com/random/?citynight)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.innerHTML += register();
  let registerButton = document.getElementById("ret");
  let loginButton = document.getElementById("loginBtn");
  let signInLink = document.getElementById("sign");
  console.log(localStorage.getItem("users")) ;
  signInLink.addEventListener("click", () => {
    document.body.innerHTML = "";
    document.body.innerHTML += login();
    loginButton = document.getElementById("ln"); 
    loginButton.addEventListener("click", () => {
      let email = document.getElementById("le").value;
      let password = document.getElementById("lp").value;
      let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      let user = existingUsers.find(u => u.email === email);
      if(email && password ){
        if (user && user.password === password) {
          document.body.innerHTML  = NAV  + HOME ; 
          document.getElementById("omm").addEventListener("click" , ()=>{
            search() ; 
          })
        } else {
          alert("Invalid email or password. Please try again.");
        }
      }
      else{
        alert("blanck entries") ; 
        return  ; 
      }
    });
  });
  registerButton.addEventListener("click", () => {
    let name = document.getElementById("registerName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(email && name && password && confirmPassword){
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
      let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (existingUsers.some(user => user.email === email)) {
        alert("User with this email already exists. Please log in.");
        return;
      }
      let newUser = {
        name: name,
        email: email,
        password: password,
      };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      document.body.innerHTML  = NAV  + HOME ; 
      document.getElementById("omm").addEventListener("click" , ()=>{
        search() ; 
      })
    }
    else{
      alert("blanck entries") ; 
      return  ; 
    }

  });
  loginButton.addEventListener("click", () => {
  });
}
function login()
{
  document.body.innerHTML = "" ; 
   return `
   <div class = "w-[100vw] h-[100vh] flex " >
   <div class="bg-grey w-[450px] backdrop-blur-lg bg-opacity-20 rounded-lg shadow-lg p-5 bg-gray-900 text-white m-auto ">
   <h2 class="text-2xl font-bold pb-5">SignIn</h2>
   <form id = "loginForm">
     <div class="mb-4">
       <label for="name" class="block mb-2 text-sm font-medium">Your name</label>
       <input
         type="text"
         id="le"
         class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
         placeholder="Andrew Jackson"
         required
         value=""
       >
     </div>

     <div class="mb-4">
       <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
       <input
       type="password"  
       id="lp" 
       class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
       placeholder="*********"
       required
       value=""
     >
     </div>
     <div class="mb-4">

     <div>
       <p class="text-red-500 pb-5"></p>
     </div>
     <div class="flex items-center justify-center mb-4">
       <button
         id = "ln"
         type="submit"
         class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
       >
         login
       </button>

     </div >

   </form>
 </div>
 </div>
   ` ;    
}
function register()
{
  document.body.innerHTML = "" ; 
   return`
   <div class = "w-[100vw] h-[100vh] flex " >
   <div class=" bg-grey w-[450px] backdrop-blur-lg bg-opacity-20 rounded-lg shadow-lg p-5 bg-gray-900 text-white m-auto ">
   <h2 class="text-2xl font-bold pb-5">SignUp</h2>
   <form id = "registerForm">
     <div class="mb-4">
       <label for="name" class="block mb-2 text-sm font-medium">Your name</label>
       <input
         type="text"
         id="registerName"
         class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
         placeholder="Andrew Jackson"
         required
         value=""
       >
     </div>
     <div class="mb-4">
       <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
       <input
         type="email"
         id="email"
         class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
         placeholder="andrew@mail.com"
         required
         value=""
       >
     </div>
     <div class="mb-4">
       <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
       <input
         type="password"
         id="registerPassword"
         class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
         placeholder="*********"
         required
         value=""
       >
     </div>
     <div class="mb-4">
     <label for="password" class="block mb-2 text-sm font-medium">confirm password</label>
     <input
       type="password"
       id="confirmPassword"
       class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
       placeholder="*********"
       required
       value=""
     >
   </div>
     <div>
       <p class="text-red-500 pb-5"></p>
     </div>
     <div class="flex items-center justify-center mb-4">
       <button
         id = "ret"
         type="submit"
         class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
       >
         register
       </button>

     </div >
     <div class="flex items-center justify-center mb-4">
     <p>already have an account?</p>
     <p id = "sign" class="underline cursor-pointer ml-1">Sign in</p>
   </div>
   </form>
 </div>
 </div>
   ` ;    
}
function purchase(book)
{
 console.log(book) ; 
 document.body.innerHTML = "" ;  
 let img  ; 
 if (!("imageLinks" in book.volumeInfo)) {
  img = "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
} else {
  img = book.volumeInfo.imageLinks.thumbnail;
}
document.body.innerHTML+=purchase_comp(book) ;
nav_routing() ; 
let idw = document.getElementById("idw");
console.log(img);
idw.style.backgroundImage = `url("${img}")`;
document.getElementById('bbt').addEventListener('click', function (event) { 
  // Get user details from the form
  let userEmail = document.getElementById('inputEmail4').value;
  let userPassword = document.getElementById('inputPassword4').value;
  let userAddress = document.getElementById('inputAddress').value;
  let userCity = document.getElementById('inputCity').value;
  let userState = document.getElementById('inputState').value;
  let userZip = document.getElementById('inputZip').value;
  let selectedISBN = document.getElementById('inputState').value; // Assuming the ISBN is selected in the dropdown 
  // Display user details in the alert

  if(userAddress && userCity && userEmail && userPassword && userState && userZip && selectedISBN ){
    alert(`User Details:
    Email: ${userEmail}
    Password: ${userPassword}
    Address: ${userAddress}
    City: ${userCity}
    State: ${userState}
    Zip: ${userZip}
    `);
    document.getElementById('bbt').innerHTML = `
    <button id="bbt2" class="btn btn-primary col-md-12">BOUGHT! Return to search</button>
    ` ;
    document.getElementById('bbt2').addEventListener('click', () => {
      search();
    });
    console.log("Bought!");
  }
  else{
    alert("blanck entries") ; 
    return  ; 
  }
  
});
}
function purchase_comp(element) {
    console.log(element.volumeInfo.title);

    let title = element.volumeInfo.title;
    let date = element.volumeInfo.publishedDate;
    let link = element.volumeInfo.infoLink;
    let auth = element.volumeInfo.authors[0] ; 
    let isbn = element.volumeInfo.industryIdentifiers ;
    let small = "" ;
    if ("description" in element.volumeInfo) {
      let description = element.volumeInfo.description ; 
      for(let i =0 ; i<60 ; i++)
      {
        if(i==description.length) break ; 
        small+= description[i] ; 
      }
      small+="..." ; 
    } 
    let img ; 
    if (!("imageLinks" in element.volumeInfo)) {
      img = "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    } else {
      img = element.volumeInfo.imageLinks.thumbnail;
    }
  return NAV  + `
  <div class = "w-[90vw] h-[90vh] pt-8 m-auto " >
      <div id="comt" class="flex justify-center gap-20 rounded-lg shadow-lg w-[80vw] h-[90vh] m-auto bg-opacity-0 backdrop-blur-xl p-4 md:flex-row md:h-full">
         <div class="bimg w-[200px] h-[95%]  flex flex-col p-4">
             <a id="idw" href="${img}" class="m-auto w-[90%] h-[35%] group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg "></a>
             <div class="text-white  kar h-[60%] w-[150px] m-auto">
                 <div class="h-[10px]"></div>
                 <hr>
                 <div class="h-[10px]"></div>
              Title  : <br>
              ${title}
              <div class="h-[10px]"></div>
              <hr>
              <div class="h-[10px]"></div>
              Author : <br>
              ${auth}
              <div class="h-[10px]"></div>
              <hr>
              <div class="h-[10px]"></div>
              Decription : <br>
              ${small}
              <div class="h-[10px]"></div>
              <hr>
              <div class="h-[10px]"></div>
              <a class="btn btn-primary w-[100%]" href="${link}"> READ MORE </a>
              <div class="h-[10px]"></div>
              <hr>
              <div class="h-[10px]"></div>
              <button class="btn btn-warning w-[100%]"> ADD TO CART</button>
             </div>
         </div>
         <div id="bink" class="h-[95%]">
             <form class = "text-white ">
                 <div class="form-row">
                   <div class="form-group col-md-12 ">
                     <label for="inputEmail4" >Email</label>
                         <input type="email" class="hover:border-2 border-sky-500 rounded-lg form-control rounded-lg " id="inputEmail4" placeholder="Email">
                   </div>
                   <div class="form-group col-md-12">
                     <label for="inputPassword4">Password</label>
                     <input type="password" class="hover:border-2 border-sky-500 form-control rounded-lg" id="inputPassword4" placeholder="Password">
                   </div>
                 </div>
                 <div class="form-group">
                   <label for="inputAddress">Address</label>
                   <input type="text" class="hover:border-2 border-sky-500 form-control rounded-lg" id="inputAddress" placeholder="1234 Main St">
                 </div>
                 <div class="form-group">
                   <label for="inputAddress2">Address 2</label>
                   <input type="text" class="hover:border-2 border-sky-500 form-control rounded-lg" id="inputAddress2" placeholder="Apartment, studio, or floor">
                 </div>
                 <div class="form-row">
                   <div class="form-group col-md-12">
                     <label for="inputCity">City</label>
                     <input type="text" class="hover:border-2 border-sky-500 form-control rounded-lg" id="inputCity">
                   </div>
                   <div class="form-group col-md-12 ">
                     <label for="inputState">State</label>
                     <select id="inputState" class="form-control rounded-lg hover:border-2 border-sky-500">
                         <option value="Andhra Pradesh">Andhra Pradesh (Amaravati)</option>
                         <option value="Arunachal Pradesh">Arunachal Pradesh (Itanagar)</option>
                         <option value="Assam">Assam (Dispur)</option>
                         <option value="Bihar">Bihar (Patna)</option>
                         <option value="Chhattisgarh">Chhattisgarh (Raipur)</option>
                         <option value="Goa">Goa (Panaji)</option>
                         <option selected ="Gujarat">Gujarat (Gandhinagar)</option>
                         <option value="Haryana">Haryana (Chandigarh)</option>
                         <option value="Himachal Pradesh">Himachal Pradesh (Shimla)</option>
                         <option value="Jharkhand">Jharkhand (Ranchi)</option>
                         <option value="Karnataka">Karnataka (Bangalore)</option>
                         <option value="Kerala">Kerala (Thiruvananthapuram)</option>
                         <option value="Madhya Pradesh">Madhya Pradesh (Bhopal)</option>
                         <option value="Maharashtra">Maharashtra (Mumbai)</option>
                         <option value="Manipur">Manipur (Imphal)</option>
                         <option value="Meghalaya">Meghalaya (Shillong)</option>
                         <option value="Mizoram">Mizoram (Aizawl)</option>
                         <option value="Nagaland">Nagaland (Kohima)</option>
                         <option value="Odisha">Odisha (Bhubaneshwar)</option>
                         <option value="Punjab">Punjab (Chandigarh)</option>
                         <option value="Rajasthan">Rajasthan (Jaipur)</option>
                         <option value="Sikkim">Sikkim (Gangtok)</option>
                         <option value="Tamil Nadu">Tamil Nadu (Chennai)</option>
                         <option value="Telangana">Telangana (Hyderabad)</option>
                         <option value="Tripura">Tripura (Agartala)</option>
                         <option value="Uttarakhand">Uttarakhand (Dehradun)</option>
                         <option value="Uttar Pradesh">Uttar Pradesh (Lucknow)</option>
                         <option value="West Bengal">West Bengal (Kolkata)</option>
                     </select>
                   </div>
                   <div class="form-group col-md-12 ">
                     <label for="inputZip">Zip</label>
                     <input type="text" class="rounded-lg form-control hover:border-2 border-sky-500" id="inputZip">
                   </div>
                 </div>
                 <div class="form-group col-md-12 ">
                     <label for="inputState">ISBN</label>
                     <select id="inputState" class="form-control rounded-lg hover:border-2 border-sky-500">
                       <option>${isbn[0].identifier}</option>
                       <option>${isbn[1].identifier}</option>
                     </select>
                   </div>
                 <div class="col-md-6 h-[10px]"> 
       
                 </div>
               </form>
               <button id = "bbt" class="btn btn-danger col-md-12"> BUY NOW </button>
         </div>
       </div>
   </div>
  `;
}
function search()
{
   document.body.innerHTML = "" ; 
   document.body.innerHTML+=searchcomp() ; 
   nav_routing() ; 
   let keyword;
   btn = document.getElementById("getter");
   let vat = document.getElementById('button') 
   console.log("working till here ") ;
   btn.addEventListener("click", (event) => {
      event.preventDefault();
      if(vat.value == "isbn"){

        if (vat.value == "isbn") {
          console.log("working till here ");
          let list = document.getElementById("add");
          list.innerHTML = "";
          keyword = document.getElementById("search").value;
          
          // Check if the input is numeric
          if (!isNaN(keyword)) {
              s = formatter(keyword);
              let booksinfo = [];
              let run = fetch(`https://www.googleapis.com/books/v1/volumes?q=${s}`);
              
              run.then((response) => {
                  return response.json();
              }).then((value) => {
                  console.log(value);
                  booksinfo = value.items;
              }).then(() => {
                 
                  let boot = false ; 
                  for (let i = 0; i < booksinfo.length; i++) {
                      console.log(booksinfo[i].volumeInfo.industryIdentifiers[0].identifier) ; 
                      console.log("high");
                      if (booksinfo[i].volumeInfo.industryIdentifier) {
                          if (booksinfo[i].volumeInfo.industryIdentifiers[0].identifier == keyword || booksinfo[i].volumeInfo.industryIdentifiers[1].identifier == keyword) {
                            boot = true ;
                            get_val([booksinfo[i]]);
                              let tt = document.querySelectorAll("#ok");
                              tt[i].addEventListener("click", () => {
                                  purchase(booksinfo[i]);
                              });
                              break ; 
                          }
                      }
                  }
                  if(!boot) alert("404 not found ") ; 
                
              });
          } else {
              // Handle the case when the input is not numeric
              alert("Please enter a numeric value for ISBN search.");
          }
      }
          
       } 
      else{
        console.log("working till here ") ;
        let list = document.getElementById("add");
        list.innerHTML = "" ; 
         keyword = document.getElementById("search").value;    
         s = formatter(keyword) ; 
         let booksinfo = [];
         let run = fetch(`https://www.googleapis.com/books/v1/volumes?q=${s}`);
         run.then((response) => {
            return response.json();
         }).then((value) => {
            console.log(value);
            booksinfo = value.items;
         }).then(() => {
            get_val(booksinfo);
            for(let i =0 ; i<booksinfo.length ; i++)
            {
              console.log(booksinfo[i].volumeInfo.industryIdentifiers[0].identifier) ;
              console.log("high") ; 
              let tt = document.querySelectorAll("#ok") ; 
              tt[i].addEventListener("click" , ()=>{
                purchase(booksinfo[i]) ; 
              })
            }
         }).catch((error) => {
            console.error('Error fetching data:', error);
         });
         document.body.style.backgroundImage = `url(https://source.unsplash.com/random/?${formatter2(keyword)})` ;
         document.body.style.backgroundSize = "cover" ; 
         
      }

   });
}
function searchcomp()
{ 
   return NAV  + `  
   <div class = "w-[90vw] h-[70vh] pt-8 m-auto " >
      <div class="max-w-5xl m-auto">
      <form class="flex items-center space-x-4 mb-8">
          <input id="search" type="text" id="searchInput" class="p-2 border border-gray-300 rounded-md w-full" placeholder="Search for a book...">
          <button id = "getter" class="bg-blue-500 text-white px-4 py-2 rounded-md "> SEARCH </button>
          <select  id = "button" class="bg-green-500 text-white px-4 py-2 rounded-md ">
            <option value = "gen" class = "p-4">GENERAL </option>
            <option value = "isbn">ISBN </option>
          </select>
       </form>
   
       <div class = " " >
       <section class="  py-6 sm:py-8 lg:py-12">
       <div class="mx-auto max-w-screen-xl px-4 md:px-8"> 
   
         <div  id = "add" class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
           <!-- Article -->
           <article id="art" class="  backdrop-blur-md bg-white/30 rounded-lg  flex flex-col items-center gap-4 md:flex-row lg:gap-6  p-4">
           <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
             <img id="thunmb" src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
           </a>
           
           <div class="flex flex-col gap-2">
             <span id="date" class="text-sm text-white">April 2, 2022</span>
           
             <h2 class="text-xl font-bold text-white">
               <a id="title" href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">The Pines and the Mountains</a>
             </h2>
           
             <p id="description" class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
           
             <div class = "flex justify-around">
             <a id ="link"href="#" class="btn btn-primary font-semibold text-white transition duration-100 hover:text-white active:text-white">Read more</a>
             <button class = "btn btn-warning"style = "margin-left: 0px "> BUY NOW </button>
             </div>
           
           </div>
           </article>
           
           <!-- /Article -->
   
         </div>
       </div>
     </section>
     </div>
   
   </div>
   </div>
   ` ; 
}
function get_val(bi) {
  console.log(bi);
  bi.forEach((element , index) => {
    console.log(element.volumeInfo.title);
    let title = element.volumeInfo.title;
    let date = element.volumeInfo.publishedDate;
    let link = element.volumeInfo.infoLink;
    let small = "" ;
    if ("description" in element.volumeInfo) {
      let description = element.volumeInfo.description ; 
 
      for(let i =0 ; i<120 ; i++)
      {
        if(i==description.length) break ; 
        small+= description[i] ; 
      }
      small+="..." ; 
    } 
    let img ; 
    if (!("imageLinks" in element.volumeInfo)) {
      img = "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    } else {
      img = element.volumeInfo.imageLinks.thumbnail;
    }
    let list = document.getElementById("add");
    list.innerHTML += add_value(index , date, img, title, link , small);   
  });
}
function formatter2(s) {
   let modifiedArray = s.split('').map(char => (char === ' ' ? '' : char));
   return modifiedArray.join('');
}
function formatter(s) {
   let modifiedArray = s.split('').map(char => (char === ' ' ? '+' : char));
   return modifiedArray.join('');
}
function add_value(index , date, img, title, link , description ) {
  return `
  <article id="art" class="  backdrop-blur-md bg-white/30 rounded-lg  flex flex-col items-center gap-4 md:flex-row lg:gap-6  p-4">
    <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
      <img id="thunmb" src="${img}" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    </a>

    <div class="flex flex-col gap-2">
      <span id="date" class="text-sm text-white">${date}</span>

      <h2 class="text-xl font-bold text-white">
        <a id="title" href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">${title}</a>
      </h2>

      <p id="description" class="text-white">${description}</p>

      <div class = "flex justify-around">
      <a id ="link"href="${link}" class="btn btn-primary font-semibold text-white transition duration-100 hover:text-white active:text-white">Read more</a>
      <button id = "ok" class = " btn btn-warning font-bold"style = "margin-left: 0px "> BUY NOW </button>
      </div>

    </div>
  </article>
  `;

}


const NAV = `
<nav class="bg-gray-800">
<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div class="relative flex h-16 items-center justify-between">
    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Open main menu</span>
        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div class="flex flex-shrink-0 items-center">
        <img class="h-8 w-auto rounded-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUle1ZJiVK_W0s7aMkv4iSR0LcuHNqUnD-m8PAznoKZNn0JL-y" alt="Your Company">
      </div>
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">
          <a id = "hoka1"class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">home </a>
          <a id = "hoka2" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">search</a>
          <a id = "hoka3" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">about us </a>
        </div>
      </div>
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span class="absolute -inset-1.5"></span>
        <span class="sr-only">View notifications</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button>

      <div class="relative ml-3">
        <div>
          <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </button>
        </div>


      </div>
    </div>
  </div>
</div>
</nav>
`

const HOME = `
<div class="w-[100vw] h-[90vh] flex justify-center relative">
<!-- Carousel Container -->
<div id="carouselExampleIndicators" class="w-[auto] h-[90vh] carousel slide flex justify-center backdrop-blur-xl bg-opacity-10 rounded-lg shadow-lg p-5 bg-gray-900 p-4 m-auto relative">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div
        style="
          background-image: url(https://source.unsplash.com/random/?library);
          background-size: cover; 
          background-repeat: no-repeat;
          height: 90vh;
          width: 90vw;
        "
      ></div>
    </div>
    <div class="carousel-item">
    <div
    style="
      background-image: url(https://source.unsplash.com/random/?bookshelf);
      background-size: cover; 
      background-repeat: no-repeat;
      height: 90vh;
      width: 90vw;
    "
  ></div>
    </div>
    <div class="carousel-item">
    <div
    style="
      background-image: url(https://source.unsplash.com/random/?books);
      background-size: cover; 
      background-repeat: no-repeat;
      height: 90vh;
      width: 90vw;
    "
  ></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
  <h1 style = "font-size: 60px; text-align: center;" class = "flex justify-around items-center"> 
  Welcome to <br> Ebooks 
  <div>
     <img class = "rounded-lg "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUle1ZJiVK_W0s7aMkv4iSR0LcuHNqUnD-m8PAznoKZNn0JL-y" alt="">
    </div>
</h1>
    <div class = "m-4 text-center" >
      get all the amazing books from all over the world 
    </div>
    <div id = "omm" class = "flex justify-center  bg-opacity-50 rounded-lg shadow-lg p-5 bg-sky-900 " style = "height: 2em ; align-items: center;">
      <button>
         start now 
      </button>
    </div>

  </div>
</div>
</div>
`

const ABOUT = `
<div class="w-[100vw] h-[90vh] flex justify-center items-center backdrop-blur-xl bg-opacity-50 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
<div class="text-center">
  <h1 class="text-4xl font-bold mb-4">Welcome to Ebook</h1>
  <p class="text-lg mb-6">
    Ebook is not just a digital bookstore; it's a gateway to a world of knowledge and literary exploration. Our mission is to connect readers with an extensive collection of books from diverse genres, offering a platform that fosters a love for reading and continuous learning.
  </p>
  <p class="text-lg mb-6">
    What sets Ebook apart is our integration with the Google Books API, allowing us to provide a rich and dynamic selection of books. Whether you're into classic literature, contemporary fiction, academic studies, or niche subjects, Ebook caters to all tastes and interests.
  </p>
  <p class="text-lg mb-6">
    At Ebook, we believe in the power of accessible education and the joy of reading. Our user-friendly interface ensures a seamless browsing experience, making it easy for you to discover new authors, explore topics of interest, and build your personal digital library.
  </p>
  <p class="text-lg mb-6">
    We are committed to promoting literacy, supporting authors, and creating a community of passionate readers. Our team at Ebook is dedicated to curating an ever-expanding collection, enhancing features based on user feedback, and providing a reliable platform for book enthusiasts worldwide.
  </p>
  <div class="flex justify-center">
    <button id = "omm" class = " flex justify-center bg-opacity-50 rounded-lg shadow-lg p-5 bg-sky-900 " style = "font-size: 2em ; align-items: center; height: 2em; font-weight: bolder;">
      Start Your Reading Journey
    </button>
  </div>
</div>
</div>

` 
main() ;