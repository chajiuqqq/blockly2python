


workspaceTool = {}

samples={
    '折线图':`
    <xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
  <variables>
    <variable id="o,b=XdvDLD5eT8#+{$Ua">df</variable>
    <variable id="(dP,oCAGmYCHkN[$7y7L">item</variable>
  </variables>
  <block type="import_libs" id="am]S(X~_TOK0P+y_IGpw" x="27" y="55">
    <field name="sys">win</field>
    <next>
      <block type="variables_set" id="tmAE,C%Ari851aBLRcYJ">
        <field name="VAR" id="o,b=XdvDLD5eT8#+{$Ua">df</field>
        <value name="VALUE">
          <block type="pd_create_dataframe" id="5w=O#N:l7e5BibZ5LFCX">
            <value name="data">
              <block type="dict_create" id="0o*cJ^?c3Z6E8ah;?4^A">
                <mutation items="2"></mutation>
                <value name="ADD0">
                  <block type="dict_component" id="p}|oJ7i|J2F|m07hPlO+">
                    <value name="k">
                      <block type="text" id="*.4Qpj(([2*C\`O;@JpY4">
                        <field name="TEXT">A</field>
                      </block>
                    </value>
                    <value name="v">
                      <block type="fast_list" id="654}|+FeQgDx-^rBH8o#">
                        <mutation items="3"></mutation>
                        <value name="ADD0">
                          <block type="math_number" id="R4(fiK-mdhP5ze-s7r|9">
                            <field name="NUM">2</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="math_number" id=".d477ZMr[4XrIUmj}N2F">
                            <field name="NUM">7</field>
                          </block>
                        </value>
                        <value name="ADD2">
                          <block type="math_number" id="EAu(4+_6iKB4C\`[D%bxT">
                            <field name="NUM">12</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="dict_component" id="JqTpR[nd9l3T2mUDHA:D">
                    <value name="k">
                      <block type="text" id="5Atwh?ZZQx-iO#q\`wmO@">
                        <field name="TEXT">B</field>
                      </block>
                    </value>
                    <value name="v">
                      <block type="fast_list" id="-sj25Crj,pKeEFf|QYo~">
                        <mutation items="3"></mutation>
                        <value name="ADD0">
                          <block type="math_number" id="6*_{(VKniO!.]I:w%yjf">
                            <field name="NUM">23</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="math_number" id="}ltfY1Xdf3@of+jjnHi]">
                            <field name="NUM">17</field>
                          </block>
                        </value>
                        <value name="ADD2">
                          <block type="math_number" id="4YEs1O3YDD6v-*P*y$ex">
                            <field name="NUM">44</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="variables_set" id=",RLxK=ai~Y-2;I8{zvqN">
            <field name="VAR" id="(dP,oCAGmYCHkN[$7y7L">item</field>
            <value name="VALUE">
              <block type="pd_plot" id="yH08YGC}~_hd)I3/\`_(L">
                <field name="data" id="o,b=XdvDLD5eT8#+{$Ua">df</field>
                <field name="color">#00cccc</field>
                <field name="linestyle">dotted</field>
                <field name="x">1</field>
                <field name="y">2</field>
                <field name="marker">o</field>
                <field name="markerfacecolor">#ff0000</field>
                <field name="markersize">5</field>
              </block>
            </value>
            <next>
              <block type="show_img" id="J/BzzT[v8?VzLkqap/Wq">
                <field name="variable" id="(dP,oCAGmYCHkN[$7y7L">item</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
    `,
    '柱状图':`
    <xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
  <variables>
    <variable id="o,b=XdvDLD5eT8#+{$Ua">df</variable>
    <variable id="(dP,oCAGmYCHkN[$7y7L">item</variable>
  </variables>
  <block type="import_libs" id="am]S(X~_TOK0P+y_IGpw" x="27" y="55">
    <field name="sys">win</field>
    <next>
      <block type="variables_set" id="tmAE,C%Ari851aBLRcYJ">
        <field name="VAR" id="o,b=XdvDLD5eT8#+{$Ua">df</field>
        <value name="VALUE">
          <block type="pd_create_dataframe" id="5w=O#N:l7e5BibZ5LFCX">
            <value name="data">
              <block type="dict_create" id="0o*cJ^?c3Z6E8ah;?4^A">
                <mutation items="2"></mutation>
                <value name="ADD0">
                  <block type="dict_component" id="p}|oJ7i|J2F|m07hPlO+">
                    <value name="k">
                      <block type="text" id="*.4Qpj(([2*C\`O;@JpY4">
                        <field name="TEXT">A</field>
                      </block>
                    </value>
                    <value name="v">
                      <block type="fast_list" id="654}|+FeQgDx-^rBH8o#">
                        <mutation items="3"></mutation>
                        <value name="ADD0">
                          <block type="math_number" id="R4(fiK-mdhP5ze-s7r|9">
                            <field name="NUM">2</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="math_number" id=".d477ZMr[4XrIUmj}N2F">
                            <field name="NUM">7</field>
                          </block>
                        </value>
                        <value name="ADD2">
                          <block type="math_number" id="EAu(4+_6iKB4C\`[D%bxT">
                            <field name="NUM">12</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="dict_component" id="JqTpR[nd9l3T2mUDHA:D">
                    <value name="k">
                      <block type="text" id="5Atwh?ZZQx-iO#q\`wmO@">
                        <field name="TEXT">B</field>
                      </block>
                    </value>
                    <value name="v">
                      <block type="fast_list" id="-sj25Crj,pKeEFf|QYo~">
                        <mutation items="3"></mutation>
                        <value name="ADD0">
                          <block type="math_number" id="6*_{(VKniO!.]I:w%yjf">
                            <field name="NUM">23</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="math_number" id="}ltfY1Xdf3@of+jjnHi]">
                            <field name="NUM">17</field>
                          </block>
                        </value>
                        <value name="ADD2">
                          <block type="math_number" id="4YEs1O3YDD6v-*P*y$ex">
                            <field name="NUM">44</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="variables_set" id="Pt;kq[,8zRk-c2C?TZ*H">
            <field name="VAR" id="(dP,oCAGmYCHkN[$7y7L">item</field>
            <value name="VALUE">
              <block type="pd_plot_bar" id="q)-3-cP#)~H;=2,%x3Jl">
                <field name="variable" id="o,b=XdvDLD5eT8#+{$Ua">df</field>
                <field name="barh">bar</field>
                <field name="stacked">T</field>
                <field name="alpha">1</field>
              </block>
            </value>
            <next>
              <block type="show_img" id="J/BzzT[v8?VzLkqap/Wq">
                <field name="variable" id="(dP,oCAGmYCHkN[$7y7L">item</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
    `
}


