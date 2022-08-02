export function log(str: string) {
  console.log(str);
}

class A {
  gretting = 'Hello World from class A';
}

log(new A().gretting);
