//変数
var field = document.getElementById("field");
var field_rect = field.getBoundingClientRect();
var px = window.pageXOffset + field_rect.left;//fieldの左端座標
var py = window.pageYOffset + field_rect.top;//fieldの上端座標

var move_flg = false;//動かしているかどうか
var move_num = 0;//動かしているオブジェクトナンバー
var object_elems = [];
var layer = [];
var gapX, gapY;

var object_match_id = {};//objのname:id

var activeContextId;//0415

//サウンド配列
var sound = [0];
var sound_name = [0];

//サウンドの持つ効果
var sound_effect = [0];
var se_name = [0];

//divの要素数
var div_cnt = 0;//div=spriteを示す数
var back_cnt = 0;//背景の個数

var img_origin_w, img_origin_h;//多重影分身
var focus_num = 0;


var workspace;
var workspaceBlocks;


var myBlockXml = {//保存用連想配列
    "default": [
        '<xml xmlns="https://developers.google.com/blockly/xml"></xml>',
        '<div class="box box0" id="0" style="width: 64px; height: 64px;"> <img id="imgb0" src="../IMG/semi_sprite/1KB.png" width="64" height="64"> </div>',
        'div class="sprite s0 is-select" id="sprite0" onclick="spr_change_target(0)"><div class="obj img" style="border-color: rgb(77, 139, 255);"><img src="../IMG/semi_sprite/1KB.png" id="imgs0" width="44"></div><div class="obj name" style="border-color: rgb(77, 139, 255); background: rgb(77, 139, 255);">1KB</div><div class="dustbox" onclick="Delete_Obj(this);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" style="fill: rgba(6, 156, 28, 1);"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg></div></div>',
        object_match_id,
        layer
    ]
};
//関数群
function O_move(move_x, move_y, target = -1) {//オブジェクト移動
    if (target == -1) {
        var C_name = ".box" + move_num;
        gsap.to(C_name, 0, {
            left: move_x,
            top: move_y
        });
    } else {
        var C_name = ".box" + target;
        gsap.to(C_name, 0, {
            left: move_x,
            top: move_y
        });
    }
}

function set_object(name) {//画像追加時にマウスイベントを追加　//呼びだしていない
    object_elems = [];

    object_elems = document.querySelectorAll(".box");//オブジェクト要素配列
    object_elems.forEach(
        function (target) {
            if (target.id == div_cnt - 1) {
                target.addEventListener("mousedown",
                    function (e1) {
                        Select_obj("sprite" + this.id);
                        move_flg = true;
                        move_num = parseInt(this.id);
                        focus_num = move_num;
                    });
                object_match_id[name] = target.id;
            }
        }
    );
}

function Change_layer() {//オブジェクトのレイヤー変更
    layer.splice(layer.indexOf(move_num), 1);
    layer.push(move_num);
    console.log(layer);

    for (var i in layer) {
        temp = jQuery(".box" + layer[i]);
        temp.css("z-index", i);
    }
}

//イベント
window.onload = async function () {
    var blocklyDiv = document.getElementById('blocklyDiv');
    //workspaceのサイズ変更
    // blocklyDiv.style.width = 95+"%";
    // blocklyDiv.style.height = 95+"%";
    var toolbox = document.getElementById("toolbox");
    var options = {
        toolbox: toolbox,
        collapse: true,
        comments: true,
        disable: true,
        maxBlocks: Infinity,
        trashcan: true,
        horizontalLayout: false,
        toolboxPosition: 'start',
        css: true,
        media: 'https://blockly-demo.appspot.com/static/media/',
        rtl: false,
        scrollbars: true,
        sounds: true,
        oneBasedIndex: true,
        grid: {
            spacing: 20,
            length: 1,
            colour: '#888',
            snap: false
        },
        zoom: {
            controls: true,
            wheel: false,
            startScale: 0.85,
            maxScale: 0.85,
            minScale: 0.85,
            scaleSpeed: 1.2
        }
    };

    workspace = Blockly.inject("blocklyDiv", options);
    workspaceBlocks = document.getElementById("workspaceBlocks");

    // Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    workspace.addChangeListener(function (e) {
        if (!e.isOpen && e.type == "bubble_open" && e.bubbleType == "mutator") {//ミュテーターアイコンが閉じたとき
            const block_type = workspace.getBlockById(e.blockId).type;//変更されたブロックタイプ
            if (block_type == "operator" || block_type == "switch") {
                const o_nums = workspace.getBlocksByType("o_num", true);
                for (let i = 0; i < o_nums.length; i++) {
                    if (o_nums[i].isShadow() && o_nums[i].getSurroundParent() == null) {
                        o_nums[i].dispose();
                    }
                }
            }
        }
    });
    Blockly.Flyout.prototype.autoClose = false;//フライアウトの固定化
    //zoomの+,-を消去し、中央に戻すボタンの位置を変更する。
    document.getElementsByClassName("blocklyZoom")[0].style.display = "none";
    document.getElementsByClassName("blocklyZoom")[1].style.display = "none";

    var default_w = document.getElementById("tst").style.width;
    var default_h = document.getElementById("tst").style.height;

    default_w = (parseInt(default_w.slice(0, -2)) - 74) + "px";//74
    default_h = (parseInt(default_h.slice(0, -2)) - 196) + "px";//196

    document.getElementsByClassName("blocklyZoom")[2].parentElement.style.transform = 'translate(' + default_w + ',' + default_h + ')';





    Siber_event();
    document.getElementById("objects").oncontextmenu = function () { return false; }//右クリック消去
    document.getElementById("BGinformation").oncontextmenu = function () { return false; }//右クリック消去
    object_match_id['1KB'] = 0;//yaba
    layer.push(0);
    const result = await resolveAfter2Seconds('../IMG/semi_sprite/1KB.png', '1KB');//オブジェクト追加※ほとんどこれ一つで行ける

    const result2 = await resolveAfter2Seconds_back('../IMG/semi_background/32.png');//背景追加※ほとんどこれ一つで行ける

    window.onclick = function () {
        document.getElementById('contextmenu').style.display = "none";
    }
    console.log("ok" + object_match_id['1KB']);

    all_display(move_num);

}

