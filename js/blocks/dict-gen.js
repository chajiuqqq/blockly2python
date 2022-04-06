Blockly.Python['dict_create'] = function (block) {

  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.Python.valueToCode(block, 'ADD' + n,
      Blockly.Python.ORDER_NONE) || 'None';
  }
  code = '{' + code.join(', ') + '}';
  return [code, Blockly.Python.ORDER_ATOMIC];



};

Blockly.Python['dict_component'] = function (block) {
  var value_k = Blockly.Python.valueToCode(block, 'k', Blockly.Python.ORDER_NONE);
  var value_v = Blockly.Python.valueToCode(block, 'v', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${value_k}:${value_v}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dict_get_by_key'] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(block.getFieldValue('item'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_item}[${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['dict_set_by_key'] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(block.getFieldValue('item'), Blockly.Variables.NAME_TYPE);
  var value_item = Blockly.Python.valueToCode(block, 'item', Blockly.Python.ORDER_NONE); // k:v
  // TODO: Assemble Python into code variable.
  var k = value_item.split(':')[0]
  var v = value_item.split(':')[1]
  var code = `${variable_item}[${k}]=${v}\n`;
  return code;
};

Blockly.Python['dict_del_by_key'] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(block.getFieldValue('item'), Blockly.Variables.NAME_TYPE);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `del ${variable_item}[${value_key}]\n`;
  return code;
};