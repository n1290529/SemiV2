var onchange_type ="";
// var checkBlocks =[];
// var checkBlocks_logical=[];
// var checkBlocks_bit=[];

var checkBlocks_switch=[];
var drag_flg = 0;


Blockly.Blocks['ENZAN'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("ENZAN");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ENZAN_item'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ENZAN_item");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },onchange: function(event){
    console.log("イベントタイプ"+event.type)
    onchange_type = event.type;
    if("delete" === event.type) {
      // do something
      // deleteBlock_();
    }

    if("drag"===event.type){
      // drag_flg=1;
    }
    if("selected" === event.type) {
      // do something
      const ENZAN_items = this.workspace.getBlocksByType("ENZAN_item",false);
      console.log("ENZAN_items.length <= 2");
      if(ENZAN_items.length <= 2){
        this.setMovable(false);
      }else{
        this.setMovable(true);
      }
    }

  }
};
Blockly.Blocks['ENZAN_logical'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("ENZAN_logical");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ENZAN_item_logical'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ENZAN_item_logical");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },onchange: function(event){
    console.log("イベントタイプ"+event.type)
    onchange_type = event.type;
    if("delete" === event.type) {
      // do something
      // deleteBlock_logical();
    }

    if("drag"===event.type){
      // drag_flg=1;
    }
    if("selected" === event.type) {
      // do something
      const ENZAN_items = this.workspace.getBlocksByType("ENZAN_item_logical",false);
      console.log("ENZAN_item_logical.length <= 2");
      if(ENZAN_items.length <= 2){
        this.setMovable(false);
      }else{
        this.setMovable(true);
      }
    }
  }
};

Blockly.Blocks['ENZAN_bit'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("ENZAN_bit");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ENZAN_item_bit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ENZAN_item_bit");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },onchange: function(event){
    console.log("イベントタイプ"+event.type)
    onchange_type = event.type;
    if("delete" === event.type) {
      // do something
      // deleteBlock_bit();
    }

    if("drag"===event.type){
      // drag_flg=1;
    }
    if("selected" === event.type) {
      // do something
      const ENZAN_items = this.workspace.getBlocksByType("ENZAN_item_bit",false);
      console.log("ENZAN_item_bit.length <= 2");
      if(ENZAN_items.length <= 2){
        this.setMovable(false);
      }else{
        this.setMovable(true);
      }
    }
  }
};

Blockly.Blocks['ENZAN_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("case");
    this.setNextStatement(true, ["ENZAN_item_switch", "ENZAN_def_switch"]);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['ENZAN_item_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ENZAN_switch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },onchange: function(event){
    console.log("イベントタイプ"+event.type)
    onchange_type = event.type;
    if("delete" === event.type) {
      // do something
      deleteBlock_switch();
    }
    if("drag"===event.type){
      drag_flg=1;
    }
  }
};
Blockly.Blocks['ENZAN_def_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("default");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_mutator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IF");
    this.setNextStatement(true, ["else if_mutator", "else_mutator"]);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['else_if_mutator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ELSE IF");
    this.setPreviousStatement(true, ["else if_mutator", "else_mutator"]);
    this.setNextStatement(true, ["if_mutator", "else_mutator"]);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['else_mutator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ELSE");
    this.setPreviousStatement(true, ["if_mutator", "else if_mutator"]);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//----------ミューテーター用ここまで
//-----特殊
Blockly.Blocks['obj_dropbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(
          this.generateOptions), 'object')
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },generateOptions: function() {
    var options = [];
    const keys = Object.keys(object_match_id);//object_match_id === 連想配列
    for(var i = 0; i < keys.length; i++) {
      // options.push([keys[i], "object"+i]);
      options.push([keys[i], keys[i]]);
    }
    return options;
  }
};

Blockly.Blocks['back_dropbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(
          this.generateOptions), 'background_object')
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },generateOptions: function() {
    var options = [];
    
    for(var i = 0; i < back_cnt; i++) {
      options.push(["背景"+i, "background_object"+i]);
    }
    return options;
  }
};

Blockly.Blocks['sound_dropbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(
          this.generateOptions), 'sound_object')
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },generateOptions: function() {
    var options = [];
    
    for(var i = 0; i < back_cnt; i++) {
      options.push(["音"+i, "sound_object"+i]);
    }
    return options;
  }
};

