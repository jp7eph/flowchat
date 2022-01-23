window.api.on('chat', (event, arg) => {
  flow_chat(arg)
});

let container = null;
window.onload = function () {
  container = document.getElementById('container');
}

async function flow_chat(text) {
  let p_element = document.createElement('p');
   //　初期状態の横方向の位置は画面の右端に設定
  p_element.style.left = (document.documentElement.clientWidth) + 'px';
  var random = Math.round(Math.random() * document.documentElement.clientHeight);
  // 初期状態の縦方向をランダムに
  p_element.style.top = random + 'px';

  p_element.appendChild(document.createTextNode(text));
  container.appendChild(p_element);

  // アニメーションが終了したら要素削除
  p_element.addEventListener('animationend', () => {
    p_element.parentNode.removeChild(p_element);
  });
}
