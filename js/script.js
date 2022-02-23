//  Langage selectionner 
const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children;
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item");
    totalPortfolioItem = portfolioItems.length;
 

   for(let i=0; i<totalFilterBtn; i++){

        filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

           const filterValue = this.getAttribute("data-filter");

           for(let k=0; k<totalPortfolioItem; k++){

            if(filterValue === portfolioItems[k].getAttribute("data-category")){

                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else{
                
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if(filterValue == "all"){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
           }
           
        })
   }

//  Navbar

// const nav=document.querySelector(".nav"),
//       navList=nav.querySelectorAll("li"),
//       totalNavList = navList.length,
//       allSection = document.querySelectorAll(".section"),
//       totalSection = allSection.length;


// for(let i=0; i<totalNavList; i++) {

//     const a=navList[i].querySelector("a");

//         a.addEventListener("click", function(){

//             for(let k=0; k<totalNavList; k++){

//                 navList[k].querySelector("a").classList.remove("active")
//             }
//         this.classList.add("active");

//         showSection(this);
//    })
// }

// function showSection(eLement){
//     for(let i=0; i<totalSection; i++){
//         allSection[i].classList.remove("active");
//     }

//     const target = eLement.getAttribute("href").split("#")[1];
   
//    document.querySelector("#"+target).classList.add("active");

// }


const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",() =>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}