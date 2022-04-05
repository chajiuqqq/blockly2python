
var array =[{
  "type": "pd_create_series",
  "message0": "创建序列 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pd_create_dataframe",
  "message0": "创建数据表格，数据是 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "dict"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pd_set_columns",
  "message0": "设置 %1 的列名为 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pd_set_index",
  "message0": "设置 %1 的索引为 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "list",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "v1"
    },
    {
      "type": "input_value",
      "name": "v2"
    },
    {
      "type": "input_value",
      "name": "v3"
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "list_2",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "r1",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "r2",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "r3",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "import_pandas",
  "message0": "导入Pandas库",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pd_plot",
  "message0": "创建 %1 的折线图， 颜色是 %2 ，线型是 %3 %4 x轴是 %5 ，y轴是 %6 %7 标记是 %8 ，标记颜色是 %9 ，标记大小是 %10",
  "args0": [
    {
      "type": "field_variable",
      "name": "data",
      "variable": "item"
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    },
    {
      "type": "field_dropdown",
      "name": "linestyle",
      "options": [
        [
          "实线",
          "solid"
        ],
        [
          "短划线",
          "dashed"
        ],
        [
          "点划线",
          "dashdot"
        ],
        [
          "虚线",
          "dotted"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "x",
      "text": ""
    },
    {
      "type": "field_input",
      "name": "y",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "marker",
      "options": [
        [
          "无",
          "None"
        ],
        [
          "圆点",
          "."
        ],
        [
          "圆圈",
          "o"
        ],
        [
          "x",
          "x"
        ],
        [
          "星号",
          "*"
        ],
        [
          "十字",
          "+"
        ]
      ]
    },
    {
      "type": "field_colour",
      "name": "markerfacecolor",
      "colour": "#ff0000"
    },
    {
      "type": "field_number",
      "name": "markersize",
      "value": 0,
      "min": 0,
      "max": 50
    }
  ],
  "output": null,
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "pd_plot_bar",
  "message0": "创建 %1 %2 的柱形图， 类型 %3 ，透明度 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "variable",
      "variable": "item"
    },
    {
      "type": "field_dropdown",
      "name": "barh",
      "options": [
        [
          "垂直",
          "bar"
        ],
        [
          "水平",
          "barh"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "stacked",
      "options": [
        [
          "堆积",
          "T"
        ],
        [
          "不堆积",
          "F"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "alpha",
      "value": 1,
      "min": 0,
      "max": 1
    }
  ],
  "output": null,
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
},
{
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
  "helpUrl": ""
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
},{
  "type": "pd_save_fig",
  "message0": "保存图表为 %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "filename",
      "text": "example"
    },
    {
      "type": "field_input",
      "name": "ext",
      "text": ".png"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "pd_get_column_by_loc",
  "message0": "获取 %1 的第 %2 列数据",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Series",
  "colour": 285,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pd_get_column_by_name",
  "message0": "获取 %1 的 %2 列数据",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Series",
  "colour": 285,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "pd_get_row_by_loc",
  "message0": "获取 %1 的第 %2 行数据",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Series",
  "colour": 285,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pd_set_new_column",
  "message0": "在 %1 设置或添加 %2 %3 列，数据为 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "variable",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "column_name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "data"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "pd_plot_scatter",
  "message0": "创建 %1 的散点图， 标点颜色是 %2 ，标点大小是 %3 %4 第 %5 列作为x轴，第 %6 列作为y轴",
  "args0": [
    {
      "type": "field_variable",
      "name": "data",
      "variable": "item"
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    },
    {
      "type": "field_number",
      "name": "s",
      "value": 0,
      "min": 0
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "xlabel",
      "value": 1,
      "min": 1
    },
    {
      "type": "field_number",
      "name": "ylabel",
      "value": 2,
      "min": 1
    }
  ],
  "output": null,
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "pd_read_excel",
  "message0": "从 %1 中读取数据表格",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "pd_plot_scatter_line",
  "message0": "创建 %1 的散点图， 标点颜色是 %2 ，标点大小是 %3 %4 第 %5 列作为x轴，第 %6 列作为y轴 %7 并拟合图像，直线颜色 %8 ，粗细 %9",
  "args0": [
    {
      "type": "field_variable",
      "name": "data",
      "variable": "item"
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    },
    {
      "type": "field_number",
      "name": "s",
      "value": 1,
      "min": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "xlabel",
      "value": 1,
      "min": 1
    },
    {
      "type": "field_number",
      "name": "ylabel",
      "value": 2,
      "min": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "NAME",
      "colour": "#ff0000"
    },
    {
      "type": "field_number",
      "name": "thin",
      "value": 1,
      "min": 1
    }
  ],
  "output": null,
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
}]

Blockly.defineBlocksWithJsonArray(array)