import dbConnect from "../../../lib/mongoose";
import sgMail from "@sendgrid/mail";
import { contactForm } from "../../../components/emailTemplates/templates";

// export default function handler(req, res) {
//     res.status(200).json({ text: "Hello" });
//   }

export default async function userAPI(req, res) {
  try {
    // console.log(req.method);
    // console.log("in");
    //   console.log('CONNECTING TO MONGO');
    await dbConnect();
    //   console.log('CONNECTED TO MONGO');
    // console.log(req.method);

    if (req.method === "POST") {
      // console.log("CREATING DOCUMENT");
      const data = req.body.State;
      // console.log(data);
      // const userId = req.body.userId;

      // contact us email
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "offthewebinfo@gmail.com", // Change to your recipient
        from: "official.offtheweb@gmail.com", // Change to your verified sender
        subject: data.subject,
        html: contactForm(data),
      };
      sgMail
        .send(msg)
        .then(() => {
          res.send({
            success: true,
            message:
              "Thanks for contacting us. We will get back to you shortly",
          });
        })
        .catch((error) => {
          // console.log(error);
          res.status(500).send({
            success: false,
            message: "Something went wrong. Try again later",
          });
        });
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    // console.log(error);
    res.json({ error });
  }
}
