var array = [
  {
    "type": "dict_component",
    "message0": "%1 : %2",
    "args0": [
      {
        "type": "input_value",
        "name": "k"
      },
      {
        "type": "input_value",
        "name": "v"
      }
    ],
    "inputsInline": true,
    "output": "dict_component",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }, {
    "type": "dict_set_by_key",
    "message0": "设置或添加 %1 字典元素 %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "item",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "item",
        "check": "dict_component"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "dict_del_by_key",
    "message0": "删除 %1 字典中“键”为 %2 的元素",
    "args0": [
      {
        "type": "field_variable",
        "name": "item",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "key",
        "check": [
          "Number",
          "String"
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]

Blockly.defineBlocksWithJsonArray(array)

var dict_create_json = {
  "type": "dict_create",
  "output": "dict",
  "colour": 230,
  "tooltip": "",
  "helpUrl": "",
  "mutator": "dict_mutator"
}

Blockly.Blocks['dict_create'] = {
  init: function () {
    this.jsonInit(dict_create_json);
    // Assign 'this' to a variable for use in the tooltip closure below.

    this.itemCount_ = 2;
    this.updateShape_();

  }
};

Blockly.Blocks['dict_create_with_container'] = {
  /**
   * Mutator block for dict container.
   * @this Blockly.Block
   */
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField('词典');
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};


Blockly.Blocks['dict_get_by_key'] = {
  init: function () {
    this.jsonInit({
      "type": "dict_get_by_key",
      "message0": "获取 %1 字典中“键”为 %2 的元素",
      "args0": [
        {
          "type": "field_variable",
          "name": "item",
          "variable": "item"
        },
        {
          "type": "input_value",
          "name": "NAME",
          "check": [
            "Number",
            "String"
          ]
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
    // Assign 'this' to a variable for use in the tooltip closure below.

  }
};

