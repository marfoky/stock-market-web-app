import axios from "axios"

export async function getCandleStickData(url: string) {
    try {
        console.log('Getting data...');
        const response = await axios.get(url);
        return JSON.parse(response.data.indicators);
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error to handle it at a higher level if needed
    }
}

export async function getPredictions(url: string) {
    try {
        const response = await axios.get(url)
        return  response.data
    }
    catch(error){
        console.error('Error:', error)
        throw error;
    }
}

