// ==UserScript==
// @name         WrbClassConfortable_Mobile
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  Webclas の選択肢をシャフル
// @author       Arcsecond
// @match        https://webclass.kosen-k.go.jp/webclass/mbl.php/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

function shuffleElements() {

  var table = document.querySelector('fieldset.question');
    if (!table) {
      return;
  }

  var rows = Array.from(table.getElementsByTagName('div'));
  if (!rows) {
      return;
  }
  for (var i = rows.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    table.appendChild(rows[j]);
  }
  console.log("shuffle finished");
}

function next_prob(){
    var QstnNextBtn = document.querySelector("#Question > div.content > a");
    if (QstnNextBtn) {
        QstnNextBtn.click();
        console.log("check ans skiped :)");
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function skip_conf() {
    console.log('trがクリックされました。');
    await sleep(50);
    var QstnChkBtn = document.querySelector("#Question > div.content > a > span")
        if (QstnChkBtn) {
            QstnChkBtn.click();
            console.log("QstnChkBtn skiped :)");
        }
}

// <tr>要素を取得
var trElements = document.querySelectorAll('div.ui-radio');

// イベントリスナー
trElements.forEach(function(element) {
  element.addEventListener('click', function() {
    skip_conf();
  });
});

//解答を確認せず次の問題に
if (!document.querySelector("form#Question div.content fieldset.question div.ui-radio")) {
    //next_prob();
}

// シャッフルを実行
shuffleElements();
