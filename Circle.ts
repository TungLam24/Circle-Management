class Circle {
    color: string
    radius: number
    constructor(color: string, radius: number) {
        this.color = color
        this.radius = radius
    }
}
let circle_arr: Circle[] = []
circle_arr.push(new Circle("yellow", 10))
circle_arr.push(new Circle("green", 15))
circle_arr.push(new Circle("blue", 20))
function displayCircle(circle: Circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circle_arr.forEach(displayCircle)