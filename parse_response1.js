// Code Node 2: Parse AI Response & Prepare for Database
// Purpose: Extract the JSON array from the AI response and format it as individual items for database insertion

// Get AI response (different AI nodes use different field names)
let response = $json.response || $json.output || $json.text;

// Remove markdown code blocks if present
response = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

// Parse the JSON array
const enrichedVulnerabilities = JSON.parse(response);

// Return as individual items for database insert
return enrichedVulnerabilities.map(vuln => ({ 
  json: vuln 
}));

// Expected Output: Multiple items (one per vulnerability) with all fields including asset_type and team_assignment
