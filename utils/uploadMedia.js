export async function uploadMedia() {
    const url = process.env.BSE_URL + process.env.MOBILE_ID + '/media';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('messaging_product', 'whatsapp');



    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.TOKEN
        },
        body: formData
    });

    const data = await response.json();    
    console.log(data);
    return data;
}