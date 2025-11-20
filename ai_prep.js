// Code Node 1: Aggregate CSV Data for AI Classification
// Purpose: Collect all vulnerability records from CSV extraction into a single object for batch processing

// Get all parsed CSV items
const vulnerabilities = $input.all().map(item => ({
  plugin_id: item.json.plugin_id,
  cve: item.json.cve,
  cvss: item.json.cvss,
  risk: item.json.risk,
  host: item.json.host,
  ip_address: item.json.ip_address,
  protocol: item.json.protocol,
  port: item.json.port,
  name: item.json.name,
  synopsis: item.json.synopsis,
  description: item.json.description,
  solution: item.json.solution,
  see_also: item.json.see_also,
  plugin_output: item.json.plugin_output,
  first_discovered: item.json.first_discovered,
  last_observed: item.json.last_observed
}));

return [{
  json: {
    vulnerabilities: vulnerabilities,
    count: vulnerabilities.length
  }
}];

// Expected Output: Single item with all vulnerabilities in a 'vulnerabilities' array
