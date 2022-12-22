import axios from "axios"
import { ProfileModel } from "../../model/profile_model"
import { profileUrl } from "../url"

export const create = async (slogan: string, description: string) => {
    let res = await axios.post(`${profileUrl}`, {slogan, description})
    const code = res.data.code as number
    if(code === 200){
        return res.data.id
    } else {
        return null
    }
}

export const update = async (profileId: string, slogan: string, description: string) => {
    let res = await axios.put(`${profileUrl}`, {profileId, slogan, description})
    const code = res.data.code as number
    if(code === 200){
        return true
    } else {
        return false
    }
}

export const get = async () => {
    let res = await axios.get(`${profileUrl}`)
    const rawProfile = res.data.profile
    const profile: ProfileModel = {
        id: rawProfile._id,
        slogan: rawProfile.slogan,
        description: rawProfile.description
    }
    return profile
}