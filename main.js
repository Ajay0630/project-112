camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data_uri + "'>";
    })}

console.log("ml5.js version: " + ml5.version);

function preload() {  
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fyXV1MKYX/model.json');
    classifier.classify("image", gotResults);
}
function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
        var pre1 = results[0].label;
        document.getElementById("prediction").innerHTML = pre1;
    }}
