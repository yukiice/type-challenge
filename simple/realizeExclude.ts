type MyExclude<T,K extends T> = T extends K?never:T
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'