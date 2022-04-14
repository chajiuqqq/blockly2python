Blockly.Python['tuple'] = function (block) {

  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.Python.valueToCode(block, 'ADD' + n,
      Blockly.Python.ORDER_NONE) || 'None';
  }
  code = '(' + code.join(', ') + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];




  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tuple_get_by_index'] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(block.getFieldValue('item'), Blockly.Variables.NAME_TYPE);
  var number_index = block.getFieldValue('index') - 1;
  // TODO: Assemble Python into code variable.
  var code = `${variable_item}[${number_index}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};