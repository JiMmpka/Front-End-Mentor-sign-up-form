$(document).ready(function () {
  $(".alert").hide();

  $(".second-column-trial-button").click(function (e) {
    e.preventDefault();
    let isValid = true;

    if (!$(".first-name").val()) {
      $("#first-name-alert").show();
      $(".first-name").addClass("input-error");
      isValid = false;
    } else {
      $("#first-name-alert").hide();
      $(".first-name").removeClass("input-error");
    }

    if (!$(".second-name").val()) {
      $("#last-name-alert").show();
      $(".second-name").addClass("input-error");
      isValid = false;
    } else {
      $("#last-name-alert").hide();
      $(".second-name").removeClass("input-error");
    }

    const email = $(".email").val();
    if (!email || !email.includes("@") || !email.includes(".")) {
      $("#email-alert").show();
      $(".email").addClass("input-error");
      isValid = false;
    } else {
      $("#email-alert").hide();
      $(".email").removeClass("input-error");
    }

    if (!$(".password").val()) {
      $("#password-alert").show();
      $(".password").addClass("input-error");
      isValid = false;
    } else {
      $("#password-alert").hide();
      $(".password").removeClass("input-error");
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
});
