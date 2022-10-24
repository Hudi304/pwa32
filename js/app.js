$(function () {
  "use strict";



  //serviceworker registration

  window.addEventListener("load", (e) => {
    registerSW();
  });

  async function registerSW() {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("./sw.js");
      } catch (e) {
        alert("ServiceWorker registration failed. Sorry about that.");
      }
    } else {
      document.querySelector(".alert").removeAttribute("hidden");
    }
  }
  //ends serviceworker
  // Made the left sidebar's min-height to window's height
  var winHeight = $(window).height();
  $(".dashboard-nav").css("min-height", winHeight);
});