//-----動き
Blockly.Blocks['n_move'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendValueInput("input")
      .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['n_rotation'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度")
        .appendField(new Blockly.FieldDropdown([["右","select_r"], ["左","select_l"]]), "select_lr")
        .appendField("に回転");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['xy_both_coordinate'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField("の")
        .appendField("X座標を");
    this.appendValueInput("input2")
        .setCheck("Number")
        .appendField("、Y座標を");
    this.appendDummyInput()
        .appendField("に設定する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['x_coordinate'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["X","select_x"], ["Y","select_y"]]), "select_xy")
        .appendField("座標を");
    this.appendDummyInput()
        .appendField("に変更する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['n_turn'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['n_rebound'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendDummyInput()
        .appendField("が壁にぶつかったら跳ね返る");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_x_coordinates'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["X","select_x"], ["Y","select_y"]]), "select_xy")
        .appendField("座標を取得する");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_turn'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendDummyInput()
        .appendField("の角度を取得");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#e94e4e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//-----ここまで
//-----見た目
Blockly.Blocks['text_display'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(["Boolean", "Number", "String"]);
    this.appendDummyInput()
        .appendField("をふきだしとして表示する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_for_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("入力待機");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['input_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("入力情報");
    this.setOutput(true, "String");
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change_costume'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"]);
    this.appendDummyInput()
        .appendField("のコスチュームを")
        .appendField(new Blockly.FieldDropdown([["コスチューム1","costume"]]), "select_costume")
        .appendField("に変更する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change_background'] = {
  init: function() {
    this.appendValueInput("input_back_dropbox")
        .setCheck(["String"])
        .appendField("背景を")
    this.appendDummyInput()
        .appendField("に変更");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change_size'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField("のサイズを");
    this.appendDummyInput()
        .appendField("に変更する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change_effect'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["効果","effect"]]), "set_effect")
        .appendField("を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remove_image_effect'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["効果","effect"]]), "set_effect")
        .appendField("をなくす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['show'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("を")
        .appendField(new Blockly.FieldDropdown([["表示する","show"], ["隠す","hide"]]), "set_show");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_size'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("の現在の大きさを取得する");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_effect'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("に対する現在の効果を取得");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_image_name'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("の画像名を取得する")
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_background'] = {
  init: function() {
    this.appendValueInput("input_back_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("の背景名を取得する")
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_costume'] = {
  init: function() {
    this.appendValueInput("input_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("の現在のコスチュームを取得する");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#e9724e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['o_print'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null)
        .appendField("print");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e9724e");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//ここまで
//-----音
Blockly.Blocks['play_sound'] = {
  init: function() {
    this.appendValueInput("input_sound_dropbox")
        .setCheck(["String"])
    this.appendDummyInput()
        .appendField("を")
        .appendField(new Blockly.FieldDropdown([["鳴らす","play"], ["止める","stop"]]), "select_ps");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F79428");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change_sound_volume'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["音","object0"]]), "object")
        .appendField("の大きさを");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F79428");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change_sound_effect'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["音1","sound"]]), "select_sound")
        .appendField("に対する")
        .appendField(new Blockly.FieldDropdown([["効果1","se"]]), "set_se")
        .appendField("を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F79428");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remove_sound_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["音1","sound"]]), "select_sound")
        .appendField("の効果を全て初期値にする")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F79428");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_sound_volume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["音1","sound"]]), "select_sound")
        .appendField("の音量を取得");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#F79428");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_sound_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["音1","sound"]]), "select_sound")
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["効果1","se"]]), "set_se")
        .appendField("を取得");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#F79428");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_sound_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("現在流れている音を取得");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#F79428");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//ここまで
//----制御
Blockly.Blocks['comparison_operator_equal'] = {
  init: function() {
    this.appendValueInput("input_left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["==","equal"],["!=","not_eq"]]), "select_op");
    this.appendValueInput("input_right")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparison_operator'] = {
  init: function() {
    this.appendValueInput("input_left")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<","less"], [">","greater"], ["≦","less_eq"], ["≧","greater_eq"]]), "select_op");
    this.appendValueInput("input_right")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['logical_operator'] = {
  init: function() {
    this.appendValueInput("ADD0")
        .setCheck("Boolean");
    this.appendValueInput("ADD1")
        .appendField(new Blockly.FieldDropdown([["かつ","and"], ["または","or"], ["どちらかが正しい","xor"]]), "select_op1")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#4169e1");
    this.itemCount_=2;
 this.setTooltip("");
 this.setHelpUrl("");
 this.setMutator(new Blockly.Mutator(['ENZAN_item_logical']));//ダイアログ内に追加するblockの名前
},mutationToDom: function() {
  console.log("mutationToDom")
  var container = document.createElement('mutation');
  container.setAttribute('items', this.itemCount_);
  return container;

},domToMutation: function(xmlElement) {
  // console.log("domToMutation");
  this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
  this.updateShape_();
},
/**
 * Returns the state of this block as a JSON serializable object.
 * @return {{itemCount: number}} The state of this block, ie the item count.
 */
saveExtraState: function() {
  // console.log("saveExtraState");
  // delete_flg=0;
  return {
    'itemCount': this.itemCount_,
  };
},
/**
 * Applies the given state to this block.
 * @param {*} state The state to apply to this block, ie the item count.
 */
loadExtraState: function(state) {
  // console.log("loadExtraState");
  this.itemCount_ = state['itemCount'];
  this.updateShape_();
},decompose: function(workspace) {
  // console.log("decompose");
  const containerBlock = workspace.newBlock('ENZAN_logical');
  containerBlock.initSvg();
  let connection = containerBlock.getInput('NAME').connection;
  for (let i = 0; i < this.itemCount_; i++) {
    const itemBlock = workspace.newBlock('ENZAN_item_logical');
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;

},
compose: function(containerBlock) {
  console.log("compose");
  // var flg = 0; 
  // if(drag_flg === 1){
  //   console.log("compose    OK" );
  //   drag_flg = 0;
  //   flg = 1;
  // }
  let itemBlock = containerBlock.getInputTargetBlock('NAME');
  // Count number of inputs.
  //入力数をカウントする
  const connections = [];
  while (itemBlock && !itemBlock.isInsertionMarker()) {//挿入可能かどうかのチェック？
    connections.push(itemBlock.valueConnection_);
    itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
  }

  // Disconnect any children that don't belong.
  //不要な子機を切り離す。属してない子要素を切り離す。
  for (let i = 0; i < this.itemCount_; i++) {
    const connection = this.getInput("ADD"+i).connection.targetConnection;
    if (connection && connections.indexOf(connection) === -1) {
      connection.disconnect();
      // checkBlocks_logical.push(connection)
    }
  }
  this.itemCount_ = connections.length;
  this.updateShape_();

  // Reconnect any child blocks.
  for (let i = 0; i < this.itemCount_; i++) {
    Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
  }
  // for (let i = 0; i < this.itemCount_; i++) {
  //   var conn = this.getInput("ADD"+i).connection;
  //   // console.log(this.getInput("ADD"+i))
  //   if(!conn.isConnected()&&flg==1){
  //     // console.log("ADD " + i +" OK");
  //     var childBlock = workspace.newBlock('o_true');
  //     var childConnection = childBlock.outputConnection;
  //     childBlock.setShadow(true);
  //     childBlock.initSvg();
  //     childBlock.render();
  //     conn.connect(childConnection);//もしくはinput.connection.connect(childConnection);
  //    }
  //   // console.log("ADD"+i+"="+conn.isConnected()+i);
  // }

},saveConnections: function(containerBlock) {
  // console.log("saveConnections");
  let itemBlock = containerBlock.getInputTargetBlock('NAME');
  let i = 0;
  while (itemBlock) {
    const input = this.getInput('ADD' + i);
    itemBlock.valueConnection_ = input && input.connection.targetConnection;
    itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    i++;
  }
},updateShape_: function() {
  // console.log("updateShape_");
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  // Add new inputs.
  for (let i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      const input = this.appendValueInput('ADD' + i);
      if(i!=0){
        input.appendField(new Blockly.FieldDropdown([["かつ","and"], ["または","or"], ["どちらかが正しい","xor"]]), "select_op"+i);
      }
      
    }
  }
  // Remove deleted inputs.
  for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
    this.removeInput('ADD' + i);
  }
}
};

Blockly.Blocks['for'] = {
  init: function() {
    this.appendValueInput("input_index")
        .setCheck("Number")
        .appendField("for ")
        .appendField(new Blockly.FieldVariable("i"), "i_substitution")
        .appendField("=");
    this.appendValueInput("input_op")
        .setCheck("Boolean")
        .appendField(";");
    this.appendValueInput("input_fluctuation")
        .setCheck(null)
        .appendField(";");
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_n_seconds'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("秒待つ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4169e1");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Boolean")
        .appendField("while");
    this.appendDummyInput();
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if'] = {
  elseifCount_: 0,
  elseCount_: 0,
  init: function() {
    this.appendValueInput("if0")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("if_do0")
        .setCheck(null);
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    var tmpaaa = new Blockly.Mutator(['else_if_mutator',"else_mutator"]);
    this.setMutator(tmpaaa);
    console.log(tmpaaa.iconClick_);
  },mutationToDom: function(){
    if(this.elseifCount_ == 0 && this.elseCount_ == 0){
      return null;
    }
    var container = document.createElement('mutation');
    if(this.elseifCount_ != 0){
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_ != 0) {
      container.setAttribute('else', 1);
    }
    return container;
  },domToMutation: function(xmlElement){
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.rebuildShape_();
  },saveExtraState: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    const state = Object.create(null);
    if (this.elseifCount_) {
      state['elseIfCount'] = this.elseifCount_;
    }
    if (this.elseCount_) {
      state['hasElse'] = true;
    }
    return state;
  },loadExtraState: function(state) {
    this.elseifCount_ = state['elseIfCount'] || 0;
    this.elseCount_ = state['hasElse'] ? 1 : 0;
    this.updateShape_();
  },decompose: function(workspace){
    const containerBlock = workspace.newBlock('if_mutator');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 1; i <= this.elseifCount_; i++) {
      const elseifBlock = workspace.newBlock('else_if_mutator');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_ != 0) {
      const elseBlock = workspace.newBlock('else_mutator');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },compose: function(containerBlock){
    let clauseBlock = containerBlock.nextConnection.targetBlock();
    // //テストコード
    // for (let i = 0; i < this.elseifCount_; i++) {
    //   let conn = this.getInput("if"+i).connection;
    //   console.log("if"+(i + 1)+":"+conn.targetConnection);
    // }
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    const valueConnections = [null];
    const statementConnections = [null];
    let elseStatementConnection = null;
    while (clauseBlock && !clauseBlock.isInsertionMarker()) {
      switch (clauseBlock.type) {
        case 'else_if_mutator':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'else_mutator':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(
        valueConnections, statementConnections, elseStatementConnection);
    //新規シャドウブロックの生成、接続
    for (let i = 0; i < this.elseifCount_; i++) {
      let conn = this.getInput("if"+(i + 1)).connection;
      console.log("if"+(i + 1)+":"+conn.targetConnection);
      if(!conn.isConnected()){
        let childBlock = workspace.newBlock('o_true');
        childBlock.setShadow(true);
        let childConnection = childBlock.outputConnection;
        childBlock.initSvg();
        childBlock.render();
        conn.connect(childConnection);//もしくはinput.connection.connect(childConnection);
       }
    }
  },saveConnections: function(containerBlock) {
    let clauseBlock = containerBlock.nextConnection.targetBlock();
    let i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'else_if_mutator': {
          const inputIf = this.getInput('if' + i);
          const inputDo = this.getInput('if_do' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        }
        case 'else_mutator': {
          const inputDo = this.getInput('else');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        }
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },rebuildShape_: function() {
    const valueConnections = [null];
    const statementConnections = [null];
    let elseStatementConnection = null;

    if (this.getInput('else')) {
      elseStatementConnection =
          this.getInput('else').connection.targetConnection;
    }
    for (let i = 1; this.getInput('if' + i); i++) {
      const inputIf = this.getInput('if' + i);
      const inputDo = this.getInput('if_do' + i);
      valueConnections.push(inputIf.connection.targetConnection);
      statementConnections.push(inputDo.connection.targetConnection);
    }
    this.updateShape_();
    this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);

  },updateShape_: function(){
    // Delete everything.
    // if (this.getInput('else')) {
    //   this.removeInput('else');
    // }
    // for (let i = 1; this.getInput('if' + i); i++) {
    //   this.removeInput('if' + i);
    //   this.removeInput('if_do' + i);
    // }
    // // Rebuild block.
    // for (let i = 1; i <= this.elseifCount_; i++) {
    //   this.appendValueInput('if' + i).setCheck('Boolean').appendField("else if");
    //   this.appendStatementInput('if_do' + i)
    // }
    // if (this.elseCount_) {
    //   this.appendStatementInput('else').appendField("else");
    // }

    // Add new inputs.
    for (let i = 1; i <= this.elseifCount_; i++) {
      if (!this.getInput('if' + i)) {
        if(this.elseCount_ && this.getInput('else')){
          this.removeInput('EMPTY');
          this.removeInput('else');
        }
        this.appendValueInput('if' + i).setCheck('Boolean').appendField("else if");
        this.appendStatementInput('if_do' + i);
      }
    }
    if (this.elseCount_ && !this.getInput('else')) {
      this.appendDummyInput('EMPTY').appendField("else");
      this.appendStatementInput('else');
    }

     // Remove deleted inputs.
    if (!this.elseCount_ && this.getInput('else')) {
      this.removeInput('EMPTY');
      this.removeInput('else');
    }
    for (let i = this.elseifCount_+1; this.getInput('if' + i); i++) {
      this.removeInput('if' + i);
      this.removeInput('if_do' + i);
    }
  },reconnectChildBlocks_: function(
    valueConnections, statementConnections, elseStatementConnection) {
    for (let i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'if' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'if_do' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'else');
  }
};

Blockly.Blocks['switch'] = {
  elseifCount_: 0,
  elseCount_: 0,
  init: function() {
    this.appendValueInput("input")//引数
          .setCheck("Number")
          .appendField("switch");
      this.appendValueInput("ADD0")//case
          .setCheck("Number")
          .appendField("case");
      this.appendStatementInput("DO0")//do
          .appendField("do");
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4169e1");
    this.setTooltip("");
    this.setHelpUrl("");
    this.setMutator(new Blockly.Mutator(['ENZAN_item_switch',"ENZAN_def_switch"]));//ダイアログ内に追加するblockの名前
  },mutationToDom: function(){
    if(this.elseifCount_ == 0 && this.elseCount_ == 0){
      return null;
    }
    var container = document.createElement('mutation');
    if(this.elseifCount_ != 0){
      container.setAttribute('case', this.elseifCount_);
    }
    if (this.elseCount_ != 0) {
      container.setAttribute('def', 1);
    }
    return container;
  },domToMutation: function(xmlElement){
    this.elseifCount_ = parseInt(xmlElement.getAttribute('case'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('def'), 10) || 0;
    this.rebuildShape_();
  },saveExtraState: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    const state = Object.create(null);
    if (this.elseifCount_) {
      state['caseCount'] = this.elseifCount_;
    }
    if (this.elseCount_) {
      state['defElse'] = true;
    }
    delete_flg=0;
    return state;
  },loadExtraState: function(state) {
    this.elseifCount_ = state['caseCount'] || 0;
    this.elseCount_ = state['defElse'] ? 1 : 0;
    this.updateShape_();
  },decompose: function(workspace){
    const containerBlock = workspace.newBlock('ENZAN_switch');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 1; i <= this.elseifCount_; i++) {
      const elseifBlock = workspace.newBlock('ENZAN_item_switch');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_ != 0) {
      const elseBlock = workspace.newBlock('ENZAN_def_switch');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },compose: function(containerBlock){
    // console.log("compose1680");
    for(var i=0;i<this.inputList.length;i++){
      // console.log(getInput("ADD"+i))
    }
    var flg = 0; 
    if(drag_flg === 1){
      console.log("compose    OK" );
      drag_flg = 0;
      flg = 1;
    }
    
    let itemBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    //入力数をカウントする
    const connections = [];
    while (itemBlock && !itemBlock.isInsertionMarker()) {//挿入可能かどうかのチェック？
      connections.push(itemBlock.valueConnection_);
      // console.log(itemBlock);
      itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
      // console.log(itemBlock);
    }

    // Disconnect any children that don't belong.
    //不要な子機を切り離す。属してない子要素を切り離す。
    for (let i = 0; i < this.itemBlock; i++) {

      if(this.inputList[this.inputList.length-1].name=="ONDEFAULT"){
        break;
      }
      const connection = this.getInput("ADD"+(i+1)).connection.targetConnection;
      console.log("banana"+i);
      if (connection && connections.indexOf(connection) === -1&&flg==1) {
        connection.disconnect();
        checkBlocks.push(connection)
      }
    }
    this.itemBlock = connections.length;
    // this.updateShape_();

    // Reconnect any child blocks.
    // for (let i = 0; i < this.itemBlock; i++) {
    //   console.log("火もまた涼し");
    //   Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    // }
    // for (let i = 0; i < this.elseifCount_; i++) {
    //   let conn = this.getInput("ADD"+(i + 1)).connection;
    //   console.log("ADD"+(i + 1)+":"+conn.targetConnection);
    //   if(!conn.isConnected()){
    //     let childBlock = workspace.newBlock('math_number');
    //     childBlock.setShadow(true);
    //     let childConnection = childBlock.outputConnection;
    //     childBlock.initSvg();
    //     childBlock.render();
    //     conn.connect(childConnection);//もしくはinput.connection.connect(childConnection);
    //    }
    // }
    
    
    let clauseBlock = containerBlock.nextConnection.targetBlock();
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    const valueConnections = [null];
    const statementConnections = [null];
    let elseStatementConnection = null;
    while (clauseBlock && !clauseBlock.isInsertionMarker()) {
      switch (clauseBlock.type) {
        case 'ENZAN_item_switch':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'ENZAN_def_switch':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(
        valueConnections, statementConnections, elseStatementConnection);
    // 新規シャドウブロックの生成、接続
    // for (let i = 0; i < this.elseifCount_; i++) {
    //   let conn = this.getInput("ADD"+(i + 1)).connection;
    //   // console.log(this.getInput("ADD"+(i + 1)));
    //   if(conn.isConnected()==false){
    //     let childBlock = workspace.newBlock('o_num');
    //     childBlock.setShadow(true);
    //     let childConnection = childBlock.outputConnection;
    //     childBlock.initSvg();
    //     childBlock.render();
    //     conn.connect(childConnection);//もしくはinput.connection.connect(childConnection);
    //    }
    // }
  },saveConnections: function(containerBlock) {
    let clauseBlock = containerBlock.nextConnection.targetBlock();
    let i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'ENZAN_item_switch': {
          const inputIf = this.getInput('ADD' + i);
          const inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        }
        case 'ENZAN_def_switch': {
          const inputDo = this.getInput('ONDEFAULT');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        }
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },rebuildShape_: function() {
    console.log("hello")
    const valueConnections = [null];
    const statementConnections = [null];
    let elseStatementConnection = null;

    if (this.getInput('ONDEFAULT')) {
      elseStatementConnection =
          this.getInput('ONDEFAULT').connection.targetConnection;
    }
    for (let i = 1; this.getInput('ADD' + i); i++) {
      const inputIf = this.getInput('ADD' + i);
      const inputDo = this.getInput('DO' + i);
      valueConnections.push(inputIf.connection.targetConnection);
      statementConnections.push(inputDo.connection.targetConnection);
    }
    this.updateShape_();
    this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);

  },updateShape_: function(){
    // Delete everything.
    // if (this.getInput('else')) {
    //   this.removeInput('else');
    // }
    // for (let i = 1; this.getInput('if' + i); i++) {
    //   this.removeInput('if' + i);
    //   this.removeInput('if_do' + i);
    // }
    // // Rebuild block.
    // for (let i = 1; i <= this.elseifCount_; i++) {
    //   this.appendValueInput('if' + i).setCheck('Boolean').appendField("else if");
    //   this.appendStatementInput('if_do' + i)
    // }
    // if (this.elseCount_) {
    //   this.appendStatementInput('else').appendField("else");
    // }

    // Add new inputs.
    for (let i = 1; i <= this.elseifCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        if(this.elseCount_ && this.getInput('ONDEFAULT')){
          this.removeInput('EMPTY');
          this.removeInput('ONDEFAULT');
        }
        this.appendValueInput('ADD' + i).setCheck('Number').appendField("case");
        this.appendStatementInput('DO' + i).appendField("do");
      }
    }
    if (this.elseCount_ && !this.getInput('ONDEFAULT')) {
      this.appendDummyInput('EMPTY').appendField("default");
      this.appendStatementInput('ONDEFAULT');
    }

     // Remove deleted inputs.
    if (!this.elseCount_ && this.getInput('ONDEFAULT')) {
      this.removeInput('EMPTY');
      this.removeInput('ONDEFAULT');
    }
    for (let i = this.elseifCount_+1; this.getInput('ADD' + i); i++) {
      this.removeInput('ADD' + i);
      this.removeInput('DO' + i);
    }
  },reconnectChildBlocks_: function(
    valueConnections, statementConnections, elseStatementConnection) {
    for (let i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'ADD' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ONDEFAULT');
  }
};
var deleteBlock_switch=function(){
  for(let i = 0; i < checkBlocks_switch.length; i++){
    if(checkBlocks_switch[i].getSourceBlock().isShadow()&& !checkBlocks_switch[i].isConnected()){
      checkBlocks_switch[i].getSourceBlock().dispose();
    }
  }
  checkBlocks_switch = [];
}

Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['o_return'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null)
        .appendField("return");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour("#4169e1");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['o_true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("true");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['o_false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("false");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['o_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("null");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#4169e1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//ここまで
//-----調べる
Blockly.Blocks['get_mouse_xy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("マウスの")
        .appendField(new Blockly.FieldDropdown([["X","select_x"], ["Y","select_y"]]), "select_xy")
        .appendField("座標を取得");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['listen_and_wait'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("と聞いて待つ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_answer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("回答を取得");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_key_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("押されてるキーを取得");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_username'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ユーザー名を取得");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_date'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("日付を取得");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("時間を取得");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("タイマーを")
        .appendField(new Blockly.FieldDropdown([["動かす","move"], ["止める","stop"], ["リセットする","reset"]]), "select_ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("タイマーを取得");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#6881ee");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//ここまで
//-----演算
Blockly.Blocks['o_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['operator'] = {
  init: function() {
    this.itemCount_ = 2;
    this.appendValueInput("ADD0")
        .setCheck("Number");
    this.appendValueInput("ADD1")
        .appendField(new Blockly.FieldDropdown([["+","plus"], ["-","minus"], ["*","mul"], ["/","div"], ["%","rem"]]), "select_op1")
        .setCheck("Number");
    this.updateShape_();
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setMutator(new Blockly.Mutator(['ENZAN_item']));//ダイアログ内に追加するblockの名前
  },mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;

  },domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {{itemCount: number}} The state of this block, ie the item count.
   */
  saveExtraState: function() {
    return {
      'itemCount': this.itemCount_,
    };
  },
  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block, ie the item count.
   */
  loadExtraState: function(state) {
    this.itemCount_ = state['itemCount'];
    this.updateShape_();
  },decompose: function(workspace) {
    const containerBlock = workspace.newBlock('ENZAN');
    containerBlock.initSvg();
    let connection = containerBlock.getInput('NAME').connection;
    for (let i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('ENZAN_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    //ミュテーターワークスペース変更時イベント
    // workspace.addChangeListener(function(event) {
    //   console.log("M_workspace");
    // });
    return containerBlock;

  },compose: function(containerBlock) {
    console.log("compose::"  + onchange_type);
    var flg = 0; 
    if(drag_flg === 1){
      console.log("compose    OK" );

      drag_flg = 0;
      flg = 1;
    }
    else{
      console.log("compose    NO" );
    }

    let itemBlock = containerBlock.getInputTargetBlock('NAME');

    // Count number of inputs.
    //入力数をカウントする
    const connections = [];
    while (itemBlock && !itemBlock.isInsertionMarker()) {//挿入可能かどうかのチェック？
      connections.push(itemBlock.valueConnection_);
      itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }

    // Disconnect any children that don't belong.
    //不要な子機を切り離す。属してない子要素を切り離す。
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput("ADD"+i).connection.targetConnection;//本来なら"DO0"+i
      if (connection && connections.indexOf(connection) === -1 && flg == 1) {
        connection.disconnect();
        checkBlocks.push(connection);
      }
    }
    
    this.itemCount_ = connections.length;
    
    this.updateShape_();//ここのthisはelse ifブロックのこと

    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }

    // //新規シャドウブロックの生成、接続
    // for (let i = 0; i < this.itemCount_; i++) {
    //   let conn = this.getInput("ADD"+i).connection;
    //   if(!conn.isConnected() && flg == 1){
    //     // console.log("ADD " + i +" OK");
    //     let childBlock = workspace.newBlock('o_num');
    //     childBlock.setShadow(true);
    //     let childConnection = childBlock.outputConnection;
    //     childBlock.initSvg();
    //     childBlock.render();
    //     conn.connect(childConnection);//もしくはinput.connection.connect(childConnection);
    //    }
    // }
  },saveConnections: function(containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock('NAME');
    let i = 0;
    while (itemBlock) {
      const input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
      i++;
    }
  },updateShape_: function() {
    console.log("updateShape_");
    // if (this.itemCount_ && this.getInput('EMPTY')) {
    //   this.removeInput('EMPTY');
    // } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    //   this.appendDummyInput('EMPTY');
    //   // .appendField(this.newQuote_(true))
    //   // .appendField(this.newQuote_(false));
    // }
    // Add new inputs.
    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        const input = this.appendValueInput('ADD' + i);
        console.log("ADD"+i);
        if(i != 0){
          input.appendField(new Blockly.FieldDropdown(
            [
              ["+","plus"], ["-","minus"], ["*","mul"], ["/","div"], ["%","rem"]
            ]
          ), "select_op"+i);    
        }
      }
    }
    // Remove deleted inputs.
    for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
      this.removeInput('ADD' + i);
    }
  }
};

Blockly.Blocks['bit_operator'] = {
  init: function() {
    this.appendValueInput("ADD0")
        .setCheck("Number");
    this.appendValueInput("ADD1")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"], ["XOR","xor"],["NOT","not"],["左シフト","left_shift"],["右シフト","right_shift"]]), "select_op1")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
    this.itemCount_=2;
 this.setTooltip("");
 this.setHelpUrl("");
 this.setMutator(new Blockly.Mutator(['ENZAN_item_bit']));//ダイアログ内に追加するblockの名前
},mutationToDom: function() {
  console.log("mutationToDom")
  var container = document.createElement('mutation');
  container.setAttribute('items', this.itemCount_);
  return container;

},domToMutation: function(xmlElement) {
  // console.log("domToMutation");
  this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
  this.updateShape_();
},
/**
 * Returns the state of this block as a JSON serializable object.
 * @return {{itemCount: number}} The state of this block, ie the item count.
 */
saveExtraState: function() {
  // console.log("saveExtraState");
  // delete_flg=0;
  return {
    'itemCount': this.itemCount_,
  };
},
/**
 * Applies the given state to this block.
 * @param {*} state The state to apply to this block, ie the item count.
 */
loadExtraState: function(state) {
  // console.log("loadExtraState");
  this.itemCount_ = state['itemCount'];
  this.updateShape_();
},decompose: function(workspace) {
  // console.log("decompose");
  const containerBlock = workspace.newBlock('ENZAN_bit');
  containerBlock.initSvg();
  let connection = containerBlock.getInput('NAME').connection;
  for (let i = 0; i < this.itemCount_; i++) {
    const itemBlock = workspace.newBlock('ENZAN_item_bit');
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;

},
compose: function(containerBlock) {
  console.log("compose");
  // var flg = 0; 
  // if(drag_flg === 1){
  //   console.log("compose    OK" );
  //   drag_flg = 0;
  //   flg = 1;
  // }
  let itemBlock = containerBlock.getInputTargetBlock('NAME');
  // Count number of inputs.
  //入力数をカウントする
  const connections = [];
  while (itemBlock && !itemBlock.isInsertionMarker()) {//挿入可能かどうかのチェック？
    connections.push(itemBlock.valueConnection_);
    itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
  }

  // Disconnect any children that don't belong.
  //不要な子機を切り離す。属してない子要素を切り離す。
  for (let i = 0; i < this.itemCount_; i++) {
    const connection = this.getInput("ADD"+i).connection.targetConnection;
    if (connection && connections.indexOf(connection) === -1) {
      connection.disconnect();
      // checkBlocks_bit.push(connection)
    }
  }
  this.itemCount_ = connections.length;
  this.updateShape_();

  // Reconnect any child blocks.
  for (let i = 0; i < this.itemCount_; i++) {
    Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
  }
  // for (let i = 0; i < this.itemCount_; i++) {
  //   var conn = this.getInput("ADD"+i).connection;
  //   // console.log(this.getInput("ADD"+i))
  //   if(!conn.isConnected()&&flg==1){
  //     // console.log("ADD " + i +" OK");
  //     var childBlock = workspace.newBlock('math_number');
  //     var childConnection = childBlock.outputConnection;
  //     childBlock.setShadow(true);
  //     childBlock.initSvg();
  //     childBlock.render();
  //     conn.connect(childConnection);//もしくはinput.connection.connect(childConnection);
  //    }
  //   // console.log("ADD"+i+"="+conn.isConnected()+i);
  // }

},saveConnections: function(containerBlock) {
  // console.log("saveConnections");
  let itemBlock = containerBlock.getInputTargetBlock('NAME');
  let i = 0;
  while (itemBlock) {
    const input = this.getInput('ADD' + i);
    itemBlock.valueConnection_ = input && input.connection.targetConnection;
    itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    i++;
  }
},updateShape_: function() {
  // console.log("updateShape_");
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  // Add new inputs.
  for (let i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      const input = this.appendValueInput('ADD' + i);
      if(i!=0){
        input.appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"], ["XOR","xor"],["NOT","not"],["左シフト","left_shift"],["右シフト","right_shift"]]), "select_op"+i);
      }
      
    }
  }

  // Remove deleted inputs.
  for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
    this.removeInput('ADD' + i);
  }
}
};

// var deleteBlock_bit=function(){
//   for(let i = 0; i < checkBlocks_bit.length; i++){
//     if(checkBlocks_bit[i].getSourceBlock().isShadow()&& !checkBlocks_bit[i].isConnected()){
//       checkBlocks_bit[i].getSourceBlock().dispose();
//     }
//   }
//   checkBlocks_bit = [];
// }

Blockly.Blocks['assignment'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("item"), "input_var")
        .appendField("=");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_paz'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("item"), "input_var")
        .appendField("=");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['in_de_crement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "variable")
        .appendField(new Blockly.FieldDropdown([["++","increment"], ["--","decrement"]]), "select_inde");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['in_de_crement_paz'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "variable")
        .appendField(new Blockly.FieldDropdown([["++","increment"], ["--","decrement"]]), "select_inde");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['calculation_1'] = {
  init: function() {
    this.appendValueInput("V_NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["平方根","sqrt"], ["絶対値","abs"], ["log","log"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['calculation_2'] = {
  init: function() {
    this.appendValueInput("V_NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["sin","sin"], ["cos","cos"], ["tan","tan"]]), "NAME");
        //JSコンパイルの際に角度表記にする。
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['calculation_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["π","pai"], ["e","napiers"], ["∞","infinity"], ["-∞","nega_infinity"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//
Blockly.Blocks['calculation_4'] = {
  init: function() {
    this.appendValueInput("V_NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["四捨五入","round"], ["切り上げ","ceil"], ["切り捨て","floor"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['calculation_5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["累乗","pow"], ["傾斜角","atan2"]]), "NAME");
    this.appendValueInput("V_NAME0")
        .setCheck("Number")
        .appendField("n");
    this.appendValueInput("V_NAME1")
        .setCheck("Number")
        .appendField("m");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['calculation'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Array")
        .appendField(new Blockly.FieldDropdown([["sum","select_sum"], ["avg","select_avg"], ["max","select_max"], ["min","select_min"]]), "select_calc");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lenght'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(["String", "Array"]);
    this.appendDummyInput()
        .appendField("の長さ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['random'] = {
  init: function() {
    this.appendValueInput("input_min")
        .setCheck("Number");
    this.appendValueInput("input_max")
        .setCheck("Number")
        .appendField("から");
    this.appendDummyInput()
        .appendField("を範囲とした乱数");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['length'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(["String", "Array"]);
    this.appendDummyInput()
        .appendField("の長さ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#1e90ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//ここまで
//-----変数
//ここまで
//-----関数
//ここまで

//-----イベント
Blockly.Blocks['startup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 50, 50, { alt: "*", flipRtl: "FALSE" }))
        .appendField("起動時処理");
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour("#FFD700");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['key_event'] = {
  init: function() {
    this.appendDummyInput()
        // .appendField(new Blockly.FieldDropdown([["キー1","key"]]), "select_key")
        // .appendField("の")
        .appendField(new Blockly.FieldDropdown([["keydown","key_d"], ["keypress","key_p"], ["keyup","key_u"]]), "select_ev")
        .appendField("が発生したとき");
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour("#ffd700");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mouse_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["オブジェクト1","object1"]]), "object")
        .appendField("を")
        .appendField(new Blockly.FieldDropdown([["左クリック","click_l"], ["右クリック","click_r"], ["ダブルクリック","dblclick"], ["押したとき","mousedown"], ["離したとき","mouseup"]]), "slect_mouse_evnt")
        .appendField("したとき");
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour("#ffd700");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mouse_over'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("マウスが")
        .appendField(new Blockly.FieldDropdown([["オブジェクト1","object1"]]), "object")
        .appendField(new Blockly.FieldDropdown([["に触れたとき","touch"], ["を離れたとき","leave"], ["内でマウスが移動したとき","move"]]), "select");
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour("#ffd700");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_event'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("秒")
        .appendField(new Blockly.FieldDropdown([["後に処理を一回行う","tiomeout"], ["ごとに処理を繰り返す","interval"]]), "select_settinout");
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffd700");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clear_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["time1","object1"]]), "object")
        .appendField("から抜け出す");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffd700");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//ここまで
//-----配列
Blockly.Blocks['get_array'] = {
  init: function() {
    this.appendValueInput("input_array")
        .setCheck("Array")
        .appendField("配列");
    this.appendValueInput("input_index")
        .setCheck("Number")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#d89f2c");
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    if(!this.isInFlyout){
      if(this.getInput("input_array").connection.connect()){
        this.setEnabled(true);
      }else{
        this.setEnabled(false);
      }
    }
  }
};

Blockly.Blocks['set_array'] = {
  init: function() {
    this.appendValueInput("input_array")
        .setCheck("Array")
        .appendField("配列");
    this.appendValueInput("input_index")
        .setCheck("Number")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.appendValueInput("input_value")
        .setCheck(null)
        .appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d89f2c");
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    if(!this.isInFlyout){
      if(this.getInput("input_array").connection.connect()){
        this.setEnabled(true);
      }else{
        this.setEnabled(false);
      }
    }
  }
};

Blockly.Blocks['o_join'] = {
  init: function() {
    this.appendValueInput("input_array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の内容をすべて");
    this.appendValueInput("input_index")
        .setCheck(["Number", "String"]);
    this.appendDummyInput()
        .appendField("で区切り、結合する");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#d89f2c");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['list_slice'] = {
  init: function() {
    this.appendValueInput("input_str&ary")
        .setCheck(["String", "Array"]);
    this.appendValueInput("input_first")
        .setCheck("Number")
        .appendField("の");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("input_last")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("番目まで切り取る");
    this.setInputsInline(true);
    this.setOutput(true, ["String", "Array"]);
    this.setColour("#d89f2c");
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    if(!this.isInFlyout){
      if(this.getInput("input_str&ary").connection.connect()){
        this.setEnabled(true);
      }else{
        this.setEnabled(false);
      }
    }
  }
};

Blockly.Blocks['o_indexof'] = {
  init: function() {
    this.appendValueInput("input_str&ary")
        .setCheck(["String", "Array"]);
    this.appendValueInput("input_index")
        .setCheck(null)
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["最初","first"], ["最後","last"]]), "select_fl")
        .appendField("から");
    this.appendDummyInput()
        .appendField("が何番目にあるか検索する");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#d89f2c");
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    if(!this.isInFlyout){
      if(this.getInput("input_str&ary").connection.connect()){
        this.setEnabled(true);
      }else{
        this.setEnabled(false);
      }
    }
  }
};
//ここまで
//-----テキスト
Blockly.Blocks['text_charat'] = {
  init: function() {
    this.appendValueInput("input_str")
        .setCheck("String");
    this.appendValueInput("input_index")
        .setCheck("Number")
        .appendField("の");
    this.appendDummyInput()
        .appendField("番目の文字を取得");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#5BA58C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['o_split'] = {
  init: function() {
    this.appendValueInput("input_str")
        .setCheck("String");
    this.appendValueInput("input_index")
        .setCheck(["Number", "String"])
        .appendField("を");
    this.appendDummyInput()
        .appendField("基準に分割する");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#5BA58C");
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    if(!this.isInFlyout){
      if(this.getInput("input_str").connection.connect()){
        this.setEnabled(true);
      }else{
        this.setEnabled(false);
      }
    }
  }
};

//ここまで
//-----カラー
//ここまで

//以下テスト用
Blockly.Blocks['when_a_function_is_called'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["関数1","function"]]), "select_function")
        .appendField("が呼び出された時");
    this.appendStatementInput("input_code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['call_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["関数1","function"]]), "call_function")
        .appendField("を呼び出す。　引数(");
    this.appendValueInput("input_argument")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


// Blockly.Blocks['roots'] = {
//   init: function() {
//     this.appendValueInput("input_left")
//         .setCheck("Number");
//     this.appendValueInput("input_right")
//         .setCheck("Number")
//         .appendField("の");
//     this.appendDummyInput()
//         .appendField("乗根");
//     this.setInputsInline(true);
//     this.setOutput(true, "Number");
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['square_root'] = {
//   init: function() {
//     this.appendValueInput("input")
//         .setCheck("Number");
//     this.appendDummyInput()
//         .appendField("の平方根");
//     this.setInputsInline(true);
//     this.setOutput(true, "Number");
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['log'] = {
//   init: function() {
//     this.appendValueInput("input_left")
//         .setCheck("Number")
//         .appendField("log");
//     this.appendValueInput("input_right")
//         .setCheck("Number");
//     this.appendDummyInput();
//     this.setInputsInline(true);
//     this.setOutput(true, "Number");
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['rounding'] = {
//   init: function() {
//     this.appendValueInput("input")
//         .setCheck("Number");
//     this.appendDummyInput()
//         .appendField("を四捨五入する");
//     this.setInputsInline(true);
//     this.setOutput(true, "Number");
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['absolute_value'] = {
//   init: function() {
//     this.appendValueInput("input")
//         .setCheck("Number");
//     this.appendDummyInput()
//         .appendField("の絶対値");
//     this.setInputsInline(true);
//     this.setOutput(true, "number");
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['not_operator'] = {
//   init: function() {
//     this.appendValueInput("input")
//         .setCheck("Boolean")
//         .appendField("!");
//     this.appendDummyInput();
//     this.setInputsInline(true);
//     this.setOutput(true, "Boolean");
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };


// Blockly.Blocks['tst_mutator'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("tst");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

Blockly.Blocks['o_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("関数：")
        .appendField(new Blockly.FieldTextInput("関数1"), "func_name")
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setMutator(new Blockly.Mutator(['arg_item']));
  },mutationToDom: function() {
    console.log("mutationToDom");
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },domToMutation: function(xmlElement) {
    console.log("domToMutation");
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  saveExtraState: function() {
    console.log("saveExtraState");
    return {
      'itemCount': this.itemCount_,
    };
  },loadExtraState: function(state) {
    console.log("loadExtraState");
    this.itemCount_ = state['itemCount'];
    this.updateShape_();
  },decompose: function(workspace) {
    console.log("decompose");
    const containerBlock = workspace.newBlock('arg_block');
    containerBlock.initSvg();
    return containerBlock;
  },
  compose: function(containerBlock) {
    console.log("compose");
    let itemBlock = containerBlock.getInputTargetBlock('NAME');
    // Count number of inputs.
    const connections = [];
    while (itemBlock && !itemBlock.isInsertionMarker()) {//挿入可能かどうかのチェック？
      connections.push(itemBlock.valueConnection_);
      itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
  },saveConnections: function(containerBlock) {
    console.log("saveConnections");
    let itemBlock = containerBlock.getInputTargetBlock('NAME');
    let i = 0;
    while (itemBlock) {
      const input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
      i++;
    }
  },updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY');
    }
    // Add new inputs.
    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        const input = this.appendValueInput('ADD' + i);
        if(i!=0){
          input.appendField("追加"+i);
        }          
      }
    }
    // Remove deleted inputs.
    for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
      this.removeInput('ADD' + i);
    }
  }
};

Blockly.Blocks['get_mousecode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["左ボタン","left_click"], ["中ボタン","center_click"], ["右ボタン","right_click"], ["ダブルクリック","double_click"], ["サイドキー4","sidekey4"], ["サイドキー5","sidekey5"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    console.log("JOJO"+this.type);
    let mmm = this.getParent();
    if(!this.isInFlyout){
      // this.setEnabled(false);
      while (true){
        if(mmm == null){
          this.setEnabled(false);
          return;
        }else if(mmm.type == "mouse_event"){
          console.log("JOJO"+mmm.type);
          console.log(mmm.getFieldValue("slect_mouse_evnt"));
          if(mmm.getFieldValue("slect_mouse_evnt") == "mousedown" || mmm.getFieldValue("slect_mouse_evnt") == "mouseup"){
            this.setEnabled(true);
          }else{
            this.setEnabled(false);
          }

          // mmm.getFieldValue("slect_mouse_evnt")
          return;
        }
        mmm = mmm.getParent();
      }
    }
  }
};
Blockly.Blocks['get_mouse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("押されたマウスボタンを取得");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    console.log("JOJO"+this.type);
    let mmm = this.getParent();
    if(!this.isInFlyout){
      // this.setEnabled(false);
      while (true){
        if(mmm == null){
          this.setEnabled(false);
          return;
        }else if(mmm.type == "mouse_event"){
          console.log("JOJO"+mmm.type);
          console.log(mmm.getFieldValue("slect_mouse_evnt"));
          if(mmm.getFieldValue("slect_mouse_evnt") == "mousedown" || mmm.getFieldValue("slect_mouse_evnt") == "mouseup"){
            this.setEnabled(true);
          }else{
            this.setEnabled(false);
          }

          // mmm.getFieldValue("slect_mouse_evnt")
          return;
        }
        mmm = mmm.getParent();
      }

    }
  }
};

Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendValueInput("input_array")
        .setCheck(["Array", "String"])
        .appendField("配列");
    this.appendValueInput("input_value")
        .setCheck(null)
        .appendField("に");
    this.appendDummyInput()
        .appendField("を追加");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d89f2c');
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    if(!this.isInFlyout){
      if(this.getInput("input_array").connection.connect()){
        this.setEnabled(true);
      }else{
        this.setEnabled(false);
      }
    }
  }
};

Blockly.Blocks['list_ary_slice1'] = {
  init: function() {
    this.appendValueInput("input_str&ary")
        .setCheck(["Array", "String"]);
    this.appendValueInput("input_first")
        .setCheck("Number")
        .appendField("の");
    this.appendDummyInput()
        .appendField("番目、以降を切り取る");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#d89f2c");
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    if(!this.isInFlyout){
      if(this.getInput("input_str&ary").connection.connect()){
        this.setEnabled(true);
      }else{
        this.setEnabled(false);
      }
    }
  }
};
Blockly.Blocks['print_alert'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を出力");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};