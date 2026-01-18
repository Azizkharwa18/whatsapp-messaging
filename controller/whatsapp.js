
import { uploadMedia } from "../utils/uploadMedia.js";

export const sendMessageUsingTemplate = async (req, res) => {
    try {
        const url = process.env.BASE_URL + "/" + process.env.MOBILE_ID + '/messages';
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const { recepient, receipt_num, comp_name } = req.body;

        if (!recepient || !receipt_num || !comp_name) {
            return res.status(400).json({ message: "No recepient or receipt number or company name received" });
        }

        const mediaID = await uploadMedia(req.file);

        if (!mediaID)
            return res.status(400).json({ message: "Media not uploaded" });

        const payload = {
            "messaging_product": "whatsapp",
            "to": recepient,
            "type": "template",
            "template": {
                "name": "cloud_receipt",
                "language": {
                    "code": "en_US"
                },
                "components": [
                    {
                        "type": "header",
                        "parameters": [
                            {
                                "type": "image",
                                "image": {
                                    "id": mediaID
                                }
                            }
                        ]
                    },

                    {
                        "type": "body",
                        "parameters": [
                            {
                                "type": "text",
                                "text": receipt_num
                            },
                            {
                                "type": "text",
                                "text": comp_name
                            }
                        ]
                    },
                    {
                        "type": "button",
                        "sub_type": "url",
                        "index": "0",
                        "parameters": [
                            {
                                "type": "text",
                                "text": receipt_num
                            }
                        ]
                    }
                ]
            }
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.TOKEN
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("WhatsApp API Error:", data);
            return res.status(response.status).json({ message: "Failed to send message", error: data });
        }

        res.status(200).json({ message: "Message sent successfully", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}