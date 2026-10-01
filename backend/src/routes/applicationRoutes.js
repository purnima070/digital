import express from "express";

import {
  createApplication,
  getMyApplications,
  getApplicationById,
  getAllApplications,
  updateApplicationStatus
} from "../controllers/applicationController.js";

import {
  protect,
  adminOnly
} from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  upload.single("documentFile"),
  createApplication
);

router.get(
  "/my",
  protect,
  getMyApplications
);

router.get(
  "/admin/all",
  protect,
  adminOnly,
  getAllApplications
);

router.put(
  "/admin/:id/status",
  protect,
  adminOnly,
  updateApplicationStatus
);

router.get(
  "/:id",
  protect,
  getApplicationById
);

export default router;