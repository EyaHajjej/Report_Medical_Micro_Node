const express = require('express');
const reportController = require('../../controllers/Report.controller');

const router = express.Router();
// Route pour créer une prescription
router.post('/', reportController.createReport);

// Route pour obtenir toutes les prescriptions
router.get('/', reportController.getReports);

// Route pour obtenir une prescription par ID
router.get('/:reportId', reportController.getReport);

// Route pour mettre à jour une prescription par ID
router.patch('/:reportId', reportController.updateReport);

// Route pour supprimer une prescription par ID
router.delete('/:reportId', reportController.deleteReport);

module.exports = router;
