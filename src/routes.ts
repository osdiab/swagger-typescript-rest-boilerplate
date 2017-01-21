/* tslint:disable */
import { ValidateParam } from 'tsoa';
import { UsersController } from './controllers/usersController';

const models: any = {
    'User': {
        'id': { typeName: 'string', required: true },
        'username': { typeName: 'string', required: true },
        'createdAt': { typeName: 'datetime', required: true },
    },
    'UserCreateRequest': {
        'username': { typeName: 'string', required: true },
    },
    'UserUpdateRequest': {
        'username': { typeName: 'string', required: true },
    },
};

/* tslint:disable:forin */
export function RegisterRoutes(app: any) {
    app.get('/api/Users/Current', function(req: any, res: any, next: any) {
        const params = {
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            return next(err);
        }

        const controller = new UsersController();
        promiseHandler(controller.Current.apply(controller, validatedParams), res, next);
    });
    app.get('/api/Users/:userId', function(req: any, res: any, next: any) {
        const params = {
            'userId': { typeName: 'string', required: true },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            return next(err);
        }

        const controller = new UsersController();
        promiseHandler(controller.Get.apply(controller, validatedParams), res, next);
    });
    app.post('/api/Users', function(req: any, res: any, next: any) {
        const params = {
            'request': { typeName: 'UserCreateRequest', required: true },
            'optionalString': { typeName: 'string', required: false },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, 'request');
        } catch (err) {
            return next(err);
        }

        const controller = new UsersController();
        promiseHandler(controller.Create.apply(controller, validatedParams), res, next);
    });
    app.delete('/api/Users/:userId', function(req: any, res: any, next: any) {
        const params = {
            'userId': { typeName: 'number', required: true },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            return next(err);
        }

        const controller = new UsersController();
        promiseHandler(controller.Delete.apply(controller, validatedParams), res, next);
    });
    app.patch('/api/Users', function(req: any, res: any, next: any) {
        const params = {
            'request': { typeName: 'UserUpdateRequest', required: true },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, 'request');
        } catch (err) {
            return next(err);
        }

        const controller = new UsersController();
        promiseHandler(controller.Update.apply(controller, validatedParams), res, next);
    });

    function promiseHandler(promise: any, response: any, next: any) {
        return promise
            .then((data: any) => {
                if (data) {
                    response.json(data);
                } else {
                    response.status(204);
                    response.end();
                }
            })
            .catch((error: any) => next(error));
    }

    function getRequestParams(request: any, bodyParamName?: string) {
        const merged: any = {};
        if (bodyParamName) {
            merged[bodyParamName] = request.body;
        }

        for (let attrname in request.params) { merged[attrname] = request.params[attrname]; }
        for (let attrname in request.query) { merged[attrname] = request.query[attrname]; }
        return merged;
    }

    function getValidatedParams(params: any, request: any, bodyParamName?: string): any[] {
        const requestParams = getRequestParams(request, bodyParamName);

        return Object.keys(params).map(key => {
            if (params[key].injected === 'inject') {
                return undefined;
            } else if (params[key].injected === 'request') {
                return request;
            } else {
                return ValidateParam(params[key], requestParams[key], models, key);
            }
        });
    }
}