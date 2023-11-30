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


// Posso utilizar desta format, utilizando a lib import { PartialType } from "@nestjs/mapped-types";
// export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {} (Classe da qual se estende)