function drawDiamond(n) {
  let diamond = "";
  let spaces = "";
  let stars = "";
  for (let i = 0; i < n; i++) {
    spaces = "";
    stars = "";
    for (let j = 0; j < n - i - 1; j++) {
      spaces += " ";
    }
    for (let k = 0; k < i * 2 + 1; k++) {
        if (k == 0 || k == i * 2) {
            stars += "*";
        } else {
            stars += " ";
        }
    }
    diamond += spaces + stars + "\n";
  }
  for (let i = n - 2; i >= 0; i--) {
    spaces = "";
    stars = "";
    for (let j = 0; j < n - i - 1; j++) {
      spaces += " ";
    }
    for (let k = 0; k < i * 2 + 1; k++) {
        if (k == 0 || k == i * 2) {
            stars += "*";
        } else {
            stars += " ";
        }
    }
    diamond += spaces + stars + "\n";
  }
  return diamond;
}


let input = document.getElementById("number");
let diamond = document.getElementById("diamond");

diamond.innerHTML = drawDiamond(input.value);

input.onchange = function() {
    n = input.value;
    diamond.innerHTML = drawDiamond(n);
}
