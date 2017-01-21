# swagger-typescript-rest-boilerplate

This project aims to provide a starting application for a REST API described in TypeScript using
[`lukeautry/tsoa`](https://github.com/lukeautry/tsoa).

## Installation

See [the installation instructions](./INSTALLATION.MD).

## Discovered pitfalls

* As of 2017/01/20, Typescript 2.1.1 is the latest version that works with `swagger-codegen`'s
    TypeScript-node output due to [this
    issue](https://github.com/swagger-api/swagger-codegen/issues/4375).
* Don't name an argument of a controller method "request"; it will conflict with the `request`
    library, and TypeScript will let you know with this error message:
    ```
    TS2349: Cannot invoke an expression whose type lacks a call signature.
    ```
