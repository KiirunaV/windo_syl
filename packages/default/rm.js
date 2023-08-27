function removefile(args){
  if(args.length == 0){
    output += "rm <file name>\n";
    return
  }

  var sFile = null;
  if(args[0][0] == "/"){
    sFile = getFILE(args[0].split("/").slice(0, -1).join("/"))
  }else{
    sFile = getFILE(workingDir);
  }
  for(i = 0; i < sFile.sub.length; i++){
    if(sFile.sub[i].path.split("/").at(-1) == args[0].split("/").at(-1)){
    sFile.sub.splice(i, 1);
    }
  }
}
