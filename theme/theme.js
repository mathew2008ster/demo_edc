/**
 * Created by admin on 2018/6/1.
 */

var fs = require('fs');
var path = require('path');
var viewPath = path.join(__dirname, '../views/admin');

var config =  {
    type: 'delete',
    className: 'skin-3'
};

readdir(viewPath);
readdir(path.join(__dirname, '../views/draft'));
readdir(path.join(__dirname, '../views/dataMgmt/block'));
readdir(path.join(__dirname, '../views/dataMgmt/block/details'));
// readdir();
function readdir(dir){
    var viewPath = dir;
    fs.readdir(viewPath, function(err, files){

        files.forEach(function(item, index, self){
            if(fs.statSync(path.join(viewPath,item)).isFile() ){
                readFile(path.join(viewPath,item));
            }else {
                // console.log(item)
            }
        });
    });
}

function readFile(_file){
    var ss = '';
    fs.readFile(_file, function(err, data){
        ss += data;
        var res = ss.match(/<body\s*class="[\s\-a-zA-Z0-9]*"(\s*)>/);

        if(res){
            ss = ss.replace(/<body\s*class="[\s\-a-zA-Z0-9]*"(\s*)>/,function(regResult){
                regResult = regResult.replace(/"[a-zA-Z\s\-0-9]*"/, function(regResult){
                    var classList =regResult.replace(/"/g,'').split(/\s+/);
                    if(config.type == 'add'){
                        if(classList.indexOf( config.className) == -1){
                            classList.push(' ' +  config.className);
                        }
                    }else if(config.type == 'delete') {
                        var index = classList.indexOf( config.className);
                        if(index>-1){
                            classList.splice(index,1);
                        }
                    }
                    return '"' +  (classList.join(' ').replace(/\s+/g, " ")).trim() + '"'
                });
                return regResult;
            });
            fs.writeFile(_file, ss, function(err) {
                if (err) {
                    console.log("error!" + _file);
                } else {
                    console.log("success!" + _file);
                }
            });
        }

    })
}