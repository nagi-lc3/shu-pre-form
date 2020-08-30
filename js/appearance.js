function checkradio(disp) {
  document.getElementById('douhan').style.display = disp;
}

$(".extraction").change(function () {
  const extraction_val = $(".extraction").val();
  if (extraction_val == "02月02日(金)：大阪校" || extraction_val == "02月09日(金)：名古屋校") {
    $('#all').css('display', 'table-row');
  } else {
    $('#all').css('display', 'none');
  }
});

$(".extraction").change(function () {
  const extraction_val = $(".extraction").val();
  if (extraction_val == "02月15日(木)：東京校") {
    $('#first').css('display', 'table-row');
  } else {
    $('#first').css('display', 'none');
  }
});

$(".extraction").change(function () {
  const extraction_val = $(".extraction").val();
  if (extraction_val == "02月16日(金)：東京校") {
    $('#second').css('display', 'table-row');
  } else {
    $('#second').css('display', 'none');
  }
});
