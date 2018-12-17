function draw()
{
    const dpi = 300;
    const canvasWidthInches = 8.27;
    const canvasHeightInches = 11.69;

    const canvasHeight = canvasHeightInches * dpi;
    const canvasWidth = canvasWidthInches * dpi;

    var canvas = document.getElementById("sheet-preview");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvas.style.width = (canvasWidthInches / (8.27 * 2) * 100) + "%";
    canvas.style.height = Math.round(canvasHeightInches / (8.27 * 2) * innerWidth) + "px";


    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.font = "15px Arial";
        const fontParameters = getFont();
        const fontParametersMaj = fontParameters.maj;

        var top = dpi * 1 / 2.54;
        ctx.beginPath();
        ctx.fillText(fontParameters.name + ' - Uppercase - Nib Size : ' + fontParametersMaj.nibSize + 'mm', 10, 50);
        ctx.stroke();

        const effectiveHeight = canvasHeight - top - 2 / 2.54;
        const numberMax = Math.trunc(effectiveHeight / (fontParametersMaj.lineNibHeightCount * convertMmToInches(fontParametersMaj.nibSize) * dpi) - convertMmToInches(fontParametersMaj.nibSize) * 5);

        for(var j = 0; j < numberMax - 1; j++) {
            top = top + dpi * 1 / 2.54;
            drawNormalLine(canvasWidth, ctx, top);
            for(var i = 0; i < fontParametersMaj.lineNibHeightCount; i++) {
                drawNibReference(ctx, convertMmToInches(fontParametersMaj.nibSize) * dpi, top, i);
                top = top + convertMmToInches(fontParametersMaj.nibSize) * dpi;
                if(i !== fontParametersMaj.lineNibHeightCount - 1) {
                    drawLightLine(canvasWidth, ctx, top);
                }
            }
            drawNormalLine(canvasWidth, ctx, top);
            top = top + convertMmToInches(fontParametersMaj.nibSize) * 5;
        }

    }
}

function drawNormalLine(pageWidth, context, y) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(pageWidth, y);
    context.strokeStyle = 'black';
    context.stroke();
}

function drawLightLine(pageWidth, context, y) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(pageWidth, y); //trace the line
    context.strokeStyle = '#E7E7E7';
    context.stroke();
}

function drawNibReference(context, nibSize, y, index) {
    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(10 + (index % 2 == 0 ? 10 : 0), y, nibSize, nibSize);
    context.stroke();
}


function getFont() {
    return {
        "name": "Gothique Primitive",
        "maj": {
            "nibSize": 2,
            "lineNibHeightCount": 9,
            "baseline": 9,
            "characters": ["A", "B"]
        }
    }
}

function convertMmToInches($toConvert)
{
    return $toConvert / 10 / 2.54;
}
