import {writable} from 'svelte/store';

// sketch 1
const s1 = function s1( p ) {

  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(127);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.fill(255, 127, 0);
    p.rect(x,y,50,50);
  };
};

const s2 = function s2( p ) {

  let x = 0;
  let y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(127);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.fill(255, 127, 0);
    p.rect(x,y,50,50);
  };
};

const s3 = function s3( p ) {

  let x = 25;
  let y = 25;

  let step = 10;
  let xend = 175;
  let yend = 175;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(127);
    p.noLoop();
    p.stroke (255);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255, 127, 0);


    for (let iter = x; iter <= xend; iter += step) {
      p.line (iter, y, x, yend - iter + y);
    }

  };
};

function sand (x1, y1, x2, y2, n, t, offset) {
  let xs = linspace (n, x1, x2);
  let ys = linspace (n, y1, y2);

  let pts = zip (xs, ys);

  let points = pts.map (e => e.map (el => el + random (-offset, offset)));
  points.forEach (e => point (e[0], e[1]));

}

//const zip = (arr, ...arrs) => {
function zip (arr, ...arrs) {
  return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
}

function linspace (n, mi, ma) {
  // get n numbers evenly distributed between (mi, ma).
  // includes the end values.
  let res = [];
  const s = (ma - mi) / (n-1);
  let y = mi;
  for (let i = 0; i < n; i++){
    res.push(y);
    y += s;
  }
  return res;
}


export const runtime = writable({
  s1, s2, s3, sand, zip, linspace
});

