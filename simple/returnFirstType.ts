type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type First<T> = T extends [infer P,...any[]]?P:never
type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3
