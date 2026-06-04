// Add default data
function defaultData(req) {
  req.session.data['current-application'] = "RA-2026-00001",
  req.session.data['applications'] = [
    {
      "id": "RA-2026-00001",
      "status": "Not started",
      "orgName": "GreenLoop Recovery",
      "orgId": "ORG-123-001",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "A27ER1230010001PL",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00002",
      "status": "Not started",
      "orgName": "EcoCycle Industries",
      "orgId": "ORG-123-002",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "A27ER1230020001PL",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00003",
      "status": "Not started",
      "orgName": "RenewEarth Solutions",
      "orgId": "ORG-123-003",
      "type": "Reprocessor reaccreditation",
      "material": "Fiber-based composite materials",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "A27ER123000001FC",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00004",
      "status": "Not started",
      "orgName": "BlueBin Environmental",
      "orgId": "ORG-123-004",
      "type": "Reprocessor reaccreditation",
      "material": "Glass",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "A27ER1230040001GR",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00005",
      "status": "Not started",
      "orgName": "EverCycle Resource Management",
      "orgId": "ORG-123-005",
      "type": "Reprocessor reaccreditation",
      "material": "Steel",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "A27ER1230050001ST",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00006",
      "status": "Not started",
      "orgName": "UrbanRenew Processing",
      "orgId": "ORG-123-006",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "A27ER1230060001PL",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00007",
      "status": "Not started",
      "orgName": "TerraReclaim Systems",
      "orgId": "ORG-123-007",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "A27ER1230070001PL",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00008",
      "status": "Not started",
      "orgName": "SecondLife Materials Co.",
      "orgId": "ORG-123-008",
      "type": "Reprocessor reaccreditation",
      "material": "Wood",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "A27ER1230080001WO",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00009",
      "status": "Not started",
      "orgName": "PureStream Recycling Group",
      "orgId": "ORG-123-009",
      "type": "Reprocessor reaccreditation",
      "material": "Paper and board",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "A27ER1230090001PA",
      "due": "n/a"
    },
    {
      "id": "RA-2026-00010",
      "status": "Not started",
      "orgName": "ReNova Waste & Recovery",
      "orgId": "ORG-123-010",
      "type": "Reprocessor reaccreditation",
      "material": "Aluminium",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "A27ER1230100001AL",
      "due": "n/a"
    }
  ]
}









// Export the functions so they can be used in the main routes file
module.exports = { defaultData };