// read local JSON file in javascript
fetch("./text.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
  const tabs = [...document.querySelectorAll('.tab')]
  const targetElement = document.getElementById("test")
  
  
  tabs.forEach(tab => tab.addEventListener("click", tabsAnimation))
  
  const tabContents = [...document.querySelectorAll(".tab-content")]
  
  function tabsAnimation(e){
    
    const indexToRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))
  
    tabs[indexToRemove].setAttribute("aria-selected", "false")
    tabs[indexToRemove].setAttribute("tabindex", "-1")
    tabs[indexToRemove].classList.remove("active-tab");
    tabContents[indexToRemove].classList.remove("active-tab-content");
  
    const indexToShow = tabs.indexOf(e.target)
    console.log(indexToShow)
    console.log(data)
    // Création de la balise <img>
    var image_Element = document.createElement("img");

    // Assignation d'une source à la balise <img>
    image_Element.src = data[indexToShow].name;

    // Placement du produit dans le HTML
    targetElement.appendChild(image_Element);
  
    tabs[indexToShow].setAttribute("tabindex", "0")
    tabs[indexToShow].setAttribute("aria-selected", "true")
    tabs[indexToShow].classList.add("active-tab")
    tabContents[indexToShow].classList.add("active-tab-content")
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

 