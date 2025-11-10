import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validace
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Všechna pole jsou povinná" }, { status: 400 })
    }

    // Odeslání emailu
    const { data, error } = await resend.emails.send({
      from: "Kontaktní formulář <onboarding@resend.dev>", // Testovací doména Resend
      to: ["jackvolat@gmail.com"], // Musí být váš ověřený email v Resend účtu
      replyTo: email,
      subject: `Nová zpráva z webu: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nová zpráva z kontaktního formuláře</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Jméno:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Předmět:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Zpráva:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Tato zpráva byla odeslána z kontaktního formuláře na matejhrabak.cz</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Nepodařilo se odeslat email" }, { status: 500 })
    }

    return NextResponse.json(
      { message: "Email byl úspěšně odeslán", id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Interní chyba serveru" }, { status: 500 })
  }
}
