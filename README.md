# setTimeout-ends-premature
A test that shows that it is possible for setTimeout to fire its callback 1 milliseconds faster than it was meant and can't be trusted for this resolution (of 1 millisecond)

I tried this test on node.js, version 8.9.1

Sometimes it takes more than one execution for the premature timeout to happen.

Just do ``node test.js``
