
let quiz1 = {
  title: "select from the following options",
  text: "Which field are you interested in 💭",
    options: [
      {
        op1: {id:"ac1", val:"Android Development"},
        op2: {id:"ac2", val:"Web Development"},
        op3: {id:"ac3", val:"Web 3 "},
        op4: {id:"ac4", val:"AI and ML"},
        op5: {id:"ac5", val:"Data Science"}
      }
    ],
}

let quiz2 = {
  title: "select from the following options",
  text: "How you ever tried programming before ❔",
  options: [
    {
      op1: { id: "bc1", val: "No I have not.." },
      op2: { id: "bc2", val: "Yes... but very little" },
      op3: { id: "bc3", val: "Yes... I have some prior experience" },
    },
  ],
};

let quiz3 = {
  title: "select from the following options",
  text: "What you plan to do after learning it 🤔",
  options: [
    {
      op1: { id: "cc1", val: "Build Something 👨‍💻" },
      op2: { id: "cc2", val: "Apply to respected jobs 💼" },
      op3: { id: "cc3", val: "Not Decided" },
    },
  ],
};


  module.exports = {quiz1, quiz2, quiz3 }