console.log("這是外部的 JS");

// 變數 variable (指會變的數值)
// 儲存網站內的資料，例如：顏色、字體大小、元素、使用者資訊

// 變數語法
// let 語法

// 變數名稱命名習慣(守則)
// 1. 不會使用中文命名
// 2. 不會使用數字開頭
// 3. 不使用全形符號＠
// 4. 不使用空格 Ex: test 1
// 5. 不使用保留字(有作用的關鍵字) Ex: if、let

// 建議命名方式
// 1. 多個單字構成
// 2. 開頭使用小寫
// 3. 單字相連字首用大寫(駝峰式命名)
// 4. 用有意義的名稱命名


// JS 使用 "//" 註解
let test = 7;   // JS 需使用分號;結尾
let fontColor = "#f63";     //用""包起來

//取得變數
console.log(test);
console.log(fontColor);

//設定變數 set
test = 9;
console.log(test);

// 資料類型
let varNumber = 1.5;    // 1. 數值
let varString = "字串"; // 2. 字串
let varBool = true;     // 3. 布林值(true、false)

console.log(varNumber);
console.log(varString);
console.log(varBool);

// typeof 獲得資料型態
console.log(typeof varNumber);
console.log(typeof varString);
console.log(typeof varBool);

// 運算子
// 加減乘除
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);    // 取商
console.log(10 % 3);    // mod 取餘數
console.log(10 ** 3);   // 次方

// 指定運算子(指定符號=)
// 1+2+3 數學內的等號，左右兩邊一定相等，由右至左執行
// = 指定。左右兩邊不一定相等，由右至左執行
let numberTest = 99 + 1;
console.log(numberTest);
numberTest++;
console.log(numberTest);
numberTest--;
console.log(numberTest);
numberTest += 10;       // 適用於+-*/%
console.log(numberTest);
numberTest -= 10;
console.log(numberTest);

// 比較運算子
console.log("%c比較運算子", "color:blue"); // %c 後面可以指定顏色(與CSS)
// < > <= >= === !==(執行結果是布林值)
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log(100 === 1); // 等於
console.log(100 !== 1); // 不等於

// == 與 === (嚴格比較，數值與類型都要相同)
let varNumber10 = 10;
let varString10 = "10";

console.log(varNumber == varNumber10);
console.log(varString === varString10); //嚴格比較，資料型態不同，結果為false

console.log("%c判斷式", "color:red");
// 判斷式語法
// if (布林值) { 布林值等於 true 執行此區塊 block }
if (true) {
    console.log("這裡是判斷式");
}

var score = 49;
// if 要在最上面，只能用一次
// else if 無限次數
// else 要在最下面，只能用一次
if (score >= 60) {
    console.log("逃生成功");
}
else if (score>= 50) {
    console.log("來補考");
}
else {
    console.log("哈哈明年見");
}

//練習
let HP = 59;
if (HP >= 60) {
    console.log("安全");
}
else if (HP > 0) {
    console.log("警告");
}
else {
    console.log("死亡");
}