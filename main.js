function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet",ModelLoaded);
  }
  
  function ModelLoaded(){
    console.log("MobileNet is Loaded!");
  }
  
  function draw(){
    image(video,0,300,300,300);
    classifier.classify(video,gotResult);
  }
  
  var previous_result = '';
  
  function gotResult(error,results){
    if (error){
      console.error(error);
    }
    else {
      if(previous_result != results[0].label){
        console.log(results);
        previous_result= results[0].label;
        var synth = window.speechSynthesis;
        speak_data = "Object Detected is"+results[0].label;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        document.getElementById("mini_result").innerHTML= results[0].label;
      }
    }
  }
  
  
  
  
  