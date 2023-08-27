function mkdir(args){
  if(args.length == 0){
    output += "mkdir <folder name>\n";
    return
  }
  
  if(args[0][0] == "/"){
    getFILE(args[0].split("/").slice(0, -1).join("/")).addFILE(args[0].split("/").at(-1), "folder");
  }else{
    getFILE(workingDir).addFILE(args[0], "folder");
  }
}
