import {Route, Get, Post, Delete, Patch, Example} from "tsoa";
import {User, UserCreateRequest, UserUpdateRequest} from "../models/user";

@Route("Users")
export class UsersController {

    /** Get the current user */
    @Get("Current")
    @Example<User>({
        createdAt: new Date(),
        username: "test@test.com",
        id: "1",
    })
    public async Current(): Promise<User> {
        return {
            createdAt: new Date(),
            username: "test",
            id: "666"
        };
    }

    /** Get user by ID */
    @Get("{userId}")
    public async Get(userId: string): Promise<User> {
        return {
            createdAt: new Date(),
            username: "test2",
            id: userId
        };
    }

    /**
     * Create a user
     * @param req This is a user creation request description
     */
    @Post()
    public async Create(req: UserCreateRequest, optionalString?: string): Promise<User> {
        return {
            createdAt: new Date(),
            username: req.username,
            id: "666"
        };
    }

    /** Delete a user by ID */
    @Delete("{userId}")
    public async Delete(userId: number): Promise<void> {
        return Promise.resolve();
    }

    /** Update a user */
    @Patch()
    public async Update(req: UserUpdateRequest): Promise<User> {
        return {
            createdAt: new Date(),
            username: req.username,
            id: "1337"
        };
    }
}
