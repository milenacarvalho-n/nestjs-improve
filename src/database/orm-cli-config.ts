import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1702302124811 } from "src/migrations/1702302124811-CreateCoursesTable";
import { CreateTagsTable1702320841305 } from "src/migrations/1702320841305-CreateTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1702302124811, CreateTagsTable1702320841305],
})