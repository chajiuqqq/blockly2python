var array = [
  {
    "type": "tuple_get_by_index",
    "message0": "获取 %1 元组中的第 %2 个元素",
    "args0": [
      {
        "type": "field_variable",
        "name": "item",
        "variable": "item"
      },
      {
        "type": "field_number",
        "name": "index",
        "value": 1,
        "min": 1
      }
    ],
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  }]

Blockly.defineBlocksWithJsonArray(array)


var tuple_create_json = {
  "type": "tuple",
  "output": "tuple",
  "colour": 120,
  "tooltip": "",
  "helpUrl": "",

  "mutator": "tuple_mutator"
}

Blockly.Blocks['tuple'] = {
  init: function () {
    this.jsonInit(tuple_create_json);
    // Assign 'this' to a variable for use in the tooltip closure below.

    this.itemCount_ = 2;
    this.updateShape_();

  }
};

Blockly.Blocks['tuple_create_with_container'] = {
  /**
   * Mutator block for dict container.
   * @this Blockly.Block
   */
  init: function () {
    this.setColour(120);
    this.appendDummyInput()
      .appendField('元组');
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};