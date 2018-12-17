import { dimensions } from './config/dimensions.js';
import { SheetDrawer } from './SheetDrawer.js';

export class ExerciseSheet {

    constructor() {
        this.dimensionsConfiguration = dimensions;
        this.SheetDrawer = new SheetDrawer(this.dimensionsConfiguration);
        this.drawCanvas(this.writingScriptsSelector.getCurrentScript())
    }

    drawCanvas(writingScript) {
        this.SheetDrawer.drawSheet(writingScript);
    }

}