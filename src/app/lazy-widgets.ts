import { Type } from '@angular/core';

export const lazyWidgets: { name: string, loadChildren: () => Promise<Type<any>> }[] = [
  {
    name: 'lazy-comp',
    loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule)
  },
  {
    name: 'other-lazy',
    loadChildren: () => import('./other-lazy/other-lazy.module').then(m => m.OtherLazyModule)
  }
];

export function lazyArrayToObj() {
  const result: { [key: string]: () => Promise<Type<any>> } = {};
  for (const w of lazyWidgets) {
    result[w.name] = w.loadChildren;
  }
  return result;
}
