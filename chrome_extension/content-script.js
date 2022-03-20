const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

var client
function connect_mqtt() {
    client = mqtt.connect('wss://mqtt.techin.jp7eph.net:8083');
    console.log('success connect to mqtt server on websocket');
}
connect_mqtt();

function pub_mqtt(m) {
    client.publish("techin/techin15", m)
}

$(document).ready(async function () {
    // #wc-contentが出てくるまでsleep
    while (document.getElementById('wc-content') === null) {
        await _sleep(500);
    }
    observe_window();
});

function observe_window() {
    var chat_observer = new MutationObserver(function (mutation) {
        if (mutation[0].addedNodes.length > 0) {
            console.log('flowchaat: observe chat-list start');
            observe_chat();
        }
    });
    const elem = document.getElementById('wc-content');
    const config = {
        childList: true,
    };
    chat_observer.observe(elem, config);
}

// ブローカー送信済み済のメッセージを格納する。keyはid, valueはメッセージ内容。
var messages = [];

function observe_chat() {
    var chat_observer = new MutationObserver(function (mutations) {
        // DOMの変化が起こった時の処理
        // チャットするとaddNodesとremoveNodesどちらのイベントもフックされるため、addNodesだけの場合処理。
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                // getByClassNameしたオブジェクトはそのままforEachできないのでArrayに入れる。
                messageContainers = Array.from(node.getElementsByClassName('chat-message__text-box'));
                messageContainers.forEach(element => {
                    // idありなしのnodeが生成されるので、idがあるnodeのみ処理対象にする。
                    if (element.id != '' && !messages[element.id]) {
                        pub_mqtt(element.innerText)
                        console.log('flowchaat: send message: ' + element.innerText);
                        // 送信が終わったら格納。
                        messages[element.id] = element.innerText
                    }
                });
            });
        });
    });

    // 監視対象の要素オブジェクト
    const elem = document.getElementById('chat-list-content');
    // 監視時のオプション
    const config = {
        childList: true,
        subtree: true
    };
    // 要素の変化監視をスタート
    chat_observer.observe(elem, config);
}
