import { Request, Response } from 'express'
import fs from "fs";
import path from "path";


const newUsersPath = path.join(__dirname, "../../data/newUsers.json");
const localDataPath = path.join(__dirname, "../../data/localData.json");

const getJsonData = (filePath: string): any[] => {
    if (!fs.existsSync(filePath)) return []; // Si el archivo no existe, devolver array vacío
    const content = fs.readFileSync(filePath, 'utf8').trim();
    return content ? JSON.parse(content) : [];
};

export const getData = async (req: Request, res: Response): Promise<any> => {
    try {
        // const localData = fs.existsSync(jsonPath) ? JSON.parse(fs.readFileSync(jsonPath, 'utf8')) : null;

        const localData = getJsonData(localDataPath);
        const newUsers = getJsonData(newUsersPath);

        const combinedData = [...localData, ...newUsers]; 


        if (!localData || ! await compareDate(localData)) {
            const dataNew = await getDataEnpoint()
            fs.writeFileSync(localDataPath, JSON.stringify(dataNew))
        }

        return res.json(combinedData)
    } catch (error: any) {
        return res.status(500).json({ message: `Error al intentar obtener los datos: ${error}` })
    }
}

const getDataEnpoint = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res) throw new Error('No se obtuvo respuesta del EndPoint')

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Hubo un error: ', error)
    }
}

const compareDate = async (localData: any) => {
    const apiData = await getDataEnpoint()

    return JSON.stringify(localData) === JSON.stringify(apiData)
}