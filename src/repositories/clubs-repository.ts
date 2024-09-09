import { IClubModel } from "../models/club-model";
import fs from 'fs/promises'


export const findAllClubs = async (): Promise<IClubModel[]> => {
    const data =  await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: IClubModel[] = JSON.parse(data)
    return clubs;
}
