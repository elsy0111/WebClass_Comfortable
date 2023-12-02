// ==UserScript==
// @name         Shuffle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Webclas の選択肢をシャフル
// @author       Arcsecond
// @match        https://webclass.kosen-k.go.jp/webclass/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==


function shuffleElements() {
  var table = document.querySelector('.seloptions');
    if (!table) {
      return;
  }
  var tbody = table.querySelector('tbody');
  if (!tbody) {
      return;
  }
  var rows = Array.from(tbody.getElementsByTagName('tr'));
  if (!rows) {
      return;
  }
  for (var i = rows.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    tbody.appendChild(rows[j]);
  }
  console.log("shuffle finished");
}


function changeHeightAll(){
    // 要素の取得
    var framesetElement = document.querySelector('html > frameset > frameset > frameset');
    // rows 属性の設定
    if (framesetElement) {
        framesetElement.setAttribute('rows', '20%, *');
    } else {
        return;
    }
    console.log("changeHeightAll finished");
}

function changeHeight(){
    // 要素の取得
    var framesetElement = document.querySelector('html > frameset > frameset > frameset > frameset');
    // rows 属性の設定
    if (framesetElement) {
        framesetElement.setAttribute('cols', '80%, *');
    } else {
        return;
    }
    console.log("changeHeight finished");
}

function changeHeightProb(){
    // 要素の取得
    var targetTable = document.querySelector('html > body > table');
    // 属性の追加
    if (targetTable) {
        targetTable.setAttribute('height', '0%');
        targetTable.setAttribute('width', '98%');
    } else {
        return;
    }
    console.log("changeHeightProb finished");
}

function next_ans(){
    var gradeBtn = document.getElementById('GradeBtn');
    if (gradeBtn) {
        gradeBtn.click();
        console.log("skiped :)");
    }
}

function next_prob(){
    var QstnNextBtn = document.getElementById('QstnNextBtn');
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
    await sleep(10);
    var QstnChkBtn = document.getElementById('QstnChkBtn');
        if (QstnChkBtn) {
            QstnChkBtn.click();
            console.log("QstnChkBtn skiped :)");
        }
}

// <tr>要素を取得
var trElement = document.querySelector('tr');

// イベントリスナー
if (trElement) {
    trElement.addEventListener('click', function() {
        skip_conf();
    });
}

if (document.getElementById('QstnEndConfirm')) {
    //next_ans();
}

if (document.getElementById('ViewTitle')) {
    next_prob();
}

// シャッフルを実行
shuffleElements();
//高さ変更
changeHeight();
changeHeightAll();
changeHeightProb();
