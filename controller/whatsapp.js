
import { uploadMedia } from "../utils/uploadMedia.js";

const sendMessageUsingTemplate = async (req, res) => {
    try {
        const mediaID = await uploadMedia();
        const payload = {
            "messaging_product": "whatsapp",
            "to": "918959706169",
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
                                    "id": "1129488625995868"
                                }
                            }
                        ]
                    }
                ]
            }
        };

        res.status(200).json({ message: "Message sent successfully", payload });


    } catch (error) {

    }
}