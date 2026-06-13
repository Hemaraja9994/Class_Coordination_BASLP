/**
 * ============================================================================
 *  B.ASLP 2026–27  •  Document Upload Google Form — Auto-Generator
 *  Department of Audiology & Speech-Language Pathology
 *  Yenepoya Medical College Hospital, Mangaluru
 * ----------------------------------------------------------------------------
 *  WHAT THIS DOES (in plain terms):
 *  Running this script automatically builds a complete Google Form with a
 *  separate "upload" box for every required document. Parents/students open
 *  one link, pick their stream, and upload each scanned document. Every file
 *  lands neatly in YOUR Google Drive, auto-sorted into a folder per question.
 *
 *  HOW TO USE (5 steps, ~3 minutes):
 *   1. Go to  https://script.google.com  and sign in with the OFFICIAL
 *      department Google account (the one that should OWN the uploads).
 *   2. Click  "New Project". Delete any sample code in the editor.
 *   3. Paste THIS entire file into the editor.
 *   4. Click  Run  (▶). Approve the permissions when Google asks
 *      (it needs to create a Form + a Drive folder on your account).
 *   5. Open the "Execution log" — it prints the LIVE form link and the
 *      editable link. Share the LIVE link with parents.
 *
 *  IMPORTANT — please read:
 *   • Google file-upload forms REQUIRE the person uploading to be signed in
 *     to a Google account. Parents without a Gmail account cannot upload.
 *     If many parents lack Google accounts, use a no-login tool instead
 *     (Microsoft Forms or Jotform) — ask your coordinator for that version.
 *   • Max file size per upload is set to 10 MB. Adjust MAX_FILE_MB below.
 * ============================================================================
 */

// -------- Settings you can change --------
var FORM_TITLE   = "B.ASLP 2026–27 — Document Upload & Online Verification";
var MAX_FILE_MB  = 10;     // max size per file
var MAX_FILES    = 5;      // max files allowed per document box

function createBASLPUploadForm() {
  var form = FormApp.create(FORM_TITLE);
  form.setDescription(
    "Department of Audiology & Speech-Language Pathology, Yenepoya Medical College Hospital, Mangaluru.\n\n" +
    "Please upload clear scans (PDF preferred; JPG/PNG accepted) of each document below. " +
    "You must be signed in to a Google account to upload. " +
    "For any difficulty, contact the Class Coordinator, Mr. Hemaraja Nayaka S."
  );
  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);

  // ---------- Section A: Identification ----------
  form.addSectionHeaderItem().setTitle("A. Student Identification");

  form.addTextItem().setTitle("Student Full Name (as in records)").setRequired(true);
  form.addTextItem().setTitle("Application No. (e.g., UG/26/XXXXX)").setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("Stream")
      .setChoiceValues(["Regular (Karnataka / Non-Karnataka)", "NRI"])
      .setRequired(true);

  form.addTextItem().setTitle("Student Mobile Number").setRequired(true);
  form.addTextItem().setTitle("Parent / Guardian Name & Mobile Number").setRequired(true);

  // ---------- Section B: Mandatory documents (all candidates) ----------
  form.addPageBreakItem().setTitle("B. Mandatory Documents (All Candidates)");

  var mandatory = [
    ["Aadhaar Card", true],
    ["APAAR ID (Academic Account Registry)", false],
    ["Secondary ID — Passport / PAN / Voter ID / Driving Licence", true],
    ["Address Proof (only if different from Aadhaar)", false],
    ["CBSE Class 10th Marks Card", true],
    ["CBSE Class 10th Passing Certificate (DOB proof)", true],
    ["CBSE Class 12th / HSE Marks Card", true],
    ["CBSE Class 12th / HSE Passing Certificate", true],
    ["Birth Certificate (supporting DOB proof)", false],
    ["Transfer Certificate (TC) / School Leaving Certificate", true],
    ["Migration Certificate (if applicable)", false],
    ["Conduct / Character Certificate", false],
    ["Category / Caste Certificate (if applicable)", false],
    ["Recent Passport-size Photograph", true],
    ["NEET Admit Card & Score Card", true],
    ["Allotment / Admission Order", false],
    ["Medical Fitness Certificate", false]
  ];
  mandatory.forEach(function (d) { addUpload(form, d[0], d[1]); });

  // ---------- Section C: NRI-only documents ----------
  form.addPageBreakItem()
      .setTitle("C. NRI Candidates Only — Sponsor / Visa Documents")
      .setHelpText("Complete this section ONLY if your stream is NRI. Regular candidates may submit and skip this page.");

  var nri = [
    "Passport copy (candidate) — valid",
    "Visa status / Residence permit",
    "Sponsor Affidavit",
    "Relationship Certificate (sponsor–candidate)",
    "Sponsor Passport / Emirates ID / National ID",
    "Sponsor Income / Bank Statement",
    "Equivalence Certificate (foreign board, if any)",
    "NRI Declaration / Undertaking"
  ];
  nri.forEach(function (t) { addUpload(form, t, false); });

  // ---------- Output the links ----------
  Logger.log("==================================================");
  Logger.log("FORM CREATED SUCCESSFULLY");
  Logger.log("Share this LIVE link with parents/students:");
  Logger.log(form.getPublishedUrl());
  Logger.log("--------------------------------------------------");
  Logger.log("Your EDIT link (keep private):");
  Logger.log(form.getEditUrl());
  Logger.log("Uploaded files will appear in your Google Drive,");
  Logger.log("auto-sorted into a folder named after this form.");
  Logger.log("==================================================");
}

// Helper: add a file-upload question
function addUpload(form, title, required) {
  var item = form.addFileUploadItem();
  item.setTitle(title)
      .setRequired(!!required)
      .setMaxFiles(MAX_FILES)
      .setMaxFileSize(MAX_FILE_MB * 1024 * 1024);
  return item;
}

// Convenience: lets you press Run on this name too
function main() { createBASLPUploadForm(); }
