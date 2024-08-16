// Sample Data
let objectFlashcardDeck = [{
  flashcard: '02x02',
  qstring: '2 X 2',
  astring: '4',
  rstring: '4',
  difficulty: 1
}, {
  flashcard: '02x03',
  qstring: '2 X 3',
  astring: '6',
  rstring: '6',
  difficulty: 1
}, {
  flashcard: '03x02',
  qstring: '3 X 2',
  astring: '6',
  rstring: '6',
  difficulty: 1
}, {
  flashcard: '02x04',
  qstring: '2 X 4',
  astring: '8',
  rstring: '8',
  difficulty: 1
}, {
  flashcard: '03x03',
  qstring: '3 X 3',
  astring: '9',
  rstring: '9',
  difficulty: 1
}, {
  flashcard: '04x02',
  qstring: '4 X 2',
  astring: '8',
  rstring: '8',
  difficulty: 1
}, {
  flashcard: '02x05',
  qstring: '2 X 5',
  astring: '10',
  rstring: '10',
  difficulty: 2
}, {
  flashcard: '03x04',
  qstring: '3 X 4',
  astring: '12',
  rstring: '12',
  difficulty: 2
}, {
  flashcard: '04x03',
  qstring: '4 X 3',
  astring: '12',
  rstring: '12',
  difficulty: 2
}, {
  flashcard: '05x02',
  qstring: '5 X 2',
  astring: '10',
  rstring: '10',
  difficulty: 2
}, {
  flashcard: '02x06',
  qstring: '2 X 6',
  astring: '12',
  rstring: '12',
  difficulty: 2
}, {
  flashcard: '03x05',
  qstring: '3 X 5',
  astring: '15',
  rstring: '15',
  difficulty: 2
}, {
  flashcard: '04x04',
  qstring: '4 X 4',
  astring: '16',
  rstring: '16',
  difficulty: 2
}, {
  flashcard: '05x03',
  qstring: '5 X 3',
  astring: '15',
  rstring: '15',
  difficulty: 2
}, {
  flashcard: '06x02',
  qstring: '6 X 2',
  astring: '12',
  rstring: '12',
  difficulty: 2
}, {
  flashcard: '02x07',
  qstring: '2 X 7',
  astring: '14',
  rstring: '14',
  difficulty: 3
}, {
  flashcard: '03x06',
  qstring: '3 X 6',
  astring: '18',
  rstring: '18',
  difficulty: 3
}, {
  flashcard: '04x05',
  qstring: '4 X 5',
  astring: '20',
  rstring: '20',
  difficulty: 3
}, {
  flashcard: '05x04',
  qstring: '5 X 4',
  astring: '20',
  rstring: '20',
  difficulty: 3
}, {
  flashcard: '06x03',
  qstring: '6 X 3',
  astring: '18',
  rstring: '18',
  difficulty: 3
}, {
  flashcard: '07x02',
  qstring: '7 X 2',
  astring: '14',
  rstring: '14',
  difficulty: 3
}, {
  flashcard: '02x08',
  qstring: '2 X 8',
  astring: '16',
  rstring: '16',
  difficulty: 4
}, {
  flashcard: '03x07',
  qstring: '3 X 7',
  astring: '21',
  rstring: '21',
  difficulty: 4
}, {
  flashcard: '04x06',
  qstring: '4 X 6',
  astring: '24',
  rstring: '24',
  difficulty: 4
}, {
  flashcard: '05x05',
  qstring: '5 X 5',
  astring: '25',
  rstring: '25',
  difficulty: 4
}, {
  flashcard: '06x04',
  qstring: '6 X 4',
  astring: '24',
  rstring: '24',
  difficulty: 4
}, {
  flashcard: '07x03',
  qstring: '7 X 3',
  astring: '21',
  rstring: '21',
  difficulty: 4
}, {
  flashcard: '08x02',
  qstring: '8 X 2',
  astring: '16',
  rstring: '16',
  difficulty: 4
}, {
  flashcard: '02x09',
  qstring: '2 X 9',
  astring: '18',
  rstring: '18',
  difficulty: 5
}, {
  flashcard: '03x08',
  qstring: '3 X 8',
  astring: '24',
  rstring: '24',
  difficulty: 5
}, {
  flashcard: '04x07',
  qstring: '4 X 7',
  astring: '28',
  rstring: '28',
  difficulty: 5
}, {
  flashcard: '05x06',
  qstring: '5 X 6',
  astring: '30',
  rstring: '30',
  difficulty: 5
}, {
  flashcard: '06x05',
  qstring: '6 X 5',
  astring: '30',
  rstring: '30',
  difficulty: 5
}, {
  flashcard: '07x04',
  qstring: '7 X 4',
  astring: '28',
  rstring: '28',
  difficulty: 5
}, {
  flashcard: '08x03',
  qstring: '8 X 3',
  astring: '24',
  rstring: '24',
  difficulty: 5
}, {
  flashcard: '09x02',
  qstring: '9 X 2',
  astring: '18',
  rstring: '18',
  difficulty: 5
}, {
  flashcard: '03x09',
  qstring: '3 X 9',
  astring: '27',
  rstring: '27',
  difficulty: 6
}, {
  flashcard: '04x08',
  qstring: '4 X 8',
  astring: '32',
  rstring: '32',
  difficulty: 6
}, {
  flashcard: '05x07',
  qstring: '5 X 7',
  astring: '35',
  rstring: '35',
  difficulty: 6
}, {
  flashcard: '06x06',
  qstring: '6 X 6',
  astring: '36',
  rstring: '36',
  difficulty: 6
}, {
  flashcard: '07x05',
  qstring: '7 X 5',
  astring: '35',
  rstring: '35',
  difficulty: 6
}, {
  flashcard: '08x04',
  qstring: '8 X 4',
  astring: '32',
  rstring: '32',
  difficulty: 6
}, {
  flashcard: '09x03',
  qstring: '9 X 3',
  astring: '27',
  rstring: '27',
  difficulty: 6
}, {
  flashcard: '04x09',
  qstring: '4 X 9',
  astring: '36',
  rstring: '36',
  difficulty: 7
}, {
  flashcard: '05x08',
  qstring: '5 X 8',
  astring: '40',
  rstring: '40',
  difficulty: 7
}, {
  flashcard: '06x07',
  qstring: '6 X 7',
  astring: '42',
  rstring: '42',
  difficulty: 7
}, {
  flashcard: '07x06',
  qstring: '7 X 6',
  astring: '42',
  rstring: '42',
  difficulty: 7
}, {
  flashcard: '08x05',
  qstring: '8 X 5',
  astring: '40',
  rstring: '40',
  difficulty: 7
}, {
  flashcard: '09x04',
  qstring: '9 X 4',
  astring: '36',
  rstring: '36',
  difficulty: 7
}, {
  flashcard: '05x09',
  qstring: '5 X 9',
  astring: '45',
  rstring: '45',
  difficulty: 8
}, {
  flashcard: '06x08',
  qstring: '6 X 8',
  astring: '48',
  rstring: '48',
  difficulty: 8
}, {
  flashcard: '07x07',
  qstring: '7 X 7',
  astring: '49',
  rstring: '49',
  difficulty: 8
}, {
  flashcard: '08x06',
  qstring: '8 X 6',
  astring: '48',
  rstring: '48',
  difficulty: 8
}, {
  flashcard: '09x05',
  qstring: '9 X 5',
  astring: '45',
  rstring: '45',
  difficulty: 8
}, {
  flashcard: '06x09',
  qstring: '6 X 9',
  astring: '54',
  rstring: '54',
  difficulty: 9
}, {
  flashcard: '07x08',
  qstring: '7 X 8',
  astring: '56',
  rstring: '56',
  difficulty: 9
}, {
  flashcard: '08x07',
  qstring: '8 X 7',
  astring: '56',
  rstring: '56',
  difficulty: 9
}, {
  flashcard: '09x06',
  qstring: '9 X 6',
  astring: '54',
  rstring: '54',
  difficulty: 9
}, {
  flashcard: '07x09',
  qstring: '7 X 9',
  astring: '63',
  rstring: '63',
  difficulty: 10
}, {
  flashcard: '08x08',
  qstring: '8 X 8',
  astring: '64',
  rstring: '64',
  difficulty: 10
}, {
  flashcard: '09x07',
  qstring: '9 X 7',
  astring: '63',
  rstring: '63',
  difficulty: 10
}, {
  flashcard: '08x09',
  qstring: '8 X 9',
  astring: '72',
  rstring: '72',
  difficulty: 10
}, {
  flashcard: '09x08',
  qstring: '9 X 8',
  astring: '72',
  rstring: '72',
  difficulty: 10
}, {
  flashcard: '09x09',
  qstring: '9 X 9',
  astring: '81',
  rstring: '81',
  difficulty: 10
}];

const correctStrings = [
  'Correct!', 
  'Yes!', 
  'Right!',
  'Awesome!', 
  'Good job!', 
  'Sweet!',
  'Beautiful!', 
  'Phenomenal!', 
  'Perfect!',
  'Great!'
];

