ServiceNow Project: Automating Data Import & Relationship Mapping

Project Overview
This project demonstrates how to automate data import and establish relationships between tables using Import Sets and Transform Maps in ServiceNow.

Objectives
- Import external data into ServiceNow
- Transform and map data into target tables
- Automatically create related records
- Maintain relational integrity
- Implement dot walking

Technologies Used
- ServiceNow
- Import Sets
- Transform Maps
- GlideRecord (Server-side scripting)

Tables Created
1. Student Table
- Name
- Email
- Department (Reference)

2. Department Table
- Name
- Dept Head

Workflow
1. Created custom tables for Student and Department
2. Prepared Excel dataset
3. Loaded data using Import Sets
4. Created Transform Map to map fields
5. Implemented onBefore Transform Script to:
   - Check if department exists
   - Create department if not found
   - Link student to department
6. Verified data using dot walking

Transform Script
See `transform_script.js`

Features Implemented
- Automated data import
- Dynamic record creation
- Relationship mapping using reference fields
- Dot walking for related data access
- Error handling and validation

Screenshots
Screenshots of implementation are provided in the `/screenshots` folder.

Conclusion
This project successfully automates data import and ensures proper relationship mapping between tables using ServiceNow features.

GitHub Repository
https://github.com/periyasamy-arch/skillwallet
