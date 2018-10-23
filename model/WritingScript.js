class WritingScript {

    constructor(rawData) {
        this.name = rawData.name;
        this.nibStrokesNumber = rawData.nibStrokesNumber;
        this.baselines =  rawData.baselines;    
    }

    getName() {
        return this.name;
    }

    getNibStrokesNumber() {
        return this.nibStrokesNumber;
    }

    getBaselines() {
        return this.baselines;
    }

}

export { WritingScript };