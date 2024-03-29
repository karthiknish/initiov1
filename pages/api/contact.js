import dbConnect from "../../lib/dbConnect";
import Contact from "../../models/Contact";
import nodemailer from "nodemailer";
export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "initiosol@gmail.com",
      pass: process.env.PASS,
    },
  });
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const { id } = req.query;
        if (id && id.length) {
          const contact = await Contact.findOne({ _id: id });
          return res.status(200).json({ success: true, data: contact });
        }
        const contacts = await Contact.find({});
        res.status(200).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const contact = await Contact.create(req.body);

        let info = await transporter.sendMail({
          from: "initiosol@gmail.com",
          to: "support@initiosolutions.com",
          subject: "You got a new lead!!",
          html: `
            <div>
              <div style='margin-bottom:'10px'><b>Name :</b> ${req.body.name}</div>
              <div style='margin-bottom:'10px'><b>Email :</b> ${req.body.email}</div>
              <div><b>Message: </b>${req.body.message}</div>
            </div>
          `,
        });
        console.log("Message sent: %s", info);
        res.status(201).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false });
        console.error(error);
      }
      break;
    case "DELETE":
      try {
        const { id } = req.query;
        if (!id) {
          return res
            .status(400)
            .json({ success: false, message: "Missing contact ID" });
        }
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
          return res
            .status(404)
            .json({ success: false, message: "Contact not found" });
        }
        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