field.addEventListener("mousemove", function (e) {//field内でマウスを動かす
    if (!move_flg) return;
    var posX = parseInt(e.clientX - px);
    var posY = parseInt(e.clientY - py);

    O_move(posX - gapX - 1, posY - gapY - 1);//キャンバス内でのそのdivの左上の座標値
}, false);
field.addEventListener("mousedown", function (e) {//field内でマウス押下
    if (!move_flg) return;
    //座標を取得する
    var posX = parseInt(e.clientX) - px;
    var posY = parseInt(e.clientY) - py;
    var x_dis = parseInt($("div[id=" + move_num + "]").css("left"));//x=left
    var y_dis = parseInt($("div[id=" + move_num + "]").css("top"));//y=top

    gapX = posX - x_dis;//マウスとdivの左上のギャップがgapX
    gapY = posY - y_dis;
    Change_layer();
    console.log("field.addEventListener");
}, false);
field.addEventListener('mouseup', function (e) {
    move_flg = false;
    all_display(move_num);//変更位置
}, false);
field.addEventListener('mouseout', function (e) {
    var posX = parseInt(e.clientX);
    var posY = parseInt(e.clientY);

    if (field_rect.left < posX && field_rect.right > posX &&
        field_rect.top < posY && field_rect.bottom > posY) {
        return;
    } else {
        move_flg = false;
    }
}, false);


function Add_character(path, num) {//0415 引数eをpathに変更
    var img_origin_w = 0;
    var img_origin_h = 0;
    var element = new Image();
    element.src = path;
    var x = 0;
    var y = 0;
    element.onload = function () {
        let img = document.getElementById("imgs" + num);//画像を保持するimg属性を取得
        img.src = element.src;
        img_origin_w = element.naturalWidth;//画像の元サイズを保存
        img_origin_h = element.naturalHeight;

        if (img_origin_w < img_origin_h) {//高さの方が大きい場合
            y = 44;
            x = img_origin_w * 44 / img_origin_h;
            img.width = x;
            img.height = y;
            img.style.margin = '0px ' + (44 - x) / 2 + 'px';
        } else {//幅の方が大きい場合
            y = img_origin_h * 44 / img_origin_w;
            x = 44;
            img.width = x;
            img.height = y;
            img.style.margin = (44 - y) / 2 + 'px 0px';
        }
    }
}

function Add_Obj_img(path, num) {//0415 引数eをpathに変更 //使用してない
    var img_origin_w = 0;
    var img_origin_h = 0;
    var element = new Image();
    element.src = path;
    var x = 0;
    var y = 0;
    element.onload = function () {
        let img = document.getElementById("imgs" + num);//画像を保持するimg属性を取得
        img.src = element.src;
        img_origin_w = element.naturalWidth;//画像の元サイズを保存
        img_origin_h = element.naturalHeight;

        // if (img_origin_w < img_origin_h) {//高さの方が大きい場合
        //     y = 44;
        //     x = img_origin_w * 44 / img_origin_h;
        //     img.width = x;
        //     img.height = y;
        //     img.style.margin = '0px ' + (44 - x) / 2 + 'px';
        // } else {//幅の方が大きい場合
        //     y = img_origin_h * 44 / img_origin_w;
        //     x = 44;
        //     img.width = x;
        //     img.height = y;
        //     img.style.margin = (44 - y) / 2 + 'px 0px';
        // }
    }

}

async function AddPropertyObj(e) {
    if (!e.value.length) {//オブジェクトキャンセルバグ
        return;
    }

    layer.push(div_cnt);
    let obj_name = e.files[0].name.split('.')[0];
    obj_name = Set_item_name(obj_name)

    var path = window.URL.createObjectURL(e.files[0]);
    // focus_num = div_cnt;

    const result = await resolveAfter2Seconds(path, obj_name);//オブジェクト追加※ほとんどこれ一つで行ける

    e.value = '';
}

