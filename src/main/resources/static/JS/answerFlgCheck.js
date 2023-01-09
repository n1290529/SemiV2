/**
 * 解答を確認するかをアラートで表示
 * @returns boolean
 */
function jumpCheck() {
    return window.confirm("この問題を未受験の状態で解答を確認した場合、問題の成績は反映されません。");
}
/**
 * 解答画面に遷移
 * /problemsから解答確認画面に遷移する場合があるのでthymeleafからid取得
 * @param {*} id 
 */
function jumpAnswer(id) {
    if (jumpCheck()) {
        //true=ok
        location.href = "/problems/" + id + "/Answer";
    }
}


/**
 * ポップアップを表示
 * @param {} id 
 */
function problemPopup(id) {
    window.open("/problems/" + id + "/slove", "window1", "width=1270,height=810");
}
/**
 * 問題説明画面に遷移
 * @param {*} id 
 */
function jumpChallenge(id) {
    problemPopup(id);
    document.location.href = "/problems/" + id + "/challenge";
}

/**
 * 解答提出をアラートで確認
 */
function sloveCheck() {
    return window.confirm("解答を提出しますか？");
}

/**
 * アラートが真なら、JSコードをJavaに送信
 */
function jumpSlove() {
    if (sloveCheck()) {
        const id =location.pathname.split('/')[1];

        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $(document).ajaxSend(function (e, xhr, options) {
            xhr.setRequestHeader(header, token);
        });

        var code = Blockly.JavaScript.workspaceToCode(workspace);
        $.ajax({
            url: "/problems/"+id+"/check",
            type: "POST",
            data: code,
            dataType: "script",
            contentType: 'text/javascript'
        })
            .done(function (data) {
            })
            .fail(function () {
                alert("error!");
            })
    }

}


/**
 * ポップアップを閉じる
 */