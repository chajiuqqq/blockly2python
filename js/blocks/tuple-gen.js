Blockly.Python['tuple'] = function(block) {
  var value_v1 = Blockly.Python.valueToCode(block, 'v1', Blockly.Python.ORDER_ATOMIC);
  var value_v2 = Blockly.Python.valueToCode(block, 'v2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `(${value_v1},${value_v2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tuple_get_by_index'] = function(block) {
  var variable_item = Blockly.Python.nameDB_.getName(block.getFieldValue('item'), Blockly.Variables.NAME_TYPE);
  var number_index = block.getFieldValue('index');
  // TODO: Assemble Python into code variable.
  var code = `${variable_item}[${number_index}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};