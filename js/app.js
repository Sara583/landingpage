//select navbar via 'id'
const navigationList = document.querySelector("#navbar__list");
//coverting list to array using spread operator
const sections = [...document.querySelectorAll("section")];
//function to add sections
function add(section) {
  //function to add smooth scroll behaviour on click event
  const scroll=(entry)=>{
  entry.preventDefault();
  section.scrollIntoView({behavior:'smooth'});
};
  const id = section.id;
  const name=section.dataset.nav;
  newLi = document.createElement("li");
  navigationList.append(newLi);
  newLi.innerHTML = `<li><a href="#${id}" data-nav="${id}" class="menu__link" >${name}</a></li>`
//EventListener to activate the smooth behaviour
  newLi.addEventListener('click',scroll);
}



//looping the adding via foreach method
let createNewItems = () => {
  sections.forEach((section) => {
    add(section);
  });
};
createNewItems();
// fuction to check element's viewport ratios using get bounding client rect
    const Viewed=(e)=> {
    const rect = e.getBoundingClientRect();
    return (rect.top >= 0 &&rect.top <=350);
    }
    //adding and removing classes on scroll checking the condition if it's viewed or not
window.addEventListener("scroll", ()=>{
  sections.forEach((section) => {
    let hyperLink=document.querySelector(`a[ href="#${section.id}"]`);
    if( Viewed(section)){
      section.classList.add('your-active-class');
      hyperLink.classList.add('active');
      console.log('active');
    }else{
      section.classList.remove('your-active-class');
     hyperLink.classList.remove('active');
       console.log('notactive');
   }
})
}
  );
