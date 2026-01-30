import {Injectable, Compiler, Injector, Type, ViewContainerRef, createComponent, EnvironmentInjector, Inject} from '@angular/core';
import {LAZY_WIDGETS} from './tokens';

@Injectable({providedIn: 'root'})
export class LazyLoaderService {

  constructor(private injector: Injector,
              private compiler: Compiler,
              private environmentInjector: EnvironmentInjector,
              @Inject(LAZY_WIDGETS) private lazyWidgets: { [key: string]: () => Promise<Type<any>> }) {
  }


  async load(name: string, container: ViewContainerRef) {
    const ngModule = await this.lazyWidgets[name]();
    
    // Compile the module if needed
    const moduleFactory = await this.compiler.compileModuleAsync(ngModule);
    const moduleRef = moduleFactory.create(this.environmentInjector);

    const entryComponent = (<any> ngModule).entry;

    // Use the modern createComponent API
    const componentRef = createComponent(entryComponent, {
      environmentInjector: moduleRef.injector,
      elementInjector: this.injector
    });
    
    container.insert(componentRef.hostView);
  }

}
