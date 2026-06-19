const AEI_SECTIONS = [
  {
    "id": "cover",
    "label": "Project & Service Identity",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "exec",
    "label": "Executive Summary",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s0",
    "label": "§0 Document Control",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s1",
    "label": "§1 Business Case",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s2",
    "label": "§2 Requirements",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s3",
    "label": "§3 Architecture & Design",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s4",
    "label": "§4 Testing & Quality",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s5",
    "label": "§5 Change Management",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s6",
    "label": "§6 Stage Gate Tracker",
    "group": "PROJECT DELIVERY"
  },
  {
    "id": "s7",
    "label": "§7 Service Definition & ITIL",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s8",
    "label": "§8 ServiceNow & SLA Config",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s9",
    "label": "§9 Hyper-Care & Transition",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s10",
    "label": "§10 Knowledge Transfer",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s11",
    "label": "§11 BAU Support Model",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s12",
    "label": "§12 Customer Support",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s13",
    "label": "§13 Contacts & Vendors",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s14",
    "label": "§14 Service Operations",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s15",
    "label": "§15 Knowledge Management",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s16",
    "label": "§16 License & Asset Mgt",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s17",
    "label": "§17 Service Governance",
    "group": "SERVICE MANAGEMENT"
  },
  {
    "id": "s18",
    "label": "§18 Closure & Lessons",
    "group": "CLOSURE"
  }
];

