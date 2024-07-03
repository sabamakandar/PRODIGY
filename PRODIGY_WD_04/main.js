


/* ============= SKILLS TABS ===================== */

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills_active")
        })

        target.classList.add("skills_active")


        tabs.forEach(tab => {
            tab.classList.remove("skills_active")
        })

        tab.classList.add("skills_active")
    })
})



/* ======================== MIXTUP FILTER PORTFOLIO ================= */

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }

})


/* ======== LINK ACTIVE WOKR =========== */
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(L => I.classList.remove('.active_work'))
    this.classList.add('.active_work')
}


linkWork.forEach(L => I.addEventListener("click", activeWork))


/* ================= WORK POPUP ============== */

document.addEventListener("click", (e) => {
    if (e.target.classList.contents("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup"), classList.toggle("open");
}

document.querySelector(".portfolio_popup_close").addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup_subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_detailes").innerHTML;
}







const section = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighLighter);

function navHighLighter()
{
    let scrollY = window.pageYOffset;
    SpeechRecognitionResult.forEach(current => {
        const sectionHeight = current.offsetTop -50
    })
}



