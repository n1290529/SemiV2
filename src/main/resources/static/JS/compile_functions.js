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
/**
 * コンパイル用関数。向いているほうにn動かす
 * @param {string} dropdown_object 
 * @param {number} value_input 
 */
function Semi_move(dropdown_object, value_input) {

  let target = getObject(dropdown_object);

  var x = target.left;
  var y = target.top;

  value_input = parseInt(value_input);

  var ang = target.angle;

  //px,pyは現在座標x,yに対して加算,減算する値
  if (ang == 90 || ang == 180 || ang == 270) {
    ang = ang * (Math.PI / 180);
    var px = parseInt((Math.cos(ang) | 0) * value_input);
    var py = parseInt((Math.sin(ang) | 0) * value_input);


    target.set({ left: x + px, top: y + py });

  } else {
    ang = ang * (Math.PI / 180);
    var px = parseInt(Math.cos(ang) * value_input);
    var py = parseInt(Math.sin(ang) * value_input);

    target.set({ left: x + px, top: y + py });
  }

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_rotation(dropdown_object, value_input, dropdown_select_lr) {
  let target = getObject(dropdown_object);

  value_input = parseInt(value_input);

  if (dropdown_select_lr == "select_l") {
    value_input *= -1;//select_lの場合、角度を左方向にする。
  }

  target.rotate(Number(value_input) + target.angle);

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_xy_both_coordinate(dropdown_object, value_input, value_input2) {
  let target = getObject(dropdown_object);

  value_input = parseInt(value_input);
  value_input2 = parseInt(value_input2);

  target.set({ left: value_input, top: value_input2 });

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_x_coordinate(dropdown_object, dropdown_select_xy, value_input) {
  let target = getObject(dropdown_object);

  var x = target.left;
  var y = target.top;

  if (dropdown_select_xy == "select_x") {
    target.set({ left: value_input });
  } else {
    target.set({ top: value_input });
  }

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_turn(dropdown_object, value_input) {
  let target = getObject(dropdown_object);

  target.rotate(Number(value_input));

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_rebound(dropdown_object) {
  let target = getObject(dropdown_object);
  console.log(target.width);
  console.log(target.height);

  //ターゲットの四辺
  var oCoords = target.oCoords;
  var tl = new fabric.Point(oCoords.tl.x, oCoords.tl.y);
  var tr = new fabric.Point(oCoords.tr.x, oCoords.tr.y);
  var bl = new fabric.Point(oCoords.bl.x, oCoords.bl.y);
  var br = new fabric.Point(oCoords.br.x, oCoords.br.y);

  console.log(oCoords);
  //壁の中かにターゲットが存在するか？存在しない場合ターゲットtl,tr,bl,brのx,yが超えているか？
  var pointTL = new fabric.Point(0, 0);
  var pointBR = new fabric.Point(600, 400);
  if (!target.isContainedWithinRect(pointTL, pointBR, true, true)) {
    console.log("壁を超えた");

    while (true) {
      //左上が壁を越えているか？
      if (tl.x < 0 || tl.x > 600) {
        console.log("!tl.x > 0 && tl.x < 600");
        target.rotate(Number(180 - target.angle));
        break;
      } else if (tl.y < 0 || tl.y > 400) {
        console.log("!tl.y > 0 && tl.y < 400");
        target.rotate(Number(360 - target.angle));
        break;
      }

      //右上が壁を超えているか？
      if (tr.x < 0 || tr.x > 600) {
        console.log("!tr.x > 0 && tr.x < 600");
        target.rotate(Number(180 - target.angle));
        break;
      }
      else if (tr.y < 0 || tr.y > 400) {
        console.log("!tr.y > 0 && tr.y < 400");
        target.rotate(Number(360 - target.angle));
        break;
      }

      //左下が壁を超えているか？
      if (bl.x < 0 || bl.x > 600) {
        console.log("!bl.x > 0 && bl.x < 600");
        target.rotate(Number(180 - target.angle));
        break;
      }
      else if (bl.y < 0 || bl.y > 400) {
        console.log("!bl.y > 0 && bl.y < 400");
        target.rotate(Number(360 - target.angle));
        break;
      }

      //右下が壁を超えているか？
      if (br.x < 0 || br.x > 600) {
        console.log("!br.x > 0 && br.x < 600");
        target.rotate(Number(180 - target.angle));
        break;
      }
      else if (br.y < 0 || br.y > 400) {
        console.log("br.y < 0 || br.y > 400");
        target.rotate(Number(360 - target.angle));
        break;
      }

      break;
    }
  }


  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}


function Semi_get_x_coordinates(dropdown_object, dropdown_select_xy) {

  if (dropdown_select_xy == "select_x") {
    // console.log("X="+x);
    return parseInt(getObject(dropdown_object).left);
  } else {
    // console.log("Y="+y);
    return parseInt(getObject(dropdown_object).top);
  }
}

function get_turn(dropdown_object) {
  return parseInt(getObject(dropdown_object).angle);
}

function Semi_change_size(dropdown_object, value_input) {
  let target = getObject(dropdown_object);

  target.scaleY = Number(value_input) / 100;
  target.scaleX = Number(value_input) / 100;

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_get_x_coordinates(dropdown_object, dropdown_select_xy) {

  if (dropdown_select_xy == "select_x") {
    // console.log("X="+x);
    return parseInt(getObject(dropdown_object).left);
  } else {
    // console.log("Y="+y);
    return parseInt(getObject(dropdown_object).top);
  }
}

function get_turn(dropdown_object) {
  return parseInt(getObject(dropdown_object).angle);
}

function Semi_change_size(dropdown_object, dropdown_select_xy, value_input) {
  let target = getObject(dropdown_object);

  if (dropdown_select_xy == "xy") {
    target.scaleX = Number(value_input) / 100;
    target.scaleY = Number(value_input) / 100;
  } else if (dropdown_select_xy == "x") {
    target.scaleX = Number(value_input) / 100;
  } else {
    target.scaleY = Number(value_input) / 100;
  }

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_show(dropdown_object, dropdown_set_show) {
  let target = getObject(dropdown_object);

  if (dropdown_set_show == "show") {
    target.visible = true;
    canvas.discardActiveObject();
    canvas.renderAll();
  } else {
    target.visible = false;
    canvas.discardActiveObject();
    canvas.renderAll();
  }

  if (document.getElementsByClassName("is-select")[0].id == dropdown_object) {
    setObjectData(dropdown_object);
  }
  canvas.renderAll();
}

function Semi_get_size(dropdown_object,dropdown_select_xy) {
  let target = getObject(dropdown_object);

  if (dropdown_select_xy == "x") {
    return Math.round(target.scaleX * 100000) / 100000 * 100;
  } else {
    return Math.round(target.scaleY * 100000) / 100000 * 100;
  }

  
}


function Semi_get_background(dropdown_object) {
  return "背景" + dropdown_object;
}

function Semi_print(text) {
  var printbox = document.getElementById("printbox");
  printbox.value += text + "\n";
}

function Semi_con_back_change(dropdown_object) {
  changeBackgroundImg(parseInt(dropdown_object));
  document.getElementsByClassName("is-select-bg")[0].classList.remove("is-select-bg");
  document.getElementById("back" + dropdown_object).classList.add("is-select-bg");
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