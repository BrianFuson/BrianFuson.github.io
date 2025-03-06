let x = 10;
let y = 10;

let bx;
let by;
let bw;
let bh;

function setup() {
  // let button = createButton("New Flag");
  // button.mousePressed(resetSketch);
  // let button2 = createButton("Full Screen");
  // button2.mousePressed(fullScreen);

  document.getElementById("myButton").addEventListener("click", resetSketch);
  resetSketch();
}

function resetSketch() {
  var rectangles = [];
  var stars = [];
  reset();

  createCanvas(4940 / 5, 2600 / 5);

  background(random(230, 255));

  var bx = random(0, 3400 / 5);
  var by = random(0, 1500 / 5);
  var bw = random(1000 / 5, 2200 / 5);
  var bh = random(800 / 5, 2000 / 5);

  var overlapping = false;

  var protection = 0;

  while (rectangles.length < 6) {
    var rectangle = {
      x: 0,
      y: random(150 / 5, 2400 / 5),
      w: 4940,
      h: random(15 / 5, 500 / 5),
    };

    var overlapping = false;

    for (var j = 0; j < rectangles.length; j++) {
      var other = rectangles[j];
      var d = dist(rectangle.x, rectangle.y, other.x, other.y);
      if (d < rectangle.h + other.h) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      rectangles.push(rectangle);
    }
    protection++;

    if (protection > 10000) {
      break;
    }
  }
  for (var i = 0; i < rectangles.length; i++) {
    fill(random(100, 255), random(0, 30), random(0, 30), random(190, 255));
    noStroke();
    rect(rectangles[i].x, rectangles[i].y, rectangles[i].w, rectangles[i].h);
  }

  //end of stripes

  fill(random(0, 100), random(0, 130), random(100, 255));
  rect(bx, by, bw + 20, bh + 20);

  var overlapping = false;

  var protection = 0;

  while (stars.length < 50) {
    var star = {
      x: random(bw) + bx,
      y: random(bh) + by,
      r1: random(15, 30),
      r2: random(50, 70),
      n: 5,
    };

    var overlapping = false;

    for (var j = 0; j < stars.length; j++) {
      var other = stars[j];
      var d = dist(star.x, star.y, other.x, other.y);
      if (d < star.r2 * 0.3 + other.r2 * 0.3) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      stars.push(star);
    }
    protection++;

    if (protection > 10000) {
      break;
    }
  }
  for (var i = 0; i < stars.length; i++) {
    fill(random(220, 255));
    noStroke();
    Star(
      stars[i].x,
      stars[i].y,
      stars[i].r1 * 0.3,
      stars[i].r2 * 0.3,
      stars[i].n
    );
  }

  function Star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(random(0, 5) + sx, random(0, 5) + sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(random(0, 5) + sx, random(0, 5) + sy);
    }
    endShape(CLOSE);
  }
}

function Star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(random(0, 5) + sx, random(0, 5) + sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(random(0, 5) + sx, random(0, 5) + sy);
  }
  endShape(CLOSE);
}

// function fullScreen() {
//   let fs = fullscreen();
//   fullscreen(!fs);
// }

function reset() {
  x = 10;
  y = 10;
  clear();
}
