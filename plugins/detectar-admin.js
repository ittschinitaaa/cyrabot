let handler = async (m, { conn }) => {}

handler.all = async function (m) {
    if (!m.isGroup) return;

    // texto leído del mensaje (texto o caption)
    let texto = (m.text || m.caption || "").toLowerCase();

    // Palabras clave a detectar
    const palabras = ["admin", "owner", "moderador", "staff"];

    // Si el mensaje contiene alguna palabra
    if (palabras.some(w => texto.includes(w))) {

        // Reacción del bot
        try {
            await m.react("🇨🇳");
        } catch (e) {
            console.log("Error en m.react", e);
        }

        // RESPONDER citando al mensaje con #kick
        try {
            await this.sendMessage(
                m.chat,
                {
                    text: "#kick",
                },
                { quoted: m }  // ⇐ CITA el mensaje original
            );
        } catch (e) {
            console.log("Error enviando #kick:", e);
        }
    }
};

handler.help = ["autoadmin"];
handler.tags = ["auto"];
handler.command = []; // no es comando

export default handler;
