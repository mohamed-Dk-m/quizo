const questions = [
  {
    "question": "من هو آخر نبي في الإسلام؟",
    "answers": [
      { "text": "النبي عيسى عليه السلام", "correct": false },
      { "text": "النبي محمد ﷺ", "correct": true },                 
      { "text": "النبي موسى عليه السلام", "correct": false },
      { "text": "النبي إبراهيم عليه السلام", "correct": false }
    ]
  },
  {
    "question": "ما هو الكتاب المقدس في الإسلام؟",
    "answers": [
      { "text": "القرآن الكريم", "correct": true },
      { "text": "التوراة", "correct": false },
      { "text": "الإنجيل", "correct": false },
      { "text": "الزبور", "correct": false }
    ]
  },
  {
    "question": "في أي مدينة وُلِد النبي محمد ﷺ؟",
    "answers": [
      { "text": "المدينة المنورة", "correct": false },
      { "text": "مكة المكرمة", "correct": true },
      { "text": "القدس", "correct": false },
      { "text": "الطائف", "correct": false }
    ]
  },
  {
    "question": "كم عدد أركان الإسلام؟",
    "answers": [
      { "text": "أربعة", "correct": false },
      { "text": "ستة", "correct": false },
      { "text": "خمسة", "correct": true },
      { "text": "سبعة", "correct": false }
    ]
  },
  {
    "question": "في أي شهر يصوم المسلمون؟",
    "answers": [
      { "text": "محرم", "correct": false },
      { "text": "رجب", "correct": false },
      { "text": "شعبان", "correct": false },
      { "text": "رمضان", "correct": true }
    ]
  },
  {
    "question": "إلى أي جهة يتوجه المسلمون في الصلاة؟",
    "answers": [
      { "text": "القدس", "correct": false },
      { "text": "المدينة", "correct": false },
      { "text": "الكعبة في مكة", "correct": true },
      { "text": "القبلة", "correct": true }
    ]
  },
  {
    "question": "ما هو الركن الأول من أركان الإسلام؟",
    "answers": [
      { "text": "الصلاة", "correct": false },
      { "text": "الشهادتان (شهادة أن لا إله إلا الله وأن محمدًا رسول الله)", "correct": true },
      { "text": "الزكاة", "correct": false },
      { "text": "الصوم", "correct": false }
    ]
  },
  {
    "question": "كم عدد الصلوات المفروضة في اليوم؟",
    "answers": [
      { "text": "خمس صلوات", "correct": true },
      { "text": "ثلاث صلوات", "correct": false },
      { "text": "ست صلوات", "correct": false },
      { "text": "أربع صلوات", "correct": false }
    ]
  },
  {
    "question": "ما اسم الليلة التي نزل فيها القرآن الكريم لأول مرة؟",
    "answers": [
      { "text": "ليلة الإسراء", "correct": false },
      { "text": "ليلة المعراج", "correct": false },
      { "text": "ليلة القدر", "correct": true },
      { "text": "ليلة البراءة", "correct": false }
    ]
  },
  {
    "question": "أين دُفن النبي محمد ﷺ؟",
    "answers": [
      { "text": "مكة المكرمة", "correct": false },
      { "text": "المدينة المنورة", "correct": true },
      { "text": "القدس", "correct": false },
      { "text": "الطائف", "correct": false }
    ]
  }
];









const quest = document.getElementById("questions");
let answerButtons = document.querySelectorAll(".answers button:not(#playAgain)");
const title = document.getElementById("title");
const playAgain = document.getElementById("playAgain");

let currentQuestIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuest = questions[currentQuestIndex];
    quest.textContent = currentQuest.question;
  
    answerButtons.forEach((button, index) => {
      const answer = currentQuest.answers[index];

      if (answer) {
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        button.style.display = "block";
      }else {
        button.style.display = "none"; 
      }

      button.style.background = "linear-gradient(90deg, #16a34a, #4ade80)";
      button.disabled = false;
    });

  }
answerButtons.forEach(button => {
    button.addEventListener("click", () => {
        const isCorrect = button.dataset.correct === "true";
        
        if (isCorrect) {
            button.style.background = "#007824ff";
            score++;
        } else {
            button.style.background = "red";
        }
        
    answerButtons.forEach(btn => (btn.disabled = true));
      
    setTimeout(() => {
        currentQuestIndex++;
        if (currentQuestIndex < questions.length) {
            showQuestion();
        } else {
          showResult();
           /*  title.textContent = "congratulation 🎉";
          
            quest.textContent = "Quiz Finished!";
            answerButtons.forEach(btn => {
                btn.style.display = "none"; */

              /*   playAgain.textContent = "play again!"
               Object.assign(playAgain.style, {
                display: "block",
                color: "black",
                backgroundColor: "rgb(232, 231, 229)"
               });
               
               playAgain.addEventListener("click", ()=>{
                currentQuestIndex = 0;
                playAgain.style.display = "none";
                btn.style.display = "block";
                showQuestion();
               });
              }); */
        }
    }, 1000);
});
});

function showResult() {
  quest.textContent = `Your result : ${score}/${questions.length}`;
  title.textContent = "congratulation 🎉";
   answerButtons.forEach(btn => (btn.style.display = "none"));
      playAgain.style.display = "block";
      
    }
  
      playAgain.addEventListener("click", () => {
        currentQuestIndex = 0;
        score = 0;
        playAgain.style.display = "none";
        showQuestion();
        title.textContent = "Chose the right answer!"
      });
showQuestion();



