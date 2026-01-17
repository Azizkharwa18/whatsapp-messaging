export async function uploadMedia(file) {
    const url = process.env.BASE_URL + "/" + process.env.MOBILE_ID + '/media';

    const formData = new FormData();
    const blob = new Blob([file.buffer], { type: file.mimetype });
    formData.append('file', blob, file.originalname);
    formData.append('messaging_product', 'whatsapp');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + process.env.TOKEN
        },
        body: formData
    });

    const data = await response.json();
    console.log(data);
    return data.id;
}