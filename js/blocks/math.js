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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]



Blockly.defineBlocksWithJsonArray(array)