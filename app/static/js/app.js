$(function () {
  $("#sideplaceholder").load("../app/templates/sidebar.html");
  });
 
      
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});
