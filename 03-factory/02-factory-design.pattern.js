class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.cos(theta)
        );
    }

    static get factory() {
        return new PointFactory;
    }
}


class PointFactory {
    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }
}

const p = Point.point.newCartesianPoint(4,5);