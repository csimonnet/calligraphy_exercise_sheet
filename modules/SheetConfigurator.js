import { writingScripts } from "../config/writingScripts.js";
import { WritingScript } from "../model/WritingScript.js";
import { SheetConfiguration } from "../model/SheetConfiguration.js";

class SheetConfigurator {

    constructor() {
        this.sheetConfiguration = new SheetConfiguration();
        this.writingScripts = writingScripts.map(writingScript => new WritingScript(writingScript));
        this.scriptSelector = document.getElementById("configuration-script");
        this.nibSizeInput = document.getElementById("configuration-nib-size");
        this.initializeScriptSelector();
    };

    initializeScriptSelector() {
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

    updateScript() {

    }

    registerEvents() {
        this.scriptSelector.addEventListener("change", this.updateScript);
        this.nibSizeInput.addEventListener();

    };
}

export { SheetConfigurator };