var array = [{
  "type": "py_statistics",
  "message0": "进行线性拟合，x是 %1 ，y是 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": [
        "Array",
        "Series"
      ]
    },
    {
      "type": "input_value",
      "name": "y",
      "check": [
        "Array",
        "Series"
      ]
    }
  ],
  "inputsInline": true,
  "output": "tuple",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "import_statistics",
  "message0": "导入统计库（Statistics）",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]


Blockly.defineBlocksWithJsonArray(array)