//画像読み込み
function resolveAfter2Seconds(path, name) {
    try {//focus消去処理
        let target = document.getElementsByClassName('is-select')[0];
        target.classList.remove('is-select');
        Remove_item_focus(target.id);
    } catch { }
    set_box_spr(name);//boxとsprの追加
    Add_character(path, div_cnt - 1);


    object_match_id[name] = (div_cnt - 1);
    img_origin_w = 0;
    img_origin_h = 0;
    var element = new Image();
    element.src = path;

    element.onload = function () {
        img_origin_w = element.naturalWidth;//画像の元サイズを保存
        img_origin_h = element.naturalHeight;

        document.getElementById("imgb" + (div_cnt - 1)).src = path;//boxに画像を追加
        $("img[id=imgb" + (div_cnt - 1) + "]").css("visibility", "hidden");
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resizeByWidth(150);
            resolve('resolved');
        }, 200);

    });
}

//画像読み込み時のサイズの自動調整
// 横幅を指定すると、縦横比が維持されるように高さも自動計算して、画像をリサイズする
function resizeByWidth(n) {
    //box
    var targetImg = document.getElementById("imgb" + (div_cnt - 1));//boxのimgタグ

    targetImg.width = n;//<img>を目的のサイズに変更
    targetImg.height = img_origin_h * (targetImg.width / img_origin_w);

    $("div[id=" + (div_cnt - 1) + "]").css('width', n);//previewが存在するdivのwidthをnに変更
    $("div[id=" + (div_cnt - 1) + "]").css('height', targetImg.height);//previewが存在するdivのheightをnに変更

    $("img[id=imgb" + (div_cnt - 1) + "]").css("visibility", "visible");

    all_display(div_cnt - 1);
    focus_num = div_cnt - 1;
}

//画像読み込み時にboxとsprを追加する処理
function set_box_spr(name) {
    //----box
    $('#field').append(
        '<div class="box box' + div_cnt + '" id="' + div_cnt + '">' +
        '<img id="imgb' + div_cnt + '">' +
        '</div>'
    );

    //----sprite
    $('#objects').append(
        '<div class="' + 'sprite s' + div_cnt + ' is-select" id = "' + 'sprite' + div_cnt + '" onclick="spr_change_target(' + div_cnt + ')">' +//変更0414 一番左のdiv_cntの右に' is-select'を追加
        '<div class="' + 'obj img' + '">' +
        '<img src="" id="' + 'imgs' + div_cnt + '">' +
        '</div>' +
        '<div class="' + 'obj name' + '">' +
        name +
        '</div>' +
        '<div class = "dustbox" onclick="Delete_Obj(this);">' +
        '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20" height="20" style="fill: rgba(6, 156, 28, 1);"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/></svg>' +
        '</div>' +
        '</div>'
    );

    Add_obj_event(div_cnt);//キャンバス内のオブジェクトにeventを追加
    Add_property_Event('sprite' + div_cnt);//スプライトオブジェクトにeventを追加
    Set_item_focus('sprite' + div_cnt);//スプライトオブジェクトのfocus追加処理
    div_cnt += 1;
}

//sprの初期設定。onload時のみ処理を行う
//既に存在するboxに対して、同数のsprを追加
//初期読み込みの画像に関して、html側で設定
function sprite_setting() {//呼びだしていない
    var obj_cnt = document.querySelectorAll(".box").length;//現在のobjの個数
    for (var i = 0; i < obj_cnt; i++) {
        var box_img = document.getElementById("imgb" + div_cnt);
        box_img.setAttribute("src", "1KB.png");

        box_img.width = 64;
        box_img.height = 64;
        $("div[id=" + (div_cnt) + "]").css('width', box_img.width);//previewが存在するdivのwidthをnに変更
        $("div[id=" + (div_cnt) + "]").css('height', box_img.height);//previewが存在するdivのheightをnに変更

        let sp = document.getElementsByClassName('sprite s' + 0)[0];
        sp.getElementsByClassName("obj img")[0].style.borderColor = "rgb(77, 139, 255)";
        sp.getElementsByClassName("obj name")[0].style.borderColor = "rgb(77, 139, 255)";
        sp.getElementsByClassName("obj name")[0].style.background = "rgb(77, 139, 255)";
        sp.addEventListener("mouseover",
            function (e1) {
                if (Array.from(this.classList).indexOf("is-select") == -1) {
                    let objs = this.getElementsByClassName("obj");
                    objs[0].style.borderColor = "rgb(77, 139, 255)";
                    objs[1].style.borderColor = "rgb(77, 139, 255)";
                    objs[1].style.background = "rgb(77, 139, 255)"
                    objs[1].style.color = 'white';
                }
            }
        );
        sp.addEventListener("mouseout",
            function (e1) {
                if (Array.from(this.classList).indexOf("is-select") == -1) {
                    let objs = this.getElementsByClassName("obj");
                    objs[0].style.borderColor = "rgb(204, 204, 204)";
                    objs[1].style.borderColor = "rgb(204, 204, 204)";
                    objs[1].style.background = "rgb(204, 204, 204)";
                    objs[1].style.color = "black"
                }
            }
        );
        sp.addEventListener("click",
            function (e1) {
                if (Array.from(this.classList).indexOf("is-select") == -1) {
                    try {
                        document.getElementsByClassName('is-select')[0].classList.remove('is-select');
                    } catch { }
                    this.classList.add('is-select');

                    let objimg = document.getElementsByClassName('obj img');
                    let objname = document.getElementsByClassName('obj name');
                    for (let i = 0; i < Array.from(objimg).length; i++) {
                        objimg[i].style.borderColor = "rgb(204, 204, 204)";
                    }
                    for (let i = 0; i < Array.from(objname).length; i++) {
                        objname[i].style.borderColor = "rgb(204, 204, 204)";
                        objname[i].style.background = "rgb(204, 204, 204)";
                        objname[i].style.color = "black";
                    }

                    // let objs = this.getElementsByClassName("obj name");
                    this.getElementsByClassName("obj img")[0].style.borderColor = "rgb(77, 139, 255)";
                    this.getElementsByClassName("obj name")[0].style.borderColor = "rgb(77, 139, 255)";
                    this.getElementsByClassName("obj name")[0].style.background = "rgb(77, 139, 255)";
                    this.getElementsByClassName("obj name")[0].style.color = "white";

                }
            }
        );
        ///

        //背景の初期設定
        let element_back = new Image();
        element_back.src = "32.png";

        let x = 0;
        let y = 0;
        let ow = element_back.naturalWidth;//画像の元サイズを保存
        let oh = element_back.naturalHeight;
        if (ow < oh) {//高さの方が大きい場合
            y = 400;
            x = ow * 400 / oh;
        } else {//幅の方が大きい場合
            y = oh * 600 / ow;
            x = 600;
        }
        $(".boxes").css('background-size', x + "px " + y + "px");
        $(".boxes").css('background-image', "url(" + element_back.src + ")");

        // div_cnt += 1;
        // set_object("1KB");
    }
}

