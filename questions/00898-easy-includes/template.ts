import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
  ? Equal<U, L> extends true
    ? true
    : Includes<R, U>
  : false
