import Application from "../models/Application.js";

const generateApplicationNumber = () => {
  const time = Date.now();
  const random = Math.floor(1000 + Math.random() * 9000);

  return `BR-${time}-${random}`;
};

export const createApplication = async (req, res) => {
  try {
    const {
      service,
      childName,
      dateOfBirth,
      placeOfBirth,
      gender,
      fatherName,
      motherName,
      fatherCitizenshipNumber,
      motherCitizenshipNumber,
      wardNumber,
      municipality,
      district,
      province,
      contactNumber,
      documentType
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a supporting document"
      });
    }

    if (!documentType) {
      return res.status(400).json({
        message: "Please select a document type"
      });
    }

    const application = await Application.create({
      applicationNumber: generateApplicationNumber(),
      applicant: req.user.id,
      service,
      childName,
      dateOfBirth,
      placeOfBirth,
      gender,
      fatherName,
      motherName,
      fatherCitizenshipNumber,
      motherCitizenshipNumber,
      wardNumber,
      municipality,
      district,
      province,
      contactNumber,
      documentType,
      documentFile: `/uploads/${req.file.filename}`
    });

    res.status(201).json({
      message: "Birth registration application submitted successfully",
      application
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to submit application",
      error: error.message
    });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      applicant: req.user.id
    })
      .populate("service", "title")
      .sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch applications"
    });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate("applicant", "name email phone")
      .populate("service", "title description");

    if (!application) {
      return res.status(404).json({
        message: "Application not found"
      });
    }

    if (
      req.user.role === "Citizen" &&
      application.applicant._id.toString() !== req.user.id
    ) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch application"
    });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("applicant", "name email phone")
      .populate("service", "title")
      .sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch applications"
    });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const {
      status,
      adminRemarks,
      rejectionReason
    } = req.body;

    const application = await Application.findById(
      req.params.id
    );

    if (!application) {
      return res.status(404).json({
        message: "Application not found"
      });
    }

    application.status = status;

    if (adminRemarks !== undefined) {
      application.adminRemarks = adminRemarks;
    }

    if (rejectionReason !== undefined) {
      application.rejectionReason = rejectionReason;
    }

    if (status === "Approved" && !application.certificateNumber) {
      application.certificateNumber = `BC-${Date.now()}`;
    }

    if (status === "Completed" && !application.certificateNumber) {
      application.certificateNumber = `BC-${Date.now()}`;
    }

    await application.save();

    res.status(200).json({
      message: "Application status updated",
      application
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update application",
      error: error.message
    });
  }
};