function solarSystemBallistics(body, a, v) {

    let stellarBodies = {
        Sun: 274.0,
        Mercury: 3.7,
        Venus: 8.87,
        Earth: 9.807,
        Mars: 3.711,
        Jupiter: 24.79,
        Saturn: 10.44,
        Uranus: 8.69,
        Neptune: 11.15,
        Moon: 1.62,
        Pluto: 0.62,
        Ganymede: 1.428,
        Callisto: 1.235,
        Io: 1.796,
        Europa: 1.314,
        Titan: 1.352,
    }
    a = toRadians(a);
    return Math.abs((2 * Math.pow(v, 2) * Math.sin(a) * Math.cos(a)) / stellarBodies[body]);
}


function toRadians(angle) {
    return angle * (Math.PI / 180);
}

console.log(solarSystemBallistics('Earth', 20, 100));
