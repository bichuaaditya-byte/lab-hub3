// =========================
// EDIT THIS FILE
// =========================
// You can change subject names, icons, experiment names,
// aims, theory, code, result and screenshot file names here.
//
// IMPORTANT:
// - Each subject can have a maximum of 15 experiments.
// - Keep each subject "id" unique.
// - Screenshot files go inside the assets/ folder.
// - Example screenshot: assets/experiment-01-output.png

const LAB_DATA = [
  {
    id: "vlsi",
    name: "VLSI",
    icon: "🔌",
    experiments: [
      {number:1,name:"Experiment 01",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:2,name:"Experiment 02",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:3,name:"Experiment 03",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:4,name:"Experiment 04",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:5,name:"Experiment 05",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:6,name:"Experiment 06",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:7,name:"Experiment 07",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:8,name:"Experiment 08",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:9,name:"Experiment 09",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:10,name:"Experiment 10",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:11,name:"Experiment 11",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:12,name:"Experiment 12",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:13,name:"Experiment 13",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:14,name:"Experiment 14",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."},
      {number:15,name:"Experiment 15",aim:"Add the aim here.",theory:"Add theory here.",code:"// Paste your code here",screenshots:[],result:"Add the result here."}
    ]
  },

  {
    id: "arm",
    name: "ARM",
    icon: "⚙️",
    experiments: Array.from({length:15},(_,i)=>({
      number:i+1,name:`Experiment ${String(i+1).padStart(2,"0")}`,
      aim:"Add the aim here.",theory:"Add theory here.",
      code:"// Paste your code here",screenshots:[],result:"Add the result here."
    }))
  },

  {
    id: "os",
    name: "OS",
    icon: "💿",
    experiments: Array.from({length:15},(_,i)=>({
      number:i+1,name:`Experiment ${String(i+1).padStart(2,"0")}`,
      aim:"Add the aim here.",theory:"Add theory here.",
      code:"// Paste your code here",screenshots:[],result:"Add the result here."
    }))
  },

  {
    id: "coa",
    name: "COA",
    icon: "💻",
    experiments: Array.from({length:15},(_,i)=>({
      number:i+1,name:`Experiment ${String(i+1).padStart(2,"0")}`,
      aim:"Add the aim here.",theory:"Add theory here.",
      code:"// Paste your code here",screenshots:[],result:"Add the result here."
    }))
  },

  {
    id: "instrumentation",
    name: "Instrumentation",
    icon: "🤖",
    experiments: Array.from({length:15},(_,i)=>({
      number:i+1,name:`Experiment ${String(i+1).padStart(2,"0")}`,
      aim:"Add the aim here.",theory:"Add theory here.",
      code:"// Paste your code here",screenshots:[],result:"Add the result here."
    }))
  }
];