//現在の角度を取得
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform") ||
        obj.css("-ms-transform") ||
        obj.css("-o-transform") ||
        obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

//move_numを押下したsprのid番号にする
function spr_change_target(num) {
    focus_num = num;
    all_display(focus_num);
}

function resolveAfter2Seconds_back(path) {
    try {//背景のfocus消去処理
        let target = document.getElementsByClassName('is-select-bg')[0];
        target.classList.remove('is-select-bg');
        Remove_item_focus(target.id);
    } catch { }
    set_bginfo_img_back()//bginfoにimgタグ追加
    Add_background(path, back_cnt - 1);

    img_origin_w = 0;
    img_origin_h = 0;
    var path_back = path;
    var element_back = new Image();
    element_back.src = path_back;

    let x = 0;
    let y = 0;
    element_back.onload = function () {
        img_origin_w = element_back.naturalWidth;//画像の元サイズを保存
        img_origin_h = element_back.naturalHeight;

        $("img[id=back_i_" + (back_cnt - 1) + "]").css("visibility", "hidden");

        if (img_origin_w < img_origin_h) {//高さの方が大きい場合
            y = 400;
            x = img_origin_w * 400 / img_origin_h;
        } else {//幅の方が大きい場合
            y = img_origin_h * 600 / img_origin_w;
            x = 600;
        }
        $(".boxes").css('background-size', x + "px " + y + "px");
        $(".boxes").css('background-image', "url(" + path_back + ")");
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 200);

    });
}

function Csize(w, ratioW, ratioH) {//hを出力,h:w=ratioW:ratioH
    return (w * ratioH) / ratioW
}

function set_bginfo_img_back() {//divとimgの追加
    $('#BGinformation').append(
        '<div class ="back div' + back_cnt + ' is-select-bg" id="back_d_' + back_cnt + '" onclick="back_change_target(' + back_cnt + ')">' +
        '</div>'
    );
    Set_item_focus('back_d_' + back_cnt);
    Add_property_Event('back_d_' + back_cnt);
    back_cnt += 1;
}

function back_change_target(num) {
    let background_src = document.getElementById("back_d_" + num).style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    let element_back = new Image();
    element_back.src = background_src;
    let x = 0;
    let y = 0;
    element_back.onload = function () {
        let img_origin_w = element_back.naturalWidth;//画像の元サイズを保存
        let img_origin_h = element_back.naturalHeight;
        if (img_origin_w < img_origin_h) {//高さの方が大きい場合
            // 600*400
            y = 400;
            x = img_origin_w * 400 / img_origin_h;
        } else {//幅の方が大きい場合
            y = img_origin_h * 600 / img_origin_w;
            x = 600;
        }
        $(".boxes").css('background-size', x + "px " + y + "px");
        $(".boxes").css('background-image', "url(" + background_src + ")");
    }
}
//------------------テキストボックス 表示関連
function all_display(div_num) {
    size_display(div_num);//move_num=div_num=現在触っているbox
    angle_display(div_num);
    xy_display(div_num);
    name_display(div_num);
    visibility_display_check(div_num);
}
//大きさ表示。divから取得。表示はw
function size_display(num) {
    var size_dis = $("div[id=" + num + "]").css("width");
    $("input[id=Object_size]").val(size_dis);
}

//角度表示。divから取得。
function angle_display(num) {
    var angle_dis = getRotationDegrees($("div[id=" + num + "]"));
    $("input[id=Object_direction]").val(angle_dis);
}

