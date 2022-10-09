export const cssQuestions = [
  {
    id: 1,
    question: "What is What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
    ],
    correctAnsert: "Cascading Style Sheets",
  },
  {
    id: 2,
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list: square;",
      "list-style-type: square;",
      "list-type: square;",
      "list-style: square",
    ],
    correctAnsert: "list-style-type: square;",
  },
  {
    id: 3,
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {text-decoration:no-underline;}",
      "a {decoration:no-underline;}",
      "a {text-decoration:none;}",
      `a {underline:none;}`,
    ],
    correctAnsert: "a {underline:none;}",
  },
  {
    id: 4,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "styles", "style", "font"],
    correctAnsert: "style",
  },
  {
    id: 5,
    question: "How do you insert a comment in a CSS file?",
    options: [
      "// this is a comment",
      "/* this is a comment */",
      "' this is a comment",
      "// this is a comment //",
    ],
    correctAnsert: "/* this is a comment */",
  },
  {
    id: 6,
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-size", "font-style", "text-style"],
    correctAnsert: "font-size",
  },
  {
    id: 7,
    question:
      "What is the correct CSS syntax for making all the <p> elements bold?",
    options: [
      '<p style="text-size:bold;">',
      "p{text-size:bold;}",
      '<p style="text-sixe:bold;">',
      `p{font-weight:bold;}`,
    ],
    correctAnsert: "p{font-weight:bold;}",
  },
  {
    id: 8,
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      `text-style:capitalize`,
      `text-transform:capitalize`,
      `You can't do that with CSS`,
      `p{font-weight:bold;}`,
    ],
    correctAnsert: "text-transform:capitalize",
  },
  {
    id: 9,
    question: "Which property is used to change the left margin of an element?",
    options: [`indent`, `padding-left`, `margin-left`, `margin`],
    correctAnsert: "margin-left",
  },
  {
    id: 10,
    question:
      "When using the padding property; are you allowed to use negative values?",

    options: [`Yes`, `No`],
    correctAnsert: "No",
  },
];

export const jsQuestions = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<scripting>", `<script>`],
    correctAnsert: "<script>",
  },
  {
    id: 2,
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "Both he <head> section and the <body> section are correct",
      "The <body> section",
      "The <head> section",
      `The <nav> section`,
    ],
    correctAnsert: "Both he <head> section and the <body> section are correct",
  },
  {
    id: 3,
    question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
    options: [
      `<script name="xxx.js">`,
      `<script href="xxx.js">`,
      `<script src="xxx.js">`,
      `"<script css="xxx.js">`,
    ],
    correctAnsert: `<script src="xxx.js">`,
  },
  {
    id: 4,
    question: `The external JavaScript file must contain the <script> tag.`,
    options: [`True`, `False`],
    correctAnsert: "False",
  },
  {
    id: 5,
    question: `How do you write "Hello World" in an alert box?`,
    options: [
      `alert("Hello World");`,
      `alertBox("Hello World");`,
      `msg("Hello World");`,
      `msgBox("Hello World");`,
    ],
    correctAnsert: `alert("Hello World");`,
  },
  {
    id: 6,
    question: `How do you create a function in JavaScript?`,
    options: [
      `function:myFunction()`,
      `function = myFunction()`,
      `function myFunction()`,
      `Function #myFunction()`,
    ],
    correctAnsert: "function myFunction()",
  },
  {
    id: 7,
    question: `How do you call a function named "myFunction"?`,
    options: [
      `call function myFunction()`,
      `myFunction()`,
      `call myFunction()`,
      `call call Function()`,
    ],
    correctAnsert: "myFunction()",
  },
  {
    id: 8,
    question: `How to write an IF statement in JavaScript?`,
    options: [`if(i == 5)`, `if i == 5`, `if i == 5 then`, `if i = 5 then`],
    correctAnsert: "if(i == 5)",
  },
  {
    id: 9,
    question: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
    options: [`if i =! 5 then`, `if (i != 5)`, `if i <> 5`, `if (i <> 5)`],
    correctAnsert: "if (i != 5)",
  },
  {
    id: 10,
    question: `How does a WHILE loop start?`,
    options: [
      `while (i <= 10)`,
      `while (i <= 10; i++)`,
      `while i = 1 to 10`,
      `while i <- 1 to 10`,
    ],
    correctAnsert: "while (i <= 10)",
  },
];
