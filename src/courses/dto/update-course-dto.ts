import { IsOptional, IsString } from "class-validator";

export class UpdateCourseDTO {
    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly description?: string;

    @IsString({each: true})
    @IsOptional()
    readonly tags?: string[];
}