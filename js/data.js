function createDefaultProject(name) {
  return {
    id: Date.now(),
    name,
    rag: "green",

    approvals: [
      ["Configuration Manager","Service Configuration Management","",""],
      ["Asset Manager","Asset Management","",""]
    ],

    sla: [
      ["L1","Service Desk","Incident","P1","30min / 4hr"]
    ]
  };
}