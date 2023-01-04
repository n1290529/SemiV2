function jumpCheck() {
    return window.confirm("この問題を未受験の状態で解答を確認した場合、問題の成績は反映されません。");
}
function jumpAnswer(id) {
    if (jumpCheck()) {
        //true=ok
        location.href = "http://localhost:8080/problems/" + id + "/Answer";
    }
}
//@{'/problems/'+${problem.id}+'/challenge'}

function problemPopup(id) {
    window.open("http://localhost:8080/problems/" + id + "/slove", "window1", "width=1270,height=810");
}
function jumpChallenge(id) {
    problemPopup(id);
    document.location.href = "http://localhost:8080/problems/" + id + "/challenge";
}

/**
 * 解答提出をアラートで確認
 */
function sloveCheck() {
    return window.confirm("解答を提出しますか？");
}
function jumpSlove(id) {
    if (jumpCheck()) {
        var token = $("meta[name='_csrf']").attr("content");
		var header = $("meta[name='_csrf_header']").attr("content");

		$(document).ajaxSend(function(e, xhr, options) {
			xhr.setRequestHeader(header, token);
		});

        $.ajax({
            url: "http://localhost:8080/responseTest",
            type: "POST",
            data: "aaa"
          })
          .done(function(data) {

          })
          .fail(function() {
            alert("error!");
          })
        }

}
/**
 * AJAXで通信
 */

/**
 * ポップアップを閉じる
 */