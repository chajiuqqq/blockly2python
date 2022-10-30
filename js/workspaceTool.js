


workspaceTool = {}

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
