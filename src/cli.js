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
        backend:options["--backend"] || false
    }
}
async function promptformissingargs(options) {
    var questions = []
    if(!options.frontend && !options.backend){
        questions.push({
            name:"frontend_or_backend",
            message:"Choose frontend or backend",
            type:"list",
            choices:["frontend","backend"],
            
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
    if(options.frontend && options.backend){
        console.log(chalk.red.bold("ERROR")+" Choose backend or frontend can't do both")
        return process.exit(1)
    }
    if(answers.frontend_or_backend=="frontend" || options.frontend){
        tempquestions.push({
            name:"template",
            type:"list",
            message:"Choose the template you wish to install",
            choices:[
                "A clean react app with classes",
                "A React app with hooks",
                "A React app with classes and redux",
                "A React app with hooks and context api",
                "A react app with hooks and redux without synchronous actions",
                "A react app with redux-thunk",
                "A react app with redux-saga",
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
                "A simple app with express and routers"
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