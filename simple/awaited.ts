import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }


type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

type error = MyAwaited<number>
 
// 题目要求传入number时候报错，但传入符合promise返回值的正常
// ============= Your Code Here =============
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R>?R extends Promise<unknown>?MyAwaited<R>:R:never;
