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

console.log("%c迴圈", "color:gold");
// for 迴圈
// for 語法:
// for (初始值; 條件; 迭代器) {程式區塊}
for (let index = 0; index < 5; index++) {
    console.log("迴圈",index);
}

for (let index = 0; index < 5; index++) {
    console.log("迴圈",index);
    // alert("警告")
}

// 變數 let
let letCount = 1;
letCount = 2;
letCount = 3

// 常數 const (不可改變的值)
const constCount = 1;
// constCount = 2;      // 產生錯誤 ，原因：常數不可改變

// 不可重新定義
// let letCount = 10;               // 產生錯誤 ，原因：重複宣告
// const const constCount = 10;     // 產生錯誤 ，原因：重複宣告

// 常數命名習慣會使用權大寫並使用底線區隔
const PI = 3.14;
const WEB_FONT_SIZE = 24;

//變數 var
var varCount = 5;
varCount = 7;       // 可重新賦予值
var varCount = 8;   // 可重新定義(不建議)
console.log(varCount);

// 作用域 Scope {} 代表程式作用的範圍(通常指大括號)
// let 與 const 的作用域都在 {} 區塊內

{
    let letTest = 1;
    const constTest = 2;
    var varTest = 3;
    console.log("let:", letTest);
    console.log("const:", constTest);
    console.log("var:", varTest);
}

// console.log("let:", letTest);        //錯誤：超出作用域
// console.log("const:", constTest);    //錯誤：超出作用域
console.log("var:", varTest);

console.log("%cfunction 函式、方法或功能", "color:green");
//函式語法

// function 函式名稱 () { }
function logLine() {
    console.log("%c-----我是分隔線-----", "color:pink");
}

// 函是需要被呼叫：函式名稱();
logLine();
logLine();
logLine();
logLine();
logLine();