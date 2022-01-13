function event_chat() {
    var observer = new MutationObserver(function (mutation) {
        /** DOMの変化が起こった時の処理 */
        // チャットするとaddNodesとremoveNodesどちらのイベントもフックされるため、addNodesだけの場合処理。
        if (mutation[0].addedNodes.length > 0) {
            var inner_html = mutation[0].addedNodes[0].innerHTML;
            var tmp_div = document.createElement('div');
            tmp_div.innerHTML = inner_html;

            var chat_message = tmp_div.getElementsByClassName('chat-message__text-box')[0].innerText
            pub_mqtt(chat_message);
            console.log('send message: '+chat_message);
        }
    });

    /** 監視対象の要素オブジェクト */
    const elem = document.getElementById('chat-list-content');

    /** 監視時のオプション */
    const config = {
        // attributes: true, 
        childList: true,
        // characterData: true,
        subtree: true
    };
    /** 要素の変化監視をスタート */
    observer.observe(elem, config);
}

var client
function connect_mqtt() {
    client = mqtt.connect('wss://mqtt.techin.jp7eph.net:8083');
    console.log('success connect to mqtt server on websocket');
}
connect_mqtt();

function pub_mqtt(m) {
    client.publish("techin/techin15", m)
}

// HACK: チャットウィンドウが表示されたときだけ実行するようにしたい。
setTimeout(() => {
    console.log('evnet_chat start!!');
    event_chat();
}, 10000);