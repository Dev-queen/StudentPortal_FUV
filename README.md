# StudentPortal_FUV

# 🎓 University Portal Web Application

A simple **School / University Portal** web application built using **HTML, CSS, JavaScript, and PHP**.  
This project simulates a realistic academic management system with **role-based dashboards** for Students, Teachers, and Admins.

## 🚨 FUV – File Upload Vulnerability

**FUV (File Upload Vulnerability)** is a common web security issue where an application allows users to upload files without proper validation or security checks.  
If not handled correctly, attackers can upload **malicious files** (e.g., PHP scripts, executable files) that may lead to **remote code execution, data leakage, or full server compromise**.

---

## ❓ What is a File Upload Vulnerability?

A File Upload Vulnerability occurs when:

- The application does not validate file **type**, **extension**, or **content**
- Uploaded files are stored in **publicly accessible directories**
- The server executes uploaded files as code
- No size or permission restrictions are applied

Attackers can exploit this by uploading files such as:

- `.php`, `.jsp`, `.exe`, `.sh`
- Files disguised as images (e.g., `image.jpg.php`)
- Files containing malicious payloads

---

## 🧪 How FUV is Demonstrated in This Project

This project intentionally includes **insecure file upload interfaces** to demonstrate File Upload Vulnerabilities for **educational and security lab purposes**.

### Vulnerable Features:

- Student assignment upload
- Teacher material upload
- Profile picture upload

### Why it is Vulnerable:

- No file type validation
- No extension filtering
- No file size restrictions
- No server-side sanitization
- No authentication checks before upload
- Uploaded files are assumed to be trusted

> ⚠️ These vulnerabilities are **intentional** and implemented only to demonstrate how File Upload Vulnerabilities occur in real-world systems.

---

## 🛡 Mitigation Techniques (Not Implemented)

To secure the application against File Upload Vulnerabilities, the following measures should be applied:

### ✅ File Validation

- Allow only specific file extensions (e.g., `.pdf`, `.jpg`, `.png`)
- Verify MIME type on the server-side
- Check file content (magic bytes)

### ✅ File Renaming

- Rename uploaded files using random UUIDs
- Never trust user-provided filenames

### ✅ Storage Security

- Store uploaded files **outside the web root**
- Disable execution permissions in upload directories

### ✅ Size & Rate Limits

- Enforce maximum file size
- Limit number of uploads per user

### ✅ Authentication & Authorization

- Ensure only authenticated users can upload files
- Restrict uploads based on user roles

---

## 🎯 Educational Purpose

This project is intentionally designed as a **vulnerable system** to:

- Demonstrate File Upload Vulnerabilities (FUV)
- Practice vulnerability identification
- Understand secure file handling principles
- Support cybersecurity and secure coding education

> ❗ **Do NOT deploy this application in a production environment.**

---

## 🔐 Disclaimer

This project is created **strictly for educational purposes**.  
The vulnerabilities shown are intentional and should never be used in real-world systems without proper security controls.
