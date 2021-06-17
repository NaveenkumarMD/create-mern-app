import ncp from 'ncp'
import {projectInstall} from 'pkg-install'
import chalk from 'chalk'
import path, { basename } from 'path'
import Listr from 'listr'
import execa from 'execa'
import figlet from 'figlet'
function copydir(options){
    return new Promise((resolve,reject)=>{
        ncp(options.templateDir,options.targetDir,{clobber:false},(err)=>{
            if(err){
                console.log(err)
                reject(err)
                return
            }
             resolve()
        })
    })
}
async function initGit(options) {
	const result = await execa('git', ['init']);
    if (result.failed) {
      return Promise.reject(new Error('Failed to initialize git'));
    }
    return;
   }
   
export function copy(options){
    const currentfileurl=import.meta.url
    var temp=""
    switch (options.template){
        case "A clean react app with classes":
            temp="classes"
            break;
        case "A react app with hooks and redux without synchronous actions":
            temp="hooksandredux"
            break
        case "A simple express api":
            temp="simplerestapi"
            break
        case "A simple app with express and routers":
            temp="apiwithrouters"
            break
        case "An app with middlewares and routers":
            temp="apiwithmiddleware"
            break
        case "A React app with hooks and routers":
            temp="hooks"
        default:
            break
    }
    var templateDir=path.join(
        new URL(currentfileurl).pathname,
        '../../template',
        temp
    )
    console.log(templateDir)
    templateDir=templateDir.substring(1)
    const targetDir=process.cwd()+'/'+options.name
    options={
        ...options,
        templateDir:templateDir,
        targetDir:targetDir
    }

    const tasks=new Listr([

        {
            title:"Copying files",
            task:()=>copydir(options)
        },
        {
            title:"Initializing a new git repository",
            task:()=>initGit(options),
            enabled:()=>options.git
        },
        {
            title:"Installing dependancies",
            task:()=>projectInstall({
                cwd:options.targetDir
            })
        }
    ])
    tasks.run().then(()=>{
        console.log(chalk.green("\nProject sucessfully initialized\n"))
        console.log(chalk.green("Happy hacking\n"))
        console.log("To run the project on your local machine\n")
        console.log(chalk.blue.bold('\tcd '+options.name))
        console.log(chalk.blue.bold("\tnpm start"))
    }).catch(err=>{
        console.log(err)
    })
    
}
