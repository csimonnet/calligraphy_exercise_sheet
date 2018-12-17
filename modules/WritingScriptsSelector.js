import { writingScripts } from "../config/writingScripts.js";
import { WritingScript } from "../model/WritingScript.js";

class WritingScriptsSelector {

    constructor() {
        this.writingScripts = writingScripts.map(writingScript => new WritingScript(writingScript));
        this.scriptSelector = document.getElementsByTagName("script-selector")[0];
        this.initializeSelector();
    };

    initializeSelector() {
        this.htmlScriptSelector = document.createElement("select");
        this.htmlScriptSelector.id = "script-selector";
        for (let i = 0; i < this.writingScripts.length; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = this.writingScripts[i].getName();
            this.htmlScriptSelector.appendChild(option);
        }
        document.getElementsByTagName("body")[0].insertBefore(this.htmlScriptSelector, document.getElementsByTagName("canvas")[0]);
        this.registerEvents(this.htmlScriptSelector);
    };


    getCurrentScript()
    {
        return this.writingScripts[this.htmlScriptSelector.selectedIndex];
    }


    registerEvents() {
    };
}

export { WritingScriptsSelector };