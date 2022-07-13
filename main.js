
console.log(evaluateRrnr("90.02.01-997-04", "01.02.1990"));


function evaluateRrnr(e, birthdate) {

  //bdate in format: 17.09.2010

  var date = birthdate.slice(8, 10) + birthdate.slice(3, 5) + birthdate.slice(0, 2);

  var textNumber = String(e);
  var n = textNumber.replace(/\D+/g, '');

  var firstSix = n.slice(0, 6);
  var firstNine = n.slice(0, 9);
  var middleThree = n.slice(6, 9);
  var lastTwo = n.slice(9, 11);  // (-2)


  if (n == "") {
    return "Field is empty";
  } else if (n.length == 11) {

    if (firstSix == date) {

      if (firstNine.charAt(0) < 3) {
        let temp = "2" + firstNine;
      } else {
        temp = firstNine;
      }

      if (lastTwo == 97 - (temp % 97)) {

        return firstSix + "." + middleThree + "." + lastTwo;

      } else {
        return "11 digits but mistake in it; bday is correct."
      }
    }
    else {
      return "11 digits but bday is incorrect."
    }
  } else {
    return "No 11 digits."
  }
}
