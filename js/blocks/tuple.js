var array = [{
  "type": "tuple",
  "message0": "创建元组 %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "v1"
    },
    {
      "type": "input_value",
      "name": "v2"
    }
  ],
  "output": "tuple",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]


Blockly.defineBlocksWithJsonArray(array)