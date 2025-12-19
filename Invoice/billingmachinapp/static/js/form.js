$(".alpha,.cont,.alphaNum,.onlyNum,.mail,select,input[type='date'],.pin").on(
  "focusout",
  function () {
    if ($(this).val() == "") {
      $(this).css({ border: "2px solid red", color: "red" });
      $(this).siblings("span").html("* field is mandatory");
    } else $(this).siblings("span").html("");
  }
);
$(".alpha,.cont,.alphaNum,.onlyNum,.mail,select,input[type='date'],.pin").on(
  "focusin",
  function () {
    v = $(this).val();
    if (v == "* Field is mandatory" || v == "") {
      $(this).css({ border: "1px solid grey", color: "black" });
      $(this).siblings("span").html("");
    }
  }
);
$(".alpha").on("keypress", function (e) {
  ch = e.which;
  if (ch == 32 && e.target.selectionStart == 0) return false;
  else if (ch == 32 && $(this).val().slice(-1) === " ") return false;
  else if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch == 32)) {
    $(this).siblings("span").html("Only alphabets and space allowed");
    return false;
  } else $(this).siblings("span").html("");
});
$(".cont").on("keypress", function (e) {
  ch = e.which;
  if ($(this).val().length == 10) {
    $(this).siblings("span").html("Only 10 digits allowed");
    return false;
  } else if (ch == 48 && e.target.selectionStart == 0) return false;
  else if (ch == 32 && e.target.selectionStart == 0) return false;
  else if (!(ch >= 48 && ch <= 57)) {
    $(this).siblings("span").html("Only digits allowed");
    $(this).css("border", "2px solid red");
    return false;
  } else {
    $(this).siblings("span").html("");
    $(this).css("border", "1px solid grey");
  }
});
$(".cont").on("focusout", function () {
  len = $(this).val().length;
  if (len == 0) {
    $(this).siblings("span").html("* field is mandatory");
  } else if (len < 10) $(this).siblings("span").html("Minimum 10 digits");
  else $(this).siblings("span").html("");
});
$(".pin").on("keypress", function (e) {
  ch = e.which;
  if (ch == 32) return false;
  else if ($(this).val().length == 6) {
    $(this).siblings("span").html("enter only 6 digit");
    return false;
  }
  if (!(ch >= 48 && ch <= 57)) {
    $(this).siblings("span").html("only digits allowed");
    return false;
  }
});
$(".alphaNum").on("keypress", function (e) {
  ch = e.which;
  if (ch == 32 && e.target.selectionStart == 0) return false;
  else if (ch == 32 && $(this).val().slice(-1) == " ") return false;
  else if (
    !(
      (ch >= 65 && ch <= 90) ||
      (ch >= 97 && ch <= 122) ||
      (ch >= 48 && ch <= 57) ||
      ch == 32
    )
  ) {
    $(this).siblings("span").html("Only alphabet, digit and space allowed");
    return false;
  } else $(this).siblings("span").html("");
});
$(".mail").on("keypress", function (e) {
  ch = e.which;
  if (ch == 32) return false;
  else if (
    !(
      (ch >= 65 && ch <= 90) ||
      (ch >= 97 && ch <= 122) ||
      (ch >= 48 && ch <= 57) ||
      ch == 32 ||
      ch == 64 ||
      ch == 46
    )
  ) {
    $(this).siblings("span").html("Only alphabet, digit and space allowed");
    return false;
  } else $(this).siblings("span").html("");
});
$(".file").on("focusout", function () {
  if ($(this).val() == "") {
    $(this).parent().siblings("span").html("* field is mandatory");
    $(this).parent().css("border", "2px solid red");
  } else {
    $(this).parent().siblings("span").html("");
    $(this).parent().css("border", "1px solid grey");
  }
});
$(".onlyNum").on("keypress", function (e) {
  ch = e.which;
  if (ch == 32) return false;
  else if (!(ch >= 48 && ch <= 57)) {
    $(this).siblings("span").html("only digits allowed");
    return false;
  }
});
