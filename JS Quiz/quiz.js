var quizdata=[
    {
        question : "which framework is used for building user interfaces?",
        a : "React",
        b : "Angular",
        c : "Vue",
        d : "Ember",
        correct : "a"
    },
     {
        question :'which of the following is not a programming language?',
        a : "Python",
        b : "Java",
        c : "Ruby",
        d : "HTML",
        correct : "d"
     },
     {
        question : "which is not a framework?",
        a : "Django",
        b : "Flask",
        c : "Bootstrap",
        d : "Laravel",
        correct : "c"   
      },
      {
         question: "css stands for?",
         a: "Cascading Style Sheet",
         b: "Creative Style Sheet",
         c: "Computer Style Sheet",
         d: "Colorful Style Sheet",
        correct: "a"
    }
]
var quiz=document.getElementById('quiz');
var question=document.getElementById('question');
var answer=document.querySelectorAll('.answer');
var opt_a=document.getElementById('a_value');
var opt_b=document.getElementById('b_value');
var opt_c=document.getElementById('c_value');
var opt_d=document.getElementById('d_value');

var submit=document.getElementById('submit');

var currentQuestion=0;
var score=0;

loadQuiz();

function loadQuiz(){

    deselectAnswers();
    question.innerHTML=quizdata[currentQuestion].question;
    opt_a.innerText=quizdata[currentQuestion].a;
    opt_b.innerText=quizdata[currentQuestion].b;
    opt_c.innerText=quizdata[currentQuestion].c;
    opt_d.innerText=quizdata[currentQuestion].d;  
}
function deselectAnswers(){
    answer.forEach(answer=>answer.checked=false)
    }
submit.addEventListener('click',()=>{
        var selectedoption;
        answer.forEach(answer=>{
            if(answer.checked)
            {
                selectedoption=answer.id;
            }
        })
        if(selectedoption==quizdata[currentQuestion].correct)
        {
            score=score+1;

        }
        currentQuestion++;
        if(currentQuestion==quizdata.length){
            document.getElementById('quiz').innerHTML=`<h2>Your score is ${score}/${quizdata.length}</h2>`; 
        }
        else{
        loadQuiz();
        }
    })

