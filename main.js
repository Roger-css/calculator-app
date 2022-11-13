let theme1 = document.getElementById("1");
let theme2 = document.getElementById("2");
let theme3 = document.getElementById("3");
let screen1 = document.querySelector(".screen");
let parent = document.getElementById("screen-holder");
let reset = document.querySelector(".reset");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let btns = document.querySelectorAll(".btns-holder .w");
let root = document.querySelector(":root");
let width_of_parent =
  document.getElementById("screen-holder").parentNode.clientWidth;
theme1.addEventListener("click", function () {
  root.style.cssText =
    "--main-background: hsl(222, 26%, 31%);--toggle-background: hsl(223, 31%, 20%);--screen: hsl(224, 36%, 15%);--equal: hsl(6, 63%, 50%);--key-Dark-equal: hsl(6, 70%, 34%);--numbers-bg: hsl(30, 25%, 89%);--white-key-shadow: hsl(28, 16%, 65%);--del-key-bg: hsl(225, 21%, 49%);--del-key-shadow: hsl(221, 14%, 31%);--numsColor: hsl(221, 14%, 31%);--text: white; --dr-text: white;--equal-text: white;--numbers-bg-onClick: white;--numbers-bg-onClick: white;--del-bg-onClick: #a2b3e1;--equal-bg-onClick: #f96c5b;";
});
theme2.addEventListener("click", function () {
  root.style.cssText =
    "--main-background: hsl(0, 0%, 90%);--toggle-background: hsl(0, 5%, 81%);--screen: hsl(0, 0%, 93%);--equal: hsl(25, 98%, 40%);--key-Dark-equal: hsl(25, 99%, 27%);--numbers-bg: hsl(45, 7%, 89%);--white-key-shadow: hsl(35, 11%, 61%);--del-key-bg: hsl(185, 42%, 37%);--del-key-shadow: hsl(185, 58%, 25%);--numsColor: hsl(60, 10%, 19%);--text: black;--a: hsl(6, 70%, 34%);--equal-text: white;--numbers-bg-onClick: white;--numbers-bg-onClick: white;--del-bg-onClick: #62b5bd;--equal-bg-onClick: #ff8b38;";
});
theme3.addEventListener("click", function () {
  root.style.cssText =
    "--main-background: hsl(268, 75%, 9%);--toggle-background: hsl(268, 71%, 12%);--screen: hsl(268, 71%, 12%);--equal: hsl(176, 100%, 44%);--key-Dark-equal: hsl(177, 92%, 70%);--numbers-bg: hsl(268, 47%, 21%);--white-key-shadow: hsl(285, 91%, 52%);--del-key-bg: hsl(281, 89%, 26%);--del-key-shadow: hsl(290, 70%, 36%);--numsColor: hsl(52, 100%, 62%);--text: hsl(52, 100%, 62%);--a: hsl(176, 100%, 44%);--equal-text: hsl(198, 20%, 13%);--numbers-bg-onClick: #6b34ac;--del-bg-onClick: #8631b0;--equal-bg-onClick: #94fff9;";
});
btns.forEach(function (e) {
  e.addEventListener("click", function (ele) {
    let key = ele.target.innerHTML;
    if (ele.target.classList.contains("calc")) {
      if (
        screen1.innerHTML[screen1.innerHTML.length - 1] === "/" ||
        screen1.innerHTML[screen1.innerHTML.length - 1] === "+" ||
        screen1.innerHTML[screen1.innerHTML.length - 1] === "-" ||
        screen1.innerHTML[screen1.innerHTML.length - 1] === "*"
      ) {
        screen1.innerHTML = screen1.innerHTML.slice(0, -1);
        screen1.innerHTML += key;
      } else {
        screen1.innerHTML += key;
      }
    } else {
      let width_of_text = document.getElementById("screen").offsetWidth;
      if (width_of_text >= width_of_parent - 40) {
        parent.style.fontSize = "18px";
      }
      screen1.innerHTML += key;
    }
  });
});
reset.onclick = function () {
  screen1.innerHTML = "";
};
del.onclick = function () {
  if (screen1.innerHTML.length === 0) {
    return;
  } else {
    screen1.innerHTML = screen1.innerHTML.slice(0, -1);
  }
};
equal.onclick = function () {
  try {
    let result = eval(screen1.innerHTML);
    screen1.innerHTML = `${result}`;
  } catch {
    throw (screen1.innerHTML = Error("Oops something went wrong"));
  }
};
