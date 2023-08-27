function makefile(args){
  if(args.length == 0){
    output += "mkf <file name> [contents]\\n";
    return
  }
  
  if(args[0][0] == "/"){
    getFILE(args[0].split("/").slice(0, -1).join("/")).addFILE(args[0].split("/").at(-1), "file", args.slice(1).join(" "));
  }else{
    getFILE(workingDir).addFILE(args[0], "file", args.slice(1).join(" "));
  }
}
