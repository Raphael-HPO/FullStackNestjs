import { Expose } from "class-transformer";


export class userResponse {
    @Expose()
    readonly name: string;

    @Expose()
    readonly email: string;
}