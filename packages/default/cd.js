function cd(args){
  var nextDir = "";
  if(args.length == 0){
    output += "Profide a path...\\n"
    return;
  }
  if(args[0][0] == "/"){
    nextDir = args[0];
  }else{
    nextDir = workingDir + "/" + args[0];
  }
  var f = getFILE(nextDir);
  if(f == -1){
    output += "No dir named " + args[0] + "\\n";
  }else{
    workingDir = nextDir;
    if(workingDir == "/"){
      workingDir = "";
    }
  }
}
