import { Request, Response } from 'express'
import fs from "fs";
import path from "path";

const newUsersPath = path.join(__dirname, "../../data/newUsers.json");
const localDataPath = path.join(__dirname, "../../data/localData.json");

const getJsonData = (path: string): any[] => {
    if (!fs.existsSync(path)) return [];

    const content = fs.readFileSync(path, 'utf8').trim();
    return content ? JSON.parse(content) : [];
};


export const addUser = async (req: Request, res: Response): Promise<any> => {
    const externalData = getJsonData(localDataPath);
    const newUsers = getJsonData(newUsersPath);
    const newId = externalData.length + newUsers.length + 1;

    const newUser = req.body
    let db = JSON.parse(fs.readFileSync(localDataPath, 'utf8'));

    const newUserObject = {
        id: newId,
        name: newUser.nombre,
        username: newUser.username,
        email: newUser.email,
        address: {
            street: '',
            suite: '',
            city: newUser.ciudad,
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: newUser.telefono,
        website: '',
        company: {
            name: newUser.empresa,
            catchPhrase: '',
            bs: ''
        }
    };
    newUsers.push(newUserObject)

    fs.writeFileSync(newUsersPath, JSON.stringify(newUsers, null, 2));

    res.status(201).json({
        message: 'Usuario creado exitosamente',
        user: newUserObject
    });
}