var array = [{
  "type": "formula_g",
  "message0": "单摆公式计算重力，周期T是 %1 ，单摆长度是 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "T",
      "check": [
        "Number",
        "Series",
        "Array"
      ]
    },
    {
      "type": "input_value",
      "name": "L",
      "check": [
        "Number",
        "Series",
        "Array"
      ]
    }
  ],
  "inputsInline": true,
  "output": [
    "Number",
    "Series",
    "Array"
  ],
  "colour": 275,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "formula_rou",
  "message0": "测量金属丝电阻率，金属丝半径是 %1 ，金属丝长度是 %2 ，电阻是 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "d",
      "check": [
        "Number",
        "Series",
        "Array"
      ]
    },
    {
      "type": "input_value",
      "name": "l",
      "check": [
        "Number",
        "Series",
        "Array"
      ]
    },
    {
      "type": "input_value",
      "name": "R",
      "check": [
        "Number",
        "Series",
        "Array"
      ]
    }
  ],
  "inputsInline": true,
  "output": [
    "Number",
    "Series",
    "Array"
  ],
  "colour": 275,
  "tooltip": "",
  "helpUrl": ""
}]


Blockly.defineBlocksWithJsonArray(array)