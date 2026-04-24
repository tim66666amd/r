function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // 警報閃爍邏輯：每 30 幀切換一次紅色深淺
  if (frameCount % 60 < 30) {
    background(255, 0, 0); // 亮紅
  } else {
    background(100, 0, 0); // 深紅
  }

  let s = min(width, height) * 0.2; // 根據螢幕大小決定三角形尺寸

  // 繪製白色空心三角形
  stroke(255);
  strokeWeight(10);
  noFill();
  triangle(
    width / 2, height / 2 - s,          // 頂點
    width / 2 - s, height / 2 + s,      // 左下角
    width / 2 + s, height / 2 + s       // 右下角
  );

  // 繪製三角形中間的驚嘆號
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(s * 1.2);
  text('!', width / 2, height / 2 + s * 0.3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
