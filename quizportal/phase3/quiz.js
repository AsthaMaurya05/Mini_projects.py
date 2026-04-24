const questions = [
    {
        question: "What will be the output?<br>print(10 + 5 * 2)",
        options: ["A. 30", "B. 20", "C. 25", "D. 40"],
        correctindex: 1
    },
    {
        question: "Which operator has the highest precedence?",
        options: ["A. +", "B. *", "C. ==", "D. ()"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>print(10 // 3)",
        options: ["A. 3.33", "B. 3", "C. 4", "D. Error"],
        correctindex: 1
    },
    {
        question: "Which operator is used for exponentiation?",
        options: ["A. ^", "B. **", "C. exp", "D. pow"],
        correctindex: 1
    },
    {
        question: "What is the output?<br>print(5 == 5.0)",
        options: ["A. False", "B. True", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which operator checks object identity?",
        options: ["A. ==", "B. =", "C. is", "D. in"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>print(True and False or True)",
        options: ["A. True", "B. False", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "Which of the following is a bitwise operator?",
        options: ["A. and", "B. or", "C. &", "D. not"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>print(5 & 3)",
        options: ["A. 1", "B. 2", "C. 3", "D. 5"],
        correctindex: 0
    },
    {
        question: "Which operator is used for membership testing?",
        options: ["A. is", "B. in", "C. ==", "D. !="],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>print(not True == False)",
        options: ["A. True", "B. False", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "Which operator performs floor division?",
        options: ["A. /", "B. //", "C. %", "D. **"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>print(5 > 3 and 2 < 1)",
        options: ["A. True", "B. False", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which operator is used to assign value?",
        options: ["A. ==", "B. =", "C. <=", "D. =>"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>x = 5<br>x += 3<br>print(x)",
        options: ["A. 5", "B. 8", "C. 15", "D. Error"],
        correctindex: 1
    },
    {
        question: "Which operator returns remainder?",
        options: ["A. /", "B. //", "C. %", "D. **"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>print(10 > 5 == 5)",
        options: ["A. True", "B. False", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "Which of the following is NOT a logical operator?",
        options: ["A. and", "B. or", "C. not", "D. xor"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>print(4 << 1)",
        options: ["A. 4", "B. 5", "C. 8", "D. 2"],
        correctindex: 2
    },
    {
        question: "Which operator is used to compare values?",
        options: [
            "A. Assignment operator",
            "B. Logical operator",
            "C. Relational operator",
            "D. Bitwise operator"
        ],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>print(5 != 3)",
        options: ["A. True", "B. False", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "Which operator gives Boolean output?",
        options: ["A. Arithmetic", "B. Relational", "C. Assignment", "D. Bitwise"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>print(True + True)",
        options: ["A. 2", "B. True", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "Which operator has lowest precedence?",
        options: ["A. *", "B. +", "C. ==", "D. ="],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>print(10 % 3)",
        options: ["A. 0", "B. 1", "C. 3", "D. Error"],
        correctindex: 1
    },
    {
        question: "Which operator is used to check multiple conditions?",
        options: ["A. Arithmetic", "B. Logical", "C. Assignment", "D. Bitwise"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>print(3 ** 2 ** 1)",
        options: ["A. 9", "B. 6", "C. 3", "D. Error"],
        correctindex: 0
    },
    {
        question: "Which of the following is a compound assignment operator?",
        options: ["A. ==", "B. +=", "C. <=", "D. !="],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>print(0 and 5)",
        options: ["A. 0", "B. 5", "C. True", "D. False"],
        correctindex: 0
    },
    {
        question: "Bitwise operators work on:",
        options: ["A. Strings", "B. Floating numbers", "C. Binary representation", "D. Lists"],
        correctindex: 2
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
