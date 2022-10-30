export function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/webp");
    return dataURL.replace("data:image/webp;base64,", "");
}