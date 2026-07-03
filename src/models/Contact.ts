import mongoose from 'mongoose';

const contactInquirySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['sales', 'support'],
      required: true,
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    message: {
      type: String,
      trim: true,
    },
    organization: {
      type: String,
      trim: true,
      required: function (this: any) {
        return this.type === 'sales';
      },
    },
    country: {
      type: String,
      trim: true,
      required: function (this: any) {
        return this.type === 'sales';
      },
    },
    interest: {
      type: String,
      enum: [
        'Purchasing SAARTHI',
        'Bulk / Enterprise Order',
        'Partnership Program',
        'Requesting a Demo',
        'Other',
      ],
      required: function () {
        return this.type === 'sales';
      },
    },
    accountId: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      enum: [
        'SAARTHI Hardware',
        'Mobile App',
        'Web Dashboard',
        'API / Integration',
      ],
      required: function () {
        return this.type === 'support';
      },
    },
    issueCategory: {
      type: String,
      enum: [
        'Connectivity / Bluetooth',
        'Sensor Calibration',
        'Software Bug',
        'Hardware Defect',
        'Billing & Account',
      ],
      required: function () {
        return this.type === 'support';
      },
    },
    priority: {
      type: String,
      enum: [
        'Low - General Question',
        'Normal - Impedes workflow',
        'High - Completely blocked',
      ],
      required: function () {
        return this.type === 'support';
      },
    },
    status: {
      type: String,
      enum: ['new', 'in-progress', 'resolved', 'archived'],
      default: 'new',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);
const ContactInquiry = mongoose.models.ContactInquiry || mongoose.model('ContactInquiry', contactInquirySchema);

export default ContactInquiry;