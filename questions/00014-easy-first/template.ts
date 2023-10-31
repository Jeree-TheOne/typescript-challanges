type First<T extends unknown[]> = T extends [infer A, ...infer _rest] ? A : never
