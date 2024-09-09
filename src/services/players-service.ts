import { IPlayerModel } from "../models/player-model";
import { IStatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import { ok, noContent, badRequest, created } from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response
}

export const getPlayerByIDService = async (id: number) => {
    const data = await PlayerRepository.findPlayerByID(id)
    let response = null

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response
}

export const createPlayerService = async (player: IPlayerModel) => {
    let response = null
    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player)
        response = await created()
    } else {
        response = await badRequest()
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    if (id) {
        const isDeleted = await PlayerRepository.removePlayerByID(id)
        if(isDeleted) {
            response = await ok({message: "Deleted!"})
        }
        else {
            response = await badRequest()
        }
    } else {
        response = await badRequest()
    }

    return response
}

export const updatePlayerService = async (id: number, statistics: IStatisticsModel) => {
    const response = await PlayerRepository.updatePlayerByID(id, statistics);
    if(Object.keys(response).length === 0) {
        return await badRequest()
    } else {
        return await ok(response);
    }
}
