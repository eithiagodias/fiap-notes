interface DecodedToken {
    sub: string, 
    exp: number
}

export const jwtDecode = (jwt: string | null): DecodedToken | false => {
    if(!jwt) return false
    const splitted = jwt.split("Bearer")
    if(!splitted[1]) return false
    const tokens =  splitted[1].split('.') ;
    return JSON.parse(atob(tokens[1]))
}