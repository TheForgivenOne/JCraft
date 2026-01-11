"use client";

import { useState } from "react";
import MaterialIcon from "@/components/UI/MaterialIcon";
import Button from "@/components/UI/Button";

interface FormData {
  fullName: string;
  email: string;
  requestType: string;
  projectVision: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    requestType: "",
    projectVision: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        requestType: "",
        projectVision: "",
      });
      setSelectedFiles([]);
    } catch (error) {
      setSubmitError("Failed to send inquiry. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {submitSuccess && (
        <div className="bg-success/20 text-success p-3 rounded-md border border-success/30">
          Thank you for your inquiry! We&apos;ll get back to you within 48
          hours.
        </div>
      )}

      {submitError && (
        <div className="bg-error/20 text-error p-3 rounded-md border border-error/30">
          {submitError}
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        <label className="flex flex-col flex-1 min-w-[240px]">
          <p className="text-sm font-semibold pb-2">Full Name</p>
          <input
            className="w-full rounded-lg border border-[#e7dbcf] dark:border-[#4a3a2a] bg-background-light dark:bg-[#1a130d] h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="John Doe"
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col flex-1 min-w-[240px]">
          <p className="text-sm font-semibold pb-2">Email Address</p>
          <input
            className="w-full rounded-lg border border-[#e7dbcf] dark:border-[#4a3a2a] bg-background-light dark:bg-[#1a130d] h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="john@example.com"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <label className="flex flex-col w-full">
        <p className="text-sm font-semibold pb-2">Custom Request Type</p>
        <select
          className="w-full rounded-lg border border-[#e7dbcf] dark:border-[#4a3a2a] bg-background-light dark:bg-[#1a130d] h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none"
          id="requestType"
          name="requestType"
          value={formData.requestType}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="furniture">Bespoke Furniture</option>
          <option value="leather">Handcrafted Leather Goods</option>
          <option value="restoration">Vintage Restoration</option>
          <option value="other">Other Unique Project</option>
        </select>
      </label>
      <label className="flex flex-col w-full">
        <p className="text-sm font-semibold pb-2">Project Vision</p>
        <textarea
          className="w-full rounded-lg border border-[#e7dbcf] dark:border-[#4a3a2a] bg-background-light dark:bg-[#1a130d] p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
          placeholder="Describe your dream piece..."
          rows={4}
          id="projectVision"
          name="projectVision"
          value={formData.projectVision}
          onChange={handleChange}
        ></textarea>
      </label>
      <div className="flex flex-col w-full">
        <p className="text-sm font-semibold pb-2">Reference Images</p>
        <label className="border-2 border-dashed border-[#e7dbcf] dark:border-[#4a3a2a] rounded-xl p-8 flex flex-col items-center justify-center bg-background-light/50 dark:bg-[#1a130d]/50 hover:bg-background-light dark:hover:bg-[#1a130d] transition-colors cursor-pointer group">
          <MaterialIcon
            icon="cloud_upload"
            className="text-4xl text-[#9a734c] group-hover:text-primary transition-colors mb-2"
          />
          <p className="text-sm text-[#9a734c] font-medium">
            Drag and drop or{" "}
            <span className="text-primary underline">browse files</span>
          </p>
          <p className="text-xs text-[#9a734c]/70 mt-1">JPG, PNG up to 10MB</p>
          <input
            type="file"
            multiple
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        {selectedFiles.length > 0 && (
          <p className="text-sm text-[#9a734c] mt-2">
            {selectedFiles.length} file(s) selected
          </p>
        )}
      </div>
      <Button
        variant="primary"
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        icon="send"
        iconPosition="right"
      >
        {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
