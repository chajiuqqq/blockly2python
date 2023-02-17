Blockly.Blocks['control_range'] = {
    init: function() {
      this.appendValueInput("from")
          .setCheck("Number")
          .appendField("变量")
          .appendField(new Blockly.FieldVariable("i"), "NAME")
          .appendField("从");
      this.appendValueInput("to")
          .setCheck("Number")
          .appendField("数到");
      this.appendValueInput("step")
          .setCheck("Number")
          .appendField("每次增加");
      this.appendStatementInput("forBody")
          .setCheck(null)
          .appendField("执行");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Python['control_range'] = function(block) {
    var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_from = Blockly.Python.valueToCode(block, 'from', Blockly.Python.ORDER_ATOMIC);
    var value_to = Blockly.Python.valueToCode(block, 'to', Blockly.Python.ORDER_ATOMIC);
    var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
    var statements_forbody = Blockly.Python.statementToCode(block, 'forBody');
    // TODO: Assemble Python into code variable.
    var code = `for ${variable_name} in range (${value_from},${value_to}+1,${value_step}):\n${statements_forbody}`;
    return code;
  };