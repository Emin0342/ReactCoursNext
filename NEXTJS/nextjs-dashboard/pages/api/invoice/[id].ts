import { NextApiRequest, NextApiResponse } from 'next';
import { getAllInvoiceById } from '@/app/lib/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing user ID' });
  }

  try {
    const invoice = await getAllInvoiceById(id as string);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    return res.status(200).json(invoice);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching the invoice' });
  }
}