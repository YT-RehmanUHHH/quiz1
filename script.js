// event listerns and questions
document.getElementById("submit").addEventListener("click", btn)


function btn() {

  //variables
  let Q1Answer = document.getElementById("1-ques").value.toLowerCase();
  let Q2Answer = document.getElementById("2-ques").value.toLowerCase();
  let Q3Answer = document.getElementById("3-ques").value.toLowerCase();
  let Q4Answer = document.getElementById("4-ques").value.toLowerCase();
  let Q5Answer = document.getElementById("5-ques").value.toLowerCase();
  let Q6Answer = document.getElementById("6-ques").value.toLowerCase();

  let total = 0

  // 1.) What is the first Kalma?
  if (Q1Answer == "la ilaha illallah") {
    document.getElementById("YQ1").innerHTML = '<img src="img/checkmark.webp" width="20px">'
    total = total + 1
  } else {
    document.getElementById("YQ1").innerHTML = '<img src="img/redX.jpg" width="20px">'
  }

  // II) What is the second Kalma?
  if ( Q2Answer == "ashhadu") {
    document.getElementById("YQ2").innerHTML = '<img src="img/checkmark.webp" width="20px">'
    total = total + 1
  } else {
    document.getElementById("YQ2").innerHTML = '<img src="img/redX.jpg" width="20px">'
  }

  // III) What is the third Kalma?
  if (Q3Answer == "subhanallahe") {
    document.getElementById("YQ3").innerHTML = '<img src="img/checkmark.webp" width="20px">'
    total = total + 1
  } else {
    document.getElementById("YQ3").innerHTML = '<img src="img/redX.jpg" width="20px">'
  }

  // IV) What is the fourth Kalma?
  if (Q4Answer == "laa ilaha") {
    document.getElementById("YQ4").innerHTML = '<img src="img/checkmark.webp" width="20px">'
    total = total + 1
  } else {
    document.getElementById("YQ4").innerHTML = '<img src="img/redX.jpg" width="20px">'
  }

  // V) What is the fifth Kalma?
  if (Q5Answer == "astaghfirullah") {
    document.getElementById("YQ5").innerHTML = '<img src="img/checkmark.webp" width="20px">'
    total = total + 1
  } else {
    document.getElementById("YQ5").innerHTML = '<img src="img/redX.jpg" width="20px">'
  }

  // VI) What is the sixth Kalma?
  if (Q6Answer == "rasulullah") {
    document.getElementById("YQ6").innerHTML = '<img src="img/checkmark.webp" width="20px">'
    total = total + 1
  } else {
    document.getElementById("YQ6").innerHTML = '<img src="img/redX.jpg" width="20px">'
  }

  // total and percentage calculations
  let total2 = (total / 6) * 100
  document.getElementById("percentage").innerHTML = total2.toFixed()
  document.getElementById("total").innerHTML = total
}
