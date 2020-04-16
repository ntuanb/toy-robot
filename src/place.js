module.exports = {
  place() {
    console.log('place');
  },
  valildate() {

  },
  split(option) {
    let options = option.split(',');
    
    return {
      x: options[0],
      y: options[1],
      face: options[2],
    }
  }
}