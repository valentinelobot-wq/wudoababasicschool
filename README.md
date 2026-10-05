# Wudoaba M.A Basic School — Complete Starter System

This package combines:
- Public school website
- Online admission application
- Portal login
- Role-based admin/teacher dashboard
- Parent/pupil portal
- Node.js + Express API
- MySQL schema
- JWT authentication and bcrypt password hashing

## Install backend
1. Install Node.js 18+ and MySQL 8+.
2. `cd backend`
3. `npm install`
4. Import `sql/schema.sql` into MySQL.
5. Copy `.env.example` to `.env` and set database credentials plus a long JWT secret.
6. Start with `npm start`.

## Run frontend
Serve the package with a local web server. The frontend API address is in `frontend/app.js` and admin API address in `admin/app.js`. Change both from `http://localhost:5000/api` to your deployed API URL.

## User roles
- admin: full administration
- teacher: pupil, results, attendance, news and admissions access
- parent: parent portal
- pupil: pupil portal

## IMPORTANT
The system is a functional starter, not a production deployment. Before real pupil use, add:
- HTTPS
- secure password reset
- stronger input validation
- audit logs
- database backups
- production CORS configuration
- secure file uploads
- privacy/data-retention policies
- proper parent-to-pupil account linking
- full fees/payment integration
- report-card generation
- tested access controls

Never use real pupil data until these protections and the deployment environment have been reviewed.
