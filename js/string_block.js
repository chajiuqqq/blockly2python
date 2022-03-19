Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("String")
        .appendField("获取");
    this.appendDummyInput()
        .appendField("的长度");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['string_length'] = function(block) {
  var item = Blockly.Python.valueToCode(block, 'a', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'len('+item+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};