  
function paintShop(painting, color) {
    let arr = JSON.parse(JSON.stringify(painting));
  
    arr.forEach(element => {
      if (element.colour === "Red") {
        element.colour = color;
      }
    });
    return arr;
  }
  module.exports = paintShop;