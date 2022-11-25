Blockly.Python["import_libs"] = function (block) {
  // TODO: Assemble Python into code variable.

  var dropdown_sys = block.getFieldValue("sys");
  //win,mac
  var code = "import pandas as pd\n";
  code += `import matplotlib.pyplot as plt\n`;
  code += `import statistics\n`;
  code += `import math\n`;
  code += `import io, base64\n`
  code += `plt.rcParams["axes.unicode_minus"]=False\n`;

  if (dropdown_sys == "mac") {
    code += `plt.rcParams['font.sans-serif'] = ['Arial Unicode MS']\n\n`;
  }
  if (dropdown_sys == "win") {
    code += `plt.rcParams["font.sans-serif"]=["SimHei"]\n\n`;
  }

  return code;
};
Blockly.Python["pd_create_series"] = function (block) {
  var value_data = Blockly.Python.valueToCode(
    block,
    "data",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `pd.Series(${value_data})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_create_dataframe"] = function (block) {
  var value_data = Blockly.Python.valueToCode(
    block,
    "data",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `pd.DataFrame(${value_data})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_set_columns"] = function (block) {
  var variable_name = Blockly.Python.nameDB_.getName(
    block.getFieldValue("NAME"),
    Blockly.Variables.NAME_TYPE
  );
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.columns=${value_name}\n`;
  return code;
};

Blockly.Python["pd_set_index"] = function (block) {
  var variable_name = Blockly.Python.nameDB_.getName(
    block.getFieldValue("item"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_type = block.getFieldValue("type");
  var value_data = Blockly.Python.valueToCode(
    block,
    "data",
    Blockly.Python.ORDER_ATOMIC
  );
  var tmp = "";
  // TODO: Assemble Python into code variable.
  if (dropdown_type == "new_list") {
    tmp = `pd.Index(${value_data})`;
  } else {
    tmp = value_data;
  }

  var code = `${variable_name}.set_index(${tmp},inplace=True)\n`;
  return code;
};

Blockly.Python["pd_plot"] = function (block) {
  var variable_data = Blockly.Python.nameDB_.getName(
    block.getFieldValue("data"),
    Blockly.Variables.NAME_TYPE
  );
  var colour_color = block.getFieldValue("color");
  var dropdown_linestyle = block.getFieldValue("linestyle");
  var number_x = block.getFieldValue("x") - 1;
  var number_y = block.getFieldValue("y") - 1;
  var dropdown_marker = block.getFieldValue("marker");
  var colour_markerfacecolor = block.getFieldValue("markerfacecolor");
  var number_markersize = block.getFieldValue("markersize");

  var code = `${variable_data}.plot(x=${number_x},y=${number_y},kind='line',color='${colour_color}',linestyle='${dropdown_linestyle}'`;
  if (dropdown_marker != "None") {
    code += `,marker='${dropdown_marker}',markerfacecolor='${colour_markerfacecolor}',markersize=${number_markersize}`;
  }
  code += ")\n";
  // TODO: Change ORDER_NONE to the correct strength.

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_plot_scatter"] = function (block) {
  var variable_data = Blockly.Python.nameDB_.getName(
    block.getFieldValue("data"),
    Blockly.Variables.NAME_TYPE
  );
  var colour_color = block.getFieldValue("color");
  var dropdown_name = block.getFieldValue("NAME");
  var number_s = block.getFieldValue("s");
  var number_xlabel = block.getFieldValue("xlabel") - 1;
  var number_ylabel = block.getFieldValue("ylabel") - 1;
  // TODO: Assemble Python into code variable.
  var code = `${variable_data}.plot.scatter(x=${number_xlabel},y=${number_ylabel},s=${number_s},c='${colour_color}',marker='${dropdown_name}')\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_plot_scatter_line"] = function (block) {
  var variable_data = Blockly.Python.nameDB_.getName(
    block.getFieldValue("data"),
    Blockly.Variables.NAME_TYPE
  );
  var colour_color = block.getFieldValue("color");
  var number_s = block.getFieldValue("s");
  var dropdown_name = block.getFieldValue("marker");
  var number_xlabel = block.getFieldValue("xlabel") - 1;
  var number_ylabel = block.getFieldValue("ylabel") - 1;
  var colour_line_color = block.getFieldValue("line_color");
  var dropdown_line_style = block.getFieldValue("line_style");
  var number_thin = block.getFieldValue("thin");

  // TODO: Assemble Python into code variable.
  var code = `import statistics\n`;
  code += `ax1 = ${variable_data}.plot.scatter(x=${number_xlabel},y=${number_ylabel},s=${number_s},c='${colour_color}',marker='${dropdown_name}')\n`;
  code += `slope,intercept = statistics.linear_regression(${variable_data}.iloc[:,${number_xlabel}], ${variable_data}.iloc[:,${number_ylabel}])
x = ${variable_data}.iloc[:,${number_xlabel}]
new_y = slope * x + intercept
new_df = pd.DataFrame({df.columns[${number_xlabel}]:x,df.columns[${number_ylabel}]:new_y})
new_df.plot(x=0,y=1,ax=ax1,color='${colour_line_color}',ls='${dropdown_line_style}',lw=${number_thin},legend=False)
\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python["pd_plot_bar"] = function (block) {
  var variable_variable = Blockly.Python.nameDB_.getName(
    block.getFieldValue("variable"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_barh = block.getFieldValue("barh");
  var dropdown_stacked = block.getFieldValue("stacked");
  var number_alpha = block.getFieldValue("alpha");

  var code = `${variable_variable}.plot(kind='${dropdown_barh}',alpha=${number_alpha},`;
  // TODO: Assemble Python into code variable.
  if (dropdown_stacked == "T") {
    code += `stacked=True`;
  } else {
    code += `stacked=False`;
  }
  code += ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_plot_show"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "plt.show()\n";
  return code;
};

Blockly.Python["pd_save_fig"] = function (block) {
  var text_filename = block.getFieldValue("filename");
  var text_ext = block.getFieldValue("ext");
  // TODO: Assemble Python into code variable.
  var code = `plt.savefig('${text_filename}${text_ext}')\n`;
  return code;
};

Blockly.Python["pd_get_column_by_loc"] = function (block) {
  var variable_name = Blockly.Python.nameDB_.getName(
    block.getFieldValue("NAME"),
    Blockly.Variables.NAME_TYPE
  );
  var value_name =
    Blockly.Python.valueToCode(block, "NAME", Blockly.Python.ORDER_NONE) - 1;
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.iloc[:,${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_get_column_by_name"] = function (block) {
  var variable_name = Blockly.Python.nameDB_.getName(
    block.getFieldValue("NAME"),
    Blockly.Variables.NAME_TYPE
  );
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}[${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_get_row_by_loc"] = function (block) {
  var variable_name = Blockly.Python.nameDB_.getName(
    block.getFieldValue("NAME"),
    Blockly.Variables.NAME_TYPE
  );
  var value_name =
    Blockly.Python.valueToCode(block, "NAME", Blockly.Python.ORDER_ATOMIC) - 1;
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.iloc[${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_set_new_column"] = function (block) {
  var variable_variable = Blockly.Python.nameDB_.getName(
    block.getFieldValue("variable"),
    Blockly.Variables.NAME_TYPE
  );
  var value_column_name = Blockly.Python.valueToCode(
    block,
    "column_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_data = Blockly.Python.valueToCode(
    block,
    "data",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `${variable_variable}[${value_column_name}] = ${value_data}\n`;
  return code;
};

Blockly.Python["pd_read_excel"] = function (block) {
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `pd.read_excel(${value_name},engine='openpyxl')\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// 数据预处理

Blockly.Python["pd_describe"] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(
    block.getFieldValue("item"),
    Blockly.Variables.NAME_TYPE
  );
  // TODO: Assemble Python into code variable.
  var code = `${variable_item}.describe()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_dropna"] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(
    block.getFieldValue("item"),
    Blockly.Variables.NAME_TYPE
  );
  // TODO: Assemble Python into code variable.
  var code = `${variable_item} = ${variable_item}.dropna()\n`;
  return code;
};

Blockly.Python["pd_fillna"] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(
    block.getFieldValue("item"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_strategy = block.getFieldValue("strategy");
  // TODO: Assemble Python into code variable.

  var code;
  code = `${variable_item} = ${variable_item}.fillna(method='${dropdown_strategy}')\n`;
  if (dropdown_strategy == "valuefill") {
    var value_data = Blockly.Python.valueToCode(
      block,
      "use_value_fill",
      Blockly.Python.ORDER_NONE
    );
    code = `${variable_item} = ${variable_item}.fillna(${value_data})\n`;
  }
  return code;
};

Blockly.Python["fast_list"] = function (block) {
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] =
      Blockly.Python.valueToCode(block, "ADD" + n, Blockly.Python.ORDER_NONE) ||
      "None";
  }
  code = "[" + code.join(", ") + "]";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["pd_copy"] = function (block) {
  var variable_item = Blockly.Python.nameDB_.getName(
    block.getFieldValue("item"),
    Blockly.Variables.NAME_TYPE
  );
  // TODO: Assemble Python into code variable.
  var code = `${variable_item}.copy()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['show_img'] = function(block) {
  var variable_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 
  `_fig = ${variable_variable}.get_figure()
_buf = io.BytesIO()
_fig.savefig(_buf, format='png')
_buf.seek(0)
_img_str = 'data:image/png;base64,' + base64.b64encode(_buf.read()).decode('UTF-8')\n`;
  return code;
};