import { dimensions } from './config/dimensions.js';
import { SheetDrawer } from './SheetDrawer.js';
import { WritingScriptsSelector } from './modules/WritingScriptsSelector.js'; 

export class ExerciseSheet {

    constructor() {
        this.dimensionsConfiguration = dimensions;
        this.SheetDrawer = new SheetDrawer(this.dimensionsConfiguration);
        this.writingScriptsSelector = new WritingScriptsSelector();
        this.drawCanvas(this.writingScriptsSelector.getCurrentScript())
    }

    drawCanvas(writingScript) {
        this.SheetDrawer.drawSheet(writingScript);
    }

}