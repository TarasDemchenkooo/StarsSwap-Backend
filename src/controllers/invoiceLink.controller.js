const processInvoiceLink = require("../services/invoiceLink.service")

async function handleInvoiceLink(req, res) {
    try {
        const invoiceLink = await processInvoiceLink({ ...req.body, id: req.params.id })
        res.status(200).json({ invoiceLink })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = handleInvoiceLink