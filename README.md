# CareMonitorAssignment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server
Once code is pulled, do
```bash
npm install
```
To test if there is any test environment backend, you can navigate to environment.ts file and modify the `baseUrl` property. 

To start a local development server, run:

```bash
ng serve
```


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

Approach:

As mentioned in the task assignment, only list component is grouped as a module and its being lazy loaded. Rest of the components are standalone by default. 

Shared Module:
  Material Module
  In all the components as we are using Angular material, moved it to a shared module.
  
  Component
  1. Navbar
  2. Loader
  3. Table
  These are the components that are being shared, so its part of shared folder structure but not part of module, as they are standalone components. We can create a modular approach if required.
  Also, table component is created keeping reusability in mind, such a way that if we need more places same tabular data, we just need to pass the column definition and the data, rest the component should handle it. Table component is an example of dumb component.

Interceptors
1. AuthInterceptor
2. LoaderInterceptor

Apart from this, there is a mix of approach e.g. some places used traditional DI approach in another place functional approach.
