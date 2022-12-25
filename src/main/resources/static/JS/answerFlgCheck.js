function jumpCheck(){
    return window.confirm("この問題を未受験の状態で解答を確認した場合、問題の成績は反映されません。");
}
function jumpAnswer(id){
    if(jumpCheck()){
        //true=ok
        location.href = "http://localhost:8080/problems/"+id+"/Answer";
    }
}