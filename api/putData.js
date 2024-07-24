export default function handler(req, res) {
    if (req.method === 'PUT') {
      const data = req.body;
      res.status(200).json({ message: 'Data updated', data });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  