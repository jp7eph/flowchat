window.api.on('chat', (event, arg) => {
  flow_chat(arg)
});

let count = 0;
async function flow_chat(text) {
  let div_text = document.createElement('div');
  div_text.id = "text" + count; //アニメーション処理で対象の指定に必要なidを設定
  count++;
  div_text.style.position = 'fixed'; //テキストのは位置を絶対位置にするための設定
  div_text.style.whiteSpace = 'nowrap' //画面右端での折り返しがなく、画面外へはみ出すようにする
  div_text.style.left = (document.documentElement.clientWidth) + 'px'; //初期状態の横方向の位置は画面の右端に設定
  var random = Math.round(Math.random() * document.documentElement.clientHeight);
  div_text.style.top = random + 'px';  //初期状態の縦方向の位置は画面の上端から下端の間に設定（ランダムな配置に）
  div_text.style.fontSize = "8vh";
  div_text.style.fontWeight = "bold";
  div_text.style.color = "#FFF";
  div_text.style.textShadow = "2px 2px 0 #000,-2px 2px 0 #000,2px -2px 0 #000";
  div_text.appendChild(document.createTextNode(text)); //画面上に表示されるテキストを設定
  document.body.appendChild(div_text); //body直下へ挿入

  //ライブラリを用いたテキスト移動のアニメーション： durationはアニメーションの時間、
  //        横方向の移動距離は「画面の横幅＋画面を流れるテキストの要素の横幅」、移動中に次の削除処理がされないようawait
  await gsap.to("#" + div_text.id, { duration: 5, x: -1 * (document.documentElement.clientWidth + div_text.clientWidth) });

  div_text.parentNode.removeChild(div_text); //画面上の移動終了後に削除
}
