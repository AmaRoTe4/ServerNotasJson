import fs from 'fs';

export const oldYoung = async (path) => {
    //de mas viejo a joven (jerarquia prabalese)
    const data = JSON.parse(await fs.readFileSync(path))
    return data.sort((a, b) => b.createdAt - a.createdAt).sort((a , b) => a.jerarquia - b.jerarquia)
}

export const youngOld = async (path) => {
    //de mas joven a viejo (jerarquia prabalese)
    const data = JSON.parse(await fs.readFileSync(path))
    return data.sort((a, b) => a.createdAt - b.createdAt).sort((a , b) => a.jerarquia - b.jerarquia)
}

export const proximoId = async (path) => {
    const data = JSON.parse(await fs.readFileSync(path))
    if(data.length === 0) return 1;
    return data.map(n => n.id).sort((a, b) => b - a)[0] + 1
}

export const individual = (data , id) => {
    return data.find((n) =>  Number(n.id) === Number(id))
} 