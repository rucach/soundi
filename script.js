function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eudtcX3ZT/model.json', modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResult);
}