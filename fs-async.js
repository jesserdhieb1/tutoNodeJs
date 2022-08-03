const {readFile,writeFile} = require('fs');

readFile('./content/first.txt' , 'utf8' ,(err,result)=>{
    if(err){
        console.log(err);
        return null;
    }
    else{
        const first=result;
        readFile('./content/second.txt' , 'utf8',(err,result)=>{
            if(err){
                console.log(err);
                return null;
            }
            else{
                const second=result;
                writeFile('./content/result-async.txt',`Here is the result ${first}, ${second} \n`,{flag:'a'},
                    (err,result)=>{
                        if(err){
                            console.log(err);
                            return null;
                        }
                        else {
                            console.log(result);
                        }
                    })
            }
        })
    }

})