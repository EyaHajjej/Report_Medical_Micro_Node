const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ReportService } = require('../services');

const createReport = catchAsync(async (req, res) => {
  const report = await ReportService.createReport(req.body);
  res.status(httpStatus.CREATED).send(report);
});

const getReports = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['patient', 'doctor']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await ReportService.queryReports(filter, options);
  res.send(result);
});

const getReport = catchAsync(async (req, res) => {
  const report = await ReportService.getReportById(req.params.reportId);
  if (!report) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Report not found');
  }
  res.send(report);
});

const updateReport = catchAsync(async (req, res) => {
  const report = await ReportService.updateReportById(req.params.reportId, req.body);
  res.send(report);
});

const deleteReport = catchAsync(async (req, res) => {
  await ReportService.deleteReportById(req.params.reportId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createReport,
  getReports,
  getReport,
  updateReport,
  deleteReport,
};
