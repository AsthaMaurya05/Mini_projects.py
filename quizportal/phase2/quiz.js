const questions = [
    {
        question: "Which of the following data types is immutable?",
        options: ["A. list", "B. set", "C. dictionary", "D. tuple"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>x = (1, 2, 3)<br>x[0] = 10<br>print(x)",
        options: ["A. (10, 2, 3)", "B. Error", "C. (1, 2, 3)", "D. None"],
        correctindex: 1
    },
    {
        question: "Which data type does NOT allow duplicate values?",
        options: ["A. list", "B. tuple", "C. set", "D. string"],
        correctindex: 2
    },

    // ✅ Q4 (CHANGED)
    {
        question: "Which statement best describes Python dictionaries?",
        options: [
            "A. They store elements in sequence",
            "B. They allow duplicate keys",
            "C. They store data as key–value pairs",
            "D. They are immutable"
        ],
        correctindex: 2
    },

    {
        question: "Which of the following is mutable?",
        options: ["A. int", "B. float", "C. string", "D. list"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>a = [1, 2, 3]<br>b = a<br>b.append(4)<br>print(a)",
        options: ["A. [1, 2, 3]", "B. [4]", "C. [1, 2, 3, 4]", "D. Error"],
        correctindex: 2
    },
    {
        question: "Which statement is TRUE?",
        options: [
            "A. Tuples are mutable",
            "B. Lists are immutable",
            "C. Strings are immutable",
            "D. Sets allow indexing"
        ],
        correctindex: 2
    },
    {
        question: "What is the output?<br>x = \"Python\"<br>print(x[1:4])",
        options: ["A. Pyt", "B. yth", "C. ytho", "D. thon"],
        correctindex: 1
    },
    {
        question: "Which data type stores key–value pairs?",
        options: ["A. list", "B. tuple", "C. set", "D. dictionary"],
        correctindex: 3
    },

    // ✅ Q10 (CHANGED)
    {
        question: "Which numeric data type is used to represent numbers with a real and imaginary part?",
        options: [
            "A. int",
            "B. float",
            "C. complex",
            "D. boolean"
        ],
        correctindex: 2
    },

    {
        question: "Which of the following is an empty set?",
        options: ["A. {}", "B. ()", "C. []", "D. set()"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>x = [1, 2, 3]<br>y = x[:]<br>y.append(4)<br>print(x)",
        options: ["A. [1, 2, 3, 4]", "B. [4]", "C. [1, 2, 3]", "D. Error"],
        correctindex: 2
    },
    {
        question: "Which data type supports slicing?",
        options: ["A. set", "B. dict", "C. list", "D. Both list and string"],
        correctindex: 3
    },
    {
        question: "What is the output?<br>print(bool([]))",
        options: ["A. True", "B. False", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which is NOT mutable?",
        options: ["A. list", "B. set", "C. dict", "D. tuple"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>x = {1, 2, 2, 3}<br>print(x)",
        options: ["A. {1, 2, 2, 3}", "B. {1, 2, 3}", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which function converts a value into string?",
        options: ["A. int()", "B. float()", "C. str()", "D. chr()"],
        correctindex: 2
    },
    {
        question: "What is the output?<br>x = \"HELLO\"<br>print(x.lower())",
        options: ["A. HELLO", "B. Hello", "C. hello", "D. Error"],
        correctindex: 2
    },
    {
        question: "Which of the following allows heterogeneous elements?",
        options: ["A. int", "B. list", "C. float", "D. complex"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>d = {\"a\":1, \"b\":2}<br>print(d[\"c\"])",
        options: ["A. None", "B. KeyError", "C. 0", "D. False"],
        correctindex: 1
    },
    {
        question: "Which data type is unordered?",
        options: ["A. list", "B. tuple", "C. set", "D. string"],
        correctindex: 2
    },

    // ✅ Q22 (CHANGED)
    {
        question: "Which statement is TRUE about parentheses in Python?",
        options: [
            "A. (5) creates a tuple",
            "B. Parentheses always create tuples",
            "C. (5,) creates a tuple with one element",
            "D. Parentheses cannot be nested"
        ],
        correctindex: 2
    },

    {
        question: "Which of the following creates a tuple with one element?",
        options: ["A. (5)", "B. (5,)", "C. [5]", "D. {5}"],
        correctindex: 1
    },
    {
        question: "What is the output?<br>x = [1, 2, 3]<br>print(x * 2)",
        options: [
            "A. [2, 4, 6]",
            "B. [1, 2, 3, 1, 2, 3]",
            "C. Error",
            "D. None"
        ],
        correctindex: 1
    },
    {
        question: "Which is TRUE about dictionaries?",
        options: [
            "A. Keys can be mutable",
            "B. Keys must be unique",
            "C. Values must be unique",
            "D. Dictionary is unordered"
        ],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>x = \"Python\"<br>print(x[-1])",
        options: ["A. P", "B. n", "C. o", "D. Error"],
        correctindex: 1
    },

    // ✅ Q28 (CHANGED)
    {
        question: "Which of the following operations is NOT allowed on strings?",
        options: [
            "A. Indexing",
            "B. Concatenation",
            "C. Item assignment",
            "D. Slicing"
        ],
        correctindex: 2
    },

    {
        question: "What will be the output?<br>x = [1, 2, 3]<br>print(type(x))",
        options: ["A. <class 'tuple'>", "B. <class 'list'>", "C. <class 'set'>", "D. Error"],
        correctindex: 1
    },
    {
        question: "Which function returns number of elements?",
        options: ["A. size()", "B. count()", "C. len()", "D. total()"],
        correctindex: 2
    },
    {
        question: "Mutable objects in Python:",
        options: [
            "A. Cannot be changed",
            "B. Can be changed after creation",
            "C. Are faster",
            "D. Are always lists"
        ],
        correctindex: 1
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
