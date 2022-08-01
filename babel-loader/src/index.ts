export function log(str: string) {
  console.log(str);
}

class A {
  greeting = 'Hello World from class A';
}

log(new A().greeting);
