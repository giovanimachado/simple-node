function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Giovani\'s Containers rule!');
    await sleep(5000);
  }
}

main();
