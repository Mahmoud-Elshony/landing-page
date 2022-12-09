/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
/**
 * Define Global Variables
 * 
 */
 const ul_nav = document.getElementById("navbar__list");
 const sections = document.querySelectorAll('section');
 const fragment = document.createDocumentFragment();
 const scrollTopBtn = document.getElementById('scrollTop');
 const collBtns = document.querySelectorAll('.collBtn');
 /**
  * End Global Variables
  * Start Helper Functions
  * 
  */
 // build the nav
 // make function to create and append nav li links
 for (const section of sections) {
         const sectionId = section.id;
         const sectionTitle = section.dataset.nav;
         const li_nav = document.createElement("li");
         const link_nav = document.createElement("a");
         link_nav.href = `#${sectionId}`;
         link_nav.textContent = sectionTitle;
         link_nav.classList.add("menu__link");
         //mack page scroll smooth
         link_nav.addEventListener('click', function(evn) {
                 evn.preventDefault();
                 section.scrollIntoView({
                         behavior: 'smooth',
                 })
         })
         li_nav.appendChild(link_nav);
         fragment.appendChild(li_nav);
 }
 ul_nav.appendChild(fragment);
 // add click event to button to make bage scroll to top
 scrollTopBtn.addEventListener('click', () => {
         document.body.scrollTop = 0;
 })
 /**
  * End Helper Functions
  * Begin Main Functions
  * 
  */
 // Add class 'active_link' to section when near top of viewport
 // Scroll to anchor ID using scrollTO event
 const MAX_TOP = 550;
 const MIN_TOP = 0;
 let trick = 0;
 let x; // settimeout
 window.addEventListener('scroll', function() {
         for (const section of sections) {
                 const sectionTop = section
                         .getBoundingClientRect().top;
                 if (sectionTop > MIN_TOP && sectionTop <
                         MAX_TOP) {
                         //active class whene scrolling
                         ul_nav.querySelector(
                                 `a[href="#${section.id}`
                                 ).classList.add(
                                 'active_link');
                         section.classList.add(
                                 "your-active-class");
                 } else {
                         ul_nav.querySelector(
                                 `a[href="#${section.id}`
                                 ).classList.remove(
                                 'active_link');
                         section.classList.remove(
                                 "your-active-class");
                 }
         }
         //hide navbar when no scrolling
         //the trick Variable use to 
         if (trick === 1) {
                 this.clearTimeout(x);
                 ul_nav.style.display = 'block';
         }
         x = setTimeout(function() {
                 trick = 1;
                 ul_nav.style.display = 'none';
         }, 2000);
         /*  
             check scroll top > 243px to show scroll top button
             hide or show button and navbar 
             scrollTop
         */
         if (this.document.body.scrollTop >= 243) {
                 scrollTopBtn.style.display = "block";
         } else {
                 scrollTopBtn.style.display = "none";
                 ul_nav.style.display = 'block';
                 this.clearTimeout(x);
         }
 })
 // Make sections collapsible
 collBtns.forEach(collBtn => {
         collBtn.addEventListener("click", function() {
                 this.classList.toggle("hide");
                 let content = this
                         .nextElementSibling;
                 content.style.maxHeight =
                         content.style
                         .maxHeight ? null :
                         content.scrollHeight +
                         "px";
         })
 });