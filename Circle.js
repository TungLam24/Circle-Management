var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circle_arr = [];
circle_arr.push(new Circle("yellow", 10));
circle_arr.push(new Circle("green", 15));
circle_arr.push(new Circle("blue", 20));
function displayCircle(circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circle_arr.forEach(displayCircle);
