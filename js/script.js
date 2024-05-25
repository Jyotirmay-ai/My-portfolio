$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      }, 3500);
   
  });





// project page starts
    // Initialization for ES Users
    import { Tab, initMDB } from "mdb-ui-kit";
    initMDB({ Tab });
// project page ends