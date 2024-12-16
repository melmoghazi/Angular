# Angular Forms
This project was generated with Angular CLI version 18.2.7.
## Angular Template-driven Form - Mutable Form
    <form #loginForm="ngForm">
## Angular Template-driven Form - Track control states
Properties of the control:
1-ng-untouched
2-ng-touched
3-ng-pristine: control value or data not changed 
4-ng-dirty
5-ng-valid: control status
6-ng-invalid

## Angular Template-driven Form - Show and hide validation error messages
Angular Template-driven Form - All Built-in Validators.
Understanding Angular Form onSubmit and ngSubmit.
Understanding Angular ngModelOptions and ngModelChange.
Angular Forms - Advanced ngModelOptions
Angular Forms - Understanding ngModel One Way and Bidirectional Data Binding

## Angular Reactive Form
- Introduction to Angular Reactive Form
- Reactive Form - Understanding Form Control
    1-Form Group 2-Form Array 3-Form Control 4-Form Record
- Form Control:
    1-Generic strong type FormControl<string>('')
    2-Initial value:
        1-FormControl<string>({value:'',disabled:false})
        2-FormControl<boolean>({value:true, disabled:false})
        3-FormControl<string>('',{updateOn:'blur'}), 
- Reactive Form - How can use Form Builder
- Reactive Form Validations
- Reactive Form - Custom Validators for Password Match
- Reactive Form - Show Validation Error Message


tsconfig.json "noUnusedLocals": true // means anything not used must be removed.
tsconfig.app.json in compilerOptions "strictPropertyInitialization": false //means property initialization not required.
# End Angular Forms

# Routing Guard
## Routing CanActivate Guard - Preventing unauthorized access
## Routing Guard - CanActivateFn vs CanActivate (Deprecated)
## Routing and Angular Performance - Lazy Load Standalone Components
- routing loadComponet make lazy load of the component, means the component will load only when its link be active.
## Best Practices for Building Scalable Angular Applications - Use a Modular A
## Routing Guard - CanLoadFn & CanLoad (Deprecated) vs CanMatchFn
- CanLoadFn, CanLoad, and CanMatchFn are equal to CanActivateFn that secure your route.
## Routing Guard - The differences CanActivateFn vs CanMatchFn
- CanActivateFn load the componet or the moduel js file however it can be unaccess by the user, so it is not useful with lazy load.
- Use CanMatchFn instead of CanActivateFn when using lazy loading.
# End Routing Guard
# Angular Resolver
- In Angular, a Resolver is a service that resolves data before a route is activated. It ensures that the necessary data for a route is retrieved and available before the route component is loaded, enhancing the user experience by avoiding partially loaded views.
- Pre-Fetching Data: A resolver pre-fetches data from a service or an API before navigating to a route.
- Synchronous or Asynchronous: It can handle both synchronous and asynchronous data fetching (e.g., API calls using `HttpClient`).
- Route Guard-Like Behavior: While not technically a guard, a resolver works similarly by preventing the route from loading until the data is resolved.

# Angular Decorator (Metadata Properties and Scope)
- @ViewChild Decorator (Metadata Properties and Scope)
    - Metadata:
        - static = false/true false is the default and it means run after change detection and run with every change.
        - read you can set specific type.
    - Scope: can not see nested children.
    - track the first match child only.
- Understating @ViewChildren Decorator
- Understating @ContentChild Decorator
    - trak the first match child only.
    - access only first child.
- Understating @ContentChildren Decorator
    - access nested children.
## Notes:
- View Child or View Children your code is in the parent and you need to view what in the child.
- Content Child or Content children your code is in the child and you need to get the content sent from the parent. 

# Angular Content projection
- Content Projection is away to send data (html elements have content) from component to its child.
- Content projection 3 types:
    - Single-slot:
        - Accept resources from one place. use ng-content in the html of the child. use @ContentChild in the ts of the child.
    - Multi-slot:
        - Send data from multi places and render it in multi places.
    - Condition
# Angular Advanced Core Features
- ng-container
- ng-template
- NgTemplateOutlet Directive
    - display ng-template in container
    - dynamically render ng-template
    - use a reusable component
    - optimze performance
    - readable and clean code
- Declarative vs Imperative Programming Paradigms in Angular
    - Declarative: focus on the end result and not give attention to steps.
    - Imperative: focus on the steps and not give attention to end result.
- Creating Configurable Components with ng-template in Angular
- Understanding ngTemplateOutletContext
    - used with ngTemplateOutlet
- ngTemplateOutletInjector

# Angular Signals - What are signals
- Angular Signals - Writable signals
- Angular Signals - Computed signals:
    - signal depends on another signal
    - you can not set in it, but it detect the changes from the signal it depens on.
- Angular Signals - Readonly Signal
    - immutable data so you can not change it.
    - does not depend on another signal
- Differences between model() and input()
    - model is writable signal so you can use set but input signal is read only so set is not exist.
    - model can used with 2 way data binding, but input signal is 1 way input binding only.
# Angular Dependency Injection in depth
    - Resolution modifiers:
        - @Optional - Parameter Decorator, if not injected make it null
        - @Self - Parameter Decorator, not use the DI hierarical but use only current component.
        - @SkipSelf - Parameter Decorator, use the DI hierarical but do not use the current component.
            it is the opposite of @Self so you can compine (@Self and @Optional) (@SkipSelf and @Optional) but
            can not compine (@Self and @SkipSelf).
        - @Host - Parameter Decorator, can not compine (@Self and @SkipSelf).
    - Configuring dependency providers 
        - Class providers useClass. Inject class
        - Alias providers useExisting. use existing Injected class
        - Value providers useValue. Inject static object.
        - Angular InjectionToken. Inject Interface, object, or array to DI.
        - Factory providers useFactory. Can switch between instaces in the runtime depending of specific condition.
    - Angular Injection Context: It available in specific palces in the (component, directive, guard, pipe):
        - constructor
        - Inject into field
        - dependency providers(factor function)