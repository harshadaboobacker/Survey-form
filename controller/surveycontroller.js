const Survey = require('../models/Survey');

exports.submitForm = async (req, res) => {
  const formData = req.body;
  try {
    const newSurvey = new Survey(formData);
    await newSurvey.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Error saving form:', err);
    res.status(500).json({ error: 'Failed to submit form!' });
  }
};

exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Survey.find();
    res.status(200).json(submissions);
  } catch (err) {
    console.error('Error fetching submissions:', err);
    res.status(500).json({ error: 'Failed to fetch submissions!' });
  }
};