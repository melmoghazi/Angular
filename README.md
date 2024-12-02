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
- Understating @ViewChildren Decorator
- Understating @ContentChild Decorator