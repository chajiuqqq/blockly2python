
const output = document.getElementById("output");

function addToOutput(s) {
    output.innerHTML += ">>>  " + s + "\n";
}

output.innerHTML = "Initializing...\n";

function clearOutput() {
    output.innerHTML = 'Ready!\n'
}


let pyodide 

async function runPython() {
    // run code currently stored in editor
    let code_to_run = editor.getValue()
    pyodide.globals.set('code_to_run',code_to_run);
    addToOutput(pyodide.runPython('run_code(code_to_run)'));

    let a = pyodide.globals.get('_img_str')
    if(a){
        output.innerHTML += `<img style="width: 100% ;" src="${a}" />`
        pyodide.globals.set('_img_str','')
    }
}
async function main(){
    pyodide = await loadPyodide();
    
    // await pyodide.loadPackagesFromImports(code_to_run);
    await pyodide.loadPackage(['pandas','matplotlib']);
    var setup_code = `
  import sys, io, traceback
  namespace = {}  # use separate namespace to hide run_code, modules, etc.
  def run_code(_code):
    """run specified code and return stdout and stderr"""
    _out = io.StringIO()
    _oldout = sys.stdout
    _olderr = sys.stderr
    sys.stdout = sys.stderr = _out
    try:
        # change next line to exec(code, {}) if you want to clear vars each time
        exec(_code,globals())
    except:
        traceback.print_exc()
  
    sys.stdout = _oldout
    sys.stderr = _olderr
    return _out.getvalue()
  `
    pyodide.runPython(setup_code)

    output.innerHTML += 'Ready!\n'
}
 
main()

// run setup_pyodide() when pyodide finishes loading
// languagePluginLoader.then(setup_pyodide)