//X,Y座標表示。divから取得。
function xy_display(num) {
    var x_dis = $("div[id=" + num + "]").css("left");//x=left
    var y_dis = $("div[id=" + num + "]").css("top");//y=top
    $("input[id=Object_X]").val(x_dis);
    $("input[id=Object_Y]").val(y_dis);
}
//名前表示
function name_display(num) {
    let result = null;
    const keys = Object.keys(object_match_id);
    for (let i = 0; i < keys.length; i++) {
        if (object_match_id[keys[i]] == num) {
            result = keys[i];
        }
    }
    $("input[id=Object_name]").val(result);

}
//視認性表示
function visibility_display_check(num) {
    var vis_dis = $("div[id=" + num + "]").css("visibility");//visibilityの取得
    if (vis_dis == "visible") {//見えるならoffのcheckを外して、onのcheckを付ける
        $("input[id=sample1on]").prop('checked', true);
        $("input[id=sample1off]").prop('checked', false);
    } else {
        $("input[id=sample1on]").prop('checked', false);
        $("input[id=sample1off]").prop('checked', true);
    }
}
//セーブ
//------------------テキストボックス 変更関連
//現在触れている要素の変更。move_num
//サイズ変更
function size_dis_change(size = "", target = -1) {
    if (target == -1) {//focus
        size = parseInt($("input[id=Object_size]").val());//
        if (size <= 0) {
            size = 1;
        }
        var target_w = parseInt($("div[id=" + focus_num + "]").css("width"));//元サイズW
        var target_h = parseInt($("div[id=" + focus_num + "]").css("height"));//元サイズh
        $("input[id=Object_size]").val(size);

        $("div[id=" + focus_num + "]").css("width", size);//目的のサイズ
        $("div[id=" + focus_num + "]").css("height", target_h * (size / target_w));

        $("img[id=imgb" + focus_num + "]").css("width", size);
        $("img[id=imgb" + focus_num + "]").css("height", target_h * (size / target_w));
    } else {
        if (size <= 0) {
            size = 1;
        }

        var target_w = parseInt($("div[id=" + target + "]").css("width"));//元サイズW
        var target_h = parseInt($("div[id=" + target + "]").css("height"));//元サイズh

        $("div[id=" + target + "]").css("width", size);//目的のサイズ
        $("div[id=" + target + "]").css("height", target_h * (size / target_w));

        $("img[id=imgb" + target + "]").css("width", size);
        $("img[id=imgb" + target + "]").css("height", target_h * (size / target_w));
    }

}
//角度変更
function angle_dis_change(target = -1) {
    if (target == -1) {
        var angle = parseInt($("input[id=Object_direction]").val());//現在の角度の取得
        if (angle >= 360) {
            angle = angle % 360;
        }
        $("input[id=Object_direction]").val(angle);

        gsap.to(".box" + focus_num, 0, {
            rotation: angle
        });
    } else {
        var angle = parseInt($("input[id=Object_direction]").val());//現在の角度の取得
        if (angle >= 360) {
            angle = angle % 360;
        }
        $("input[id=Object_direction]").val(angle);

        gsap.to(".box" + target, 0, {
            rotation: angle
        });
    }
}
//X座標変更
function x_dis_change() {
    var x = parseInt($("input[id=Object_X]").val());
    $("div[id=" + focus_num + "]").css("left", x);
    $("input[id=Object_X]").val(x);
}
//Y座標変更
function y_dis_change() {
    var y = parseInt($("input[id=Object_Y]").val());
    $("div[id=" + focus_num + "]").css("top", y);
    $("input[id=Object_Y]").val(y);
}
//名前変更
function name_dis_change() {
    console.log(object_match_id)
    var name = $("input[id=Object_name]").val();//変更後の名前の取得

    //連想配列の更新

    //move_numから変更前の名前の取得
    let result = null;
    const keys = Object.keys(object_match_id);
    for (let i = 0; i < keys.length; i++) {
        if (object_match_id[keys[i]] === focus_num) {
            result = keys[i];
        }
    }

    var temp = object_match_id[result];//変更前の名前をキーとしてIDの保存
    delete object_match_id[result];//過去の名前と一致するデータを削除
    object_match_id[name] = temp;//キーを現在の名前とし、idを書き込む。

    //spriteの名称変更
    var ooo = document.getElementById("sprite" + focus_num).getElementsByClassName("name")[0];
    ooo.innerHTML = name;

    //キーを含んだ配列に変換 オブジェクト⇒配列
    var array = Object.keys(object_match_id).map((k) => ({ key: k, value: object_match_id[k] }));

    //idを参照し、昇順にする。
    array.sort((a, b) => a.value - b.value);

    //配列⇒オブジェクト　で元に戻す
    object_match_id = Object.assign({}, ...array.map((item) => ({
        [item.key]: item.value,
    })));
    let blocks = workspace.getBlocksByType('obj_dropbox', true);
    for (let b in blocks) {
        if (result == blocks[b].getField('object').selectedOption_[0]) {
            blocks[b].generateOptions();
            blocks[b].getField('object').doValueUpdate_(name);
            blocks[b].getField('object').selectedOption_ = [name, name];
            workspace.render();//workspaceの更新
        }
    }
    workspace.getToolbox().refreshSelection();//toolboxの更新
    console.log(object_match_id)
}
//onが押された時にvisibilityをvisibleにする
function visibility_dis_on() {
    $("div[id=" + focus_num + "]").css("visibility", "visible");
    $("img[id=imgb" + focus_num + "]").css("visibility", "visible");
}
//offが押された時にvisibilityをhiddenにする
function visibility_dis_off() {
    $("div[id=" + focus_num + "]").css("visibility", "hidden");
    $("img[id=imgb" + focus_num + "]").css("visibility", "hidden");
}

