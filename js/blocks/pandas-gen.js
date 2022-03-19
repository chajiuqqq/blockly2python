Blockly.Python["import_pandas"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "import pandas as pd\n";
  code += `import matplotlib.pyplot as plt\n`
  code += `plt.rcParams["font.sans-serif"]=["SimHei"]\n`
  code += `plt.rcParams["axes.unicode_minus"]=False\n`

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
  var code = `${variable_name}.columns=${value_name}`;
  return code;
};

Blockly.Python["pd_set_index"] = function (block) {
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
  var code = `${variable_name}.set_index(${value_name})`;
  return code;
};

Blockly.Python["list"] = function (block) {
  var value_v1 = Blockly.Python.valueToCode(
    block,
    "v1",
    Blockly.Python.ORDER_NONE
  );
  var value_v2 = Blockly.Python.valueToCode(
    block,
    "v2",
    Blockly.Python.ORDER_NONE
  );
  var value_v3 = Blockly.Python.valueToCode(
    block,
    "v3",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `[${value_v1},${value_v2},${value_v3}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["list_2"] = function (block) {
  var value_r1 = Blockly.Python.valueToCode(
    block,
    "r1",
    Blockly.Python.ORDER_NONE
  );
  var value_r2 = Blockly.Python.valueToCode(
    block,
    "r2",
    Blockly.Python.ORDER_NONE
  );
  var value_r3 = Blockly.Python.valueToCode(
    block,
    "r3",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `[${value_r1},${value_r2},${value_r3}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_plot"] = function (block) {
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  var colour_color = block.getFieldValue('color');
  var dropdown_linestyle = block.getFieldValue('linestyle');
  var text_x = block.getFieldValue('x');
  var text_y = block.getFieldValue('y');
  var dropdown_marker = block.getFieldValue('marker');
  var colour_markerfacecolor = block.getFieldValue('markerfacecolor');
  var number_markersize = block.getFieldValue('markersize');

  var code = `${variable_data}.plot(x='${text_x}',y='${text_y}',kind='line',color='${colour_color}',linestyle='${dropdown_linestyle}'`;
  if(dropdown_marker!='None'){
    code += `,marker='${dropdown_marker}',markerfacecolor='${colour_markerfacecolor}',markersize=${number_markersize}`
  }
  code += ')'
  // TODO: Change ORDER_NONE to the correct strength.

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pd_plot_bar'] = function(block) {
  var variable_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_barh = block.getFieldValue('barh');
  var dropdown_stacked = block.getFieldValue('stacked');
  var number_alpha = block.getFieldValue('alpha');

  var code = `${variable_variable}.plot(kind='${dropdown_barh}',alpha=${number_alpha},`;
  // TODO: Assemble Python into code variable.
  if(dropdown_stacked == 'T'){
    code+=`stacked=True`
  }else{
    code+=`stacked=False`
  }
  code+=')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["pd_plot_show"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "plt.show()\n";
  return code;
};

Blockly.Python['pd_save_fig'] = function(block) {
  var text_filename = block.getFieldValue('filename');
  var text_ext = block.getFieldValue('ext');
  // TODO: Assemble Python into code variable.
  var code = `plt.savefig('${text_filename}${text_ext}')\n`;
  return code;
};

Blockly.Python['pd_get_column_by_loc'] = function(block) {
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.iloc[:,${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pd_get_column_by_name'] = function(block) {
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}[${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pd_get_row_by_loc'] = function(block) {
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.iloc[${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pd_set_new_column'] = function(block) {
  var variable_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_variable}[${value_column_name}] = ${value_data}\n`;
  return code;
};