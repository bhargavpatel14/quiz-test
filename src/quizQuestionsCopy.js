export const cssQuestions = [
  {
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
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list: square;",
      "list-style-type: square;",
      "list-type: square;",
      "list-style: square",
    ],
    correctAnsert: "list-style-type: square",
  },
  {
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
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "styles", "style", "font"],
    correctAnsert: "style",
  },
  {
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
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-size", "font-style", "text-style"],
    correctAnsert: "font-size",
  },
  {
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
    question: "Which property is used to change the left margin of an element?",
    options: [`indent`, `padding-left`, `margin-left`, `margin`],
    correctAnsert: "margin-left",
  },
  {
    question:
      "When using the padding property; are you allowed to use negative values?",

    options: [`Yes`, `No`],
    correctAnsert: "No",
  },
];
