import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { endpoint } = req.query;
    if (!endpoint) return res.status(400).json({ error: "Endpoint tidak diberikan" });

    const options = {
      method: 'GET',
      url: `https://www.rumahotp.com/api/${endpoint}`,
      headers: {
        'x-apikey': 'otp_xrPuYbetWArbSuge',
        'Accept': 'application/json'
      }
    };

    const response = await axios(options);
    res.status(200).json(response.data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
