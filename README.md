# WebClass_Comfortable
### [Install](https://github.com/elsy0111/WebClass_Comfortable/raw/main/script.user.js)

# Features
選択肢のシャフル 
```
// シャッフルを実行
shuffleElements();
```
高さの変更(一番上へ) 
```
//高さ変更
changeHeight();
changeHeightAll();
changeHeightProb();
```
答えてないけどいいの?(赤警告)の自動スキップ
```
if (document.getElementById('QstnEndConfirm')) {
    //next_ans();
}
```
選択肢をクリックすると自動で答える
```
// <tr>要素を取得
var trElement = document.querySelector('tr');

// イベントリスナー
if (trElement) {
    trElement.addEventListener('click', function() {
        skip_conf();
    });
}
```
一門ごとに正解を確認(表示)しない
```
if (document.getElementById('ViewTitle')) {
    next_prob();
}
```
