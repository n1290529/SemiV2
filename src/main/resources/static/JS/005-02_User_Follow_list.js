window.onload = function () {
    Follow_func();
};
function Follow_func(){
    $("#follower_content").empty();
    let icon_src = '"profile.jpg"'  //アイコン画像を格納する変数の宣言
    let profile = "test"                                                        //プロフィールを格納する変数の宣言
    let name = "中深迫真一"                                                     //名前を格納する変数の宣言
    for(let i = 0; i < 100; i++){
        profile = "test"+(i+1);//テスト用、消去必須

        $('#follow_content').append(
            '<div class="user_info">'+
                '<table class="user_table">'+
                    '<tr>'+
                        '<td class="user_icon"><img class="user_icon_img" src='+icon_src+' width="50" height="50"></td>'+
                        '<td class="user_name">'+name+'</td>'+
                    '</tr>'+
                '</table>'+
                '<div>'+
                    profile+
                '</div>'+
            '</div>'
        );
    }
}

function Follower_func(){
    $("#follow_content").empty();
    let icon_src = '"yani06.png"'
    let profile = "test"
    let name = "西田開拓未来"
    for(let i = 0; i < 100; i++){
        profile = "test"+(i+1)//テスト用、消去必須

        $('#follower_content').append(
            '<div class="user_info">'+
                '<table class="user_table">'+
                    '<tr>'+
                        '<td class="user_icon"><img class="user_icon_img" src='+icon_src+' width="50" height="50"></td>'+
                        '<td class="user_name">'+name+'</td>'+
                    '</tr>'+
                '</table>'+
                '<div>'+
                    profile+
                '</div>'+
            '</div>'
        );
    }
    
}