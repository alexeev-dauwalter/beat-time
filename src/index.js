const { Beat } = require('./beat');

const beats = new Beat();

const start = (beats = new Beat(), bool = false) => {
    if (bool) {
        setInterval(() => console.log(beats.now), 864)
    } else {
        let beatsNow = beats.now;
        setInterval(() => {
            beatsNow += 0.01;
            beatsNow = +beatsNow.toFixed(2);
            if (beatsNow === 1000) beatsNow = 0;
            console.log(beatsNow);
        }, 864);
    }
}

// start(beats, true);
start(beats);