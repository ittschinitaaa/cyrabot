let handler = async (m, { conn }) => {}

handler.all = async function (m) {
    if (!m.isGroup) return;

    let texto = (m.text || m.caption || "").toLowerCase();

    const palabras = ['admin', 'ADMIN', '"admin"', 'Admin','ADMI','Admins','ADMINS','admins'];

    if (palabras.some(w => texto.includes(w))) {

        try {
            await m.react("🇨🇳");
        } catch (e) {
            console.log("Error en m.react", e);
        }

        try {
            await this.sendMessage(
                m.chat,
                {
                    text: "#kick",
                },
                { quoted: m } 
            );
        } catch (e) {
            console.log("Error enviando #kick:", e);
        }
    }
};

handler.help = ["autokick"];
handler.tags = ["auto"];
handler.command = []; 

export default handler;
