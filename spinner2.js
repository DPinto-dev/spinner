const animation = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let countTime = -200;
let countIndex = 0;

for (const char of animation) {
  countTime += 200;
  setTimeout(() => {
    countIndex++;
    countIndex === animation.length
      ? process.stdout.write("\r" + char + "  \n")
      : process.stdout.write("\r" + char + "  ");
  }, countTime);
}