/**
 * 导出工作区xml到下载
 * @param {} workspace 
 * @returns 
 */
workspaceTool.exportXML = function (workspace) {
    // Get file name.

    var fileName = prompt('File Name for pre-loaded workspace XML:',
        'workspace.xml');
    if (!fileName) {  // If cancelled.
        return;
    }

    var configXml = Blockly.Xml.domToPrettyText(
        this.generateWorkspaceXML(workspace));
    // Download file.
    var data = new Blob([configXml], { type: 'text/xml' });
    this.createAndDownloadFile(fileName, data);
}


/**
 * 从工作区生成xml元素
 * @param {*} workspace 
 * @returns 
 */
workspaceTool.generateWorkspaceXML = function (workspace) {
    // Generate XML and set attributes.
    var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    xmlDom.id = 'workspaceBlocks';
    xmlDom.setAttribute('style', 'display: none');
    console.log(xmlDom)
    return xmlDom;
}

/**
 * 提供文件下载
 * @param {*} filename 
 * @param {*} data 
 */
workspaceTool.createAndDownloadFile = function (filename, data) {
    var clickEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': false
    });
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(data);
    a.download = filename;
    a.textContent = 'Download file!';
    a.dispatchEvent(clickEvent);
};

/**
 * 导入workspace的xml到工作区
 * @param {*} file 
 * @param {*} workspace 
 * @returns 
 */
workspaceTool.importXML = function (file, workspace) {
    // Exit if cancelled.
    if (!file) {
        return;
    }

    Blockly.Events.disable();
    var reader = new FileReader();

    var controller = this;
    // To be executed when the reader has read the file.
    reader.onload = function () {
        // Try to parse XML from file and load it into toolbox editing area.
        // Print error message if fail.
        try {
            var tree = Blockly.Xml.textToDom(reader.result);

            // Confirm that the user wants to override their current blocks.
            if (workspace.getAllBlocks(false).length > 0) {
                var msg = 'Are you sure you want to import? You will lose your ' +
                    'current workspace blocks.';
                var continueAnyway = confirm(msg);
                if (!continueAnyway) {
                    return;
                }
            }

            // Import pre-loaded workspace XML.
            controller.importPreloadFromTree(tree, workspace);

            //更新代码区
            updateCodeArea()
        } catch (e) {
            var msg = 'Cannot load XML from file.';
            alert(msg);
            console.log(e);
        } finally {
            Blockly.Events.enable();
        }
    }

    // Read the file asynchronously.
    reader.readAsText(file);
};

/**
 * 导入sample示例
 * @param {} sample 
 * @param {*} workspace 
 * @returns 
 */
workspaceTool.importSampleXML = function (sample,workspace) {
    // Exit if cancelled.
    if (!sample) {
        return;
    }

    Blockly.Events.disable();

    var controller = this;
    try {
        var tree = Blockly.Xml.textToDom(samples[sample]);

        // Confirm that the user wants to override their current blocks.
        if (workspace.getAllBlocks(false).length > 0) {
            var msg = '确定导入新工作区吗？原先内容将被替换！';
            var continueAnyway = confirm(msg);
            if (!continueAnyway) {
                return;
            }
        }

        // Import pre-loaded workspace XML.
        controller.importPreloadFromTree(tree, workspace);

        //更新代码区
        updateCodeArea()
    } catch (e) {
        var msg = 'Cannot load XML from file.';
        alert(msg);
        console.log(e);
    } finally {
        Blockly.Events.enable();
    }
    
};

/**
 * Given a XML DOM tree, loads it into the pre-loaded workspace editing area.
 * Assumes that tree is in valid XML format and that the selected mode is
 * MODE_PRELOAD.
 * @param {!Element} tree XML tree to be loaded to pre-loaded block editing
 *   area.
 */
workspaceTool.importPreloadFromTree = function (tree, workspace) {
    this.clearAndLoadXml(tree, workspace);
};

/**
 * Clears the toolbox workspace and loads XML to it, marking shadow blocks
 * as necessary.
 * @private
 * @param {!Element} xml The XML to be loaded to the workspace.
 */
workspaceTool.clearAndLoadXml = function (xml, workspace) {
    workspace.clear();
    workspace.clearUndo();
    Blockly.Xml.domToWorkspace(xml, workspace);
};
