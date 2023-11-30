import { IsString } from "class-validator";

export class CreateCourseDTO {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    // O each serve para validar cada item do array
    @IsString({each: true})
    readonly tags: string[];
}