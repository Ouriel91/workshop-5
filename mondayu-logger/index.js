import { Console } from 'console';
import { createWriteStream } from 'fs';

// step 1: use this example: https://melvingeorge.me/blog/save-logs-to-files-nodejs
// export your monday logger here

const myLogger = new Console({
    stdout: createWriteStream("out.txt", {flags: 'a'}),
    stderr: createWriteStream("err.txt", {flags: 'a'}),
})

myLogger.log("hello to out.txt!!!!")
myLogger.error("error to err.txt")

// step 2: rename the package and publish 

export { myLogger } 
