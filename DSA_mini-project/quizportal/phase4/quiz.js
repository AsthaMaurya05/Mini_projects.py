const questions = [
    {
        question: "Why are functions used in Python?",
        options: [
            "A. To increase code size",
            "B. To reduce code reusability",
            "C. To avoid repetition and improve structure",
            "D. To slow down execution"
        ],
        correctindex: 2
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["A. func", "B. function", "C. define", "D. def"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>def fun():<br>    print('Hello')<br><br>print(fun())",
        options: ["A. Hello", "B. None", "C. Hello None", "D. Error"],
        correctindex: 2
    },
    {
        question: "What does a function return by default?",
        options: ["A. 0", "B. None", "C. False", "D. Error"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>def add(a, b):<br>    return a + b<br><br>print(add(2, 3))",
        options: ["A. 2", "B. 3", "C. 5", "D. None"],
        correctindex: 2
    },
    {
        question: "Which type of argument is used when order matters?",
        options: [
            "A. Keyword arguments",
            "B. Default arguments",
            "C. Positional arguments",
            "D. Variable-length arguments"
        ],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>def test(x, y=10):<br>    return x + y<br><br>print(test(5))",
        options: ["A. 5", "B. 10", "C. 15", "D. Error"],
        correctindex: 2
    },
    {
        question: "Which symbol is used for variable-length positional arguments?",
        options: ["A. **", "B. *", "C. &", "D. #"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>def fun(*args):<br>    print(len(args))<br><br>fun(1, 2, 3)",
        options: ["A. 1", "B. 2", "C. 3", "D. Error"],
        correctindex: 2
    },
    {
        question: "Which symbol is used for variable-length keyword arguments?",
        options: ["A. *", "B. **", "C. &&", "D. @@"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>def fun(**kwargs):<br>    print(kwargs)<br><br>fun(a=1, b=2)",
        options: [
            "A. {1, 2}",
            "B. ['a', 'b']",
            "C. {'a': 1, 'b': 2}",
            "D. Error"
        ],
        correctindex: 2
    },
    {
        question: "What is recursion?",
        options: [
            "A. Function calling another function",
            "B. Function calling itself",
            "C. Loop inside function",
            "D. Function inside loop"
        ],
        correctindex: 1
    },
    {
        question: "What is mandatory in recursion?",
        options: [
            "A. Loop",
            "B. Global variable",
            "C. Base condition",
            "D. Lambda"
        ],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>def fact(n):<br>    if n == 0:<br>        return 1<br>    return n * fact(n-1)<br><br>print(fact(3))",
        options: ["A. 3", "B. 6", "C. 9", "D. Error"],
        correctindex: 1
    },
    {
        question: "What happens if recursion has no base case?",
        options: [
            "A. Program ends normally",
            "B. Logical error only",
            "C. Infinite recursion → RecursionError",
            "D. SyntaxError"
        ],
        correctindex: 2
    },
    {
        question: "What is the output?<br>def fun(a, b):<br>    print(a, b)<br><br>fun(b=2, a=1)",
        options: ["A. 2 1", "B. 1 2", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which statement is TRUE?",
        options: [
            "A. return prints value",
            "B. print returns value",
            "C. return exits function",
            "D. print exits function"
        ],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>def fun(x):<br>    if x == 0:<br>        return<br>    print(x)<br>    fun(x-1)<br><br>fun(3)",
        options: ["A. 3 2 1", "B. 1 2 3", "C. Infinite loop", "D. Error"],
        correctindex: 0
    },
    {
        question: "Default arguments are evaluated:",
        options: [
            "A. Every function call",
            "B. At runtime",
            "C. Once at function definition",
            "D. Never"
        ],
        correctindex: 2
    },
    {
        question: "Which of the following is TRUE?",
        options: [
            "A. Functions must return value",
            "B. A function can return multiple values",
            "C. Functions cannot be nested",
            "D. Recursion is faster than loops"
        ],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>def fun():<br>    return 1, 2<br><br>x = fun()<br>print(type(x))",
        options: ["A. list", "B. tuple", "C. dict", "D. int"],
        correctindex: 1
    },
    {
        question: "What is the output?<br>def fun(x):<br>    x = 10<br><br>a = 5<br>fun(a)<br>print(a)",
        options: ["A. 10", "B. 5", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which is TRUE about parameters and arguments?",
        options: [
            "A. Parameters are actual values",
            "B. Arguments are variables",
            "C. Parameters receive values",
            "D. They are same"
        ],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>def fun(x, y=2, z=3):<br>    print(x + y + z)<br><br>fun(1, z=4)",
        options: ["A. 6", "B. 7", "C. 8", "D. Error"],
        correctindex: 1
    },
    {
        question: "Which keyword stops function execution?",
        options: ["A. stop", "B. break", "C. return", "D. exit"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>def fun():<br>    pass<br><br>print(fun())",
        options: ["A. pass", "B. None", "C. Error", "D. 0"],
        correctindex: 1
    },
    {
        question: "Which of the following supports recursion?",
        options: ["A. Python", "B. C", "C. Java", "D. All of these"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>def fun(x):<br>    return x * fun(x-1)<br><br>print(fun(1))",
        options: ["A. 1", "B. 0", "C. Error", "D. Infinite recursion"],
        correctindex: 3
    },
    {
        question: "What is tail recursion?",
        options: [
            "A. Recursive call at beginning",
            "B. Recursive call at end",
            "C. Multiple recursive calls",
            "D. No recursion"
        ],
        correctindex: 1
    },
    {
        question: "Recursion is best used when:",
        options: [
            "A. Problem can be divided into similar subproblems",
            "B. Loop is faster",
            "C. Memory is limited",
            "D. Code must be long"
        ],
        correctindex: 0
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
