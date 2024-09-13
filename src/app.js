/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
//write your code here
function generateExcuse() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broke"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoRan = Math.floor(Math.random() * who.length);
  let whatRan = Math.floor(Math.random() * what.length);
  let whenRan = Math.floor(Math.random() * when.length);

  return who[whoRan] + " " + what[whatRan] + " " + when[whenRan] + ".";
}
