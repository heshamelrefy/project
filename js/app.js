let sections = document.querySelectorAll("section");

let navbar__list = document.getElementById("navbar__list");

let fragment = document.createDocumentFragment();

sections.forEach(section =>{
    // get attr from section
    let dataNav = section.getAttribute("data-nav");
    let li = document.createElement("li");
    let links =document.createElement("a") ;
    // add linkContent from attr in section
    links.textContent += dataNav;
    li.appendChild(links);
    fragment.appendChild(li);
    li.style.cssText = "display:inline-block;padding:20px;cursor: pointer;"; 
    let secId = section.id;
    // add event when need go to any section by link 
    li.addEventListener("click",()=>{
        let elm = document.getElementById(secId);
         elm.scrollIntoView({behavior:'smooth'});
    })
})
// fragment append to ul 
navbar__list.appendChild(fragment);
navbar__list.style.cssText = "background-color:orange;width:auto";

// add event scroll in window
window.addEventListener("scroll",function(){
    sections.forEach(section=>{
        // select all links
        let links = document.querySelectorAll("a");
        // get top for elm 
        let react = section.getBoundingClientRect();
        if (react.top >= 0 && react.top < 100) {
            section.style.backgroundColor="yellow";
            
            sections.forEach(section=>{
                // remove classList in section
                section.classList.remove("your-active-class")
                section.style.backgroundColor="white";
            })
            // add classList in section
            section.classList.add("your-active-class");
            section.style.backgroundColor="yellow";
            // get attr section 
            let actvNav = section.getAttribute("data-nav");
            links.forEach(link=>{
                // when textcontent == actvNav change background-color
                if (link.textContent == actvNav) {
                    link.style.backgroundColor="yellow";
                    links.forEach(link=>{
                        link.classList.remove("activeLink")
                        link.style.backgroundColor="transparent";
                    })
                        link.classList.add("activeLink")
                        link.style.backgroundColor="yellow";
                }
            })
        }
    })

})
    