//-----コンパイル用関数
//n_rotation
function con_angle_add(num = "", target = -1) {
    if (target == -1) {
        console.log("==focus")
        var angle = getRotationDegrees($("div[id=" + focus_num + "]"));
        angle = angle + num;
        gsap.to(".box" + focus_num, 0, {
            rotation: angle
        });
    } else {
        console.log("==target")
        var angle = getRotationDegrees($("div[id=" + target + "]"));
        angle = angle + num;
        gsap.to(".box" + target, 0, {
            rotation: angle
        });
    }
}

function con_angle_change(num = "", target = -1) {
    if (target == -1) {
        // var angle = parseInt($("input[id=Object_direction]").val());//現在の角度の取得
        if (num >= 360) {
            num = num % 360;
        }

        gsap.to(".box" + focus_num, 0, {
            rotation: num
        });
    } else {
        if (num >= 360) {
            num = num % 360;
        }

        gsap.to(".box" + target, 0, {
            rotation: num
        });
    }
}

//change_background
function con_back_change(num) {
    back_change_target(num);
}
//
function con_visibility_on(target) {
    $("div[id=" + target + "]").css("visibility", "visible");
    $("img[id=imgb" + target + "]").css("visibility", "visible");
}
//offが押された時にvisibilityをhiddenにする
function con_visibility_off(target) {
    $("div[id=" + target + "]").css("visibility", "hidden");
    $("img[id=imgb" + target + "]").css("visibility", "hidden");
}

