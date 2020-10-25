function rectangleArea(base, height) {
  if (typeof base !== 'number' || typeof height !== 'number' || base <= 0 || height <= 0) return null;
  return base * height;
}

module.exports = rectangleArea;