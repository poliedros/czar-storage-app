// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type StorageDTO = {
    _id: string,
    type: string,
    code: string,
    name: string,
    urlName: string,
    logoImage: string,
    phoneNumber: string,
    email: string,
    socialMedia: string,
    address: string,
    city: string,
    additionalInfo: string,
    theme: string,
    deliveryPrice: string,
    paymentMethods: string,
    userId: string,
    __v: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<StorageDTO[]>
) {
    res.status(200).json([
        {
            _id: "630016aaf7a771307d0ddb22",
            type: "Pizzaria",
            code: "PZBC031",
            name: "Pizza a Beça",
            urlName: "pizzaabeca",
            logoImage: "https://catalogv2.blob.core.windows.net/storage-images/Brasão1650857941334",
            phoneNumber: "",
            email: "pizzaabeca@gmail.com",
            socialMedia: "",
            address: "",
            city: "São João del Rei",
            additionalInfo: "",
            theme: "journal",
            deliveryPrice: "6",
            paymentMethods: "",
            userId: "1",
            __v: 0
        }
    ])
}