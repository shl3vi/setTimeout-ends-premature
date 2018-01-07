const SIZE = 1000;
const timeoutDuration = 10;
let prematureTimeoutsCounter = 0;

const thisWillOftenDoPrematureTimeout = () =>
  console.log(`this log helps messing with the test results... WHY??`);

for (let i = 0; i < SIZE; i++) {
  thisWillOftenDoPrematureTimeout();
  const start = new Date().getTime();
  let end;
  setTimeout(() => {
    end = new Date().getTime();
    if ((end - start) < timeoutDuration) {
      prematureTimeoutsCounter++;
      console.log(`\n`)
      console.log(`premature timeouts counter: ${prematureTimeoutsCounter}`)
      console.log(`start: ${start}`)
      console.log(`end: ${end}`)
      console.log(`duration: ${(end - start)}`)
      console.log(`index: ${i}`)
    }
  }, timeoutDuration);
}
