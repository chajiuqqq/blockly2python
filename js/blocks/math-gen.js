Blockly.Python['math_calculate'] = function(block) {
  var value_a = Blockly.Python.valueToCode(block, 'a', Blockly.Python.ORDER_NONE);
  var dropdown_operator = block.getFieldValue('operator');
  var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${value_a}${dropdown_operator}${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['math_mean'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name}.mean()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['math_import'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import math\n';
  return code;
};