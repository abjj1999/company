export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: process.env.NEXT_PUBLIC_SERVICE,
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    secure: true,
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  const mailData = {
    from: "abdullahalhilfi21@gmail.com",
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
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}
