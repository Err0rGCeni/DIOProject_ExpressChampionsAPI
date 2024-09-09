import { Request,  Response } from "express"
import { createPlayerService, deletePlayerService, getPlayerByIDService, getPlayerService, updatePlayerService } from "../services/players-service"
import { IStatisticsModel } from "../models/statistics-model";

// Contexto: Jogadores

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const  httpResponse =  await getPlayerByIDService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse  = await createPlayerService(bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deletePlayer = async (req:Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: IStatisticsModel = req.body
    const httpResponse = await updatePlayerService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}
