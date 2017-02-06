$(function() {
  $(".modalTrigger").click(function() {
    $(".container").fadeOut();
    setTimeout(function() {
      $(".modalWindow").fadeIn();
    }, 300);
  });

  $(".entryTrigger").click(function() {
    var checkCount = $(".checkboxWrap :checkbox");
    var prop;
    $.each(checkCount, function() {
      prop = $(this).prop("checked");
      if(prop) {
        return;
      } else {
        return false;
      }
    });
    if(prop) {
      location.href='/modal/index.html'
    }
  });
});
