const questions=[
    {
        question:"Python is called an interpreted language because",
        options:["A. It does not support compilation","B. It executes code line by line","C. It converts code directly to machine code","D. It cannot run without internet"],
        correctindex:1
    },
    {
        question:"Which of the following is NOT a valid Python identifier?",
        options:["A. _value","B. value1","C. 1value","D. value_1"],
        correctindex:2
    },

    // ✅ Q3 (CHANGED)
    {
        question:"What will be the value of x after execution?<br>x = 5<br>x += 3<br>x *= 2",
        options:["A. 11","B. 16","C. 13","D. 10"],
        correctindex:1
    },

    {
        question:"Which feature allows Python variables to change type at runtime?",
        options:["A. Static typing","B. Dynamic typing","C. Strong typing","D. Duck typing"],
        correctindex:1
    },
    {
        question:"Which of the following causes an IndentationError?",
        options:["A. Missing colon","B. Incorrect spacing in code block","C. Variable name error","D. Missing parentheses"],
        correctindex:1
    },

    // ✅ Q6 (CHANGED)
    {
        question:"Which of the following statements about Python integers is TRUE?",
        options:[
            "A. Integers have a fixed size in memory",
            "B. Integers are immutable objects",
            "C. Integers are stored as strings internally",
            "D. Integers must be explicitly declared"
        ],
        correctindex:1
    },

    {
        question:"Which symbol is used for single-line comments in Python?",
        options:["A. ///","B. /* */","C. #","D. <!-- -->"],
        correctindex:2
    },
    {
        question:"What will happen if indentation is inconsistent in Python?",
        options:["A. Code runs normally","B. Logical error","C. IndentationError","D. SyntaxWarning"],
        correctindex:2
    },
    {
        question:"Which keyword is used to define nothing in Python?",
        options:["A. null","B. void","C. none","D. None"],
        correctindex:3
    },
    {
        question:"What is the output?<br>x = y = z = 5<br>print(x + y + z)",
        options:["A. 5","B. 10","C. 15","D. Error"],
        correctindex:2
    },
    {
        question:"Which of these is a Python keyword?",
        options:["A. define","B. function","C. lambda","D. method"],
        correctindex:2
    },

    // ✅ Q12 (CHANGED)
    {
        question:"Which of the following correctly describes Boolean values in Python?",
        options:[
            "A. True and False are strings",
            "B. True and False are integers internally",
            "C. True and False are keywords representing boolean values",
            "D. Boolean values do not exist in Python"
        ],
        correctindex:2
    },

    {
        question:"Python uses indentation to:",
        options:["A. Improve readability only","B. Define blocks of code","C. End a statement","D. Speed up execution"],
        correctindex:1
    },
    {
        question:"Which is a valid way to assign multiple variables?",
        options:["A. a = b = c 10","B. a, b, c = 1, 2, 3","C. a = (1,2,3)","D. a <- 10"],
        correctindex:1
    },
    {
        question:"What will be the output?<br>a = 10<br>b = a<br>a = 20<br>print(b)",
        options:["A. 10","B. 20","C. Error","D. None"],
        correctindex:0
    },
    {
        question:"Which of the following is TRUE about Python?",
        options:["A. Variables must be declared before use","B. Python supports dynamic typing","C. Python ignores indentation","D. Python does not support comments"],
        correctindex:1
    },

    // ✅ Q17 (CHANGED)
    {
        question:"Which statement about floating-point numbers in Python is TRUE?",
        options:[
            "A. Floating numbers are always precise",
            "B. Floats are immutable objects",
            "C. Floats can only store whole numbers",
            "D. Floats require explicit type casting"
        ],
        correctindex:1
    },

    {
        question:"Which of these is NOT a Python keyword?",
        options:["A. pass","B. assert","C. eval","D. break"],
        correctindex:2
    },
    {
        question:"What will be the output?<br>x = 5<br>print(id(x))",
        options:["A. Memory address of x","B. Value of x","C. Type of x","D. Error"],
        correctindex:0
    },
    {
        question:"Python code is first converted into:",
        options:["A. Machine code","B. Assembly code","C. Bytecode","D. Object code"],
        correctindex:2
    },
    {
        question:"Which function is used to check data type?",
        options:["A. datatype()","B. typeof()","C. type()","D. id()"],
        correctindex:2
    },
    {
        question:"Which is NOT allowed in Python variable names?",
        options:["A. Underscore","B. Digits","C. Special symbols like @","D. Alphabets"],
        correctindex:2
    },
    {
        question:"What will be the output?<br>x = 10<br>del x<br>print(x)",
        options:["A. 10","B. None","C. NameError","D. 0"],
        correctindex:2
    },
    {
        question:"Python follows which naming convention?",
        options:["A. camelCase","B. PascalCase","C. snake_case","D. kebab-case"],
        correctindex:2
    },

    // ✅ Q26 (CHANGED)
    {
        question:"Which of the following is the correct way to write a multi-line string in Python?",
        options:[
            "A. Using single quotes",
            "B. Using double quotes",
            "C. Using triple quotes",
            "D. Using backticks"
        ],
        correctindex:2
    },

    {
        question:"What will be the output?<br>print(type(None))",
        options:["A. NoneType","B. <class 'NoneType'>","C. null","D. Error"],
        correctindex:1
    },
    {
        question:"Which statement is TRUE?",
        options:["A. Python is case-insensitive","B. Python is case-sensitive","C. Keywords can be changed","D. Indentation is optional"],
        correctindex:1
    },
    {
        question:"What is the output?<br>x = 5<br>y = x<br>print(x is y)",
        options:["A. True","B. False","C. Error","D. None"],
        correctindex:0
    },
    {
        question:"Python source file extension is:",
        options:["A. .pt","B. .pyt","C. .py","D. .python"],
        correctindex:2
    },
    {
        question:"Which of the following best describes Python?",
        options:["A. Low-level language","B. Platform-dependent language","C. High-level, interpreted language","D. Markup language"],
        correctindex:2
    }
];


