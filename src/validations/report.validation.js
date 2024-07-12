const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createReport = {
  body: Joi.object().keys({
    patient: Joi.string().required(),
    doctor: Joi.string().required(),
    prescription: Joi.string().required(),
    date: Joi.date(),
    diagnosis: Joi.string().required(),
  }),
};

const getReports = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getReport = {
  params: Joi.object().keys({
    officeId: Joi.string().custom(objectId),
  }),
};

const deleteReport = {
  params: Joi.object().keys({
    officeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createReport,
  getReports,
  getReport,
  deleteReport,
};
