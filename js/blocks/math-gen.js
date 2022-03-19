Blockly.Python['math_calculate'] = function(block) {
  var value_a = Blockly.Python.valueToCode(block, 'a', Blockly.Python.ORDER_NONE);
  var dropdown_operator = block.getFieldValue('operator');
  var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${value_a}${dropdown_operator}${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};