// const input_1 = document.getElementById('inp');
// console.log(input_1);
// const input_2 = document.getElementsByClassName('inp')[0];
// console.log(input_2);
// const input_3 = document.getElementsByTagName('input')[1];
// console.log(input_3);
// const input_4 = document.querySelector("[value='hello_2']");
// console.log(input_4);
// const Ahmed="Ahmed";
// const maram="maram";
// const input_5 = document.querySelector(`[data-name=${Ahmed}]`);
// console.log(input_5);
// let val =input_5.dataset.name;
// console.log(val);
// input_5.setAttribute("value",val);
// console.log(input_5);
// console.log(input_3.getAttribute("class"));
// console.log(input_1.hasAttribute("value"));
// console.log(input_1.hasAttributes());
// console.log(input_1.attributes);
// input_1.removeAttribute("id");
// console.log(input_1.attributes);
// console.log("------------------------------------------------------");
// const main=document.querySelector("#main");
// const card=document.createElement("div");
// const classCard=document.createAttribute("id");
// card.setAttributeNode(classCard);
// card.setAttribute("class","myCard");
// console.log(card);
// let text= document.createTextNode("Ahmed Mousa Love Maram");
// card.appendChild(text);
// // console.log(document); // representation the page
// main.appendChild(card);
// document.body.appendChild(main);
// console.log("--------------------------------------------")
// console.log(main.children);
// console.log(main.childNodes);
// console.log(main.firstChild);
// console.log(main.lastChild);
// console.log(main.firstElementChild);
// console.log(main.lastElementChild);
// console.log("--------------------------------------------")

// !
// let arr=[];
// let arr1=[];
// let inp=document.querySelector("[name='value']");
// let box=document.querySelector(".box");
// // console.log(box);
// async function getData(){
// let data=await fetch("ingredients.json");
// let dObj= await data.json();
//  arr=dObj.ingredients;
// // console.log(typeof arr);
// let dataName=[];
// inp.oninput=(e)=>{
//     if(inp.value=='')
//         box.innerHTML='';
//     box.style.display="block";
//   console.log(inp.value);
// arr1=arr.filter((el)=>{
//     return el.name.includes(inp.value);
// });
// console.log(arr1);
// if(arr1.length!=172)
//     {
//         box.innerHTML='';
//         arr1.forEach((e,idx) => {
//                     box.innerHTML+=`<p>${e.name}</p>`;
//                     // console.log(e);
//         });

//     }

// }
// }
// getData();
// chicken

/*
-----------------'[type="value"]'
document.querySelector("")
document.querySelectorAll("")||[]
document.getElementById("")
document.getElementsByClassName("")
document.getElementsByTagName("")
-----------------------------------------------
document.forms[]
document.links[]
document.images[]
document.body
document.title
---------------------------------
getAttribute("type");
setAttribute("type","value")
---------------------------------

hasAttribute("type")
hasAttributes()
removeAttribute("type")
Element.attributes
-----------------------------------------
documents==> represent htmlPage
document.createElement("")
document.createTextNode("")
Element.appendChild(el);
-----------------------------------------
Element.children // html only
Element.children[num]
Element.childNodes // text and html
Element.childNodes[num]
Element.firstElementChild // html
Element.lastElementChild 
Element.firstChild // text and html
Element.lastChild 
----------------------------------------
Element.classList.add("c1","c2",..)
Element.classList.remove("c1","c2",..)
Element.classList.toggle("")
Element.classList.contains("name")
---------------------------------------
Element.blur()
Element.focus()
Element.oninput()
Element.onkeyup()
Element.onkeydown()
Element.onkeypress()
Element.onclick()
Element.onsubmit()
Element.onmouseover()
Element.onmouseleave()
----------------------------------
----style--------
Element.style.property="value"
Element.style.cssText=`value`
----not important-----
Element.style.removeProperty("property")
Element.style.setProperty("property","value")
-------------------------------------------
Element.after("anything")
Element.before("anything")
Element.append("anything")
Element.append("anything")
Element.remove()
-------------------------------------
Element.parentElement
Element.nextElementSibling
Element.nextSibling
Element.previousElementSibling
Element.previousSibling
---------------------------------------------
Element.addEventListener("typeEvent",fn)
let fn=function(e){
}
*/

// console.log(location.reload());
// console.log(location.href);
// console.log(location.hash);

// console.log(history.forward());
// console.log(history.back());
// console.log(history.go(pos));

/*
- alert("");
- confirm("");
  true | false
- prompt("");
--------------------------------
- let var =setTimeout(fn,time,prams);
- function fn(age,...){}
- clearTimeout(var);
- let var =setInterval(()=>{},sec)
- clearInterval(var);
--------------------------------
window.print();

*/

// localStorage.clear();
// var
let inputTitle = document.querySelector("#inp-title");
let inputDetails = document.querySelector("#inp-details");
let btnSubmit = document.querySelector(".btn-submit");
let container = document.querySelector(".container");
let pop = document.querySelector(".div-pop");
let popUpdate = document.querySelector(".pop-update");

let arr = [];

