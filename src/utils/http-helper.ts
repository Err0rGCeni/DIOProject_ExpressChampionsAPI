import { IHttpResponse } from "../models/http-res-model"

export const ok = async (data:any): Promise<IHttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (): Promise<IHttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Successful!"
        }
    }
}

export const noContent = async (): Promise<IHttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async (error?: Error): Promise<IHttpResponse> => {
    return {
        statusCode: 400,
        body: error ?? null
    }
}
