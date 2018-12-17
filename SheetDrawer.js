class SheetDrawer {

    constructor(configuration) {
        this.configuration = configuration;
        this.canvasId = 'sheet-preview';
        this.initCanvas();
    }

    initCanvas() {

        this.canvas = document.getElementById(this.canvasId);
        this.canvas.width = this.configuration.width * this.configuration.dpi;
        this.canvas.height = this.configuration.height * this.configuration.dpi;

        this.canvas.style.width = this.canvas.width / this.configuration.preview_ratio + "px";
        this.canvas.style.height = this.canvas.height / this.configuration.preview_ratio + "px";
    }

    drawSheet(fontParameters, nibSize = 3) {
        if (this.canvas.getContext) {
            var ctx = this.canvas.getContext('2d');
            ctx.font = "15px Arial";
            var top = this.configuration.dpi / 2.54;
            const numberMax = 5;
            for(var j = 0; j < numberMax ; j++) {
               top = top + this.configuration.dpi / 2.54 * 2;
                this.drawNormalLine(ctx, this.canvas.width, top);
                for(var i = 0; i < fontParameters.nibStrokesNumber; i++) {
                    this.drawNibReference(ctx, this.convertMmToInches(nibSize) * this.configuration.dpi, top, i);
                    top = top + this.convertMmToInches(nibSize) * this.configuration.dpi;
                    this.drawLightLine(ctx, this.canvas.width, top);

                }
                this.drawNormalLine(ctx, this.canvas.width, top);
                top = top + this.convertMmToInches(nibSize) * 5;
            }
        }

    }

    drawNormalLine(context, x, y) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(x, y);
        context.strokeStyle = 'black';
        context.stroke();
    }

    drawLightLine(context, x, y) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(x, y);
        context.strokeStyle = '#E7E7E7';
        context.stroke();
    }

    drawNibReference(context, nibSize, y, index) {
        context.beginPath();
        context.fillStyle = "blue";
        context.fillRect(nibSize + (index % 2 == 0 ? nibSize : 0), y, nibSize, nibSize);
        context.stroke();
    }

    convertMmToInches($toConvert)
    {
        return $toConvert / 10 / 2.54;
    }
}

export { SheetDrawer };