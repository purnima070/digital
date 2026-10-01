import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function BirthApplication() {
  const navigate = useNavigate();

  const [serviceId, setServiceId] = useState("");

  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    fatherCitizenshipNumber: "",
    motherCitizenshipNumber: "",
    wardNumber: "",
    municipality: "",
    district: "",
    province: "",
    contactNumber: "",
    documentType: ""
  });

  const [documentFile, setDocumentFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await api.get("/services");

        const birthService = response.data.find(
          (service) =>
            service.title.toLowerCase() === "birth registration"
        );

        if (birthService) {
          setServiceId(birthService._id);
        }
      } catch (error) {
        setError("Unable to load birth registration service.");
      }
    };

    fetchService();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setDocumentFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5 MB.");
      setDocumentFile(null);
      return;
    }

    setError("");
    setDocumentFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(null);

    if (!serviceId) {
      setError("Birth registration service not found.");
      return;
    }

    if (!documentFile) {
      setError("Please upload a supporting document.");
      return;
    }

    if (!formData.documentType) {
      setError("Please select a document type.");
      return;
    }

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    data.append("service", serviceId);
    data.append("documentFile", documentFile);

    try {
      setLoading(true);

      const response = await api.post(
        "/applications",
        data
      );

      setSuccess(response.data.application);

      setFormData({
        childName: "",
        dateOfBirth: "",
        placeOfBirth: "",
        gender: "",
        fatherName: "",
        motherName: "",
        fatherCitizenshipNumber: "",
        motherCitizenshipNumber: "",
        wardNumber: "",
        municipality: "",
        district: "",
        province: "",
        contactNumber: "",
        documentType: ""
      });

      setDocumentFile(null);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to submit application."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="application-success">
        <div className="success-card">
          <span>APPLICATION SUBMITTED</span>

          <h1>Birth Registration Submitted</h1>

          <p>
            Your application has been successfully submitted
            to the ward office.
          </p>

          <div className="application-number">
            <small>Application Number</small>
            <strong>{success.applicationNumber}</strong>
          </div>

          <p>
            Keep this application number to track your
            application status.
          </p>

          <div className="success-actions">
            <button onClick={() => navigate("/services")}>
              Back to Services
            </button>

            <button
              onClick={() => navigate("/my-applications")}
            >
              My Applications
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="application-page">
      <div className="application-header">
        <span>BIRTH REGISTRATION</span>

        <h1>Apply for Birth Registration</h1>

        <p>
          Submit the required information and supporting
          document to your ward office.
        </p>
      </div>

      <form
        className="application-form"
        onSubmit={handleSubmit}
      >
        {error && (
          <div className="application-error">
            {error}
          </div>
        )}

        <section className="form-section">
          <div className="form-section-title">
            <span>01</span>

            <div>
              <h2>Child Information</h2>
              <p>Enter the basic information of the child.</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Child Full Name</label>

              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Place of Birth</label>

              <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="form-section-title">
            <span>02</span>

            <div>
              <h2>Parent Information</h2>
              <p>Enter the information of the parents.</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Father's Full Name</label>

              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mother's Full Name</label>

              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Father's Citizenship Number</label>

              <input
                type="text"
                name="fatherCitizenshipNumber"
                value={formData.fatherCitizenshipNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mother's Citizenship Number</label>

              <input
                type="text"
                name="motherCitizenshipNumber"
                value={formData.motherCitizenshipNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="form-section-title">
            <span>03</span>

            <div>
              <h2>Address Information</h2>
              <p>Enter the child's permanent address.</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Ward Number</label>

              <input
                type="number"
                name="wardNumber"
                value={formData.wardNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Municipality</label>

              <input
                type="text"
                name="municipality"
                value={formData.municipality}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>District</label>

              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Province</label>

              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Number</label>

              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="form-section-title">
            <span>04</span>

            <div>
              <h2>Supporting Document</h2>
              <p>
                Upload one document to support the birth
                registration.
              </p>
            </div>
          </div>

          <div className="document-options">
            <label className="document-option">
              <input
                type="radio"
                name="documentType"
                value="Hospital Birth Report"
                checked={
                  formData.documentType ===
                  "Hospital Birth Report"
                }
                onChange={handleChange}
                required
              />

              <div>
                <strong>Hospital Birth Report</strong>
                <p>
                  For children born in a hospital.
                </p>
              </div>
            </label>

            <label className="document-option">
              <input
                type="radio"
                name="documentType"
                value="Vaccination / Immunization Card"
                checked={
                  formData.documentType ===
                  "Vaccination / Immunization Card"
                }
                onChange={handleChange}
              />

              <div>
                <strong>
                  Vaccination / Immunization Card
                </strong>

                <p>
                  Use this if a hospital birth report is
                  unavailable.
                </p>
              </div>
            </label>

            <label className="document-option">
              <input
                type="radio"
                name="documentType"
                value="Other Supporting Document"
                checked={
                  formData.documentType ===
                  "Other Supporting Document"
                }
                onChange={handleChange}
              />

              <div>
                <strong>Other Supporting Document</strong>

                <p>
                  Upload another relevant supporting
                  document.
                </p>
              </div>
            </label>
          </div>

          <div className="file-upload">
            <label>Upload Document</label>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              required
            />

            <small>
              PDF, JPG, JPEG or PNG. Maximum size: 5 MB.
            </small>

            {documentFile && (
              <p className="selected-file">
                Selected: {documentFile.name}
              </p>
            )}
          </div>
        </section>

        <div className="application-submit">
          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BirthApplication;