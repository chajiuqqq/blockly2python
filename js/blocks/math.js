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
  "message0": "计算 %1 的 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "item",
      "check": [
        "DataFrame",
        "Series"
      ]
    },
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "均值",
          "mean"
        ],
        [
          "最大值",
          "max"
        ],
        [
          "最小值",
          "min"
        ],
        [
          "个数",
          "count"
        ],
        [
          "累加和",
          "sum"
        ],
        [
          "方差",
          "var"
        ],
        [
          "标准差",
          "std"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": [
    "Number",
    "Series"
  ],
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