let startBtn = document.querySelector(".startBtn");
let startPage1=document.querySelector(".pageCont");
let question1=document.querySelector(".question1Cont");
let question2=document.querySelector(".question2Cont");
let question3=document.querySelector(".question3Cont");
let ageBtn=document.querySelector(".ageInput");
let ageInput=document.querySelector(".age");
let resultNum=0;
let sodaBtn=document.querySelector(".sodaOption");
let juiceBtn=document.querySelector(".juiceOption");
let ignoreBtn=document.querySelector(".ignoreOption");
let helpBtn=document.querySelector(".helpOption");
let result=document.querySelector(".result");
let resultImg=document.querySelector(".resultImg");
let resultText=document.querySelector(".resultText");
let resultDesc=document.querySelector(".resultDesc");
let perfect=document.querySelector(".perfect");


startBtn.addEventListener("click", function(){
    startPage1.style.display="none";
    question1.style.display="block";
});

ageBtn.addEventListener("click", function(){
    let ageValue=parseInt(ageInput.value);
    if(ageValue<=18){
        resultNum-=1;
        // console.log(resultNum);
    } else{
        resultNum+=1;
        // console.log(resultNum);
    }
    question1.style.display="none";
    question2.style.display="block";


});

sodaBtn.addEventListener("click", function(){
    resultNum-=1;
    question2.style.display="none";
    question3.style.display="block";
});

juiceBtn.addEventListener("click", function(){
    resultNum+=1;
    question2.style.display="none";
    question3.style.display="block";
});

helpBtn.addEventListener("click", function(){
    resultNum+=1;
    question3.style.display="none";
    console.log(resultNum);
     if(resultNum===-3){
        resultImg.src="https://images.theconversation.com/files/55033/original/6nd7xcnd-1406544822.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip";
        resultText.innerHTML="You're sewage water";
        resultDesc.innerHTML="You chose to be a leech on society with those choices which represents how you're just terrible and unhealthy water. Please do better. 🤢🤢"
    } else if (resultNum===-1){
        resultImg.src="https://quench.culligan.com/wp-content/uploads/2014/09/Does-Bottled-Water-Go-Bad-in-the-Heat_-%E2%80%94-Why-You-Should-Avoid-Warm-Plastic-Bottles-at-Work.jpg";
        resultText.innerHTML="You're normal water";
        resultDesc.innerHTML="You're aight I guess, but you can strive to do better";
    }else if (resultNum===1){
        resultImg.src="https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Is-Flavored-Sparkling-Water-Killing-Your-Weight-Loss-Goals_-1.jpg";
        resultText.innerHTML="You're ✨sparkling✨ water";
        resultDesc.innerHTML="You're mostly a good person, not quite Perfect though.";
        console.log(resultNum);
    }else if (resultNum===3){
        resultImg.src="https://luxurylifestyleawards.com/wp-content/uploads/2024/02/11-10.jpg";
        resultDesc.innerHTML="You're literally perfect. Children look up to you. Parents compare you to their children when bullying their children for not being successful. You're the cousin that owns the multimillion dollar business. Absolutely stunning 🤩"
        resultText.innerHTML="You are pure. luxury. water."
        perfect.play();

    }
    result.style.display="block"
});

ignoreBtn.addEventListener("click", function(){
    resultNum-=1;
    question3.style.display="none";
    if(resultNum===-3){
        resultImg.src="https://images.theconversation.com/files/55033/original/6nd7xcnd-1406544822.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip";
        resultText.innerHTML="You're sewage water";
        resultDesc.innerHTML="You chose to be a leech on society with those choices which represents how you're just terrible and unhealthy water. Please do better. 🤢🤢"
    } else if (resultNum===-1){
        resultImg.src="https://quench.culligan.com/wp-content/uploads/2014/09/Does-Bottled-Water-Go-Bad-in-the-Heat_-%E2%80%94-Why-You-Should-Avoid-Warm-Plastic-Bottles-at-Work.jpg";
        resultText.innerHTML="You're normal water";
        resultDesc.innerHTML="You're aight I guess, but you can strive to do better";
    }else if (resultNum===1){
        resultImg.src="https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Is-Flavored-Sparkling-Water-Killing-Your-Weight-Loss-Goals_-1.jpg";
        resultText.innerHTML="You're ✨sparkling✨ water";
        resultDesc.innerHTML="You're mostly a good person, not quite Perfect though.";
        console.log(resultNum);
    }else if (resultNum===3){
        resultImg.src="https://luxurylifestyleawards.com/wp-content/uploads/2024/02/11-10.jpg";
        resultText.innerHTML="You're literally perfect. Children look up to you. Parents compare you to their children when bullying their children for not being successful. You're the cousin that owns the multimillion dollar business. Absolutely stunning 🤩"

    }
    result.style.display="block"
});
