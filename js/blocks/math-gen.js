Blockly.Python['math_calculate'] = function (block) {
  var value_a = Blockly.Python.valueToCode(block, 'a', Blockly.Python.ORDER_NONE);
  var dropdown_operator = block.getFieldValue('operator');
  var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${value_a}${dropdown_operator}${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['math_mean'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'item', Blockly.Python.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('option');
  // TODO: Assemble Python into code variable.
  var code = `${value_name}.${dropdown_option}()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['math_import'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'import math\n';
  return code;
};

Blockly.Python['py_statistics'] = function (block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `statistics.linear_regression(${value_x}, ${value_y})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};