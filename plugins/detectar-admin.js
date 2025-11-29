let handler = async (m, { conn }) => {

    if (!m.isGroup) return
    
    // Lista de palabras a detectar
    const palabrasClave = ["admin", "owner", "moderador", "staff"] // puedes agregar más
    
    let texto = (m.text || "").toLowerCase()

    // Verifica si el mensaje contiene alguna palabra de la lista
    if (palabrasClave.some(p => texto.includes(p))) {

        await conn.sendMessage(m.chat, {
            react: {
                text: "🇨🇳",
                key: m.key
            }
        })

        await conn.sendMessage(
            m.chat,
            { text: "#kick", quoted: m }
        )
    }
}

handler.help = ['autoadmin']
handler.tags = ['auto']
handler.command = /^$/i

export default handler
