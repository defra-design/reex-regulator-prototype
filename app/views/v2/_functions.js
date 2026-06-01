// Add default data
function defaultData(req) {
  req.session.data['current-application'] = "000197",
  req.session.data['applications'] = [
    {
      "id": "000197",
      "status": "Not started",
      "orgName": "GreenLoop Recovery",
      "orgId": "ORG-123-001",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000268",
      "status": "Not started",
      "orgName": "EcoCycle Industries",
      "orgId": "ORG-123-002",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000293",
      "status": "Not started",
      "orgName": "RenewEarth Solutions",
      "orgId": "ORG-123-003",
      "type": "Reprocessor reaccreditation",
      "material": "Fiber-based composite materials",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000579",
      "status": "Not started",
      "orgName": "BlueBin Environmental",
      "orgId": "ORG-123-004",
      "type": "Reprocessor reaccreditation",
      "material": "Glass",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000614",
      "status": "Not started",
      "orgName": "EverCycle Resource Management",
      "orgId": "ORG-123-005",
      "type": "Reprocessor reaccreditation",
      "material": "Steel",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000668",
      "status": "Not started",
      "orgName": "UrbanRenew Processing",
      "orgId": "ORG-123-006",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000778",
      "status": "Not started",
      "orgName": "TerraReclaim Systems",
      "orgId": "ORG-123-007",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000813",
      "status": "Not started",
      "orgName": "SecondLife Materials Co.",
      "orgId": "ORG-123-008",
      "type": "Reprocessor reaccreditation",
      "material": "Wood",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000833",
      "status": "Not started",
      "orgName": "PureStream Recycling Group",
      "orgId": "ORG-123-009",
      "type": "Reprocessor reaccreditation",
      "material": "Paper and board",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000901",
      "status": "Not started",
      "orgName": "ReNova Waste & Recovery",
      "orgId": "ORG-123-010",
      "type": "Reprocessor reaccreditation",
      "material": "Aluminium",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "PR/PK/EXP 000568587647654"
    }
  ]
}









// Export the functions so they can be used in the main routes file
module.exports = { defaultData };