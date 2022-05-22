# Clean Architecture with React Native

This is realization of domain first architecture. It doesn't realize "Screaming architecture" approach, because in my opinion that doesn't save much time, but requires a lot of time to make good folder structure with reusable system components and logical connections. Also you can name it Onion, because they are very similar.

And one assumption: Domain layer is bouded up with MOBX. Yep, domain layer depends on it and it's critical violation of domain first approach. But other ways to make normal and observable data changes for app are so bad (I don't know any other than manual rerender all tree). And also you can easily cut MOBX, it's only one line of code that makes our data observable, no more.

[Reference](https://github.com/bespoyasov/frontend-clean-architecture) of common realization <br/>
[Reference](https://github.com/xurxodev/frontend-clean-architecture) super example of interfaces usage and Dependency Invertion. Also great "Screaming architecture" moduling.

Husky test: 1
