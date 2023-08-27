function cat(args){
  var file = "";
  if(args.length == 0){
    output += "Profide a file path...\n"
    return;
  }
  if(args[0][0] == "/"){
    file = args[0];
  }else{
    file = workingDir + "/" + args[0];
  }
  var f = getFILE(file);
  if(f == -1){
    output += "No file named " + args[0] + "\n";
  }else if(f.type != "file"){
    output += args[0] + " is not a file\n";
  }else{
    output += f.text + "\n";
  }
}