let currqs = 0;
let score = 0;
const selectedans = {};

// TIMER
let t = 30 * 60;

function updateTime() {
    const timerelement = document.getElementById("timer").querySelector("h3");
    const min = Math.floor(t / 60);
    const sec = t % 60;
    timerelement.textContent = `00 : ${String(min).padStart(2,'0')} : ${String(sec).padStart(2,'0')}`;

    if (t <= 0) {
        clearInterval(timer_interval);
        alert("Time up!");
    }
    t--;
}

const timer_interval = setInterval(updateTime, 1000);

// LOAD QUESTION
function loadquestion(index) {
    const q = questions[index];

    document.getElementById("qsbox").innerHTML =
        `<h4 style="color:rgb(11, 72, 5)">Question ${index + 1}</h4>
         <p>${q.question}</p>`;

    const o = q.options.map((opt, i) =>
        `<div class="options">
            <input type="radio" name="q${index}" id="op${i}" value="${i}">
            <label for="op${i}">${opt}</label>
        </div>`
    ).join("");

    document.getElementById("optbox").innerHTML = o;

    // highlight active question
    document.querySelectorAll(".navqs").forEach((el, i) => {
        el.classList.remove("active");
        if (i === index) {
            el.classList.add("active");
        }
    });

    // option selection
    document.querySelectorAll(`input[name="q${index}"]`).forEach(input => {
        input.addEventListener("change", (e) => {
            selectedans[index] = parseInt(e.target.value);

            const n = document.querySelectorAll(".navqs")[index];
            n.classList.remove("review");
            n.classList.add("answered");
        });
    });
}

loadquestion(0);

// NAVIGATION CLICK
document.querySelectorAll(".navqs").forEach((el, i) => {
    el.addEventListener("click", () => {
        currqs = i;
        loadquestion(i);
    });
});

// MARK FOR REVIEW
document.getElementById("markbtn").addEventListener("click", () => {
    const n = document.querySelectorAll(".navqs")[currqs];
    n.classList.remove("answered");
    n.classList.add("review");
});

// PREVIOUS
document.getElementById("prevbtn").addEventListener("click", () => {
    if (currqs > 0) {
        currqs--;
        loadquestion(currqs);
    }
});

// NEXT
document.getElementById("nextbtn").addEventListener("click", () => {
    if (currqs < questions.length - 1) {
        currqs++;
        loadquestion(currqs);
    }
});

// SUBMIT
document.getElementById("submitbtn").addEventListener("click", () => {
    let finalscore = 0;
    for (let i in selectedans) {
        const questionIndex = parseInt(i);
        if (questions[questionIndex].correctindex === selectedans[i]) {
            finalscore++;
        }
    }

    window.location.href = `./result.html?score=${finalscore}&total=${questions.length}`;
    
});
