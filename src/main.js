import ncp from 'ncp'
import { projectInstall } from 'pkg-install'
import chalk from 'chalk'
import path, { basename } from 'path'
const exec = require('child_process').exec;
import Listr from 'listr'
import execa from 'execa'
import figlet from 'figlet'
import { Finddir } from './findDir'
import {installDependancies} from './Functions'
var fs=require('fs')
function copydir(options) {
    return new Promise((resolve, reject) => {
        ncp(options.templateDir, options.targetDir, { clobber: false},
             (err) => {
            if (err) {

                console.log(err)
                reject(err)
                return
            }
            resolve()
        })
    })
}
function deleteunwantedFiles(options){
    fs.unlinkSync(options.targetDir+"/requirements.js")
}
async function initGit(options) {
    const result = await execa('git', ['init']);
    const currentfileurl = import.meta.url
    var templateDir = path.join(
        new URL(currentfileurl).pathname,
        '../../template',
        'gitfiles'
    )
    options={
        ...options,
        templateDir:templateDir.substring(1)
    }
    const result1=await copydir(options)
    if (result.failed) {
        return Promise.reject(new Error('Failed to initialize git'));
    }
    return;
}

export const copy = async (options) => {
    const currentfileurl = import.meta.url
    let temp = await Finddir(options)

    var templateDir = path.join(
        new URL(currentfileurl).pathname,
        '../../template',
        temp
    )
    templateDir = templateDir.substring(1)
    const targetDir = process.cwd() + '/' + options.name
    options = {
        ...options,
        templateDir: templateDir,
        targetDir: targetDir,
        temp:temp
    }

    const tasks = new Listr([

        {
            title:"Copying files",
            task:async ()=>copydir(options)
        },
        {
            title:"Initializing a new git repository",
            task:async ()=>initGit(options),
            enabled:()=>options.git
        },
        {
            title: "Collecting dependancies",
            task: async ()=>installDependancies(options)
        },
        {
            title:"Deleting unwanted files",
            task:async()=>deleteunwantedFiles(options)
        }
    ])
    tasks.run().then(() => {

    }).catch(err => {
        console.log(err)
    })

}
