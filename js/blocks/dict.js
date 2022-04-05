var array = [{
  "type": "dict_create",
  "message0": "创建一个字典 %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "d1",
      "check": "dict_component"
    },
    {
      "type": "input_value",
      "name": "d2",
      "check": "dict_component"
    }
  ],
  "output": "dict",
  "colour": 230,
  "tooltip": "",
  "helpUrl": "",
  "mutator": "dict_mutator"
},
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
}]

Blockly.defineBlocksWithJsonArray(array)