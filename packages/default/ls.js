function ls(args){
  var wf = getFILE(workingDir);
  if(wf == -1){
    return;
  }
  for(i = 0; i < wf.sub.length; i++){
    output += wf.sub[i].path.split("/").at(-1) + "\n";
  }
}
