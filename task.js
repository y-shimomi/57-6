//関数型プログラミング//

/* const add2 = x => x + 2 //const add2=(x) {return x+2} /アロー関数の場合/ const add2=(x)=>{return x+2}
const mul2 = x => x * 2 //const mul2=(x) {return x*2} /アロー関数の場合/ const mul2=(x)=>{return x*2}

const n = 3
console.log(add2(n))
console.log(mul2(n))
console.log(mul2(add2(n))) */

//高階関数（関数を受け取る関数）//

/*const add2 = x => x + 2

function twice(f, x) { //function twice(f,+2)>fには関数xには数値
    return f(f(x))  //fは2+(2＋10)である　fという関数を実行している
}

const result = twice(add2, 10) // (x+2+2,10)>twice(f+2+x+2,10)10がx
console.log(result) //結果：14 */

//twice関数は、「引数fの関数を、引数xの値に対して2回呼び出す」という関数になっています。


//高階関数の具体例① 配列のmap//(超重要)

/*const list = [1, 2, 3]　//配列は1,2,3があることを定義
const square = x => x * x　//引数に2乗することを定義

console.log(list.map(square))//配列[1,2,3]の全ての要素を2乗している */


//無名関数//

/* const list = [1, 2, 3]
console.log(list.map(x => x * x))*/ //「x=>x*x」が無名関数

/* const list = [1, 2, 3]
console.log(list.map(function (x) { return x * x })) */ // function (x) { return x * x } の部分が無名関数


//高階関数の具体例②　イベントリスナの登録//

/* const button = document.querySelector('#submit')

button.addEventListener('click', event => { console.log(event, クリック) }) * /
 */
//「addEventListener」が高階関数
//第2引数に、ボタンがクリック実行する処理を関数として渡す。
//ボタンのクリックのような任意のタイミングで発生する事象を「イベント」という。
//イベントが発生した時に実行される関数を「イベントリスナ」という。
//イベントリスナはイベント発生前に事前に登録しておく必要性がある。
//今回イベントリスナの登録処理は「addEventListener」に高階関数が使われている。

//task06-1


//・n*100-5の場合

/* const add2 = x => x - 5
const mul2 = x => x * 100

const n = 8
console.log(add2(mul2(n))) */


//・(n+3)*8+3の場合

/* const add2 = x => x + 3
const mul2 = x => x * 8

const n = 2
console.log(add2(mul2(add2(n)))) */


//task06-1.map

const items = [
    // 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],　//
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map((item) => { //itemも配列
    let sum = 0
    for (let i = 0; i < item.length; i++) { //[14..]
        sum = sum + item[i]
    } return sum
})
console.log(sums) //=> [424, 313, 291, 379] 

//for foreach reduse(配列に対して使える)

