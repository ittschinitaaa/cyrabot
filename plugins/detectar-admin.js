let handler = async (m, { conn }) => {
    if (!m.isGroup) return;

    // Texto o caption
    let texto = (m.text || m.caption || "").toLowerCase();

    // Palabras a detectar
    const palabras = ["admin", "owner", "moderador", "staff"];

    if (palabras.some(w => texto.includes(w))) {

        // Reaccionar (TU MÉTODO)
        try {
            await m.react("🇨🇳");
        } catch (e) {
            console.log("Error al reaccionar:", e);
        }

        // Responder con #kick
        await conn.sendMessage(
            m.chat,
            { text: "#kick", quoted: m }
        );
    }
};

// 🔥 AUTOMÁTICO (se ejecuta SIEMPRE)
handler.command = null;
handler.customPrefix = /.*/;

handler.help = ["autoadmin"];
handler.tags = ["auto"];

export default handler;
