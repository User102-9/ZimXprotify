
export default async function handler(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send('No URL');
    try {
        const response = await fetch(`https://is.gd{encodeURIComponent(url)}`);
        const text = await response.text();
        res.status(200).send(text);
    } catch (e) {
        res.status(500).send('Error');
    }
}
