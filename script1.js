// Node.js provide runtime env. vanilla js are not able to crteate a server with help of node we can creatre it.
//Node is a collection of multiple built in modules. 
// Package json is a metadata about your project.
// package json create ke liye -------------------npm init -y (ye cmd main me chli hai means Node_js_with_shreyansh)
const fs = require('fs');
fs.writeFile("hey.txt","hey",function(e){    //it create new file
    if(e) console.log(e);
    else console.log("Done Write file");
    })                                      //ye run ke liye- node script1.js

    
    fs.appendFile("hey.txt","me to accha hu",function(e){    //it will add data on prtevious file 
        if(e) console.error(e);
        else console.log("Done Append file");
        })                    

        fs.rename("hey.txt","hello.txt",function(e){                //All function are by default async nature.
            if(e) console.error(e);
            else console.log("Name Changed.");
            
        })
    
fs.copyFile("hello.txt", "./copy/copy.txt", function(e){
    if (e) console.error(e);
    else console.log("Copied in a new folder");
});

fs.unlink("hey.txt",(e)=>{              //it removes file
if(e) console.log(e);
else console.log("Removed");
})

fs.rmdir("./copy",{recursive:true},function(e){
    if(e)  console.error(e);                                              //it removes folder if folder not empty then we use  recursive
    else   console.log("Directory Deleted");
})                                                            