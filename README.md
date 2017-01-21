# swagger-typescript-rest-boilerplate

This project aims to provide a starting application for a REST API described in TypeScript using
[`lukeautry/tsoa`](https://github.com/lukeautry/tsoa).

## Installation

See [the installation instructions](./INSTALLATION.MD).

## Generating useful stuff

* `npm run-script generate-client-ts`: This generates a TypeScript client library for Node you can
    require and use in `/build/client-ts`.
* `npm run-script generate-client-docs`: This generates a nice static doc in `/build/client-docs`.
* `npm run-script generate-routes`: This generates routes for the server to use (already required
    from the server). If you change controllers, call this method.
* `npm start`: Runs a dev server at `localhost:3000`.

## TODO

See the Github Issues for tracking work to do (there's a bunch!)

## Discovered pitfalls

* As of 2017/01/20, Typescript 2.1.1 is the latest version that works with `swagger-codegen`'s
    TypeScript-node output due to [this
    issue](https://github.com/swagger-api/swagger-codegen/issues/4375).
* Don't name an argument of a controller method "request"; it will conflict with the `request`
    library, and TypeScript will let you know with this error message:
    ```
    TS2349: Cannot invoke an expression whose type lacks a call signature.
    ```
* The default base path in the TypeScript client lib uses HTTPS, but the server doesn't yet
    support HTTPS. So to initialize the TypeScript client lib, run:

    ```
    import {DefaultApi} from "/path/to/build/client-ts/api";
    const api = new DefaultApi("http://localhost:3000/api");`
    ```
