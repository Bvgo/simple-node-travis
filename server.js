// Set a local variable populated by the environment variable $NAME
const BUILD_TIME = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${BUILD_TIME} rocks!`);
    await sleep(5000);
  }
}

main();