let globalId = 0;
window.onload = () => {
  if (localStorage.getItem("data").length > 0) {
    console.log(arr);
    if (arr.length > 0) {
      arr = JSON.parse(localStorage.getItem("key"));
      for (let i = 0; i < arr.length; i++) {
        // <div data-aos="fade-up"></div>
        container.innerHTML += `
                  <div class="box"  data-id=${arr[i]._id}>
         <span class="star ${arr[i].active ? "active" : ""}"></span>
                          <h1>${arr[i].title}</h1>
                          <p>${arr[i].details}</p>
                          <button class="delete">delete</button>
                          <button class="update">update</button>
                </div> 
                  `;
      }
      if (arr.length != 0) globalId = arr[arr.length - 1]._id + 1;
    }
    // console.log(globalId);
  } else {
    globalId = 0;
  }
};

/// one Function
btnSubmit.addEventListener("click", createBox);
function createBox(e) {
  arr.push({ _id: globalId, active: false, title: inputTitle.value, details: inputDetails.value });
  localStorage.setItem("key", JSON.stringify(arr));

  container.innerHTML += `
  <div class="box"  data-id=${globalId}>
           <span class="star"></span>
          <h1>${inputTitle.value}</h1>
          <p>${inputDetails.value}</p>
          <button class="delete">delete</button>
          <button class="update">update</button>
</div> 
  `;
  globalId++;
  inputTitle.value = "";
  inputDetails.value = "";
}

/////////////
let parent;
let x, y;
let numDelete = -1;
container.addEventListener("click", deleteBox);
function deleteBox(e) {
  window.scrollTo(10, 10);
  parent = e.target.parentElement;
  // console.log(parent.dataset.id);
  if (e.target.className == "delete") {
    pop.classList.add("app");
  } else if (e.target.className == "update") {
    popUpdate.classList.add("app");
    x = e.target.parentElement.querySelector("h1").innerHTML;
    y = e.target.parentElement.querySelector("p").innerHTML;
    popUpdate.querySelector(".input-t").value = x;
    popUpdate.querySelector(".input-d").value = y;
    console.log(
      popUpdate.querySelector(".input-d").innerHTML,
      popUpdate.querySelector(".input-t").innerHTML
    );
    numDelete = e.target.parentElement.dataset.id;
  } else if (e.target.className == "star" || e.target.className == "star ") {
    e.target.classList.add("active");
    const Box = arr.find((el) => {
      return el._id == parent.dataset.id;
    });
    Box.active = true;
    arr = arr.filter((e) => {
      return e._id != parent.dataset.id;
    });
    arr.unshift(Box);
    localStorage.clear();
    localStorage.setItem("key", JSON.stringify(arr));
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      container.innerHTML += `
            <div class="box"  data-id=${arr[i]._id}>
   <span class="star ${arr[i].active ? "active" : ""}"></span>
                    <h1>${arr[i].title}</h1>
                    <p>${arr[i].details}</p>
                    <button class="delete">delete</button>
                    <button class="update">update</button>
          </div> 
            `;
    }
  } else if (e.target.className == "star active") {
    e.target.classList.remove("active");
    const Box = arr.find((el) => {
      return el._id == parent.dataset.id;
    });
    Box.active = false;
    arr = arr.filter((e) => {
      return e._id != parent.dataset.id;
    });
    arr.push(Box);
    localStorage.clear();
    localStorage.setItem("key", JSON.stringify(arr));
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      container.innerHTML += `
            <div class="box"  data-id=${arr[i]._id}>
   <span class="star ${arr[i].active ? "active" : ""}"></span>
                    <h1>${arr[i].title}</h1>
                    <p>${arr[i].details}</p>
                    <button class="delete">delete</button>
                    <button class="update">update</button>
          </div> 
            `;
    }
  }
}

popUpdate.addEventListener("click", (e) => {
  if (e.target.className == "update-pop") {
    console.log(numDelete);
    let obOld = arr.find((el) => {
      return el._id == numDelete;
    });
    arr = arr.filter((el) => {
      return el._id != numDelete;
    });

    obOld.title = popUpdate.querySelector(".input-t").value;
    obOld.details = popUpdate.querySelector(".input-d").value;
    parent.querySelector("h1").innerHTML = obOld.title;
    parent.querySelector("p").innerHTML = obOld.details;
    arr.push(obOld);
    localStorage.setItem("key", JSON.stringify(arr));
    popUpdate.classList.remove("app");
  } else if (e.target.className == "btn-cancel-updata") {
    popUpdate.classList.remove("app");
  }
});

pop.addEventListener("click", (e) => {
  let className = e.target.className;
  if ("btn-cancel" == className) {
    flag = false;
    pop.classList.remove("app");
  } else if ("btn-del-ok" == className) {
    flag = true;
    setTimeout(() => {
      parent.style.cssText = `display:none;`;
    }, 200);
    parent.style.cssText = `
                 transition:.5s; 
                 opacity:0;
                 `;
    let pos = parent.dataset.id;
    console.log(pos);
    arr = arr.filter((el) => {
      return el._id != pos;
    });
    localStorage.clear();
    localStorage.setItem("key", JSON.stringify(arr));
    pop.classList.remove("app");
  }
});
