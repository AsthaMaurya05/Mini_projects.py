const questions = [
    {
        question: "What is an exception?",
        options: [
            "A. Syntax error",
            "B. Logical error",
            "C. Runtime error",
            "D. Compile-time error"
        ],
        correctindex: 2
    },
    {
        question: "Which block is used to handle exceptions?",
        options: ["A. catch", "B. handle", "C. except", "D. error"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>try:<br>    print(10 / 0)<br>except:<br>    print('Error')",
        options: ["A. 0", "B. Error", "C. ZeroDivisionError", "D. Program crash"],
        correctindex: 1
    },
    {
        question: "Which error occurs when dividing by zero?",
        options: [
            "A. ValueError",
            "B. TypeError",
            "C. ZeroDivisionError",
            "D. ArithmeticError"
        ],
        correctindex: 2
    },
    {
        question: "Which block always executes?",
        options: ["A. try", "B. except", "C. else", "D. finally"],
        correctindex: 3
    },
    {
        question: "What will be the output?<br>try:<br>    print('Hi')<br>except:<br>    print('Error')<br>else:<br>    print('Done')",
        options: ["A. Hi", "B. Done", "C. Hi Done", "D. Error"],
        correctindex: 2
    },
    {
        question: "Which keyword is used to raise an exception?",
        options: ["A. throw", "B. raise", "C. error", "D. exception"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>try:<br>    x = int('abc')<br>except ValueError:<br>    print('Invalid')",
        options: ["A. abc", "B. Invalid", "C. Error", "D. None"],
        correctindex: 1
    },
    {
        question: "Which is a built-in exception?",
        options: ["A. MyError", "B. CustomError", "C. IndexError", "D. LogicalError"],
        correctindex: 2
    },
    {
        question: "What happens if exception is not handled?",
        options: [
            "A. Program ignores it",
            "B. Program crashes",
            "C. Program continues",
            "D. Exception is fixed"
        ],
        correctindex: 1
    },
    {
        question: "Which block runs when no exception occurs?",
        options: ["A. except", "B. finally", "C. else", "D. try"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>try:<br>    print(5)<br>finally:<br>    print('End')",
        options: ["A. 5", "B. End", "C. 5 End", "D. Error"],
        correctindex: 2
    },
    {
        question: "Custom exceptions are created using:",
        options: [
            "A. raise only",
            "B. Exception class",
            "C. Error class",
            "D. Base class"
        ],
        correctindex: 1
    },
    {
        question: "Which file mode opens file for reading?",
        options: ["A. w", "B. a", "C. r", "D. rw"],
        correctindex: 2
    },
    {
        question: "Which mode creates file if it does not exist?",
        options: ["A. r", "B. w", "C. r+", "D. rb"],
        correctindex: 1
    },
    {
        question: "What will be the output?<br>f = open('test.txt', 'w')<br>f.write('Hi')<br>f.close()",
        options: [
            "A. Prints Hi",
            "B. Writes Hi to file",
            "C. Error",
            "D. None"
        ],
        correctindex: 1
    },
    {
        question: "Which function is used to read entire file?",
        options: ["A. read()", "B. readline()", "C. readlines()", "D. open()"],
        correctindex: 0
    },
    {
        question: "Which method reads one line?",
        options: ["A. read()", "B. readline()", "C. readlines()", "D. write()"],
        correctindex: 1
    },
    {
        question: "What does readlines() return?",
        options: [
            "A. String",
            "B. List of lines",
            "C. Tuple",
            "D. Set"
        ],
        correctindex: 1
    },
    {
        question: "Which mode appends data to file?",
        options: ["A. r", "B. w", "C. a", "D. rw"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>try:<br>    f = open('abc.txt', 'r')<br>except FileNotFoundError:<br>    print('Not Found')",
        options: ["A. abc.txt", "B. Error", "C. Not Found", "D. None"],
        correctindex: 2
    },
    {
        question: "Which exception is raised when file not found?",
        options: [
            "A. IOError",
            "B. FileNotFoundError",
            "C. EOFError",
            "D. ImportError"
        ],
        correctindex: 1
    },
    {
        question: "Which statement is TRUE?",
        options: [
            "A. Files close automatically",
            "B. close() releases resources",
            "C. write() reads file",
            "D. read() writes file"
        ],
        correctindex: 1
    },
    {
        question: "Which keyword is used for resource management?",
        options: ["A. try", "B. finally", "C. with", "D. open"],
        correctindex: 2
    },
    {
        question: "What will be the output?<br>with open('file.txt', 'w') as f:<br>    f.write('Hello')",
        options: [
            "A. Prints Hello",
            "B. Writes Hello and closes file",
            "C. Error",
            "D. None"
        ],
        correctindex: 1
    },
    {
        question: "EOFError occurs when:",
        options: [
            "A. File is empty",
            "B. End of file reached unexpectedly",
            "C. File not found",
            "D. File closed"
        ],
        correctindex: 1
    },
    {
        question: "Which mode allows reading and writing?",
        options: ["A. r", "B. w", "C. r+", "D. a"],
        correctindex: 2
    },
    {
        question: "What does pass do in except block?",
        options: [
            "A. Handles error",
            "B. Ignores error",
            "C. Raises error",
            "D. Prints error"
        ],
        correctindex: 1
    },
    {
        question: "Which is NOT a file mode?",
        options: ["A. r", "B. w", "C. a", "D. x+"],
        correctindex: 3
    },
    {
        question: "Exception handling mainly helps to:",
        options: [
            "A. Speed execution",
            "B. Prevent errors",
            "C. Handle runtime failures gracefully",
            "D. Remove bugs"
        ],
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
        if (questions[parseInt(i)].correctindex === selectedans[i]) {
            finalscore++;
        }
    }


    window.location.href = `result.html?score=${finalscore}&total=${questions.length}`;
    
});
