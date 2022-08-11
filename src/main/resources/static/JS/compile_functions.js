function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec * 1000);
}

function sum(array) {
  var s = 0;
  for (let i = 0; i < array.length; i++) {
    s += array[i];
  }
  return s;
}

function avg(array) {
  var s = sum(array);
  return s / array.length;
}

function RanDom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function Semi_move(dropdown_object, value_input) {
  let target = object_match_id[dropdown_object];//移動対象の値を変更

  var x = $("div[id=" + target + "]").css("left");//x=left
  var y = $("div[id=" + target + "]").css("top");//y=topF

  x = parseInt(x.slice(0, -2));//文字列から不要な「px」を削除
  y = parseInt(y.slice(0, -2));
  value_input = parseInt(value_input);

  var ang = getRotationDegrees($("div[id=" + target + "]"));
  //px,pyは現在座標x,yに対して加算,減算する値
  if (ang == 90 || ang == 180 || ang == 270) {
    ang = ang * (Math.PI / 180);
    var px = parseInt((Math.cos(ang) | 0) * value_input);
    var py = parseInt((Math.sin(ang) | 0) * value_input);
    // console.log("Math.cos(ang)="+Math.cos(ang));
    // console.log("向き"+ang);

    // console.log("xの移動量"+px);
    // console.log("yの移動量"+py);

    O_move(x + px, y + py, target);//move関数
  } else {
    ang = ang * (Math.PI / 180);
    var px = parseInt(Math.cos(ang) * value_input);
    var py = parseInt(Math.sin(ang) * value_input);
    // console.log("Math.cos(ang)="+Math.cos(ang));
    // console.log("向き"+ang);

    // console.log("xの移動量"+px);
    // console.log("yの移動量"+py);

    O_move(x + px, y + py, target);
  }

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトを更新
  }
}

function Semi_rotation(dropdown_object, value_input, dropdown_select_lr) {
  let target = object_match_id[dropdown_object];

  value_input = parseInt(value_input);
  if (dropdown_select_lr == "select_l") {
    value_input *= -1;//select_lの場合、角度を左方向にする。
  }

  con_angle_add(value_input, target);//01tst.jsに記述。

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトをターゲットの値で更新
  }
}

function Semi_xy_both_coordinate(dropdown_object, value_input, value_input2) {
  let target = object_match_id[dropdown_object];

  value_input = parseInt(value_input);
  value_input2 = parseInt(value_input2);

  O_move(value_input, value_input2, target);

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトをターゲットの値で更新
  }
}

function Semi_x_coordinate(dropdown_object, dropdown_select_xy, value_input) {
  let target = object_match_id[dropdown_object];

  var x = $("div[id=" + target + "]").css("left");//x=left
  var y = $("div[id=" + target + "]").css("top");//y=topF
  x = parseInt(x.slice(0, -2));
  y = parseInt(y.slice(0, -2));

  if (dropdown_select_xy == "select_x") {
    O_move(value_input, y, target);
  } else {
    O_move(x, value_input, target);
  }

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトをターゲットの値で更新
  }
}

function Semi_turn(dropdown_object, value_input) {
  let target = object_match_id[dropdown_object];

  con_angle_change(value_input, target);

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトをターゲットの値で更新
  }
}

