Blockly.Python['formula_g'] = function(block) {
  var value_t = Blockly.Python.valueToCode(block, 'T', Blockly.Python.ORDER_ATOMIC);
  var value_l = Blockly.Python.valueToCode(block, 'L', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `4*math.pi**2*${value_l}/(${value_t}**2)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['formula_rou'] = function(block) {
  var value_d = Blockly.Python.valueToCode(block, 'd', Blockly.Python.ORDER_ATOMIC);
  var value_l = Blockly.Python.valueToCode(block, 'l', Blockly.Python.ORDER_ATOMIC);
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `math.pi * ${value_d}**2 * ${value_r} / (4*${value_l})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};