import { AddNFTsInput } from '../../types/Models/NFT/AddNFTs/AddNFTsInput';
import { saturnAPI } from '../api';

export const addNFT = async (input: AddNFTsInput) => {
    try {
        const url = `${saturnAPI.baseURL}${saturnAPI.endpoints.nft.add()}`;
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(input),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
