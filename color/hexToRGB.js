function convertToRGB(color)
{
    color = color.replace("#","");
    var colorArray = color.match(/.{1,2}/gi);
    var rgb = `rgb(${parseInt(colorArray[0],16)},${parseInt(colorArray[1],16)},${parseInt(colorArray[2],16)})`
    return rgb;
}

console.log(convertToRGB("#ffffff"));