const questions = [
    {
        question: "OOPS stands for:",
        options: [
            "A. Object Oriented Programming System",
            "B. Object Oriented Process System",
            "C. Open Object Programming System",
            "D. Object Operated Programming System"
        ],
        correctindex: 0
    },
    {
        question: "Which keyword is used to create a class?",
        options: ["A. object", "B. class", "C. struct", "D. define"],
        correctindex: 1
    },
    {
    question: "What does the expression type(obj) return when obj is an instance of a user-defined class?",
    options: [
        "A. The name of the class as a string",
        "B. The class to which the object belongs",
        "C. The memory address of the object",
        "D. Always <class 'object'>"
    ],
    correctindex: 1
    },

    {
        question: "Which method is called automatically when an object is created?",
        options: ["A. str", "B. new", "C. init", "D. del"],
        correctindex: 2
    },
    {
        question: "What is the purpose of self?",
        options: [
            "A. Refers to class",
            "B. Refers to module",
            "C. Refers to current object",
            "D. Refers to parent class"
        ],
        correctindex: 2
    },
    {
        question: "Which is TRUE?",
        options: [
            "A. self is a keyword",
            "B. self is optional in instance methods",
            "C. self represents current instance",
            "D. self refers to class variable"
        ],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>class A:<br>    x = 10<br><br>a1 = A()<br>a2 = A()<br>a1.x = 20<br>print(a2.x)",
        options: ["A. 10", "B. 20", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "Instance variables are stored in:",
        options: ["A. Class memory", "B. Object memory", "C. Stack", "D. Heap only"],
        correctindex: 1
    },
    {
        question: "Which type of inheritance is supported by Python?",
        options: ["A. Single", "B. Multiple", "C. Multilevel", "D. All of these"],
        correctindex: 3
    },
    {
        question: "What is method overriding?",
        options: [
            "A. Same method name, different parameters",
            "B. Same method name, same signature in child",
            "C. Calling parent method",
            "D. Deleting parent method"
        ],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>class A:<br>    def show(self):<br>        print('A')<br><br>class B(A):<br>    def show(self):<br>        print('B')<br><br>obj = B()<br>obj.show()",
        options: ["A. A", "B. B", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which function returns class name of object?",
        options: ["A. name()", "B. type()", "C. class()", "D. id()"],
        correctindex: 1
    },
    {
        question: "Encapsulation means:",
        options: [
            "A. Binding data and methods",
            "B. Hiding implementation details",
            "C. Multiple inheritance",
            "D. Code reuse"
        ],
        correctindex: 1
    },
    {
        question: "Which access modifier is NOT available in Python?",
        options: ["A. Public", "B. Private", "C. Protected", "D. Strict private"],
        correctindex: 3
    },
    {
        question: "Which naming indicates protected member?",
        options: ["A. x", "B. __x", "C. _x", "D. $x"],
        correctindex: 2
    },
    {
        question: "Which naming indicates private member?",
        options: ["A. _x", "B. __x", "C. _x", "D. x"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>class A:<br>    def __init__(self):<br>        self.x = 10<br><br>class B(A):<br>    pass<br><br>obj = B()<br>print(obj.x)",
        options: ["A. Error", "B. None", "C. 10", "D. 0"],
        correctindex: 2
    },
    {
        question: "Polymorphism means:",
        options: ["A. One function", "B. Many forms", "C. Code duplication", "D. Inheritance only"],
        correctindex: 1
    },
    {
        question: "Which is an example of polymorphism?",
        options: [
            "A. Function overloading",
            "B. Method overriding",
            "C. Operator overloading",
            "D. All of these"
        ],
        correctindex: 3
    },
    {
        question: "What will be the output?\nprint(len('Python'))",
        options: ["A. 5", "B. 6", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which method customizes string representation?",
        options: ["A. repr", "B. str", "C. len", "D. init"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>class Test:<br>    def __len__(self):<br>        return 5<br><br>obj = Test()<br>print(len(obj))",
        options: ["A. 0", "B. Error", "C. 5", "D. None"],
        correctindex: 2
    },
    {
        question: "Which method is used for operator overloading?",
        options: ["A. add", "B. sum", "C. plus", "D. append"],
        correctindex: 0
    },
    {
        question: "What is inheritance used for?",
        options: ["A. Memory management", "B. Code reuse", "C. Speed", "D. Debugging"],
        correctindex: 1
    },
    {
        question: "Which keyword is used to call parent class method?",
        options: ["A. parent", "B. base", "C. super", "D. this"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>class A:<br>    def show(self):<br>        print('A')<br><br>class B(A):<br>    pass<br><br>obj = B()<br>obj.show()",
        options: ["A. A", "B. B", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "Which statement is TRUE?",
        options: [
            "A. Python supports method overloading by default",
            "B. Python does not support polymorphism",
            "C. Python supports dynamic typing in OOPS",
            "D. Classes cannot have constructors"
        ],
        correctindex: 2
    },
    {
        question: "Which dunder method is called when object is deleted?",
        options: ["A. init", "B. del", "C. remove", "D. delete"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>class A:<br>    pass<br><br>print(isinstance(A(), A))",
        options: ["A. True", "B. False", "C. Error", "D. None"],
        correctindex: 0
    },
    {
        question: "OOPS mainly helps in:",
        options: [
            "A. Writing longer code",
            "B. Code organization and scalability",
            "C. Avoiding functions",
            "D. Slowing execution"
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
        if (questions[i].correctindex === selectedans[i]) {
            finalscore++;
        }
    }

    window.location.href = `result.html?score=${finalscore}&total=${questions.length}`;
    
});
