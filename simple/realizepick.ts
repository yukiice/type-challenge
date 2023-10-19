interface Todo {
    title: string
    description: string
    completed: boolean
  }
  type MyPick<T,K extends keyof T> = {
    [k in K]:T[k]
  }
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }


  // 解析
  // 1.keyof
  // keyof的作用是获取一个类型的所有属性名组成的联合类型
  type P1 = {name:string,age:number}
  type PKey = keyof P1
  // 2.extends
  // 用于泛型约束，表示泛型的类型必须是某个类型的子类型
  // T extends U 表示泛型T必须是U的子类型
  // 3.in
  // in的作用主要是用户遍历枚举类型
  // 例如 我们可以使用in将一个类型的所有属性变成可选的
    type P2 = {name:string,age:number}
    type P3 ={[k in keyof P2]?:P2[k]}
  
  