import anyTest, { type TestFn } from 'ava'
// import test from 'ava'

const test = anyTest as TestFn<{ uniquePrefix: string }> & typeof anyTest

// THIS SHOULD ERROR
test.only('test 1', t => {
  t.pass()
})
