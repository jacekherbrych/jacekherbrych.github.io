"use strict";

const myDate = new Date(document.lastModified);
 const myNewDate = new Intl.DateTimeFormat("de-AT", {
   day: "numeric",
   month: "numeric",
   year: "numeric"
 }).format(myDate);
 document.getElementById("last-update").textContent = " " + myNewDate;

const navigationLinks = [
    ...document.querySelectorAll("#navigation .btn")
  ];

  const navigationSections = navigationLinks.map(link => {
    const target = link.getAttribute("href");
    return document.querySelector(target === "#" ? "#nav-info" : target);
  });

  function updateActiveNavigation() {
    const pageHeader = document.querySelector(".header");
    const fixedHeader = getComputedStyle(pageHeader).position === "fixed";
    const offset = fixedHeader
      ? pageHeader.getBoundingClientRect().bottom + 20
      : 16;

    let activeIndex = 0;

    navigationSections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= offset) {
        activeIndex = index;
      }
    });

    navigationLinks.forEach((link, index) => {
      const active = index === activeIndex;
      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  let navigationUpdatePending = false;

  function scheduleNavigationUpdate() {
    if (navigationUpdatePending) return;

    navigationUpdatePending = true;
    requestAnimationFrame(() => {
      updateActiveNavigation();
      navigationUpdatePending = false;
    });
  }

  window.addEventListener("scroll", scheduleNavigationUpdate, {
    passive: true
  });
  window.addEventListener("resize", scheduleNavigationUpdate);
  window.addEventListener("hashchange", scheduleNavigationUpdate);
  window.addEventListener("load", scheduleNavigationUpdate);
  window.addEventListener("pageshow", scheduleNavigationUpdate);

  updateActiveNavigation();

const scrollProgress = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
  }
  window.addEventListener('scroll', updateScrollProgress);
  window.addEventListener('resize', updateScrollProgress);
  window.addEventListener('load', updateScrollProgress);

var vall = document.getElementsByClassName("allpub");
  var vnawa2019 = document.getElementsByClassName("nawa2019");
  var vncn2020 = document.getElementsByClassName("ncn2020");
  var vncn2024 = document.getElementsByClassName("ncn2024");
  var vjsps2026 = document.getElementsByClassName("jsps2026");
  var vheadallpub = document.getElementsByClassName("headallpub");
  var vheadnawa2019 = document.getElementsByClassName("headnawa2019");
  var vheadncn2020 = document.getElementsByClassName("headncn2020");
  var vheadncn2024 = document.getElementsByClassName("headncn2024");
  var vheadjsps2026= document.getElementsByClassName("headjsps2026");
  function hideTag(tagName) {
   for(let i=0;i<tagName.length;i++){
    tagName[i].style.display = 'none'
   } 
  }
  function showTag(tagName) {
   for(let i=0;i<tagName.length;i++){
    tagName[i].style.display = 'block'
   } 
  }
  function allpub() {
   showTag(vjsps2026)
   showTag(vncn2024)
   showTag(vncn2020)
   showTag(vnawa2019)
   showTag(vall)

   hideTag(vheadjsps2026)
   hideTag(vheadncn2024)
   hideTag(vheadncn2020)
   hideTag(vheadnawa2019)
   showTag(vheadallpub)
   updateScrollProgress();
  }
  function nawa2019() {
   hideTag(vall)
   hideTag(vjsps2026)
   hideTag(vncn2024)
   hideTag(vncn2020)
   showTag(vnawa2019)

   hideTag(vheadallpub)
   hideTag(vheadjsps2026)
   hideTag(vheadncn2024)
   hideTag(vheadncn2020)
   showTag(vheadnawa2019)
   updateScrollProgress();
  }
  function ncn2020() {
   hideTag(vall)
   hideTag(vjsps2026)
   hideTag(vncn2024)
   hideTag(vnawa2019)
   showTag(vncn2020)

   hideTag(vheadallpub)
   hideTag(vheadjsps2026)
   hideTag(vheadncn2024)
   hideTag(vheadnawa2019)
   showTag(vheadncn2020)
   updateScrollProgress();
  }
  function ncn2024() {
   hideTag(vall)
   hideTag(vjsps2026)
   hideTag(vncn2020)
   hideTag(vnawa2019)
   showTag(vncn2024)

   hideTag(vheadallpub)
   hideTag(vheadjsps2026)
   hideTag(vheadncn2020)
   hideTag(vheadnawa2019)
   showTag(vheadncn2024)
   updateScrollProgress();
  }
  function jsps2026() {
   hideTag(vall)
   hideTag(vncn2024)
   hideTag(vncn2020)
   hideTag(vnawa2019)
   showTag(vjsps2026)

   hideTag(vheadallpub)
   hideTag(vheadncn2024)
   hideTag(vheadncn2020)
   hideTag(vheadnawa2019)
   showTag(vheadjsps2026)
   updateScrollProgress();
  }

function showhidebut(){
  var status = document.getElementById('pastlist').style.display;
  if(status == 'none'){
   document.getElementById('pastlist').style.display = 'block';
  }else{
   document.getElementById('pastlist').style.display = 'none';
  }
  document.querySelector('.past-toggle').setAttribute('aria-expanded', document.getElementById('pastlist').style.display !== 'none');
  updateScrollProgress();
 }

// Alternate backgrounds across visible publications only.
function updatePublicationStriping() {
  const publications = document.querySelectorAll(
    "#nav-publications > p:is(.allpub, .nawa2019, .ncn2020, .ncn2024, .jsps2026)"
  );

  let visibleIndex = 0;
  publications.forEach(publication => {
    if (getComputedStyle(publication).display === "none") return;

    publication.style.backgroundColor =
      visibleIndex % 2 === 0 ? "#ffffff" : "#f5f5f5";
    visibleIndex++;
  });
}

// Bind controls after parsing the document (the script uses defer).
const publicationFilters = {
  all: allpub,
  jsps2026,
  ncn2024,
  ncn2020,
  nawa2019
};

document.querySelectorAll("[data-publication-filter]").forEach(link => {
  link.addEventListener("click", () => {
    publicationFilters[link.dataset.publicationFilter]();
    updatePublicationStriping();
    scheduleNavigationUpdate();
  });
});

document.querySelector(".past-toggle").addEventListener("click", () => {
  showhidebut();
  scheduleNavigationUpdate();
});

updateScrollProgress();

updatePublicationStriping();
