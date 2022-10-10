import {httpService} from "./baseHTTP"

export const getGiphy = async (payload) => {
    const giphy = await httpService({
        params : {
            q : payload
        }
    })
    return giphy.data
}