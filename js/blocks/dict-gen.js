Blockly.Python['dict_create'] = function(block) {
  var value_d1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_NONE);
  var value_d2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `{${value_d1},${value_d2}}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dict_component'] = function(block) {
  var value_k = Blockly.Python.valueToCode(block, 'k', Blockly.Python.ORDER_NONE);
  var value_v = Blockly.Python.valueToCode(block, 'v', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${value_k}:${value_v}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};