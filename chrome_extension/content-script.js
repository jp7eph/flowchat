function event_chat() {
    var observer = new MutationObserver(function (mutation) {
        /** DOMの変化が起こった時の処理 */
        // チャットするとaddNodesとremoveNodesどちらのイベントもフックされるため、addNodesだけの場合処理。
        if (mutation[0].addedNodes.length > 0) {
            var inner_html = mutation[0].addedNodes[0].innerHTML;
            var tmp_div = document.createElement('div');
            tmp_div.innerHTML = inner_html;

            var chat_message = tmp_div.getElementsByClassName('chat-message__text-box')[0].innerText
            console.log(chat_message);
            pub_mqtt(chat_message);
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
    // const options = {
    //     username: 'token:6rR6lmQdFKbJoU8h',
    //     password: '',
    // }
    // client = mqtt.connect('mqtt://mqtt.beebotte.com:1883',options);
    client = mqtt.connect('wss://test.mosquitto.org:8081');
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