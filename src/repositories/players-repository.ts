import { IPlayerModel } from "../models/player-model";
import { IStatisticsModel } from "../models/statistics-model";
import fs from 'fs/promises'

const getDatabase = async (): Promise<IPlayerModel[]> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8")
    const database = JSON.parse(data)
    return database
}

export const findAllPlayers = async (): Promise<IPlayerModel[]> => {
    const database = await getDatabase()
    return database;
}

export const findPlayerByID = async (id: number): Promise<IPlayerModel | undefined> => {
    const database = await getDatabase()
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: IPlayerModel) => {
    const database = await getDatabase()
    database.push(player)
}

export const removePlayerByID = async (id:number) => {
    const database = await getDatabase()
    const index = database.findIndex(p => p.id === id)
    if (index !== -1) {
        database.splice(index,1)
        return true
    } else {
        return false        
    }
}

export const updatePlayerByID = async (id:number, statistics: IStatisticsModel) => {
    const database = await getDatabase()
    const index = database.findIndex(p => p.id === id)
    if (index !== -1) {
        database[index].statistics = statistics
    } else {
        
    }

    return database[index]
}
