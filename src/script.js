var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");
var terminal_content = document.getElementById("terminal_content");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ ${input}</div>`;
    if(!COMMANDS.hasOwnProperty(input)){
        output += `<div><span class="command"> No such command: </span>${input}</div>`;
    }
    else{
        output+= `<div>${COMMANDS[input]}</div>`;
    }
    
    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`;
    terminal_content.scrollTop = terminal_content.scrollHeight;
    if(input == "github"){
        setTimeout(()=>{window.open("https://github.com/cannapy", "_blank");},2000)
        function helper(){
            
        }
    }
    else if(input == "resume"){
        setTimeout(()=>{window.open("https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2786b3c6-8fdd-31f3-a55b-c1464133079b", "_blank");},2000)
        function helper(){
            
        }
    }
    else if(input == "linkedin"){
        setTimeout(()=>{window.open("https://www.linkedin.com/in/dem1/", "_blank");},2000)
        function helper(){
            
        }
    }
    else if(input == "personal"){
        setTimeout(()=>{window.open("http://personal.psu.edu/dem5634/", "_blank");},2000)
        function helper(){
            
        }
    }
    else if(input == "datamining"){
        setTimeout(()=>{window.open("https://github.com/cannapy/Data-Mining", "_blank");},2000)
        function helper(){
            
        }
    }
}

function key(e){
    const input = user_input.value;

    if(e.key=="Enter"){
        execute(input);
        user_input.value = "";
        return;
    }
    user_input.innerHTML = input + e.key;
}

document.addEventListener("keypress",key);


// idea: dictionary for user inputs. automaticaally add as a key with value equivalent to the number of times it is called. Depedning on stdv, add as a command 
const COMMANDS = 
{
    help:
        'Supported commands: [<span class="command-keyword">"datamining"</span>, <span class="command-keyword">"about"</span>, <span class="command-keyword">"personal"</span>, <span class="command-keyword">"experience"</span>, <span class="command-keyword">"education"</span>, <span class="command-keyword">"skills"</span>, <span class="command-keyword">"contact"</span>, <span class="command-keyword">"github"</span>, <span class="command-keyword">"resume"</span>, <span class="command-keyword">"linkedin"</span>]',   
    about: 
        "Hi, I'm David, I am a Senior Comp Sci student learning to launch a startup!",
    skills:
        'Python, pandas, matplotlib, scikitlearn, numpy, C, CSS, HTML, JS, Java',
    experience:
        'Entrepreneur',
    education:
        'Penn State University Park: B.S. Computer Science; B.S. Corporate Innovation and Entrepreneurship',
    contact:
        'Phone: +1 215-872-2008  |  Email: dem5634@psu.edu  |  LinkedIn: https://www.linkedin.com/in/dem1/',
    github:
        'Opening my GitHub ...',
    resume:
        'Opening my resume ...',
    linkedin:
        'Opening my linkedin ...',
    personal:
        'Opening personal site ...',
    datamining:
        'Opening datamining projects ...'
}

// double quotes on inside with single quotes on outside enable us to show double quotes
