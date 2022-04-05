Blockly.Python['py_statistics'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `statistics.linear_regression(${value_x}, ${value_y})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['import_statistics'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import statistics \n';
  return code;
};