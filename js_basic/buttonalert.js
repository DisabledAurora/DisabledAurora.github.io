$(".close").click(function() {
  $(this)
    .parent(".alert")
    .removeClass("displaynow")
    .addClass("nodisplaynow")
    .css({'z-index':'1'});
});
