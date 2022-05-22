function findContrastColour(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b
    })

    console.log(hex)
    //convert hex to rgb
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    console.log(rgb)

    // map RGB values to variables
    var r = parseInt(rgb[1], 16),
        g = parseInt(rgb[2], 16),
        b = parseInt(rgb[3], 16)

    // calculate contrast of color (standard grayscale algorithmic formula)
    var contrast = (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000

    return contrast >= 128 ? "black" : "white"
}

export default findContrastColour
