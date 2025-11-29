let handler = async (m, { conn }) => {}

handler.all = async function (m) {
    // Solo grupos
    if (!m.isGroup) return;

    // Texto o caption
    let texto = (m.text || m.caption || "").toLowerCase();

    // Palabras clave
    const palabras = ["admin", "owner", "moderador", "staff"];

    if (palabras.some(w => texto.includes(w))) {

        // Reacción
        try {
            await m.react("🇨🇳");
        } catch (e) {
            console.log("Error al reaccionar", e);
        }

        // Responder con #kick
        this.sendMessage(m.chat, { text: "#kick", quoted: m });
    }
};

handler.help = ["autoadmin"];
handler.tags = ["auto"];
handler.command = []; // vacío → no es comando

export default handler;
