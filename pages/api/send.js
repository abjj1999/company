export default function (req, res) {
  const modemailer = require("nodemailer");
  const { google } = require("googleapis");

  const CLIENTID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const REDIRECT_URL = process.env.REDIRECT_URI;
  const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

  const oAuth2Client = new google.auth.OAuth2(
    CLIENTID,
    CLIENT_SECRET,
    REDIRECT_URL
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = oAuth2Client.getAccessToken();

    const transport = modemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "abdullahalhilfi21@gmail.com",
        clientId: CLIENTID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailData = {
      from: "abdullahalhilfi21@gmail.com <abdullahalhilfi21@gmail.com>",
      to: "abdullahalhilfi21@gmail.com",
      subject: `Message From ${req.body.name} || Potential Customer`,
      text: `
      A customer has filled out the contact form for ${req.body.option}
  
        - Name: ${req.body.name}
  
        ----------------------
        To Contact them back:
  
        - Email: ${req.body.email}
        - Phone: ${req.body.phone}
        ----------------------
  
        Here is their message:
        ${req.body.comment}
      `,
    };
    const result = transport.sendMail(mailData);
    result.then(() => {
      console.log("email has been sent", result);
      res.status(200).send(result);
    });
  } catch (error) {}
}
