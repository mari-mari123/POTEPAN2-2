let symbol = "+";
let total = "";
let currentValue = "";
let flag; //１回前に入力したもの 0:数字 1:演算子

const screen = document.getElementById('screen');

// 数字を入力
const inputValue = data => {
  if (currentValue === '0' || currentValue === '00') { 
    flag = 0;
    currentValue = data.value;
    screen.textContent = currentValue;
  } else { 
    flag = 0;
    currentValue += data.value;
    screen.textContent = currentValue;
  } 
};


// 文字列から．を見つけ、入力を制限
const inputDot = data => {
  if (!currentValue.includes(".")) {
    currentValue += data.value;
    screen.textContent = currentValue;
  }
};

const calculation = data => {
  if (flag === 0 && data.value !== "=") { // =以外の記号を入力した場合
    flag = 1;
    let formula = total + symbol + currentValue;
    total = eval(formula);
    symbol = data.value;
    currentValue = "";
    screen.textContent = total;
  } else if (flag === 1 && data.value === "=") { // =を２回以上連打した
    let formula = total + symbol + total;
    total = eval(formula);
    screen.textContent = total;
  } else if (data.value === "=") { // =を一回押した
    flag = 1;
    let formula = total + symbol + currentValue;
    total = eval(formula);
    currentValue = "";
    screen.textContent = total;
  } else { // =を押した後数字を入力せずに記号を押した
    symbol = data.value;
  }
};

const allClear = () => {
  symbol = "+";
  total = "";
  currentValue = "";
  flag;
  screen.textContent = "0"
};

