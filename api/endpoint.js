export default async function handler(req, res) {
  try {
    const { endpoint } = req.query;
    if (!endpoint) return res.status(400).json({ error: "Endpoint tidak diberikan" });

    const url = `https://www.rumahotp.com/api/${encodeURIComponent(endpoint)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-apikey': 'otp_xrPuYbetWArbSuge',
        'Accept': 'application/json'
      }
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
