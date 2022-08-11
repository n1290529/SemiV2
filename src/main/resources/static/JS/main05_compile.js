var wait_for_input_ans="";

var onchange_type = "";
var create_flg = 0;
var drag_flg = 0;
var delete_flg = 0;
var checkBlocks = [];

Blockly.JavaScript['ENZAN'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['ENZAN_item'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['ENZAN_logical'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['ENZAN_item_logical'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['ENZAN_bit'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['ENZAN_item_bit'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['ENZAN_switch'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['ENZAN_item_switch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['ENZAN_def_switch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['if_mutator'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['else_if_mutator'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};
Blockly.JavaScript['else_mutator'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

//------------mutator関連　ここまで

//特殊
Blockly.JavaScript['obj_dropbox'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_object;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['back_dropbox'] = function(block) {
  var dropdown_object = block.getFieldValue('background_object');
  
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_object.slice(17);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//音一覧
Blockly.JavaScript['sound_dropbox'] = function(block) {
  var dropdown_object = block.getFieldValue('sound_object');
  
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_object.slice(12);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//音効果一覧

//-------------動き
Blockly.JavaScript['n_move'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);//Blockly dropdowninput
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);//Blockly math_Number
  //value_input objを右方向に動かす為の値
  console.log(block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type);
  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_move('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '", ' + value_input + ');\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ', ' + value_input + ');\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ', ' + value_input + ');\n';
  }
  // console.log(dropdown_object+"abcdefg"+value_input);
  
  // var code = 'Semi_move("' + dropdown_object + '", ' + value_input + ');\n';
  
  return code;
};

Blockly.JavaScript['n_rotation'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);//角度の変更値
  var dropdown_select_lr = block.getFieldValue('select_lr');//加算減算を決定する値
  
  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_rotation('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '", ' + value_input + ',"'+dropdown_select_lr+'");\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ', ' + value_input + ',"'+dropdown_select_lr+'");\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ', ' + value_input + ',"'+dropdown_select_lr+'");\n';
  }
  
  // var code= 'semi_rotation("' + dropdown_object + '", ' + value_input + ',"'+dropdown_select_lr+'");\n';
  return code;
};

Blockly.JavaScript['xy_both_coordinate'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input2 = Blockly.JavaScript.valueToCode(block, 'input2', Blockly.JavaScript.ORDER_ATOMIC);

  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_xy_both_coordinate('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '", ' + value_input + ','+value_input2+');\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ', ' + value_input + ','+value_input2+');\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ', ' + value_input + ','+value_input2+');\n';
  }
  
  // var code= 'semi_rotation("' + dropdown_object + '", ' + value_input + ','+dropdown_select_lr+'");\n';
  return code;
};

Blockly.JavaScript['x_coordinate'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var dropdown_select_xy = block.getFieldValue('select_xy');// select_x select_y
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  
  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_x_coordinate('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '","'+dropdown_select_xy+'",'+value_input+');\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ',"'+dropdown_select_xy+'",'+value_input+');\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ',"'+dropdown_select_xy+'",'+value_input+');\n';
  }

  return code;
};

Blockly.JavaScript['n_turn'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);

  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_turn('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '", ' + value_input + ');\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ', ' + value_input + ');\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ', ' + value_input + ');\n';
  }

  return code;
};

Blockly.JavaScript['n_rebound'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);

  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_rebound('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '");\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ');\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ');\n';
  }
  return code;
};

Blockly.JavaScript['get_x_coordinates'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var dropdown_select_xy = block.getFieldValue('select_xy');
  
  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_get_x_coordinates('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '","'+dropdown_select_xy+'")';
  }
  else if(check_type === "text"){
    code += dropdown_object +',"'+dropdown_select_xy+'")';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object +',"'+dropdown_select_xy+'")';
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_turn'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);

  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'get_turn('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '")';
  }
  else if(check_type === "text"){
    code += dropdown_object + ')';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ')';
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

//ここまで
//-----見た目
Blockly.JavaScript['text_display'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['wait_for_input'] = function (block) {
  //グローバル変数
  var code = 'Semi_wait_for_input();\n';
  return code;
};

Blockly.JavaScript['input_info'] = function (block) {
  // var return_val= wait_for_input_ans;

  var code = 'Semi_input_info()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['change_costume'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_ATOMIC);
  if(dropdown_object.startsWith('(')&&dropdown_object.endsWith(')')){
    dropdown_object= dropdown_object.slice(1);
    var temp = parseInt(dropdown_object.slice(0,-1));
  }else{
    var temp = dropdown_object.slice(6);
  }
  
  var dropdown_select_costume = block.getFieldValue('select_costume');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['change_background'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_back_dropbox', Blockly.JavaScript.ORDER_NONE);

  let check_type = block.getInput('input_back_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_con_back_change('
  if(check_type === "back_dropbox"){
    code += '"' + dropdown_object + '");\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ');\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ');\n';
  }
  return code;
};

Blockly.JavaScript['change_size'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);

  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_change_size('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '", ' + value_input + ');\n';
  }
  else if(check_type === "text"){
    code += dropdown_object + ', ' + value_input + ');\n';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ', ' + value_input + ');\n';
  }
  // console.log(dropdown_object+"abcdefg"+value_input);
  
  // var code = 'Semi_move("' + dropdown_object + '", ' + value_input + ');\n';
  return code;
};

Blockly.JavaScript['change_effect'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  var dropdown_set_effect = block.getFieldValue('set_effect');
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['remove_image_effect'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  var dropdown_set_effect = block.getFieldValue('set_effect');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['show'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var dropdown_set_show = block.getFieldValue('set_show');

  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_show('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '","'+dropdown_set_show+'")';
  }
  else if(check_type === "text"){
    code += dropdown_object +',"'+dropdown_set_show+'")';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object +',"'+dropdown_set_show+'")';
  }
  return code;
};

Blockly.JavaScript['get_size'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);

  let check_type = block.getInput('input_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_get_size('
  if(check_type === "obj_dropbox"){
    code += '"' + dropdown_object + '")';
  }
  else if(check_type === "text"){
    code += dropdown_object + ')';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ')';
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_effect'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_image_name'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_dropbox', Blockly.JavaScript.ORDER_NONE);
  var code = '"'+dropdown_object+'"';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_background'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_back_dropbox', Blockly.JavaScript.ORDER_NONE);

  let check_type = block.getInput('input_back_dropbox').connection.targetConnection.sourceBlock_.type;
  var code = 'Semi_get_background('
  if(check_type === "back_dropbox"){
    code += '' + dropdown_object + ')';
  }
  else if(check_type === "text"){
    code += dropdown_object + ')';
  }
  else if(check_type === "variables_get"){
    code += dropdown_object + ')';
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_costume'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['o_print'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // var code = 'printbox.value += ';
  // var new_line ="\n";

  // if(value_input != ""){
  //   code = code + value_input + new_line;
  // }
  // else{
  //   code = code + new_line;
  // }
  var code= 'Semi_print('+value_input+')';
  return code + ";\n";
};


//ここまで
//-----音
Blockly.JavaScript['play_sound'] = function(block) {
  var dropdown_object = Blockly.JavaScript.valueToCode(block, 'input_sound_dropbox', Blockly.JavaScript.ORDER_ATOMIC);
  if(dropdown_object.startsWith('(')&&dropdown_object.endsWith(')')){
    dropdown_object= dropdown_object.slice(1);
    var temp = parseInt(dropdown_object.slice(0,-1));
  }else{
    var temp = dropdown_object.slice(17);
  }
 
  var dropdown_select_ps = block.getFieldValue('select_ps');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['change_sound_effect'] = function(block) {
  var dropdown_select_sound = block.getFieldValue('select_sound');
  var dropdown_set_se = block.getFieldValue('set_se');
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['remove_sound_effect'] = function(block) {
  var dropdown_select_sound = block.getFieldValue('select_sound');
  var dropdown_remove_se = block.getFieldValue('remove_se');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['change_sound_volume'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['get_sound_volume'] = function(block) {
  var dropdown_select_sound = block.getFieldValue('select_sound');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_sound_effect'] = function(block) {
  var dropdown_select_sound = block.getFieldValue('select_sound');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_sound_name'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//ここまで
//-----制御

Blockly.JavaScript['comparison_operator_equal'] = function(block) {
  const LOGICOPERATORS = {
    'equal': [' == ', Blockly.JavaScript.ORDER_EQUALITY],
    'not_eq': [' != ', Blockly.JavaScript.ORDER_EQUALITY]
  };
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  const tuple = LOGICOPERATORS[block.getFieldValue('select_op')];
  const operator = tuple[0];
  const order = tuple[1];
  const argument0 = Blockly.JavaScript.valueToCode(block, 'input_left', order) || 'true';
  const argument1 = Blockly.JavaScript.valueToCode(block, 'input_right', order) || 'true';
  let code;

  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.JavaScript['comparison_operator'] = function(block) {
  const OPERATORS = {  
    'less':[" < ", Blockly.JavaScript.ORDER_RELATIONAL],
    'greater':[" > ", Blockly.JavaScript.ORDER_RELATIONAL],
    'less_eq':[" <= ", Blockly.JavaScript.ORDER_RELATIONAL],
    'greater_eq':[" >= ", Blockly.JavaScript.ORDER_RELATIONAL],
  }
  var value_input_left = Blockly.JavaScript.valueToCode(block, 'input_left', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
  var code = value_input_left;
  var dropdown_select_op = block.getFieldValue('select_op');
  code += OPERATORS[dropdown_select_op][0];
  var value_input_right = Blockly.JavaScript.valueToCode(block, 'input_right', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
  code += value_input_right;
  // TODO: Assemble JavaScript into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, OPERATORS[dropdown_select_op][1]];
};

Blockly.JavaScript['logical_operator'] = function(block) {
  const OPERATORS = {
    'and': [' && ', Blockly.JavaScript.ORDER_LOGICAL_AND],
    'or': [' || ', Blockly.JavaScript.ORDER_LOGICAL_OR],
    'xor': [' ^ ', Blockly.JavaScript.ORDER_BITWISE_XOR],
  };
  let code = '';

  for(let i = 0; block.getInput("ADD" + i); i++){
    let order;
    let operator = "";
    if(i != 0){
      operator = OPERATORS[block.getFieldValue('select_op'+i)][0];
      order = OPERATORS[block.getFieldValue('select_op'+i)][1];
    }else{
      order = OPERATORS[block.getFieldValue('select_op'+(i+1))][1];
    }
    code = code + operator + (Blockly.JavaScript.valueToCode(block, 'ADD' + i, order) || 'true');
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['for'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(';
  var variable_i_substitution = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('i_substitution'), Blockly.Variables.CATEGORY_NAME);
  var value_input_index = Blockly.JavaScript.valueToCode(block, 'input_index', Blockly.JavaScript.ORDER_NONE)||0;
  code += variable_i_substitution + " = " + value_input_index + "; ";
  var value_input_op = Blockly.JavaScript.valueToCode(block, 'input_op', Blockly.JavaScript.ORDER_NONE);
  code += value_input_op + "; ";
  var value_input_fluctuation = Blockly.JavaScript.valueToCode(block, 'input_fluctuation', Blockly.JavaScript.ORDER_NONE);
  code += value_input_fluctuation + ") {\n"
  var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    statements_input_code = Blockly.JavaScript.prefixLines(
                     Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                     Blockly.JavaScript.INDENT) +
        statements_input_code;
  }
  code += statements_input_code;
  return code + "}\n";
};

Blockly.JavaScript['wait_n_seconds'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'sleep(' + value_input + ");";
  return code + "\n";
};

Blockly.JavaScript['while'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_NONE) || true;
  // TODO: Assemble JavaScript into code variable.
  var code = "while(" + value_input +") {\n";
  var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    statements_input_code = Blockly.JavaScript.prefixLines(
                     Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                     Blockly.JavaScript.INDENT) +
        statements_input_code;
  }
  code += statements_input_code;
  return code + "}\n";
};


Blockly.JavaScript['if'] = function(block) {
  let n = 0;
  let code = '';
  do {
    const conditionCode =
        Blockly.JavaScript.valueToCode(block, 'if' + n, Blockly.JavaScript.ORDER_NONE) ||
        'false';
    let branchCode = Blockly.JavaScript.statementToCode(block, 'if_do' + n);
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      branchCode = Blockly.JavaScript.prefixLines(
                       Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                       Blockly.JavaScript.INDENT) +
          branchCode;
    }
    code += (n > 0 ? ' else ' : '') + 'if (' + conditionCode + ') {\n' +
        branchCode + '}';
    n++;
  } while (block.getInput('if' + n));

  if (block.getInput('else') || Blockly.JavaScript.STATEMENT_SUFFIX) {
    let branchCode = Blockly.JavaScript.statementToCode(block, 'else');
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      branchCode = Blockly.JavaScript.prefixLines(
                       Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                       Blockly.JavaScript.INDENT) +
          branchCode;
    }
    code += ' else {\n' + branchCode + '}';
  }
  return code + '\n';
  // var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  // // TODO: Assemble JavaScript into code variable.

  // return code;
};

Blockly.JavaScript['switch'] = function(block) {
  let code = '';
  // let code = '...;\n';

  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  code += "switch(" + value_input + ") {\n";
  
  for(let i = 0; block.getInput("ADD"+i); i++){
    var value_case = Blockly.JavaScript.valueToCode(block, 'ADD' + i , Blockly.JavaScript.ORDER_ATOMIC);
    value_case = "case " + value_case + ":\n";
    value_case = Blockly.JavaScript.prefixLines(
                       "",
                       Blockly.JavaScript.INDENT) +
          value_case;
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO' + i);
    console.log(statements_do);
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      statements_do = Blockly.JavaScript.prefixLines(
                       Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                       Blockly.JavaScript.INDENT) +
          statements_do;
    }
    code += value_case +
        statements_do;
    
  }
  if(block.getInput('ONDEFAULT') || Blockly.JavaScript.STATEMENT_SUFFIX){
    let default_do = Blockly.JavaScript.statementToCode(block, 'ONDEFAULT');
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      default_do = Blockly.JavaScript.prefixLines(
                       Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                       Blockly.JavaScript.INDENT) +
          default_do;
    }
    code += "default:\n"+
        default_do;
  }
  // TODO: Assemble JavaScript into code variable.
  return code + "}\n";
};

Blockly.JavaScript['break'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'break;\n';
  return code;
};

Blockly.JavaScript['o_return'] = function(block) {
  let value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  let code = "return";
  if(value_input != ""){
    code = code +  ' ' + value_input;
  }
  return code + ";\n";
};

Blockly.JavaScript['o_true'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  let code = 'true';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['o_false'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  let code = 'false';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];

};

Blockly.JavaScript['o_null'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'null';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//ここまで
//-----調べる
Blockly.JavaScript['get_mouse_xy'] = function(block) {
  var dropdown_select_xy = block.getFieldValue('select_xy');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['listen_and_wait'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['get_answer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_key_num'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_username'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_date'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_time'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['timer'] = function(block) {
  var dropdown_select_ms = block.getFieldValue('select_ms');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['get_timer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//ここまで
//-----演算
Blockly.JavaScript['o_num'] = function(block) {
  // Numeric value.
  const code = Number(block.getFieldValue('NUM'));
  const order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
              Blockly.JavaScript.ORDER_UNARY_NEGATION;
  return [code, order];
};

Blockly.JavaScript['operator'] = function(block) {
  const OPERATORS = {
    'plus': [' + ', Blockly.JavaScript.ORDER_ADDITION],
    'minus': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
    'mul': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
    'div': [' / ', Blockly.JavaScript.ORDER_DIVISION],
    'rem': [' % ', Blockly.JavaScript.ORDER_MODULUS]  // Handle power separately.
  };
  let code = '';
  for(let i = 0; block.getInput("ADD" + i); i++){
    let order;
    let operator = "";
    if(i != 0){
      operator = OPERATORS[block.getFieldValue('select_op'+i)][0];
      order = OPERATORS[block.getFieldValue('select_op'+i)][1];
    }else{
      order = OPERATORS[block.getFieldValue('select_op'+(i+1))][1];
    }
    code = code + operator + (Blockly.JavaScript.valueToCode(block, 'ADD' + i, order) || '0');
  }
  return [code, Blockly.JavaScript.ORDER_EQUALITY];
  
};

Blockly.JavaScript['bit_operator'] = function(block) {
  const OPERATORS = {
    'and': [' & ', Blockly.JavaScript.ORDER_BITWISE_AND],
    'or': [' | ', Blockly.JavaScript.ORDER_BITWISE_OR],
    'xor': [' ^ ', Blockly.JavaScript.ORDER_BITWISE_XOR],
    'not': [' ! ', Blockly.JavaScript.ORDER_LOGICAL_NOT],
    'left_shift': [' << ', Blockly.JavaScript.ORDER_BITWISE_SHIFT],
    'right_shift': [' >> ', Blockly.JavaScript.ORDER_BITWISE_SHIFT]
  };
  let code = '';

  for(let i = 0; block.getInput("ADD" + i); i++){
    let order;
    let operator = "";
    if(i != 0){
      operator = OPERATORS[block.getFieldValue('select_op'+i)][0];
      order = OPERATORS[block.getFieldValue('select_op'+i)][1];
    }else{
      order = OPERATORS[block.getFieldValue('select_op'+(i+1))][1];
    }
    code = code + operator + (Blockly.JavaScript.valueToCode(block, 'ADD' + i, order) || '0');
  }
  return [code, Blockly.JavaScript.ORDER_EQUALITY];
};

Blockly.JavaScript['assignment'] = function(block) {
  var variable_input_var = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('input_var'), Blockly.Variables.CATEGORY_NAME);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ASSIGNMENT);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_input_var + " = " + value_input + ';\n';
  return code;
};

Blockly.JavaScript['assignment_paz'] = function(block) {

  var variable_input_var = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('input_var'), Blockly.Variables.CATEGORY_NAME);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_input_var + " = " + value_input;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ASSIGNMENT];
};

Blockly.JavaScript['in_de_crement'] = function(block) {
  let IN_DE_CREMENT = {
    'increment':['++',Blockly.JavaScript.ORDER_INCREMENT],
    'decrement':['--',Blockly.JavaScript.ORDER_DECREMENT]
  };
  var variable_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.CATEGORY_NAME);
  var dropdown_select_inde = block.getFieldValue('select_inde');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_variable + IN_DE_CREMENT[dropdown_select_inde][0];
  return code+';\n';
};


Blockly.JavaScript['in_de_crement_paz'] = function(block) {
  let IN_DE_CREMENT = {
    'increment':['++',Blockly.JavaScript.ORDER_INCREMENT],
    'decrement':['--',Blockly.JavaScript.ORDER_DECREMENT]
  };
  var variable_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.CATEGORY_NAME);
  var dropdown_select_inde = block.getFieldValue('select_inde');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_variable + IN_DE_CREMENT[dropdown_select_inde][0];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, IN_DE_CREMENT[dropdown_select_inde][1]];
};

Blockly.JavaScript['calculation_1'] = function(block) {

  const OPERATORS = {  
    'sqrt':["Math.sqrt(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
    'abs':["Math.abs(",Blockly.JavaScript.ORDER_FUNCTION_CALL], 
    'log':["Math.log(",Blockly.JavaScript.ORDER_FUNCTION_CALL]
  }
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = OPERATORS[dropdown_name][0];
  code += (Blockly.JavaScript.valueToCode(block, 'V_NAME', OPERATORS[dropdown_name][1]) || '0')+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, OPERATORS[dropdown_name][1]];
};

Blockly.JavaScript['calculation_2'] = function(block) {
  const OPERATORS = {  
    'sin':["Math.sin(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
    'cos':["Math.cos(",Blockly.JavaScript.ORDER_FUNCTION_CALL], 
    'tan':["Math.tan(",Blockly.JavaScript.ORDER_FUNCTION_CALL]
  }
  var dropdown_name = block.getFieldValue('NAME');
  var code = OPERATORS[dropdown_name][0];
  code += (Blockly.JavaScript.valueToCode(block, 'V_NAME', OPERATORS[dropdown_name][1])|| '0')+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, OPERATORS[dropdown_name][1]];
};

Blockly.JavaScript['calculation_3'] = function(block) {
  const OPERATORS = {  
    'pai':["Math.PI", Blockly.JavaScript.ORDER_MEMBER],
    'napiers':["Math.E", Blockly.JavaScript.ORDER_MEMBER], 
    'infinity':["Number.POSITIVE_INFINITY", Blockly.JavaScript.ORDER_MEMBER],
    'nega_infinity':["Number.NEGATIVE_INFINITY", Blockly.JavaScript.ORDER_MEMBER],
    //ブロック側には追加してないが今後使えそうなプロパティ
    'EPSILON':["Number.EPSILON", Blockly.JavaScript.ORDER_MEMBER],
    'MAX_SAFE_INTEGER':["Number.MAX_SAFE_INTEGER", Blockly.JavaScript.ORDER_MEMBER],
    'MIN_SAFE_INTEGER':["Number.MIN_SAFE_INTEGER", Blockly.JavaScript.ORDER_MEMBER],
    'MAX_VALUE':["Number.MAX_VALUE", Blockly.JavaScript.ORDER_MEMBER],
    'MIN_VALUE':["Number.MIN_VALUE", Blockly.JavaScript.ORDER_MEMBER],
    'NaN':["Number.NaN", Blockly.JavaScript.ORDER_MEMBER]
  }
  var dropdown_name = block.getFieldValue('NAME');

  return [OPERATORS[dropdown_name][0], OPERATORS[dropdown_name][1]];
};

Blockly.JavaScript['calculation_4'] = function(block) {
  const OPERATORS = {  
    'round':["Math.round(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
    'ceil':["Math.ceil(",Blockly.JavaScript.ORDER_FUNCTION_CALL], 
    'floor':["Math.floor(",Blockly.JavaScript.ORDER_FUNCTION_CALL]
  }
  var dropdown_name = block.getFieldValue('NAME');
  var code = OPERATORS[dropdown_name][0];
  code += (Blockly.JavaScript.valueToCode(block, 'V_NAME', OPERATORS[dropdown_name][1])|| '0')+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, OPERATORS[dropdown_name][1]];
};

Blockly.JavaScript['calculation_5'] = function(block) {
  const OPERATORS = {  
    'pow':["Math.pow(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
    'atan2':["Math.atan2(",Blockly.JavaScript.ORDER_FUNCTION_CALL]
  }
  var dropdown_name = block.getFieldValue('NAME');
  var value_name0 = Blockly.JavaScript.valueToCode(block, 'V_NAME0', Blockly.JavaScript.ORDER_ATOMIC)|| '0';
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'V_NAME1', Blockly.JavaScript.ORDER_ATOMIC)|| '0';

  var code = OPERATORS[dropdown_name][0];
  code += value_name0 + ", " + value_name1 +")";

  return [code,  OPERATORS[dropdown_name][1]];
};

Blockly.JavaScript['calculation'] = function(block) {
  const OPERATORS = {  
    'select_sum':["sum(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
    'select_avg':["avg(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
    'select_max':["Math.max(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
    'select_min':["Math.min(",Blockly.JavaScript.ORDER_FUNCTION_CALL],
  }
  var dropdown_select_calc = block.getFieldValue('select_calc');
  var code = OPERATORS[dropdown_select_calc][0];
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC) || '[0]';
  console.log(dropdown_select_calc);
  if(dropdown_select_calc == 'select_max' || dropdown_select_calc == 'select_min'){
    code +=  "..."+value_input+")";
  }else{
    code += value_input+")";
  }
  // TODO: Assemble JavaScript into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, OPERATORS[dropdown_select_calc][1]];
};

Blockly.JavaScript['lenght'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random'] = function(block) {
  var value_input_min = Blockly.JavaScript.valueToCode(block, 'input_min', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_input_max = Blockly.JavaScript.valueToCode(block, 'input_max', Blockly.JavaScript.ORDER_ATOMIC) || '1';
  // TODO: Assemble JavaScript into code variable.
  var code = 'RanDom(' + value_input_min + ", " + value_input_max + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['length'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC) || '[0]';
  // TODO: Assemble JavaScript into code variable.
  var code = value_input+".length";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};


//ここまで
//-----変数
//ここまで
//-----関数
//ここまで

//-----イベント
Blockly.JavaScript['startup'] = function(block) {
  var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  return code;
};

Blockly.JavaScript['key_event'] = function(block) {
  const event_Type = {
    "key_d":["keydown", Blockly.JavaScript.ORDER_FUNCTION_CALL],
    "key_p":["keypress", Blockly.JavaScript.ORDER_FUNCTION_CALL],
    "key_u":["keyup", Blockly.JavaScript.ORDER_FUNCTION_CALL]
  };
  let dropdown_select_ev = block.getFieldValue('select_ev');
  let statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  // TODO: Assemble JavaScript into code variable.
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    statements_input_code = Blockly.JavaScript.prefixLines(
                     Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                     Blockly.JavaScript.INDENT) +
        statements_input_code;
  }
  let code = "document.addEventListener('"
  code += event_Type[dropdown_select_ev][0] + "', function(event){\n";
  code += statements_input_code;
  return code+"});\n";
};

Blockly.JavaScript['mouse_event'] = function(block) {
  const mouse_num = {
    "click_l"        :["click" , Blockly.JavaScript.ORDER_ATOMIC],
    "click_r"  :["contextmenu", Blockly.JavaScript.ORDER_ATOMIC],
    "dblclick"     :["dblclick", Blockly.JavaScript.ORDER_ATOMIC],
    "mousedown"    :["mousedown", Blockly.JavaScript.ORDER_ATOMIC],
    "mouseup"      :["mouseup", Blockly.JavaScript.ORDER_ATOMIC]
  }
  var dropdown_select_object = block.getFieldValue('object');
  var dropdown_slect_mouse_evnt = block.getFieldValue('slect_mouse_evnt');
  // TODO: Assemble JavaScript into code variable.
  var code = "document.getElementById('" + dropdown_select_object + "').addEventListener('"+ mouse_num[dropdown_slect_mouse_evnt][0] + "',";
  var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    statements_input_code = Blockly.JavaScript.prefixLines(
                     Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                     Blockly.JavaScript.INDENT) +
        statements_input_code;
  }
  code += "function(event){\n" + statements_input_code;
  return code + "});\n";
};

Blockly.JavaScript['mouse_over'] = function(block) {
  const event_Type = {
    "touch" :["mouseover", Blockly.JavaScript.ORDER_ATOMIC],
    "leave" :["mouseout", Blockly.JavaScript.ORDER_ATOMIC],
    "move"  :["mousemove", Blockly.JavaScript.ORDER_ATOMIC]
  }
  var dropdown_object = block.getFieldValue('object');
  var dropdown_select = block.getFieldValue('select');
  // TODO: Assemble JavaScript into code variable.
  var code = "document.getElementById('" + dropdown_object + "').addEventListener('"+ event_Type[dropdown_select][0] + "',";
  var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    statements_input_code = Blockly.JavaScript.prefixLines(
                     Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                     Blockly.JavaScript.INDENT) +
        statements_input_code;
  }
  code += "function(event){\n" + statements_input_code;
  return code + "});\n";
};

Blockly.JavaScript['wait_event'] = function(block) {
  const event_Type = {
    "tiomeout":["setTimeout(function(){"],
    "interval":["setInterval(function(){"]
  }
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select_settinout = block.getFieldValue('select_settinout');
  // TODO: Assemble JavaScript into code variable.
  var code = event_Type[dropdown_select_settinout][0]+"\n";
  var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    statements_input_code = Blockly.JavaScript.prefixLines(
                     Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
                     Blockly.JavaScript.INDENT) +
        statements_input_code;
  }
  code += statements_input_code + "}," + (value_input*1000) + ");\n"
  return code;
};

Blockly.JavaScript['clear_time'] = function(block) {//後回し
  var dropdown_object = block.getFieldValue('object');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//ここまで
//-----配列

Blockly.JavaScript['get_array'] = function(block) {
  var value_input_array = Blockly.JavaScript.valueToCode(block, 'input_array', Blockly.JavaScript.ORDER_ATOMIC)|| '[""]';
  var value_input_index = Blockly.JavaScript.valueToCode(block, 'input_index', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_input_array + '['+value_input_index+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_array'] = function(block) {
  var value_input_array = Blockly.JavaScript.valueToCode(block, 'input_array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_index = Blockly.JavaScript.valueToCode(block, 'input_index', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_value = Blockly.JavaScript.valueToCode(block, 'input_value', Blockly.JavaScript.ORDER_ATOMIC)||'null';
  // TODO: Assemble JavaScript into code variable.
  var code = value_input_array + '[' + value_input_index + '] = ' + value_input_value + ';\n';
  return code;
};

Blockly.JavaScript['o_join'] = function(block) {
  var value_input_array = Blockly.JavaScript.valueToCode(block, 'input_array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_index = Blockly.JavaScript.valueToCode(block, 'input_index', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_input_array + '.join(' + value_input_index + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['list_slice'] = function(block) {
  var value_input_str_ary = Blockly.JavaScript.valueToCode(block, 'input_str&ary', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_first = Blockly.JavaScript.valueToCode(block, 'input_first', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_last = Blockly.JavaScript.valueToCode(block, 'input_last', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_input_str_ary + '.slice(' + value_input_first + ',' + value_input_last + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['o_indexof'] = function(block) {
  var value_input_str_ary = Blockly.JavaScript.valueToCode(block, 'input_str&ary', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select_fl = block.getFieldValue('select_fl');
  var value_input_index = Blockly.JavaScript.valueToCode(block, 'input_index', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(dropdown_select_fl == "first"){
    code = value_input_str_ary + '.indexOf(' + value_input_index + ')';
  }else if(dropdown_select_fl == "last"){
    code = value_input_str_ary + '.lastIndexOf(' + value_input_index + ')';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//ここまで
//-----テキスト
Blockly.JavaScript['text_charat'] = function(block) {
  var value_input_str = Blockly.JavaScript.valueToCode(block, 'input_str', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_index = Blockly.JavaScript.valueToCode(block, 'input_index', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['o_split'] = function(block) {
  var value_input_str = Blockly.JavaScript.valueToCode(block, 'input_str', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_index = Blockly.JavaScript.valueToCode(block, 'input_index', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_input_str + '.split(' + value_input_index + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//ここまで
//-----カラー
//ここまで

//以下テスト用
// Blockly.JavaScript['call_function'] = function(block) {
//   var dropdown_call_function = block.getFieldValue('call_function');
//   var value_input_argument = Blockly.JavaScript.valueToCode(block, 'input_argument', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'console.log("hello");\n';
//   return code;
// };

// Blockly.JavaScript['when_a_function_is_called'] = function(block) {
//   var dropdown_select_function = block.getFieldValue('select_function');
//   var statements_input_code = Blockly.JavaScript.statementToCode(block, 'input_code');
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'console.log("hello");\n';
//   return code;
// };

// Blockly.JavaScript['roots'] = function(block) {
//   var value_input_left = Blockly.JavaScript.valueToCode(block, 'input_left', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_input_right = Blockly.JavaScript.valueToCode(block, 'input_right', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

// Blockly.JavaScript['square_root'] = function(block) {
//   var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

// Blockly.JavaScript['log'] = function(block) {
//   var value_input_left = Blockly.JavaScript.valueToCode(block, 'input_left', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_input_right = Blockly.JavaScript.valueToCode(block, 'input_right', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

// Blockly.JavaScript['rounding'] = function(block) {
//   var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

// Blockly.JavaScript['absolute_value'] = function(block) {
//   var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

// Blockly.JavaScript['not_operator'] = function(block) {
//   var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

// Blockly.JavaScript['tst_mutator'] = function(block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'console.log("hello");\n';
//   return code;
// };

// Blockly.JavaScript['j_j'] = function(block) {
//   var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };
Blockly.JavaScript['o_function'] = function(block) {
  var text_func_name = block.getFieldValue('func_name');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
Blockly.Blocks['input_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("押されたキーを取得する");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    let mmm = this.getParent();
    if(!this.isInFlyout){
      // this.setEnabled(false);
      while (true){
        if(mmm == null){
          this.setEnabled(false);
          return;
        }else if(mmm.type == "key_event"){
          console.log("JOJO"+mmm.type);
          this.setEnabled(true);
          return;
        }
        mmm = mmm.getParent();
      }

    }
  }
};
Blockly.Blocks['input_key_list_az'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
         ["a","key_list_a"], ["b","key_list_b"], ["c","key_list_c"], ["d","key_list_d"], 
         ["e","key_list_e"], ["f","key_list_f"], ["g","key_list_g"], ["h","key_list_h"], ["i","key_list_i"], ["j","key_list_j"],
         ["k","key_list_k"], ["l","key_list_l"], ["m","key_list_m"], ["n","key_list_n"], ["o","key_list_o"], ["p","key_list_p"], 
         ["q","key_list_q"], ["r","key_list_r"], ["s","key_list_s"], ["t","key_list_t"], ["u","key_list_u"], ["v","key_list_v"], 
         ["w","key_list_w"], ["x","key_list_x"], ["y","key_list_y"], ["z","key_list_z"]]), "key_list");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    let mmm = this.getParent();
    if(!this.isInFlyout){
      // this.setEnabled(false);
      while (true){
        if(mmm == null){
          this.setEnabled(false);
          return;
        }else if(mmm.type == "key_event"){
          console.log("JOJO"+mmm.type);
          this.setEnabled(true);
          return;
        }
        mmm = mmm.getParent();
      }

    }
  }
};
Blockly.Blocks['input_key_list_09'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","key_list0"], ["1","key_list1"], ["2","key_list2"], ["3","key_list3"], ["4","key_list4"], 
        ["5","key_list5"], ["6","key_list6"], ["7","key_list7"], ["8","key_list8"], ["9","key_list9"]]), "key_list");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(e){
    let mmm = this.getParent();
    if(!this.isInFlyout){
      // this.setEnabled(false);
      while (true){
        if(mmm == null){
          this.setEnabled(false);
          return;
        }else if(mmm.type == "key_event"){
          console.log("JOJO"+mmm.type);
          this.setEnabled(true);
          return;
        }
        mmm = mmm.getParent();
      }

    }
  }
};
Blockly.Blocks['input_key_list_other'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["BackSpace","key_list_BackSpace"], ["Tab","key_list_Tab"], ["Enter","key_list_Enter"], ["Shift","key_list_Shift"], 
        ["Ctrl","key_list_Ctrl"], ["Alt","key_list_Alt"], ["CapsLock","key_list_CapsLock"], ["Esc","key_list_Esc"], ["Space","key_list_Space"], ["←","key_list_ArrowLeft"],
        ["↑","key_list_ArrowUp"],["→","key_list_ArrowRight"],["↓","key_list_ArrowDown"]]), "key_list");
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
        }else if(mmm.type == "key_event"){
          console.log("JOJO"+mmm.type);
          this.setEnabled(true);
          return;
        }
        mmm = mmm.getParent();
      }

    }
  }
};

Blockly.JavaScript['input_key'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'event.keyCode';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['input_key_list_az'] = function(block) {
  const key_num = {
    "key_list_a":[65, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_b":[66, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_c":[67, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_d":[68, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_e":[69, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_f":[70, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_g":[71, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_h":[72, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_i":[73, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_j":[74, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_k":[75, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_l":[76, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_m":[77, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_n":[78, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_o":[79, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_p":[80, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_q":[81, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_r":[82, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_s":[83, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_t":[84, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_u":[85, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_v":[86, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_w":[87, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_x":[88, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_y":[89, Blockly.JavaScript.ORDER_ATOMIC], 
    "key_list_z":[90, Blockly.JavaScript.ORDER_ATOMIC]
  }
  var dropdown_key_list = block.getFieldValue('key_list');
  // TODO: Assemble JavaScript into code variable.
  var code = key_num[dropdown_key_list][0];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, key_num[dropdown_key_list][1]];
};
Blockly.JavaScript['input_key_list_09'] = function(block) {
  
  const key_num = {
    'key_list0':[48, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list1':[49, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list2':[50, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list3':[51, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list4':[52, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list5':[53, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list6':[54, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list7':[55, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list8':[56, Blockly.JavaScript.ORDER_ATOMIC],
    'key_list9':[57, Blockly.JavaScript.ORDER_ATOMIC]
  }
  var dropdown_key_list = block.getFieldValue('key_list');
  // TODO: Assemble JavaScript into code variable.
  var code = key_num[dropdown_key_list][0];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, key_num[dropdown_key_list][1]];
};
Blockly.JavaScript['input_key_list_other'] = function(block) {
  const key_num = {
    "key_list_BackSpace"  :[8, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_Tab"        :[9, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_Enter"      :[13, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_Shift"      :[16, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_Ctrl"       :[17, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_Alt"        :[18, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_CapsLock"   :[20, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_Esc"        :[27, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_Space"      :[32, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_ArrowLeft"  :[32, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_ArrowUp"    :[33, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_ArrowRight" :[34, Blockly.JavaScript.ORDER_ATOMIC],
    "key_list_ArrowDown"  :[35, Blockly.JavaScript.ORDER_ATOMIC]
  }
  var dropdown_key_list = block.getFieldValue('key_list');
  // TODO: Assemble JavaScript into code variable.
  var code = key_num[dropdown_key_list][0];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, key_num[dropdown_key_list][1]];
};
Blockly.JavaScript['get_mousecode'] = function(block) {
  const mouse_num = {
    "left_click"        :[0, Blockly.JavaScript.ORDER_ATOMIC],
    "center_click"      :[1, Blockly.JavaScript.ORDER_ATOMIC],
    "right_click"       :[2, Blockly.JavaScript.ORDER_ATOMIC],
    "double_click"      :[3, Blockly.JavaScript.ORDER_ATOMIC],
    "sidekey4"          :[4, Blockly.JavaScript.ORDER_ATOMIC],
    "sidekey5"          :[5, Blockly.JavaScript.ORDER_ATOMIC]
  }
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = mouse_num[dropdown_name][0];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, mouse_num[dropdown_name][1]];
};
Blockly.JavaScript['get_mouse'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'event.button';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_type'] = function(block) {
  var value_input_array = Blockly.JavaScript.valueToCode(block, 'input_array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_value = Blockly.JavaScript.valueToCode(block, 'input_value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_input_array + '.push(' + value_input_value + ');\n';
  return code;
};

Blockly.JavaScript['list_ary_slice1'] = function(block) {
  var value_input_str_ary = Blockly.JavaScript.valueToCode(block, 'input_str&ary', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input_first = Blockly.JavaScript.valueToCode(block, 'input_first', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_input_str_ary + '.slice(' + value_input_first + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['print_alert'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  var code = 'Semi_wnidow_alert('+value_name+');\n';
  return code;
};

