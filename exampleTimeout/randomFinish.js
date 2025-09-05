function randomFinish(label) {
  const randomTime = Math.random() * 1000;
  console.log(label, "started running" )

  setTimeout(() => console.log(label + "is done running after !"), randomTime);
}

randomFinish("function 1");
randomFinish("function 2");
randomFinish("function 3");



setTimeout(() => console.log("I ran after some time!"), 1000);
