let config = {
  TABLE_SIZE: 6,
  TOY_SIZE: 10,
  RECTANGLE_SIZE: 60
};

if (typeof window.orientation !== 'undefined') {
  config.RECTANGLE_SIZE = config.RECTANGLE_SIZE / 2;
}

module.exports = config;