let handler = async (m, { conn }) => {
    if (!m.isGroup) return;

    // Texto o caption del mensaje
    let texto = (m.text || m.caption || "").toLowerCase();

    // Lista de palabras que querés detectar
    const palabrasClave = ["admin", "owner", "moderador", "staff"];

    // Si encuentra una palabra clave
    if (palabrasClave.some(w => texto.includes(w))) {

        // Reacción usando el método de tu bot
        await m.react("🇨🇳");  // ← ESTE ES EL QUE TU BOT USA

        // Responder con #kick
        await conn.sendMessage(
            m.chat,
            { text: "#kick", quoted: m }
        );
    }
};

handler.help = ["autoadmin"];
handler.tags = ["auto"];
handler.command = /^$/i; // Siempre activo

export default handler;
