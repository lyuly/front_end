export type UseNamespace = {
  b: () => string;
  e: (el: string) => string;
  m: (mo: string) => string;
  em: (el: string, mo: string) => string;
}

function createPrefix(namespace: string, element?: string, modifier?: string): string {
  let cls = namespace
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls
}

export function useNamespace(block: string, needDot = false): UseNamespace {
  const namespace = needDot ? `.wviewui-${block}` : `wviewui-${block}`;
  const b = () => createPrefix(namespace);
  const e = (element: string) => (element ? createPrefix(namespace, element) : '');
  const m = (modifier: string) => (modifier ? createPrefix(namespace, modifier) : '');
  const em = (element: string, modifier: string) => (element && modifier ? createPrefix(namespace, element, modifier) : '')
  return {
    b,
    e,
    m,
    em
  }
}

/* 
const ns = useNamespace('button')
ns.b() // wviewui-button
ns.e('hello') // wview-button_hello
ns.m('hello') // wview-button--hello
ns.em('hello', 'world') // wview-button__hello--world
*/