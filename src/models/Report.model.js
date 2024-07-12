const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const { Schema } = mongoose;

const ReportSchema = new Schema(
  {
    patient: {
      type: String, // Type String pour patient
      required: true,
      trim: true,
    },
    doctor: {
      type: String, // Type String pour doctor
      required: true,
      trim: true,
    },
    prescription: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Apply plugins
ReportSchema.plugin(toJSON);
ReportSchema.plugin(paginate);

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;
