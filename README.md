# WebClass_Comfortable
PC上のchromeで [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)をインストールしてください  
その後以下スクリプトをインストールするだけです
### [Install](https://github.com/elsy0111/WebClass_Comfortable/raw/main/script.user.js)

# Features
#### 機能のON/OFFを自分で設定したい場合は、自分で該当箇所(呼び出し関数部)のコメントアウト `//` を行ってください
なお、初期設定は **シャフル, 高さの変更, クリックで回答 のみ** となっています

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
答えてないけどいいの?(赤警告)の自動スキップ
```
if (document.getElementById('QstnEndConfirm')) {
    //next_ans();
}
```
一門ごとに正解を確認(表示)しない
```
if (document.getElementById('ViewTitle')) {
    //next_prob();
}
```
# For Developer
Mobile (端末上でchrome拡張, Tampermonkeyが動かせる特殊な人のみ) 
### [Install](https://github.com/elsy0111/WebClass_Comfortable/raw/main/script_mobile.user.js)
