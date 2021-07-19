const exec = require('child_process').exec;
import chalk from 'chalk';
export const installDependancies = async (options) => {
    let dir = `../template/${options.temp}/requirements`
    let { requirements } = await import(dir)
    let command = "npm install " + requirements.join(" ") + " --prefix " + options.targetDir
    let installProcess = exec(command).on('close',()=>{
        console.log(chalk.green("\nProject sucessfully initialized\n"))
        console.log(chalk.green("Happy hacking\n"))
        console.log("To run the project on your local machine\n")
        console.log(chalk.blue.bold('\tcd ' + options.name))
        console.log(chalk.blue.bold("\tnpm start"))
        process.kill()
    });
    installProcess.stdout.pipe(process.stdout);
    installProcess.stderr.pipe(process.stderr);
    
}