function Semi_rebound(dropdown_object) {
  let target = object_match_id[dropdown_object]
  all_display(target);

  var width = parseInt($("div[class=boxes]").width());//600
  var height = parseInt($("div[class=boxes]").height());//400
  var obj_x = parseInt($("input[id=Object_X]").val());//onjのx座標
  var obj_y = parseInt($("input[id=Object_Y]").val());//onjのy座標
  var obj_size_w = parseInt($("div[id=" + target + "]").width());//objのw
  var obj_size_h = parseInt($("div[id=" + target + "]").height());//objのh

  var angle = getRotationDegrees($("div[id=" + target + "]"));
  // console.log("WIDTH="+width);
  // console.log("HEIGHT="+height);
  // console.log("OBJ_W="+obj_x);
  // console.log("OBJ_Y="+obj_y);
  // console.log("OBJ_W="+obj_size_w);
  // console.log("OBJ_Y="+obj_size_h);

  if (obj_x + obj_size_w > width) {
    //右辺が右枠を超えた場合、壁ギリギリの位置にOBJを配置する。(壁にぶつかる処理)
    //壁にぶつかった後、向きを反対に変える。
    // console.log("右辺が右枠を超えた場合");
    var bound = obj_x + obj_size_w - width;
    angle = angle + 180;

    O_move(obj_x - bound, obj_y, target);

    if (angle >= 360) {
      angle = angle % 360;
    }
    // $("input[id=Object_direction]").val(angle);
    con_angle_change(angle, target);

  } else if (obj_y + obj_size_h > height) {
    //下辺が下枠を超えた場合
    // console.log("下辺が下枠を超えた場合");
    var bound = obj_y + obj_size_h - height;
    angle = angle + 180;

    O_move(obj_x, obj_y - bound, target);

    if (angle >= 360) {
      angle = angle % 360;
    }
    // $("input[id=Object_direction]").val(angle);
    con_angle_change(angle, target);
  } else if (obj_x < 0) {
    //左辺が左枠を超えた場合
    // console.log("左辺が左枠を超えた場合");
    var bound = 0 - obj_x;//-64
    angle += 180;

    O_move(obj_x + bound, obj_y, target)

    if (angle >= 360) {
      angle = angle % 360;
    }
    // $("input[id=Object_direction]").val(angle);
    con_angle_change(angle, target);
  } else if (obj_y < 0) {
    //上辺が上枠を超えた場合
    // console.log("上辺が上枠を超えた場合");
    var bound = 0 - obj_y;
    angle += 180;

    O_move(obj_x, obj_y + bound, target);

    if (angle >= 360) {
      angle = angle % 360;
    }
    // $("input[id=Object_direction]").val(angle);
    con_angle_change(angle, target);
  }

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトをターゲットの値で更新
  }
}

function Semi_get_x_coordinates(dropdown_object, dropdown_select_xy) {
  var x = parseInt($("div[id=" + object_match_id[dropdown_object] + "]").css("left"));
  var y = parseInt($("div[id=" + object_match_id[dropdown_object] + "]").css("top"));

  if (dropdown_select_xy == "select_x") {
    // console.log("X="+x);
    return x;
  } else {
    // console.log("Y="+y);
    return y;
  }
}

function get_turn(dropdown_object) {
  return parseInt(getRotationDegrees($("div[id=" + object_match_id[dropdown_object] + "]")));
}

function Semi_change_size(dropdown_object, value_input) {
  let target = object_match_id[dropdown_object]

  size_dis_change(value_input,target);

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトをターゲットの値で更新
  }
}

function Semi_show(dropdown_object, dropdown_set_show) {
  let target = object_match_id[dropdown_object];

  if (dropdown_set_show == "show") {
    con_visibility_on(target);
  } else {
    con_visibility_off(target);
  }

  if (focus_num == target) {
    all_display(target);//画面に表示するオブジェクトをターゲットの値で更新
  }
}

function Semi_get_size(dropdown_object) {
  return parseInt($("div[id=" + object_match_id[dropdown_object] + "]").css("width"));
}


function Semi_get_background(dropdown_object) {
  return back_img_name[parseInt(dropdown_object)];
}

function Semi_print(text) {
  var printbox = document.getElementById("printbox");
  console.log(printbox);
  printbox.value += text + "\n";
}

function Semi_con_back_change(dropdown_object) {
  con_back_change(dropdown_object)
}

function Semi_wnidow_alert(value) {
  window.alert(value);
}

function Semi_wait_for_input() {
  wait_for_input_ans = window.prompt("入力してください");
}

function Semi_input_info() {
  var return_val = wait_for_input_ans;
  return return_val
}