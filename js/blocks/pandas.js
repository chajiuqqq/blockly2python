
var array = [{
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
  "colour": 120,
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
  "colour": 120,
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
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "import_libs",
  "message0": "导入依赖库，系统： %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "sys",
      "options": [
        [
          "Windows",
          "win"
        ],
        [
          "苹果系统",
          "mac"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}, {
  "type": "pd_plot",
  "message0": "创建 %1 的折线图， 颜色是 %2 ，线型是 %3 %4 第 %5 列作为x轴，第 %6 列作为y轴 %7 标记是 %8 ，标记颜色是 %9 ，标记大小是 %10",
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
      "type": "field_number",
      "name": "x",
      "value": 1,
      "min": 1
    },
    {
      "type": "field_number",
      "name": "y",
      "value": 2,
      "min": 1
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, {
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
  "colour": 230,
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
  "colour": 120,
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
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}, {
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, {
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
}, {
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
  "colour": 285,
  "tooltip": "",
  "helpUrl": ""
}, {
  "type": "pd_plot_scatter",
  "message0": "创建 %1 的散点图， 标记是 %2 ，标记颜色是 %3 ，标记大小是 %4 %5 第 %6 列作为x轴，第 %7 列作为y轴",
  "args0": [
    {
      "type": "field_variable",
      "name": "data",
      "variable": "item"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
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
      "name": "color",
      "colour": "#ff0000"
    },
    {
      "type": "field_number",
      "name": "s",
      "value": 20,
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
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, {
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
}, {
  "type": "pd_plot_scatter_line",
  "message0": "创建 %1 的散点图， 标记是 %2 ，标记颜色是 %3 ，标记大小是 %4 %5 第 %6 列作为x轴，第 %7 列作为y轴 %8 并拟合图像，直线颜色 %9 ，线形 %10 ，粗细 %11",
  "args0": [
    {
      "type": "field_variable",
      "name": "data",
      "variable": "item"
    },
    {
      "type": "field_dropdown",
      "name": "marker",
      "options": [
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
      "name": "color",
      "colour": "#ff0000"
    },
    {
      "type": "field_number",
      "name": "s",
      "value": 20
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
      "name": "line_color",
      "colour": "#ff0000"
    },
    {
      "type": "field_dropdown",
      "name": "line_style",
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
      "type": "field_number",
      "name": "thin",
      "value": 3
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, {
  "type": "pd_describe",
  "message0": "获取 %1 描述性统计信息",
  "args0": [
    {
      "type": "field_variable",
      "name": "item",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 285,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pd_dropna",
  "message0": "丢弃 %1 含有缺失值的行",
  "args0": [
    {
      "type": "field_variable",
      "name": "item",
      "variable": "item"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 285,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "pd_copy",
  "message0": "制作数据表格 %1 的一个副本",
  "args0": [
    {
      "type": "field_variable",
      "name": "item",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}]

Blockly.defineBlocksWithJsonArray(array)

var pd_fillna =
{
  "type": "pd_fillna",
  "message0": "填充 %1 的缺失值，策略是 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "item",
      "variable": "item"
    },
    {
      "type": "field_dropdown",
      "name": "strategy",
      "options": [
        [
          "前值填充",
          "ffill"
        ],
        [
          "后值填充",
          "bfill"
        ],
        [
          "指定值",
          "valuefill"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 285,
  "tooltip": "",
  "helpUrl": ""
}


Blockly.Blocks['pd_fillna'] = {
  init: function () {
    this.jsonInit(pd_fillna);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var dropdown = this.getField('strategy')
    dropdown.setValidator(this.validate)
    this.setInputsInline(true);

  },
  validate: function (dropdown_value) {
    if (dropdown_value == 'valuefill') {
      if(!this.getSourceBlock().getInput('use_value_fill')){
        this.getSourceBlock().appendValueInput('use_value_fill').setCheck(['Number']).appendField(':')
      }
    } else if (this.getSourceBlock().getInput('use_value_fill')) {
      this.getSourceBlock().removeInput('use_value_fill')
    }
  }
};



var list_json=
{
  "type": "fast_list",
  "message0": "",
  "inputsInline": true,
  "output": "Array",
  "colour": 255,
  "tooltip": "",
  "helpUrl": ""
}



Blockly.Blocks['fast_list'] = {
  init: function () {
    this.jsonInit(list_json);
    this.itemCount_=3;
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.updateShape_();
  },
  // These are the old XML serialization hooks for the lists_create_with block.
	mutationToDom: function () {
		// console.log('mutationToDom...')
		// You *must* create a <mutation></mutation> element.
		// This element can have children.
		var container = Blockly.utils.xml.createElement('mutation');
		container.setAttribute('items', this.itemCount_);
		return container;
	},

	domToMutation: function (xmlElement) {
		// console.log('domToMutation...')
		this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
		// This is a helper function which adds or removes inputs from the block.
		this.updateShape_();
	},
	// These are the decompose and compose functions for the lists_create_with block.
	decompose: function (workspace) {

		// console.log('decompose...')
		// This is a special sub-block that only gets created in the mutator UI.
		// It acts as our "top block"
		var topBlock = workspace.newBlock('dict_create_with_container');
		topBlock.initSvg();

		// Then we add one sub-block for each item in the list.
		var connection = topBlock.getInput('STACK').connection;
		for (var i = 0; i < this.itemCount_; i++) {
			var itemBlock = workspace.newBlock('lists_create_with_item');
			itemBlock.initSvg();
			connection.connect(itemBlock.previousConnection);
			connection = itemBlock.nextConnection;
		}

		// And finally we have to return the top-block.
		return topBlock;
	},

	// The container block is the top-block returned by decompose.
	compose: function (topBlock) {
		// console.log('compose...')
		// First we get the first sub-block (which represents an input on our main block).
		var itemBlock = topBlock.getInputTargetBlock('STACK');

		// Then we collect up all of the connections of on our main block that are
		// referenced by our sub-blocks.
		// This relates to the saveConnections hook (explained below).
		var connections = [];
		while (itemBlock && !itemBlock.isInsertionMarker()) { // Ignore insertion markers!
			connections.push(itemBlock.valueConnection_);
			itemBlock = itemBlock.nextConnection &&
				itemBlock.nextConnection.targetBlock();
		}

		// Then we disconnect any children where the sub-block associated with that
		// child has been deleted/removed from the stack.
		for (var i = 0; i < this.itemCount_; i++) {
			var connection = this.getInput('ADD' + i).connection.targetConnection;
			if (connection && connections.indexOf(connection) == -1) {
				connection.disconnect();
			}
		}

		// Then we update the shape of our block (removing or adding iputs as necessary).
		// `this` refers to the main block.
		this.itemCount_ = connections.length;
		this.updateShape_();

		// And finally we reconnect any child blocks.
		for (var i = 0; i < this.itemCount_; i++) {
			Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
		}
	},
	saveConnections: function (containerBlock) {
		var itemBlock = containerBlock.getInputTargetBlock('STACK');
		var i = 0;
		while (itemBlock) {
			var input = this.getInput('ADD' + i);
			itemBlock.valueConnection_ = input && input.connection.targetConnection;
			i++;
			itemBlock = itemBlock.nextConnection &&
				itemBlock.nextConnection.targetBlock();
		}
	},
	/**
	 * Modify this block to have the correct number of inputs.
	 * @private
	 * @this Blockly.Block
	 */
	updateShape_: function () {
		if (this.itemCount_ && this.getInput('EMPTY')) {
			this.removeInput('EMPTY');
		} else if (!this.itemCount_ && !this.getInput('EMPTY')) {
			this.appendDummyInput('EMPTY')
				.appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
		}
		// Add new inputs.
		for (var i = 0; i < this.itemCount_; i++) {
			if (!this.getInput('ADD' + i)) {
				var input = this.appendValueInput('ADD' + i);
				if (i == 0) {
					input.appendField('列表：');
				}else{
          input.appendField(', ');
        }
			}
		}
		// Remove deleted inputs.
		while (this.getInput('ADD' + i)) {
			this.removeInput('ADD' + i);
			i++;
		}
	}
};

var set_index_json = {
  "type": "pd_set_index",
  "message0": "设置 %1 的索引，类型是 %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "item",
      "variable": "item"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "表格中的列名",
          "col"
        ],
        [
          "新列表",
          "new_list"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "data"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['pd_set_index'] = {
  init: function () {
    this.jsonInit(set_index_json);
  }
};