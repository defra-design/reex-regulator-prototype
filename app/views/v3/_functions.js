// Add default data
function defaultData(req) {
  req.session.data['current-application'] = "RA-2026-00001",
  req.session.data['applications'] = [
    {
      "id": "RA-2026-00001",
      "status": "Duly made",
      "orgName": "GreenLoop Recovery",
      "orgId": "ORG-123-001",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "A27ER1230010001PL",
      "dulyMade": "true",
      "payment":"2026-08-24T00:00:00.000Z",
      "due": "2026-08-24T00:00:00.000Z",
      "audit":[
        {
          "type":"status",
          "date":"04/06/2026, 11:40:57",
          "old":"Not started",
          "new":"Duly made"
        },
        {
          "type":"due",
          "date":"04/06/2026, 11:40:57",
          "new":"2026-08-24T00:00:00.000Z"
        },
        {
          "type":"payment",
          "date":"04/06/2026, 11:40:57",
          "payment":"2026-08-24T00:00:00.000Z"}
      ]
    },
    {
      "id": "RA-2026-00002",
      "status": "In progress",
      "orgName": "EcoCycle Industries",
      "orgId": "ORG-123-002",
      "type": "Reprocessor reaccreditation",
      "material": "Plastic",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "A27ER1230020001PL",
      "dulyMade": "true",
      "payment":"2026-08-24T00:00:00.000Z",
      "due": "2026-08-24T00:00:00.000Z",
      "owner":"Jonathan Slater",
      "audit":[
        {
          "type":"status",
          "date":"04/06/2026, 11:41:51",
          "old":"Duly made",
          "new":"In progress"
        },
        {
          "type":"owner",
          "date":"04/06/2026, 11:41:21",
          "old":"unassigned",
          "new":"Jonathan Slater"
        },
        {
          "type":"status",
          "date":"04/06/2026, 11:40:57",
          "old":"Not started",
          "new":"Duly made"
        },
        {
          "type":"due",
          "date":"04/06/2026, 11:40:57",
          "new":"2026-08-24T00:00:00.000Z"
        },
        {
          "type":"payment",
          "date":"04/06/2026, 11:40:57",
          "payment":"2026-08-24T00:00:00.000Z"}
      ]
    },
    {
      "id": "RA-2026-00003",
      "status": "Queried",
      "orgName": "RenewEarth Solutions",
      "orgId": "ORG-123-003",
      "type": "Reprocessor reaccreditation",
      "material": "Fiber-based composite materials",
      "siteAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
      "regulator": "England",
      "charge": "2184",
      "chargeRef": "A27ER123000001FC",
      "dulyMade": "true",
      "payment":"2026-08-24T00:00:00.000Z",
      "due": "2026-08-24T00:00:00.000Z",
      "owner":"Alexandra Svein",
      "audit":[
        {
          "type":"query",
          "date":"04/06/2026, 11:42:46",
          "questions":["Sampling and inspection plan"],
          "reason":"It looks like you’ve uploaded the wrong document. Please upload and submit your sampling and inspection plan again."
        },
        {
          "type":"status",
          "date":"04/06/2026, 11:41:51",
          "old":"Duly made",
          "new":"In progress"
        },
        {
          "type":"owner",
          "date":"04/06/2026, 11:41:21",
          "old":"unassigned",
          "new":"you"
        },
        {
          "type":"status",
          "date":"04/06/2026, 11:40:57",
          "old":"Not started",
          "new":"Duly made"
        },
        {
          "type":"due",
          "date":"04/06/2026, 11:40:57",
          "new":"2026-08-24T00:00:00.000Z"
        },
        {
          "type":"payment",
          "date":"04/06/2026, 11:40:57",
          "payment":"2026-08-24T00:00:00.000Z"}
      ]
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
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
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
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
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
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
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
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
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
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
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
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
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
      "authorised": ['Rosina Campbell', 'Harry Edge'],
      "sip": 'example.pdf',
      "regulator": "England",
      "charge": "3276",
      "chargeRef": "A27ER1230100001AL",
      "due": "n/a"
    }
  ]
}









// Export the functions so they can be used in the main routes file
module.exports = { defaultData };