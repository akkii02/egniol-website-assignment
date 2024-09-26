import Contact from '../models/Contact'; 

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, mobileNo, company, email } = req.body;

        // Validate input
        if (!name || !mobileNo || !email) {
            return res.status(400).json({ message: 'Name, mobile number, and email are required.' });
        }

        try {
            // Create a new contact entry
            const contact = await Contact.create({ name, mobileNo, company, email });

            return res.status(201).json({ message: 'Contact form submitted successfully.', contact });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Database error, please try again later.' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}