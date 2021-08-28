import { createTransport, getTestMessageUrl } from 'nodemailer'

const transporter = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
})

function makeEmail(text) {
  return `
      <div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
      ">
        <h2>Hello There!</h2>
        <p>${text}</p>
  
        <p>gymmie</p>
      </div>
    `
}

export const sendPasswordResetEmail = async (resetToken, to) => {
  const info = await transporter.sendMail({
    to,
    from: 'info@gymmie.com',
    subject: 'Password reset request',
    html: makeEmail(`You request a password reset. Click here to
        <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">reset</a>
        `),
  })
  if (process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`)
  }
}
