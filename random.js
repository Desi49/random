var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0,0,500,200,"white")
    makeCircle(50,30,25,"black")
    makeCircle(50,30,10,"white")
    makeCircle(150,30,25,"black")
    makeCircle(150,30,10,"white")
    makeCircle(55,30,5,"lightblue")
    makeCircle(155,30,5,"lightblue")
    makeEllipse(50,100,25,35,"hotpink")
    makeEllipse(150, 75, 45,20, "black")
    makeLine(55,0,100,30,"black",5)
    makeLine(150,0,100,30,"black",5)
    
    var penguino = Math.random()
    if (penguino > 0.5) {
    makeImage("http://3.bp.blogspot.com/-GAbf7eeilSM/UFhuOLH0FPI/AAAAAAAAF1M/l2xHtDIhPCY/s1600/penguinus%20Madagascar%202%20transparent.png", 200, 100, 100, 100)
    }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
makeRect(0,0,500,200,"black")
makeEllipse(85,20,20,15,"dodgerblue")
makeEllipse(85,20,17,13,"grey")

makeLine(85,35,85,45,"grey",3)
makeLine(100,65,110,45,"grey",3)
makeLine(70,65,60,45,"grey",3)
makeLine(90,75,110,100,"grey",3)
makeLine(77,75,55,100,"grey",3)

makeRect(70,45,30,35,"dodgerblue")
makeRect(75,47,20,10,"black")
makeRect(77.5,48.5,15,7,"grey")

makeCircle(73,60,2.5,"grey")
makeCircle(80,60,2.5,"grey")
makeCircle(78,17,7,"dodgerblue")
makeCircle(93,17,7,"dodgerblue")
makeCircle(93,17,4,"#474747")
makeCircle(78,17,4,"#474747")

var sun = Math.random() 
if (sun > 0.5) {
makeImage("http://images.clipartpanda.com/sun-transparent-background-sun_strong_bold_T.png", 0, 0, 50, 50, 1)
    }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
makeRect(0,0,500,200,"black")
makeRect(100, 60, 250, 100, "grey")
makeCircle(150, 100, 15, "darkblue")
makeCircle(300, 100, 15, "darkblue")
makeRect(175, 100, 100, 40, "maroon")
var teeth = Math.random()
if (teeth > 0.5) {
makeRect(175, 100, 10, 17, "white")
makeRect(190, 100, 10 , 17, "white")
makeRect(205, 100, 10, 17, "white")
    }
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    var myNumber = Math.random()
    if(myNumber<0.33){
    createFirstScene()
    }
    else if (myNumber<0.67) {
    
      createSecondScene()
    }else {
      createThirdScene()
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity, transform) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  rect.setAttribute("transform", transform)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
