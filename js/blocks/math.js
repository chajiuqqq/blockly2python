var array = [{
  "type": "math_calculate",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "a"
    },
    {
      "type": "field_dropdown",
      "name": "operator",
      "options": [
        [
          "+",
          "+"
        ],
        [
          "-",
          "-"
        ],
        [
          "*",
          "*"
        ],
        [
          "/",
          "/"
        ],
        [
          "乘方",
          "**"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "b"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "math_mean",
  "message0": "计算均值 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
},{
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
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}]



Blockly.defineBlocksWithJsonArray(array)