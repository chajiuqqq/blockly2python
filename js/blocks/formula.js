var array = [{
  "type": "formula_g",
  "message0": "单摆公式计算重力，周期T是 %1 ，单摆长度是 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "T",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "L",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]


Blockly.defineBlocksWithJsonArray(array)