function Delete_Obj(e) {//ゴミ箱、消去関数
    let del_obj = e.parentNode;
    del_obj.removeAttribute("onclick");
    let del_obj_name = del_obj.getElementsByClassName("name")[0].innerHTML;

    let nowB = document.getElementsByClassName('sprite s' + object_match_id[del_obj_name])[0];
    if (Array.from(nowB.classList).indexOf("is-select") != -1) {
        let sp;
        for (let i in object_match_id) {
            sp = document.getElementById('sprite' + object_match_id[i]);
            if (!(del_obj.id === sp.id)) {
                break;
            }
        }
        sp.classList.add('is-select');
        Set_item_focus(sp.id);
        all_display(sp.id.substring(6));
    }
    document.getElementById(object_match_id[del_obj_name]).remove();
    delete object_match_id[del_obj_name];
    del_obj.remove();
}
function o_undo_redo(bl) {//元に戻す、やり直す
    workspace.undo(bl);
}
async function menu1() {//右クリック、複製
    const target = document.getElementById(activeContextId);
    if (target.id.substring(0, 6) == "sprite") {//スプライト選択時
        let obj_name = target.getElementsByClassName("obj")[1].textContent.replace(/\s+/g, "");
        obj_name = Set_item_name(obj_name);

        layer.push(div_cnt);

        var path = target.getElementsByClassName("obj")[0].querySelector("img").src;
        const result = await resolveAfter2Seconds(path, obj_name);
    } else if (target.id.substring(0, 7) == "back_d_") {//背景選択時
        let path = target.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        const result = await resolveAfter2Seconds_back(path);
    }
}
function menu2() {//右クリック、保存
    const target = document.getElementById(activeContextId);

    const link = document.createElement('a');

    let obj_name;
    if (target.id.substring(0, 6) == "sprite") {//スプライト選択時
        link.href = target.getElementsByClassName("obj")[0].querySelector("img").src;
        obj_name = target.getElementsByClassName("obj")[1].textContent.replace(/\s+/g, "");

    } else if (target.id.substring(0, 7) == "back_d_") {//背景選択時
        link.href = target.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        obj_name = target.id
    }

    link.download = obj_name + '.png';

    link.click();
}
function menu3() {//右クリック、消去
    let target = document.getElementById(activeContextId);
    Delete_Obj2(target);
}
function Delete_Obj2(nowB) {//右クリック、消去関数
    let del_obj;
    if (nowB.id.substring(0, 6) == 'sprite') {
        del_obj = document.getElementById(nowB.id.substring(6));
        if (Array.from(nowB.classList).indexOf("is-select") != -1) {
            let sp;
            for (let i in object_match_id) {
                sp = document.getElementById('sprite' + object_match_id[i]);
                if (!(del_obj.id === object_match_id[i])) {
                    break;
                }
            }
            sp.classList.add('is-select');
            Set_item_focus(sp.id);
            all_display(sp.id.substring(6));
        }
        del_obj.remove();
        delete object_match_id[del_obj.id];
    }
    else {
        del_obj = document.getElementById('field');
        if (Array.from(nowB.classList).indexOf("is-select-bg") != -1) {
            nowB
            let bg;
            for (let i in document.getElementsByClassName('back')) {
                bg = document.getElementsByClassName('back')[i];
                if (!(bg.id === nowB.id)) {
                    break;
                }
            }
            bg.classList.add('is-select-bg');
            Set_item_focus(bg.id);
            back_change_target(bg.id.substring(7));
        }
    }
    nowB.remove();
}
async function AddPropertyBg(e) {
    if (!e.value.length) {//背景キャンセルバグ
        return;
    }
    var path = window.URL.createObjectURL(e.files[0]);
    var element = new Image();
    element.src = path;

    const result = await resolveAfter2Seconds_back(element.src);

    e.value = '';
}
function Add_background(path, num) {
    img_origin_w = 0;
    img_origin_h = 0;
    var element_back = new Image();
    element_back.src = path;

    //obj画像保存
    let x = 0;
    let y = 0;
    element_back.onload = function () {
        img_origin_w = element_back.naturalWidth;//画像の元サイズを保存
        img_origin_h = element_back.naturalHeight;

        // document.getElementById("back_i_" + num).src = path;//boxに画像を追加
        $("img[id=back_i_" + num + "]").css("visibility", "hidden");

        if (img_origin_w < img_origin_h) {//高さの方が大きい場合
            // 66*44
            y = 44;
            x = img_origin_w * 44 / img_origin_h;
        } else {//幅の方が大きい場合
            y = img_origin_h * 66 / img_origin_w;
            x = 66;
        }
        $("#back_d_" + num).css('background-size', x + "px " + y + "px");
        $("#back_d_" + num).css('background-image', "url(" + path + ")");
    }

}
function Select_obj(id) {
    let sel_target = document.getElementById(id);
    if (Array.from(sel_target.classList).indexOf("is-select") == -1) {
        try {
            let target = document.getElementsByClassName('is-select')[0];
            target.classList.remove('is-select');
            Remove_item_focus(target.id);
        } catch { }
        sel_target.classList.add('is-select');
        Set_item_focus(sel_target.id);
    }
}
function Add_property_Event(id) {
    console.log(id);
    let target = document.getElementById(id);
    if (id.substring(0, 6) == "sprite") {
        target.addEventListener("mouseover",
            function (e) {
                if (Array.from(this.classList).indexOf("is-select") == -1) {
                    let objs = this.getElementsByClassName("obj");
                    objs[0].style.borderColor = "rgb(77, 139, 255)";
                    objs[1].style.borderColor = "rgb(77, 139, 255)";
                    objs[1].style.background = "rgb(77, 139, 255)"
                    objs[1].style.color = 'white';
                }
            }
        );
        target.addEventListener("mouseout",
            function (e) {
                if (Array.from(this.classList).indexOf("is-select") == -1) {
                    let objs = this.getElementsByClassName("obj");
                    objs[0].style.borderColor = "rgb(204, 204, 204)";
                    objs[1].style.borderColor = "rgb(204, 204, 204)";
                    objs[1].style.background = "rgb(204, 204, 204)";
                    objs[1].style.color = "black";
                }
            }
        );
        target.addEventListener("click",
            function (e) {
                if (Array.from(this.classList).indexOf("is-select") == -1) {
                    try {
                        let target = document.getElementsByClassName('is-select')[0];
                        target.classList.remove('is-select');
                        Remove_item_focus(target.id);
                    } catch { }
                    this.classList.add('is-select');
                    Set_item_focus(this.id);
                }
            }
        );
        target.addEventListener('contextmenu',
            function (e) {
                //マウスの位置をstyleへ設定（左上の開始位置を指定）
                document.getElementById('contextmenu').style.left = e.pageX + "px";//ページ全体におけるx
                document.getElementById('contextmenu').style.top = e.pageY + "px";//ページ全体におけるy
                //メニューをblockで表示させる
                document.getElementById('contextmenu').style.display = "block";
                activeContextId = this.id;
            }
        );
    }
    else if (id.substring(0, 7) == "back_d_") {
        target.addEventListener("mouseover",
            function (e) {
                this.style.border = "2px solid rgb(77, 139, 255)";
            }
        );
        target.addEventListener("mouseout",
            function (e) {
                if (Array.from(this.classList).indexOf("is-select-bg") == -1) {
                    this.style.border = "1px solid rgb(153, 153, 153)";
                }
            }
        );
        target.addEventListener("click",
            function (e) {
                if (Array.from(this.classList).indexOf("is-select-bg") == -1) {
                    try {
                        let target = document.getElementsByClassName("is-select-bg")[0];
                        target.classList.remove('is-select-bg');
                        Remove_item_focus(target.id);
                    } catch { }
                    this.classList.add('is-select-bg');
                    Set_item_focus(this.id);

                    // let Bgitems = document.getElementsByClassName('back');
                    // for (let i = 0; i < Array.from(Bgitems).length; i++) {
                    //     Bgitems[i].style.border = "1px solid rgb(153, 153, 153)";
                    // }
                    // this.style.border = "2px solid rgb(77, 139, 255)";
                }
            }
        );
        target.addEventListener("contextmenu",
            function (e) {
                //マウスの位置をstyleへ設定（左上の開始位置を指定）
                document.getElementById('contextmenu').style.left = e.pageX + "px";//ページ全体におけるx
                document.getElementById('contextmenu').style.top = e.pageY + "px";//ページ全体におけるy
                //メニューをblockで表示させる
                document.getElementById('contextmenu').style.display = "block";
                activeContextId = this.id;
            }
        );
    }
}
function Remove_item_focus(id) {
    let target = document.getElementById(id);
    if (id.substring(0, 6) == "sprite") {
        // if (Array.from(target.classList).indexOf("is-select") != -1) {
        console.log("尾は");
        let objimg = target.getElementsByClassName('obj img');
        let objname = target.getElementsByClassName('obj name');

        objimg[0].style.borderColor = "rgb(204, 204, 204)";
        objname[0].style.borderColor = "rgb(204, 204, 204)";
        objname[0].style.background = "rgb(204, 204, 204)";
        objname[0].style.color = "black";
        // }
    }
    else if (id.substring(0, 7) == "back_d_") {
        // if (Array.from(target.classList).indexOf("is-select-bg") != -1) {
        target.style.border = "1px solid rgb(153, 153, 153)";
        // }
    }
}
function Set_item_focus(id) {
    console.log(id);
    let target = document.getElementById(id);
    if (id.substring(0, 6) == "sprite") {
        if (Array.from(target.classList).indexOf("is-select") != -1) {
            let objimg = target.getElementsByClassName('obj img');
            let objname = target.getElementsByClassName('obj name');

            objimg[0].style.borderColor = "rgb(77, 139, 255)";
            objname[0].style.borderColor = "rgb(77, 139, 255)";
            objname[0].style.background = "rgb(77, 139, 255)";
            objname[0].style.color = "white";
        }
    }
    else if (id.substring(0, 7) == "back_d_") {
        if (Array.from(target.classList).indexOf("is-select-bg") != -1) {
            target.style.border = "2px solid rgb(77, 139, 255)";
        }
    }
}
function Set_item_name(name) {
    const keys = Object.keys(object_match_id);//object_match_id === 連想配列,　連想配列のキーをすべて取得し配列に格納
    let cnt = 0;
    let namelen = name.length;
    while (keys.indexOf(name) != -1) {
        name = name.substring(0, namelen);
        cnt++;
        name += '(' + cnt + ')';
    }
    return name;
}
function Add_obj_event(id) {
    let target = document.getElementById(id);

    target.addEventListener("mousedown",
        function () {
            Select_obj("sprite" + this.id);
            move_flg = true;
            move_num = parseInt(this.id);
            focus_num = move_num;
            all_display(move_num);//変更位置
        }
    );
}
function Siber_event() {//サイドバー
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
            arrowParent.classList.toggle("showMenu");
        });
    }
    let sidebar = document.querySelector(".sidebar");

    // let bug_btns = document.getElementsByClassName(".bxs-bug-alt");
    let headerBtn = document.getElementById("header_bug");
    // let sidebarBtn = document.querySelector(".bxs-bug-alt");
    let sidebarBtn = document.getElementById("side_bug");

    // let sidebarBtn = bug_btns[1];

    //console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", () => {
        $("body").css("overflow", "")
        sidebar.classList.toggle("close");
    });
    headerBtn.addEventListener("click", () => {
        $("body").css("overflow", "hidden")
        sidebar.classList.toggle("close");
    });
}
document.addEventListener('DOMContentLoaded', function () {//タブ
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }

    // タブをクリックすると実行する関数
    function tabSwitch() {

        // タブのclassの値を変更
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        // コンテンツのclassの値を変更
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('panel')[index].classList.add('is-show');
        //リサイズした状態でのパネル変更を行った際のバグを解消
        if (document.getElementsByClassName('panel')[index].classList.value == "panel tab-A is-show") {
            workspace.setVisible(true);
            Blockly.svgResize(workspace);
        } else {
            workspace.setVisible(false);
        }

    };
}, false);
function save() {//保存
    const savename = window.prompt("保存名を入力してください");
    // const XMLcodebox = document.getElementById("blockscodebox");
    const XMLcode = Blockly.Xml.workspaceToDom(workspace);
    myBlockXml[savename] = [Blockly.Xml.domToText(XMLcode), field.innerHTML, document.getElementById("objects").innerHTML, document.getElementById("BGinformation").innerHTML, object_match_id, layer];
}
function restore() {//復元
    const savename = window.prompt("復元したいファイル名を入力してください");
    try {
        const xml = Blockly.Xml.textToDom(myBlockXml[savename][0]);
        workspace.clear();
        Blockly.Xml.domToWorkspace(xml, workspace);

        field.innerHTML = myBlockXml[savename][1];
        document.getElementById("objects").innerHTML = myBlockXml[savename][2];
        document.getElementById("BGinformation").innerHTML = myBlockXml[savename][3];
        object_match_id = myBlockXml[savename][4];
        layer = myBlockXml[savename][5];
        back_change_target(document.getElementsByClassName('is-select-bg')[0].id.substring(7));

        object_elems = document.querySelectorAll(".box");//オブジェクトイベント配列
        object_elems.forEach(//オブジェクトにeventを生成
            function (target) {
                Add_obj_event(target.id);
                layer.push(parseInt(target.id));
            }
        );

        sprite_elems = document.querySelectorAll(".sprite");//spriteイベント配列
        sprite_elems.forEach(//スプライトにeventを生成
            function (target) {
                Add_property_Event(target.id);
            }
        );

        back_elems = document.querySelectorAll(".back");//背景イベント配列
        back_elems.forEach(//背景にeventを生成
            function (target) {
                Add_property_Event(target.id);
            }
        );
    } catch (e) {
        alert("保存されていません");
    }
}

