import arg from 'arg'
import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'
import { copy } from './main'
function parsearguments(args) {
    var options = arg(
        {
            "--git": Boolean,
            "--frontend":Boolean,
            "--backend":Boolean,
            "--fullstack":Boolean,
            "-fs":"--fullstack",
            "-b":"--backend",
            "-g": "--git",
            "-f":"--frontend"
        },
        {
            argv: args.slice(2)
        }
    )
    return {
        name: options._[0],
        git: options["--git"] || false,
        frontend:options["--frontend"]|| false,
        backend:options["--backend"] || false,
        fullstack:options["--fullstack"] || false,
    }
}
async function promptformissingargs(options) {
    var questions = []
    if(!options.frontend && !options.backend){
        questions.push({
            name:"frontend_or_backend",
            message:"Choose frontend or backend or fullstack",
            type:"list",
            choices:["frontend","backend","fullstack"],
            
        })
    }
    if (!options.git) {
        questions.push({
            name: "git",
            message: "Do you want to initialize a git repository",
            type: "confirm"
        })
    }  
    const answers = await inquirer.prompt(questions)
    const tempquestions=[]
    console.log(answers)
    console.log(options)
    if(options.frontend && options.backend && options.fullstack ||
        options.frontend && options.backend ||
        options.backend && options.fullstack ||
        options.fullstack && options.frontend
        ){
        console.log(chalk.red.bold("ERROR")+" Choose backend or frontend can't do both")
        return process.exit(1)
    }
    if(answers.frontend_or_backend=="fullstack" || options.fullstack){
        tempquestions.push({
           name:"template",
           type:"list",
           message:"choose the template you wish to install",
           choices:[
               "A fullstack app with react and express along with mongodb"
           ] 
        })
    }
    if(answers.frontend_or_backend=="frontend" || options.frontend){
        tempquestions.push({
            name:"template",
            type:"list",
            message:"Choose the template you wish to install",
            choices:[
                "A clean react app with classes",
                "A React app with hooks and routers",
                "A React app with classes and redux",
                "A React app with hooks and context api",
                "A react app with hooks and redux without synchronous actions",
                "A react app with redux-thunk",
                "A react app with redux-saga",
                "A react app with redux thunk and synchronous actions and routers",
                "A react app with redux thuk and persisited store"
            ],
            default:"A clean react app with classes",
        })
    }
    if(answers.frontend_or_backend=="backend" || options.backend){
        tempquestions.push({
            name:"template",
            message:"Choose the backend template",
            type:"list",
            choices:[
                "A simple express api",
                "A simple app with express and routers",
                "An app with middlewares and routers"
            ],
            default:"A simple express api"
        })
    }
    const tempanswers=await inquirer.prompt(tempquestions)
    return{
        ...options,
        git:answers.git || options.git,
        template:tempanswers.template
    }


}
export async function cli(args) {
    await figlet("Naveenkumar MD",async(err,data)=>{
        if(err){
          console.log(err)  
        }
        console.log(data)
        console.log("Bootstrap all the mern files using create-mern-apps\n")
        console.log(chalk.yellow("visit https://js-master-methods.web.app to learn more\n") )
        var options = parsearguments(args)
        options = await promptformissingargs(options)
        console.log(options)
        copy(options)
    })
    
}