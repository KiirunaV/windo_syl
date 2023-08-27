function move(args){
  if(args.length == 0){
    output += "mv <file name> <destination>\n";
    return
  }

  var file1 = null;
  var file2 = null;

  if(args[0][0] == "/"){
    file1 = getFILE(args[0]);
  }else{
    file1 = getFILE(workingDir + "/" + args[0]);
  }

  if(args[1][0] == "/"){
    file2 = getFILE(args[1].split("/").slice(0, -1).join("/"));
  }else{
    file2 = getFILE(workingDir);
  }

  file2.addFILE(args[1].split("/").at(-1), "file", file1.text);
}
