export interface IPlayerModel {
    id: number
    name: string
    club: string
    nationality: string
    position: string,
    statistics: {
        overral: number
        pace: number
        shooting: number
        passing: number
        dribbling: number
        defending: number
        physical: number
    }
}
