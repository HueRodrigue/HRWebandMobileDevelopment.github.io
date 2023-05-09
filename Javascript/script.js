// read local JSON file in javascript
fetch("./text.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
  const tabs = [...document.querySelectorAll('.tab')]
  const tabContent = document.getElementById("panel-1")

  const tabContentpart1 = document.getElementById("tab-content-part1")
  const tabContentpart2 = document.getElementById("tab-content-part2")
  const tabContentpart3 = document.getElementById("tab-content-part3")
  const tabContentpart4 = document.getElementById("tab-content-part4")
  console.log(tabContent)
  
  
  tabs.forEach(tab => tab.addEventListener("click", tabsAnimation))
  
  function tabsAnimation(e){
    tabContentpart4.innerHTML = '';
    tabContentpart3.innerHTML = '';
    tabContentpart2.innerHTML = '';
    tabContentpart1.innerHTML = '';
    console.log(tabContent)
    const indexToRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))
  
    tabs[indexToRemove].setAttribute("aria-selected", "false")
    tabs[indexToRemove].setAttribute("tabindex", "-1")
    tabs[indexToRemove].classList.remove("active-tab");
    tabContent.classList.remove("active-tab-content");
  
    const indexToShow = tabs.indexOf(e.target)
    console.log(indexToShow)
    console.log(data)
    // Création de la balise <img>
    var image_Element1 = document.createElement("img");
    // Création de la balise <img>
    var image_Element2 = document.createElement("img");
    // Création de la balise <img>
    var image_Element3 = document.createElement("img");

    // Assignation d'une source à la balise <img>
    image_Element1.src = data[indexToShow].logo;
    // Assignation d'une source à la balise <img>
    image_Element2.src = data[indexToShow].img1;
    // Assignation d'une source à la balise <img>
    image_Element3.src = data[indexToShow].img2;

    var title_Element = document.createElement("h3");
    var description1 = document.createElement("p");
    var description2 = document.createElement("p");
    var link = document.createElement("a");

    title_Element.innerText = data[indexToShow].title
    description1.innerText = data[indexToShow].description1
    description2.innerText = data[indexToShow].description2
    link.innerText = "Lien vers le projet GitHub"
    link.href = data[indexToShow].link

    tabContentpart1.appendChild(image_Element1)
    tabContentpart1.appendChild(title_Element)
    tabContentpart2.appendChild(description1)
    tabContentpart2.appendChild(image_Element2)
    tabContentpart3.appendChild(image_Element3)
    tabContentpart3.appendChild(description2)
    tabContentpart4.appendChild(link)

    // Placement du produit dans le HTML
    tabContent.appendChild(tabContentpart4,tabContentpart3,tabContentpart2,tabContentpart1);
  
    tabs[indexToShow].setAttribute("tabindex", "0")
    tabs[indexToShow].setAttribute("aria-selected", "true")
    tabs[indexToShow].classList.add("active-tab")
    tabContent.classList.add("active-tab-content")
  }
  
  tabs.forEach(tab => tab.addEventListener("keydown", arrowNavigation))
  
  let tabFocus = 0;
  function arrowNavigation(e){
  
    if(e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1)
  
      if(e.keyCode === 39) {
        tabFocus++;
  
        if(tabFocus >= tabs.length) {
          tabFocus = 0;
        }
      } else if (e.keyCode === 37) {
        tabFocus--;
  
        if(tabFocus < 0) {
          tabFocus = tabs.length -1;
        }
      }
  
      tabs[tabFocus].setAttribute("tabindex", 0)
      tabs[tabFocus].focus()
    }
  
  }
    
})

 