function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5s6VwO_K1/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}