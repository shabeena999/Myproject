const fromDate = document.getElementById("pickup-date");
const toDate = document.getElementById("drop-date");
const numDays = document.getElementById("count");
// const price= document.getElementById('v-price');
const total2 = document.getElementById("result");

// Listen for changes in the date fields
// fromDate.addEventListener('input', updateNumDays);
toDate.addEventListener("input", updateNumDays);

function updateNumDays() {
  const fromValue = new Date(fromDate.value);
  const toValue = new Date(toDate.value);

  // Ensure that the From date is not greater than the To date
  if (fromValue > toValue) {
    alert("From date should not be greater than to date");
    return;
  }

  // Calculate the difference in milliseconds between the two dates
  const differenceInMs = toValue.getTime() - fromValue.getTime();
  // Convert the difference to days and round down to the nearest integer
  const differenceInDays =
    Math.floor(differenceInMs / (1000 * 60 * 60 * 24)) + 1;

  // let price = document.getElementById("v-price");
  // price.value = data.vehicleData.Price;
  // Display the result
  numDays.value = differenceInDays;
  total2.value = differenceInDays * document.getElementById("v-price").value;
}

(function ($) {
  function floatLabel(inputType) {
    $(inputType).each(function () {
      var $this = $(this);
      // on focus add cladd active to label
      $this.focus(function () {
        $this.next().addClass("active");
      });
      //on blur check field and remove class if needed
      $this.blur(function () {
        if ($this.val() === "" || $this.val() === "blank") {
          $this.next().removeClass();
        }
      });
    });
  }
  // just add a class of "floatLabel to the input field!"
  floatLabel(".floatLabel");
})(jQuery);

// Radio Button

function showTextBox() {
  document.getElementById("regno").style.display = "block";
}

function hideTextBox() {
  document.getElementById("regno").style.display = "none";
}

// Aadhar
$(function () {
  $("#aadhar").keydown(function (e) {
    var key = e.charCode || e.keyCode || 0;
    $text = $(this);
    if (key !== 8 && key !== 9) {
      if ($text.val().length === 4) {
        $text.val($text.val() + " ");
      }
      if ($text.val().length === 9) {
        $text.val($text.val() + " ");
      }
      if ($text.val().length === 14) {
        $text.val($text.val() + " ");
      }
    }
  });
});