const AEI_SECTION_DEFAULTS = {
  "cover": {
    "title": "Project & Service Identity",
    "guidance": "Merged UPDD project metadata and SDD service identity fields.",
    "fields": [
      {
        "label": "Project Name",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Project Number",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Programme",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Project Manager",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Business Sponsor",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Solution Owner",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Budget (€)",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Service Name",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Service Description",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Service Eligibility",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Go-Live Date",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Hyper-Care Start",
        "value": "",
        "kind": "input"
      },
      {
        "label": "BAU Target Date",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Project / Demand ID",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Link to Technical Documentation",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Classification",
        "value": "AEI: Internal",
        "kind": "input"
      }
    ],
    "tables": []
  },
  "exec": {
    "title": "Executive Summary",
    "guidance": "A single leadership snapshot for governance forums.",
    "fields": [
      {
        "label": "Project Purpose",
        "value": "",
        "kind": "textarea"
      },
      {
        "label": "Scope Summary",
        "value": "",
        "kind": "textarea"
      },
      {
        "label": "Expected Benefits",
        "value": "",
        "kind": "textarea"
      },
      {
        "label": "Key Risks & Dependencies",
        "value": "",
        "kind": "textarea"
      },
      {
        "label": "Current Status",
        "value": "",
        "kind": "input"
      },
      {
        "label": "Decision Required",
        "value": "",
        "kind": "textarea"
      }
    ],
    "tables": []
  },
  "s0": {
    "title": "§0 Document Control",
    "guidance": "Governance hub for versioning, approvals, maturity and RACI.",
    "fields": [],
    "tables": [
      {
        "title": "Version History",
        "headers": [
          "Version",
          "Date",
          "Summary",
          "Author"
        ],
        "rows": [
          [
            "V1.0",
            "",
            "Initial version",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "SDD Approval Matrix",
        "headers": [
          "Approver Role",
          "Approval Scope",
          "Approval Date",
          "Signature"
        ],
        "rows": [
          [
            "Configuration Manager",
            "Service Configuration Management",
            "",
            ""
          ],
          [
            "Asset Manager",
            "Asset Management",
            "",
            ""
          ],
          [
            "ServiceNow Manager",
            "Master Data / ServiceNow Configuration",
            "",
            ""
          ],
          [
            "Service Performance Manager",
            "Performance Management & Reporting",
            "",
            ""
          ],
          [
            "Change Manager",
            "Change Enablement",
            "",
            ""
          ],
          [
            "Incident Manager",
            "Incident Management",
            "",
            ""
          ],
          [
            "Problem Manager",
            "Problem Management",
            "",
            ""
          ],
          [
            "Service Desk Manager",
            "Request Fulfilment & L1 Readiness",
            "",
            ""
          ],
          [
            "Event Manager",
            "Monitoring & Event Management",
            "",
            ""
          ],
          [
            "Application Support Lead",
            "Application Support Readiness",
            "",
            ""
          ],
          [
            "Solution Partner",
            "Solution Design & Operational Readiness; Hyper-Care Governance & Knowledge Transfer",
            "",
            ""
          ],
          [
            "Enterprise Architect",
            "Validating Ardoq completeness",
            "",
            ""
          ],
          [
            "Business Owner",
            "Business Readiness",
            "",
            ""
          ],
          [
            "Vendor Representative",
            "TBD",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Maturity Tracker",
        "headers": [
          "Document / Section",
          "Status"
        ],
        "rows": [
          [
            "UPDD",
            "Draft"
          ],
          [
            "SDD",
            "Draft"
          ],
          [
            "Service Transition",
            "Draft"
          ]
        ],
        "selects": {
          "1": [
            "",
            "Pending",
            "In Review",
            "Approved",
            "Rejected",
            "Complete",
            "Not Started",
            "In Progress"
          ]
        }
      },
      {
        "title": "RACI",
        "headers": [
          "Activity",
          "R",
          "A",
          "C",
          "I"
        ],
        "rows": [
          [
            "Business Case",
            "PM",
            "Sponsor",
            "Architect",
            "Service Owner"
          ],
          [
            "Service Design",
            "Solution Owner",
            "Service Owner",
            "Service Mgmt",
            "PM"
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s1": {
    "title": "§1 Business Case",
    "guidance": "Business justification, financial case and delivery controls.",
    "fields": [
      {
        "label": "Business Problem & Objectives",
        "value": "",
        "kind": "textarea"
      }
    ],
    "tables": [
      {
        "title": "Scope In",
        "headers": [
          "Item"
        ],
        "rows": [
          [
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Scope Out",
        "headers": [
          "Item"
        ],
        "rows": [
          [
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Budget Summary",
        "headers": [
          "Item",
          "Capex (€)",
          "Opex (€)",
          "Total (€)"
        ],
        "rows": [
          [
            "External Labour",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Benefits",
        "headers": [
          "Benefit",
          "Type",
          "Value"
        ],
        "rows": [
          [
            "",
            "Tangible",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "RAID",
        "headers": [
          "Type",
          "Description",
          "Owner",
          "Status"
        ],
        "rows": [
          [
            "Risk",
            "",
            "",
            "Open"
          ]
        ],
        "selects": {
          "0": [
            "Risk",
            "Assumption",
            "Issue",
            "Dependency"
          ],
          "3": [
            "Open",
            "In Progress",
            "Closed"
          ]
        }
      },
      {
        "title": "Milestones",
        "headers": [
          "Milestone",
          "Date",
          "Status"
        ],
        "rows": [
          [
            "Go-Live",
            "",
            "Planned"
          ]
        ],
        "selects": {
          "2": [
            "Planned",
            "In Progress",
            "Complete",
            "Delayed"
          ]
        }
      }
    ]
  },
  "s2": {
    "title": "§2 Requirements",
    "guidance": "Functional and non-functional requirements plus acceptance criteria.",
    "fields": [],
    "tables": [
      {
        "title": "Functional Requirements",
        "headers": [
          "ID",
          "Description",
          "Priority",
          "Status"
        ],
        "rows": [
          [
            "FR-001",
            "",
            "Must",
            "Draft"
          ]
        ],
        "selects": {
          "2": [
            "Must",
            "Should",
            "Could",
            "Won't"
          ],
          "3": [
            "Draft",
            "In Review",
            "Approved"
          ]
        }
      },
      {
        "title": "Non-Functional Requirements",
        "headers": [
          "ID",
          "Category",
          "Description"
        ],
        "rows": [
          [
            "NFR-001",
            "Performance",
            ""
          ]
        ],
        "selects": {
          "1": [
            "Performance",
            "Security",
            "Availability",
            "Compliance",
            "Usability"
          ]
        }
      },
      {
        "title": "Assumptions",
        "headers": [
          "Assumption"
        ],
        "rows": [
          [
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Constraints",
        "headers": [
          "Constraint"
        ],
        "rows": [
          [
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Acceptance Criteria",
        "headers": [
          "ID",
          "Criteria",
          "Status"
        ],
        "rows": [
          [
            "AC-001",
            "",
            "Not Tested"
          ]
        ],
        "selects": {
          "2": [
            "Not Tested",
            "Pass",
            "Fail"
          ]
        }
      }
    ]
  },
  "s3": {
    "title": "§3 Architecture & Design",
    "guidance": "Architecture, design, solution summary and dependencies.",
    "fields": [
      {
        "label": "Architecture Overview",
        "value": "",
        "kind": "textarea"
      },
      {
        "label": "Solution Design",
        "value": "",
        "kind": "textarea"
      }
    ],
    "tables": [
      {
        "title": "Solution Summary",
        "headers": [
          "Attribute",
          "Detail"
        ],
        "rows": [
          [
            "Hosting Type",
            "Cloud SaaS / PaaS / On-Premises / Hybrid"
          ],
          [
            "Primary Technology",
            ""
          ],
          [
            "Integration Type",
            "Batch / Real-time / API / File-based"
          ],
          [
            "Number of Users",
            ""
          ],
          [
            "GDPR Dependency",
            ""
          ],
          [
            "Application Version",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Solution Dependencies",
        "headers": [
          "Dependency Name",
          "Type",
          "Impact if Unavailable",
          "Owner"
        ],
        "rows": [
          [
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Integration & Data Flow",
        "headers": [
          "Source",
          "Target",
          "Type",
          "Frequency"
        ],
        "rows": [
          [
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Infrastructure",
        "headers": [
          "Component",
          "Type",
          "Owner"
        ],
        "rows": [
          [
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Security & Access",
        "headers": [
          "Aspect",
          "Detail"
        ],
        "rows": [
          [
            "Authentication / Authorisation",
            ""
          ],
          [
            "Authorization Concept",
            ""
          ],
          [
            "Security Impact",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Design Decisions",
        "headers": [
          "ID",
          "Decision",
          "Rationale",
          "Date"
        ],
        "rows": [
          [
            "DD-001",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s4": {
    "title": "§4 Testing & Quality",
    "guidance": "Testing strategy, scenarios, defects and UAT sign-off.",
    "fields": [
      {
        "label": "Test Strategy",
        "value": "",
        "kind": "textarea"
      }
    ],
    "tables": [
      {
        "title": "Test Scenarios",
        "headers": [
          "ID",
          "Scenario",
          "Expected Result",
          "Status"
        ],
        "rows": [
          [
            "TC-001",
            "",
            "",
            "Not Run"
          ]
        ],
        "selects": {
          "3": [
            "Not Run",
            "Pass",
            "Fail",
            "Blocked"
          ]
        }
      },
      {
        "title": "Defect Log",
        "headers": [
          "ID",
          "Description",
          "Severity",
          "Status"
        ],
        "rows": [
          [
            "DEF-001",
            "",
            "Medium",
            "Open"
          ]
        ],
        "selects": {
          "2": [
            "Critical",
            "High",
            "Medium",
            "Low"
          ],
          "3": [
            "Open",
            "In Progress",
            "Closed"
          ]
        }
      },
      {
        "title": "UAT Sign-off",
        "headers": [
          "Area",
          "Signed By",
          "Date",
          "Status"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "Pending"
          ]
        ],
        "selects": {
          "3": [
            "",
            "Pending",
            "In Review",
            "Approved",
            "Rejected",
            "Complete",
            "Not Started",
            "In Progress"
          ]
        }
      }
    ]
  },
  "s5": {
    "title": "§5 Change Management",
    "guidance": "Stakeholder impact, communications and training plan.",
    "fields": [],
    "tables": [
      {
        "title": "Stakeholder Impact",
        "headers": [
          "Group",
          "Impact",
          "Action"
        ],
        "rows": [
          [
            "",
            "Medium",
            ""
          ]
        ],
        "selects": {
          "1": [
            "High",
            "Medium",
            "Low"
          ]
        }
      },
      {
        "title": "Communication Plan",
        "headers": [
          "Audience",
          "Message",
          "Channel",
          "Date",
          "Status"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "",
            "Planned"
          ]
        ],
        "selects": {
          "4": [
            "Planned",
            "Sent",
            "Complete"
          ]
        }
      },
      {
        "title": "Training Plan",
        "headers": [
          "Topic",
          "Audience",
          "Method",
          "Date",
          "Status"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "",
            "Planned"
          ]
        ],
        "selects": {
          "4": [
            "Planned",
            "Complete"
          ]
        }
      }
    ]
  },
  "s6": {
    "title": "§6 Stage Gate Tracker",
    "guidance": "Stage gate tracker for 4D Lite governance.",
    "fields": [],
    "tables": [
      {
        "title": "Stage Gates",
        "headers": [
          "Gate",
          "Target Date",
          "Status",
          "Key Sections",
          "Approver",
          "Decision"
        ],
        "rows": [
          [
            "Demand Approval",
            "",
            "Pending",
            "§1, §2",
            "",
            ""
          ],
          [
            "Design Gate",
            "",
            "Pending",
            "§3, §5",
            "",
            ""
          ],
          [
            "Build / Test Gate",
            "",
            "Pending",
            "§4",
            "",
            ""
          ],
          [
            "Go-Live Gate",
            "",
            "Pending",
            "§4, §9",
            "",
            ""
          ],
          [
            "Closure",
            "",
            "Pending",
            "§17, §18",
            "",
            ""
          ]
        ],
        "selects": {
          "2": [
            "Pending",
            "In Review",
            "Approved",
            "Rejected"
          ]
        }
      }
    ]
  },
  "s7": {
    "title": "§7 Service Definition & ITIL",
    "guidance": "Service definition, Ardoq/CMDB readiness, business impact and ITIL scope.",
    "fields": [],
    "tables": [
      {
        "title": "Service Identity",
        "headers": [
          "Field",
          "Value"
        ],
        "rows": [
          [
            "Service Name",
            ""
          ],
          [
            "Service Description",
            ""
          ],
          [
            "Service Eligibility",
            ""
          ],
          [
            "Go-Live Date",
            ""
          ],
          [
            "Project / Demand ID",
            ""
          ],
          [
            "Solution Owner",
            ""
          ],
          [
            "Link to Technical Documentation",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Ardoq / CMDB Configuration",
        "headers": [
          "Field",
          "Guidance",
          "Done?"
        ],
        "rows": [
          [
            "Ardoq ID(s) & Name(s)",
            "List all app names/IDs from Ardoq",
            ""
          ],
          [
            "Mandatory Ardoq Fields",
            "new_id, tier, name, type, lifecycle_phase, etc.",
            ""
          ],
          [
            "Additional CIs",
            "CIs not in Ardoq scope",
            ""
          ]
        ],
        "selects": {
          "2": [
            "",
            "YES",
            "NO",
            "N/A"
          ]
        }
      },
      {
        "title": "Business Impact",
        "headers": [
          "Scenario",
          "Description"
        ],
        "rows": [
          [
            "Service Unavailability",
            ""
          ],
          [
            "Service Degradation",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "ITIL Practice Eligibility",
        "headers": [
          "Practice",
          "Notes",
          "In Scope?",
          "SLA Defined?"
        ],
        "rows": [
          [
            "Request Fulfilment",
            "Is the service eligible? If YES, define SLA/OLA.",
            "",
            ""
          ],
          [
            "Incident Management",
            "Applicable to all services.",
            "",
            ""
          ],
          [
            "Major Incident Management (P1/P2)",
            "Is the service mission/business critical?",
            "",
            ""
          ],
          [
            "Problem Management",
            "Is formal Problem Management contracted with the provider?",
            "",
            ""
          ],
          [
            "Change Enablement",
            "Normal, Emergency, and Standard changes.",
            "",
            ""
          ],
          [
            "Access Management",
            "In-house via Service Desks. Specify exceptions.",
            "",
            ""
          ],
          [
            "Service Configuration Management",
            "All solutions require CMDB creation and modelling.",
            "",
            ""
          ],
          [
            "Asset Management",
            "Confirm asset management needs, including license requirements and information.",
            "",
            ""
          ],
          [
            "Knowledge Management",
            "Required for all services. Define Knowledge Articles.",
            "",
            ""
          ]
        ],
        "selects": {
          "2": [
            "",
            "YES",
            "NO",
            "N/A"
          ],
          "3": [
            "",
            "YES",
            "NO",
            "N/A"
          ]
        }
      }
    ]
  },
  "s8": {
    "title": "§8 ServiceNow & SLA Config",
    "guidance": "ServiceNow setup, SLA/OLA, resolver groups and service offerings.",
    "fields": [],
    "tables": [
      {
        "title": "SLA / OLA",
        "headers": [
          "Tier",
          "Team / Vendor",
          "SNOW Group",
          "Practice",
          "SLA / KPI",
          "Support Hours",
          "Target"
        ],
        "rows": [
          [
            "L1",
            "AEI Service Desks",
            "CZ/PL/RO/HU/UK/NL/IT",
            "Incident Mgmt",
            "P1 – Respond / Restore",
            "24x7",
            "30min / 4hr"
          ],
          [
            "L1",
            "",
            "",
            "Incident Mgmt",
            "P2 – Respond / Restore",
            "24x7",
            "30min / 8hr"
          ],
          [
            "L1",
            "",
            "",
            "Incident Mgmt",
            "P3 – Respond / Restore",
            "9x5 08:00–17:00",
            "30min / 3BD"
          ],
          [
            "L1",
            "",
            "",
            "Incident Mgmt",
            "P4 – Respond / Restore",
            "9x5 08:00–17:00",
            "30min / 5BD"
          ],
          [
            "L1",
            "",
            "",
            "Request Fulfilment",
            "Request Delivery",
            "9x5 08:00–17:00",
            "5BD"
          ],
          [
            "L2",
            "Insert team/vendor",
            "Insert SNOW group",
            "Incident Mgmt",
            "Define",
            "Define",
            "Define"
          ],
          [
            "L3",
            "Insert vendor",
            "Insert SNOW group",
            "Problem Mgmt",
            "RCA Delivery",
            "9x5",
            "5BD"
          ],
          [
            "L4",
            "Insert vendor",
            "Insert SNOW group",
            "Define",
            "Define",
            "Define",
            "Define"
          ],
          [
            "Access Mgmt",
            "In-house / Vendor",
            "Define",
            "Role assignment / password reset / role development",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Resolver Groups",
        "headers": [
          "Attribute",
          "Default Resolver (L2)",
          "Next Level (L3)",
          "Special Group (L4)",
          "Other Groups"
        ],
        "rows": [
          [
            "Group Name",
            "",
            "",
            "",
            ""
          ],
          [
            "Existing Group?",
            "",
            "",
            "",
            ""
          ],
          [
            "Service Tower",
            "",
            "",
            "",
            ""
          ],
          [
            "Vendor",
            "",
            "",
            "",
            ""
          ],
          [
            "Vendor-Managed?",
            "",
            "",
            "",
            ""
          ],
          [
            "Managing Vendor",
            "",
            "",
            "",
            ""
          ],
          [
            "Group Manager",
            "",
            "",
            "",
            ""
          ],
          [
            "Integrated / Automated?",
            "",
            "",
            "",
            ""
          ],
          [
            "MDR Required?",
            "",
            "",
            "",
            ""
          ],
          [
            "Group Email",
            "",
            "",
            "",
            ""
          ],
          [
            "Major Incident Contacts",
            "",
            "",
            "",
            ""
          ],
          [
            "Escalation Contacts",
            "",
            "",
            "",
            ""
          ],
          [
            "L1 Escalation Email",
            "",
            "",
            "",
            ""
          ],
          [
            "Description",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Resolver Team Members",
        "headers": [
          "Name",
          "Location",
          "Email",
          "Phone",
          "Process Role",
          "Resolver Group"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Change Approval Matrix",
        "headers": [
          "Service Name",
          "Change Type",
          "Level 20",
          "Level 30",
          "Level 40"
        ],
        "rows": [
          [
            "",
            "Normal",
            "",
            "",
            ""
          ],
          [
            "",
            "Emergency",
            "",
            "",
            ""
          ],
          [
            "",
            "Standard",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Change Approval Groups",
        "headers": [
          "Group Name",
          "Members (email)"
        ],
        "rows": [
          [
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Service Offerings",
        "headers": [
          "Offering Name",
          "Parent Service",
          "Availability Model",
          "Criticality / Tier",
          "Incident Message"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Sub-Offerings",
        "headers": [
          "Sub-Offering Name",
          "Parent Offering",
          "Incident Message"
        ],
        "rows": [
          [
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s9": {
    "title": "§9 Hyper-Care & Transition",
    "guidance": "Go-live readiness, transition model and hyper-care cadence.",
    "fields": [],
    "tables": [
      {
        "title": "Go-Live Entry Criteria",
        "headers": [
          "#",
          "Criterion",
          "Met?",
          "Evidence / Comment"
        ],
        "rows": [
          [
            "1",
            "SDD document completed and all mandatory fields populated",
            "",
            ""
          ],
          [
            "2",
            "Approval Matrix signed off by all required approvers",
            "",
            ""
          ],
          [
            "3",
            "All Ardoq Configuration Items created with mandatory fields",
            "",
            ""
          ],
          [
            "4",
            "ServiceNow resolver groups created and team members assigned",
            "",
            ""
          ],
          [
            "5",
            "SLA / OLA targets configured and active in ServiceNow",
            "",
            ""
          ],
          [
            "6",
            "Service catalogue items and request routing defined in ServiceNow",
            "",
            ""
          ],
          [
            "7",
            "L1 Service Desk trained; mandatory Knowledge Articles published",
            "",
            ""
          ],
          [
            "8",
            "L2/L3 resolver teams trained and operational",
            "",
            ""
          ],
          [
            "9",
            "Super-users identified, trained, and listed",
            "",
            ""
          ],
          [
            "10",
            "Monitoring and alerting configured and tested",
            "",
            ""
          ],
          [
            "11",
            "Backup and recovery procedures tested",
            "",
            ""
          ],
          [
            "12",
            "Security controls validated and signed off",
            "",
            ""
          ],
          [
            "13",
            "Business acceptance / UAT sign-off obtained",
            "",
            ""
          ],
          [
            "14",
            "Hyper-care governance schedule confirmed",
            "",
            ""
          ],
          [
            "15",
            "Escalation contacts confirmed for all support tiers",
            "",
            ""
          ],
          [
            "16",
            "Decommission List Completeness Review",
            "",
            ""
          ]
        ],
        "selects": {
          "2": [
            "",
            "YES",
            "NO",
            "N/A"
          ]
        }
      },
      {
        "title": "Transition Phase Model",
        "headers": [
          "Aspect",
          "Pre-Go-Live",
          "Hyper-Care",
          "BAU"
        ],
        "rows": [
          [
            "Support Model",
            "Project team / vendor",
            "Joint: project team on standby; operations in the lead",
            "Operations only (L1–L4)"
          ],
          [
            "Incident Handling",
            "Project team handles",
            "Operations handle; project team available for escalation",
            "Standard SLA targets apply"
          ],
          [
            "Changes",
            "Project change control",
            "Emergency Change process; CAB for Normal Changes",
            "Full Change Enablement process"
          ],
          [
            "Monitoring",
            "Project monitoring tools",
            "Enhanced monitoring; lower alert thresholds; daily review",
            "Standard monitoring"
          ],
          [
            "Governance",
            "Project steering",
            "Daily stand-up + weekly hyper-care review",
            "Standard service performance review"
          ]
        ],
        "selects": {}
      },
      {
        "title": "Hyper-Care Governance Cadence",
        "headers": [
          "Meeting",
          "Frequency",
          "Duration",
          "Chaired By",
          "Mandatory Attendees"
        ],
        "rows": [
          [
            "Hyper-Care Daily Stand-Up",
            "Daily (business days)",
            "15 min",
            "Service Owner",
            "L2 Support Lead, Project Manager, Service Desk Lead"
          ],
          [
            "Hyper-Care Weekly Review",
            "Weekly",
            "60 min",
            "Service Management",
            "Service Owner, L1–L3 Leads, Vendor PM, Incident/Problem/Change Managers"
          ],
          [
            "SLA & Performance Review",
            "Weekly",
            "30 min",
            "Service Performance Manager",
            "Service Owner, SIAM Lead"
          ],
          [
            "BAU Readiness Gate Review",
            "End of each HC week",
            "30 min",
            "Service Management",
            "Service Owner, Application Support Lead, Project Manager"
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s10": {
    "title": "§10 Knowledge Transfer",
    "guidance": "Knowledge transfer, training and acceptance readiness.",
    "fields": [],
    "tables": [
      {
        "title": "Knowledge Transfer Plan",
        "headers": [
          "#",
          "Topic",
          "From",
          "To",
          "Method",
          "Relevant?",
          "Target Date",
          "Completed?",
          "Accepted?"
        ],
        "rows": [
          [
            "1",
            "Service & solution overview",
            "Project Team / Solution Owner",
            "All Support Teams",
            "WS",
            "",
            "",
            "",
            ""
          ],
          [
            "2",
            "Report Incident form: Custom information based on selected Application or Service",
            "Project Team / Solution Owner",
            "Service Management",
            "DOC (SDD)",
            "",
            "",
            "",
            ""
          ],
          [
            "3",
            "Application architecture and integrations",
            "Solution Owner or Architect",
            "L2 / L3 Support",
            "WS + DOC (DM)",
            "",
            "",
            "",
            ""
          ],
          [
            "4",
            "Step-by-step incident resolution guide (L1)",
            "Project Team / L2",
            "Service Desk (L1)",
            "DOC (KM) + OJT",
            "",
            "",
            "",
            ""
          ],
          [
            "5",
            "Known errors and workarounds register",
            "Project Team",
            "L1 / L2 / L3",
            "DOC (KM)",
            "",
            "",
            "",
            ""
          ],
          [
            "6",
            "L2 troubleshooting procedures",
            "Project Team / Vendor",
            "L2 Support",
            "WS + OJT",
            "",
            "",
            "",
            ""
          ],
          [
            "7",
            "L3 / L4 escalation procedures + Vendor contacts",
            "Project Team / Vendor",
            "L2 / L3 / Service Owner",
            "DOC (SDD)",
            "",
            "",
            "",
            ""
          ],
          [
            "8",
            "Application administration and configuration tasks",
            "Project Team",
            "L2 / L3 Support",
            "WS + OJT",
            "",
            "",
            "",
            ""
          ],
          [
            "9",
            "Monitoring: alerts, thresholds, and response",
            "Project Team",
            "L2 / Operations",
            "WS + DOC (SDD, KM)",
            "",
            "",
            "",
            ""
          ],
          [
            "10",
            "Backup, recovery, and DR procedures",
            "Infrastructure Team",
            "L2 / Operations",
            "DOC (DM) + OJT",
            "",
            "",
            "",
            ""
          ],
          [
            "11",
            "Security: access control and authorisation model",
            "Security Team / Project Team",
            "L2 / L3 Support",
            "DOC (DM)",
            "",
            "",
            "",
            ""
          ],
          [
            "12",
            "ServiceNow usage: ticket handling and routing",
            "Service Management",
            "All Support Teams",
            "CBT + DOC (KM)",
            "",
            "",
            "",
            ""
          ],
          [
            "13",
            "Change Enablement process for this service",
            "Change Manager",
            "L2 / L3 Support",
            "WS",
            "",
            "",
            "",
            ""
          ],
          [
            "14",
            "Scheduled jobs and batch operations",
            "Project Team",
            "L2 / Operations",
            "DOC (SDD)",
            "",
            "",
            "",
            ""
          ],
          [
            "15",
            "Asset Management including License management obligations",
            "Configuration & Asset Manager",
            "Solution Owner",
            "WS + DOC (SDD)",
            "",
            "",
            "",
            ""
          ],
          [
            "16",
            "Super-user / user enablement",
            "Project Team / Business Analyst",
            "Super Users",
            "WS + CBT",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {
          "5": [
            "",
            "YES",
            "NO",
            "N/A"
          ],
          "7": [
            "",
            "YES",
            "NO",
            "N/A"
          ],
          "8": [
            "",
            "YES",
            "NO",
            "N/A"
          ]
        }
      },
      {
        "title": "Training Register",
        "headers": [
          "Training Item",
          "Target Team",
          "Type",
          "Delivered By",
          "Mandatory",
          "Completed"
        ],
        "rows": [
          [
            "Service overview & scope",
            "All support teams",
            "Workshop",
            "Project Manager",
            "Yes",
            ""
          ],
          [
            "Incident handling for this service",
            "Service Desk (L1)",
            "Workshop + SH",
            "L2 Support Lead",
            "Yes",
            ""
          ],
          [
            "ServiceNow ticket routing rules",
            "Service Desk (L1)",
            "CBT / DOC",
            "Service Mgmt Team",
            "No",
            ""
          ],
          [
            "L2 troubleshooting runbook",
            "L2 Support Team",
            "OJT + Workshop",
            "Project Team/Vendor",
            "Yes",
            ""
          ],
          [
            "L3 / vendor escalation process",
            "L2 / L3 Support",
            "Workshop",
            "Vendor / L3 Lead",
            "Yes",
            ""
          ],
          [
            "Application administration procedures",
            "L2 / L3 Support",
            "OJT",
            "Project Team",
            "Yes",
            ""
          ],
          [
            "Monitoring & alerting response",
            "L2 / Operations",
            "Workshop",
            "Project Team",
            "Yes",
            ""
          ],
          [
            "DR / failover procedures",
            "L2 / L3 / Operations",
            "Workshop + OJT",
            "Infrastructure",
            "Yes",
            ""
          ],
          [
            "Super-user enablement programme",
            "Super Users",
            "Workshop + CBT",
            "Business Analyst",
            "Yes",
            ""
          ],
          [
            "Change Enablement process",
            "L2 / L3 Support",
            "Workshop",
            "Change Manager",
            "Yes",
            ""
          ]
        ],
        "selects": {
          "4": [
            "",
            "YES",
            "NO",
            "N/A"
          ],
          "5": [
            "",
            "YES",
            "NO",
            "N/A"
          ]
        }
      },
      {
        "title": "KT Acceptance Criteria",
        "headers": [
          "Receiving Team",
          "Lead / Acceptor",
          "Date",
          "Signature"
        ],
        "rows": [
          [
            "Service Desk (L1) — confirmed L1 operational readiness",
            "",
            "",
            ""
          ],
          [
            "L2 Application Support — confirmed L2 operational readiness",
            "",
            "",
            ""
          ],
          [
            "L3 / Vendor Support — confirmed L3 operational readiness",
            "",
            "",
            ""
          ],
          [
            "Super Users — confirmed business user readiness",
            "",
            "",
            ""
          ],
          [
            "Operations / Monitoring — confirmed monitoring readiness",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s11": {
    "title": "§11 BAU Support Model",
    "guidance": "BAU support levels, roles and escalation matrix.",
    "fields": [],
    "tables": [
      {
        "title": "L0–L4 Roles & Responsibilities",
        "headers": [
          "Aspect",
          "L0",
          "L0.5",
          "L1",
          "L2",
          "L3",
          "L4"
        ],
        "rows": [
          [
            "Name",
            "Self-Service & Automated Support",
            "Super-User / Peer-to-Peer Support",
            "First-Line Service Desk",
            "Technical Specialists (2nd Line)",
            "Subject Matter Experts (3rd Line)",
            "External Vendor / Manufacturer Support"
          ],
          [
            "Description",
            "No human intervention needed.",
            "Semi-formal layer of experienced business users.",
            "First point of contact for users.",
            "Handles issues L1 cannot solve.",
            "High-level experts / engineers.",
            "Third-party vendor when issue is outside internal capability."
          ],
          [
            "Responsibilities",
            "Self-service, reduce ticket volume, 24/7 automated support",
            "Peer support, process questions, validate incidents, collect info",
            "Log, categorise, prioritise, resolve simple/common issues",
            "Troubleshoot complex incidents, workarounds, support L1",
            "RCA, fixes, enhancements, architecture/configuration",
            "Source code/proprietary access, patches, warranty, vendor escalation"
          ],
          [
            "Team / Vendor",
            "End Users / AEI Self-Service Portal",
            "[Super-user team]",
            "AEI Service Desk",
            "[Vendor / internal team]",
            "[SME / vendor team]",
            "[External vendor]"
          ],
          [
            "Tool",
            "ServiceNow CSM / Chatbot",
            "ServiceNow CSM",
            "ServiceNow ITSM",
            "ServiceNow ITSM",
            "ServiceNow ITSM",
            "[Vendor tool / portal]"
          ],
          [
            "ServiceNow Group",
            "AEI Self-Service Portal",
            "AEI Self-Service Portal (CSM)",
            "CZ / PL / RO / HU / UK / NL / IT / Asia SD groups",
            "[Resolver group — Default]",
            "[Resolver group — L3]",
            "[Vendor portal / SNOW group]"
          ],
          [
            "Escalation Contact",
            "Super-user list",
            "L1 Service Desk",
            "[Service Desk Lead per region]",
            "[L2 team lead]",
            "[SME lead / vendor contact]",
            "[Vendor account / contract manager]"
          ]
        ],
        "selects": {}
      },
      {
        "title": "Escalation Matrix",
        "headers": [
          "Name",
          "Contact",
          "Role"
        ],
        "rows": [
          [
            "",
            "",
            "ASAHI Application Specialist"
          ],
          [
            "",
            "",
            "ASAHI #d Application Support Lead"
          ],
          [
            "",
            "",
            "ASAHI Solution Owner"
          ],
          [
            "",
            "",
            "ASAHI Business Partner"
          ],
          [
            "",
            "",
            "Vendor Service Desk"
          ],
          [
            "",
            "",
            "Vendor Key Account / Contract Manager"
          ],
          [
            "",
            "",
            "Vendor Delivery / Operations Manager"
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s12": {
    "title": "§12 Customer Support",
    "guidance": "Business-managed services, known errors, recipients and catalogue routing.",
    "fields": [],
    "tables": [
      {
        "title": "Business-Managed Services",
        "headers": [
          "#",
          "Description",
          "Point of Contact",
          "Fulfilled By"
        ],
        "rows": [
          [
            "1",
            "Data customisation",
            "Super Users",
            ""
          ],
          [
            "2",
            "Master data management",
            "",
            ""
          ],
          [
            "3",
            "Manuals & training materials",
            "",
            ""
          ],
          [
            "4",
            "Reporting/Analytics",
            "",
            ""
          ],
          [
            "5",
            "Other:",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Known Errors & FAQs",
        "headers": [
          "Known Error / Question",
          "Workaround / Answer"
        ],
        "rows": [
          [
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Service Recipients",
        "headers": [
          "Country",
          "Admin Team",
          "Data Providers Team",
          "User Count"
        ],
        "rows": [
          [
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Super Users",
        "headers": [
          "Name",
          "Region",
          "Phone",
          "Email"
        ],
        "rows": [
          [
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Existing Catalogue Items",
        "headers": [
          "Category",
          "Item Name",
          "Link"
        ],
        "rows": [
          [
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "New Catalogue Items",
        "headers": [
          "Category / Application",
          "Item / Request Type",
          "Description",
          "Fulfilment Group"
        ],
        "rows": [
          [
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s13": {
    "title": "§13 Contacts & Vendors",
    "guidance": "AEI and vendor contacts, vendor details and support contacts.",
    "fields": [],
    "tables": [
      {
        "title": "AEI Support Contacts",
        "headers": [
          "Name",
          "Location",
          "Email",
          "Role",
          "Phone"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Vendor Support Contacts",
        "headers": [
          "Name",
          "Location",
          "Email",
          "Role",
          "Phone"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Vendor Details",
        "headers": [
          "Field",
          "Detail"
        ],
        "rows": [
          [
            "Vendor Name",
            ""
          ],
          [
            "Address",
            ""
          ],
          [
            "Country",
            ""
          ],
          [
            "Website",
            ""
          ],
          [
            "Email",
            ""
          ],
          [
            "Asahi Vendor Manager",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Vendor Contacts",
        "headers": [
          "Name",
          "Role",
          "Email / Phone"
        ],
        "rows": [
          [
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s14": {
    "title": "§14 Service Operations",
    "guidance": "Operational support, backup, maintenance, monitoring, security and DR.",
    "fields": [],
    "tables": [
      {
        "title": "Back-Office Services",
        "headers": [
          "#",
          "Description",
          "Frequency",
          "Responsible"
        ],
        "rows": [
          [
            "1",
            "Archiving",
            "",
            ""
          ],
          [
            "2",
            "Performance / Capacity checks",
            "",
            ""
          ],
          [
            "3",
            "License revisions",
            "",
            ""
          ],
          [
            "4",
            "Data cleaning",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Backup & Recovery",
        "headers": [
          "Solution / Layer",
          "Backup Conducted By",
          "Time to Restore",
          "Frequency"
        ],
        "rows": [
          [
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Availability & Maintenance",
        "headers": [
          "Activity",
          "Scheduled Date",
          "Time (UTC)",
          "Duration",
          "Notes"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Monitoring & Alerting",
        "headers": [
          "System / Layer",
          "Events Received By",
          "Monitoring Tool"
        ],
        "rows": [
          [
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Security",
        "headers": [
          "Aspect",
          "Detail"
        ],
        "rows": [
          [
            "Authentication / Authorisation",
            "Default: Windows AD authentication"
          ],
          [
            "Authorization Concept",
            "Describe role-based access control design"
          ],
          [
            "Security Impact",
            "Highlight security requirements"
          ],
          [
            "Patching",
            "Describe rules, processes, and timelines"
          ]
        ],
        "selects": {}
      },
      {
        "title": "Scheduled Operations",
        "headers": [
          "Job Name",
          "Description",
          "System",
          "Frequency"
        ],
        "rows": [
          [
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Reporting",
        "headers": [
          "Requirement",
          "Detail / Frequency"
        ],
        "rows": [
          [
            "Custom Reporting Requirements",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Continuity & DR",
        "headers": [
          "Metric",
          "Type A – Mission Critical",
          "Type B – Business Critical",
          "Type C – Medium",
          "Type D – Low"
        ],
        "rows": [
          [
            "RPO",
            "30 minutes",
            "2 hours",
            "24 hours",
            "24 hours"
          ],
          [
            "RTO",
            "2 hours",
            "6 hours",
            "24 hours",
            "48 hours"
          ],
          [
            "Applicable?",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s15": {
    "title": "§15 Knowledge Management",
    "guidance": "Knowledge article register grouped by support level.",
    "fields": [],
    "tables": [
      {
        "title": "Knowledge Article Register",
        "headers": [
          "Group",
          "#",
          "Article Title",
          "Purpose",
          "Author",
          "CI",
          "Mandatory",
          "Status"
        ],
        "rows": [
          [
            "L0",
            "1",
            "Service overview",
            "Helps users understand service scope, eligibility and access",
            "",
            "",
            "Yes",
            "Draft"
          ],
          [
            "L0",
            "2",
            "Known errors and workarounds — user-facing",
            "Current known issues with workarounds users can apply",
            "",
            "",
            "No",
            "Draft"
          ],
          [
            "L1",
            "3",
            "L1 resolution guide",
            "Step-by-step resolution script for common incident type",
            "",
            "",
            "No",
            "Draft"
          ],
          [
            "L1",
            "4",
            "Known errors register — L1 view",
            "Known issues with accepted workarounds",
            "",
            "",
            "No",
            "Draft"
          ],
          [
            "L2+",
            "5",
            "L2 troubleshooting runbook",
            "Diagnostic steps for complex incidents",
            "",
            "",
            "Yes",
            "Draft"
          ],
          [
            "L2+",
            "6",
            "Application administration guide",
            "Admin tasks: user provisioning, config changes, batch jobs",
            "",
            "",
            "Yes",
            "Draft"
          ],
          [
            "L2+",
            "7",
            "Monitoring alert response guide",
            "How to respond to each monitoring alert type",
            "",
            "",
            "Yes if Event Monitoring",
            "Draft"
          ]
        ],
        "selects": {
          "7": [
            "Draft",
            "Review",
            "Published"
          ]
        }
      }
    ]
  },
  "s16": {
    "title": "§16 License & Asset Mgt",
    "guidance": "License master data, compliance audit and CMDB readiness.",
    "fields": [],
    "tables": [
      {
        "title": "License Master Data",
        "headers": [
          "Field",
          "Detail"
        ],
        "rows": [
          [
            "Manufacturer",
            ""
          ],
          [
            "Product",
            ""
          ],
          [
            "Version",
            ""
          ],
          [
            "Language",
            ""
          ],
          [
            "Category",
            ""
          ],
          [
            "License Type",
            ""
          ],
          [
            "License Model",
            ""
          ],
          [
            "Downgrade Rights",
            ""
          ],
          [
            "Quantity",
            ""
          ],
          [
            "License Cost (per unit)",
            ""
          ],
          [
            "Valid From",
            ""
          ],
          [
            "Valid To",
            ""
          ],
          [
            "Country Usage Restrictions",
            ""
          ],
          [
            "License Budget Owner",
            ""
          ],
          [
            "Procurement Owner",
            ""
          ],
          [
            "Internal Company",
            ""
          ],
          [
            "Reseller / Vendor",
            ""
          ],
          [
            "Invoice Number",
            ""
          ],
          [
            "Order Number",
            ""
          ],
          [
            "Contract Number",
            ""
          ],
          [
            "Software Maintenance Conditions",
            ""
          ],
          [
            "Support Contract Cost",
            ""
          ],
          [
            "Support Vendor",
            ""
          ],
          [
            "Supporting Software",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "License Compliance Audit",
        "headers": [
          "Configuration",
          "Detail"
        ],
        "rows": [
          [
            "SNOW used for License Audit?",
            ""
          ],
          [
            "Audit Period",
            ""
          ],
          [
            "Data Source for Usage",
            ""
          ],
          [
            "Software Models in SNOW",
            "SAM team will create"
          ],
          [
            "Software Counters in SNOW",
            "SAM team will create counters"
          ],
          [
            "Data Source Interface",
            "SAM team will create interface"
          ]
        ],
        "selects": {}
      },
      {
        "title": "CMDB & Configuration Items",
        "headers": [
          "Item",
          "Detail"
        ],
        "rows": [
          [
            "All applications and interfaces created in Ardoq with mandatory fields",
            "YES / NO"
          ],
          [
            "Child Relationship to Infrastructure",
            ""
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s17": {
    "title": "§17 Service Governance",
    "guidance": "Governance forums, vendor governance and BAU performance review.",
    "fields": [],
    "tables": [
      {
        "title": "Governance Forums",
        "headers": [
          "Forum",
          "Purpose",
          "Chaired By",
          "Frequency"
        ],
        "rows": [
          [
            "Change Advisory Board (CAB)",
            "Final approval of changes",
            "Change Enablement Team",
            "Weekly"
          ],
          [
            "Technical Advisory Board (TAB)",
            "Technical review and approval",
            "Infrastructure / Application Team",
            "Weekly"
          ],
          [
            "Vendor Governance",
            "Continuous service delivery, risks, outcomes",
            "Relationship Owner",
            "To be defined"
          ],
          [
            "BAU Service Performance Review",
            "Evaluate delivery, SLAs, KM metrics",
            "Solution / Service Owner",
            "To be defined"
          ]
        ],
        "selects": {}
      },
      {
        "title": "Vendor Governance Participants",
        "headers": [
          "Role",
          "Name",
          "Organisation"
        ],
        "rows": [
          [
            "Solution / Service Owner",
            "",
            "AEI"
          ],
          [
            "Vendor Account Manager",
            "",
            "Vendor"
          ],
          [
            "IS Category Specialist",
            "",
            "AEI"
          ],
          [
            "Business SME",
            "",
            "AEI"
          ],
          [
            "Other #d team member",
            "",
            "AEI"
          ]
        ],
        "selects": {}
      },
      {
        "title": "Vendor Governance Agenda",
        "headers": [
          "Review Agenda Item",
          "Expected Output / Action"
        ],
        "rows": [
          [
            "Performance Metrics & SLA Review",
            "Evaluate KPIs and SLA compliance; agree remediation actions"
          ],
          [
            "Incident & Problem Escalations Review",
            "Discuss escalations and prevention measures"
          ],
          [
            "Change Enablement Review",
            "Review implemented changes; plan upcoming changes"
          ],
          [
            "Knowledge Management Review",
            "Article status; KB usage metrics; overdue reviews"
          ],
          [
            "Customer Feedback & Satisfaction",
            "Analyse satisfaction scores; identify improvements"
          ],
          [
            "Continuous Improvement Plan",
            "Track service improvement actions and innovations"
          ],
          [
            "Future projects and initiatives",
            "Updated project/initiative pipeline"
          ],
          [
            "Vendor Relationship Management",
            "Alignment on goals, strategy and relationship risks"
          ],
          [
            "Commercial Review",
            "Review contract, costs, invoices, POs and risks"
          ],
          [
            "Risk Management",
            "Review risk register; validate mitigation actions"
          ]
        ],
        "selects": {}
      },
      {
        "title": "BAU Review Participants",
        "headers": [
          "Role",
          "Name",
          "Organisation"
        ],
        "rows": [
          [
            "Solution / Service Owner",
            "",
            "AEI"
          ],
          [
            "Vendor Account Manager",
            "",
            "Vendor"
          ],
          [
            "Service Performance Manager",
            "",
            "AEI"
          ],
          [
            "Knowledge Manager",
            "",
            "AEI"
          ]
        ],
        "selects": {}
      },
      {
        "title": "BAU Review Agenda",
        "headers": [
          "Review Agenda Item",
          "Expected Output / Action"
        ],
        "rows": [
          [
            "Performance Metrics & SLA Review",
            "Evaluate KPIs and SLA compliance; agree remediation actions"
          ],
          [
            "Incident & Problem Review",
            "Discuss recent incidents, RCAs and prevention measures"
          ],
          [
            "Change Enablement Review",
            "Review implemented changes; plan upcoming changes"
          ],
          [
            "Knowledge Management Review",
            "Article status; KB usage metrics; overdue reviews"
          ],
          [
            "Customer Feedback & Satisfaction",
            "Analyse satisfaction scores"
          ],
          [
            "Continuous Improvement Plan",
            "Track service improvement actions"
          ],
          [
            "Risk Management",
            "Review risk register; validate mitigation actions"
          ]
        ],
        "selects": {}
      }
    ]
  },
  "s18": {
    "title": "§18 Closure & Lessons",
    "guidance": "Project closure, lessons learned and benefits realisation.",
    "fields": [],
    "tables": [
      {
        "title": "Closure Summary",
        "headers": [
          "Criteria",
          "Planned",
          "Actual",
          "Variance",
          "Comments"
        ],
        "rows": [
          [
            "Delivery Date",
            "",
            "",
            "",
            ""
          ],
          [
            "Budget",
            "",
            "",
            "",
            ""
          ],
          [
            "Scope",
            "",
            "",
            "",
            ""
          ],
          [
            "Quality",
            "",
            "",
            "",
            ""
          ]
        ],
        "selects": {}
      },
      {
        "title": "Lessons Learned",
        "headers": [
          "Lesson",
          "Category",
          "Impact",
          "Action"
        ],
        "rows": [
          [
            "",
            "Process",
            "Medium",
            ""
          ]
        ],
        "selects": {
          "1": [
            "Process",
            "Technical",
            "People",
            "Vendor"
          ],
          "2": [
            "High",
            "Medium",
            "Low"
          ]
        }
      },
      {
        "title": "Benefits Realisation",
        "headers": [
          "Benefit",
          "Planned",
          "Actual",
          "Status"
        ],
        "rows": [
          [
            "",
            "",
            "",
            "Not Started"
          ]
        ],
        "selects": {
          "3": [
            "Not Started",
            "On Track",
            "Achieved",
            "Not Achieved"
          ]
        }
      }
    ]
  }
};
