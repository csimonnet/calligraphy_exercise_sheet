import { dimensions } from './config/dimensions.js';
import { SheetDrawer } from './modules/SheetDrawer.js';
import { SheetConfigurator } from './modules/SheetConfigurator.js';
export class ExerciseSheet {

    constructor() {
        this.sheetConfigurator = new SheetConfigurator();
        this.dimensionsConfiguration = dimensions;
        this.SheetDrawer = new SheetDrawer(this.dimensionsConfiguration);
        this.drawCanvas(this.sheetConfigurator.getCurrentScript())
    }

    drawCanvas(writingScript) {
        this.SheetDrawer.drawSheet(writingScript);
    }

}