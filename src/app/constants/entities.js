/*
  The logic here is we will treat all the employees and teams as nodes connected in form of linked list 
  so basically for a certain employee or team which can be called a node will contain a reference to its 
  parent's id through which we can easily map in UI that who will come under who.
*/
export const EMPLOYEES = [
  {
    id: 'employee_1',
    name: 'Pratham',
    position: 'CEO',
    parent: null,
    role: 'employee',
    role_id: 1,
  },
  {
    id: 'employee_2',
    name: 'Namandeep Singh',
    position: 'Head of staff/HR',
    parent: 1,
    role: 'employee',
    role_id: 2,
  },
  {
    id: 'employee_3',
    name: 'Om Gupta',
    position: 'Head of engineering',
    parent: 1,
    role: 'employee',
    role_id: 3,
  },
  {
    id: 'employee_4',
    name: 'Piyush Tewari',
    position: 'Head of design',
    parent: 1,
    role: 'employee',
    role_id: 4,
  },
  {
    id: 'employee_5',
    name: 'Hardik',
    position: 'Business lead',
    parent: 17,
    role: 'employee',
    role_id: 5,
  },
  {
    id: 'employee_6',
    name: 'Sahil Ahuja',
    position: 'Business Member',
    parent: 5,
    role: 'employee',
    role_id: 6,
  },
  {
    id: 'employee_7',
    name: 'Parivesh',
    position: 'Finance Lead',
    parent: 18,
    role: 'employee',
    role_id: 7,
  },
  {
    id: 'employee_8',
    name: 'Kapish Chawla',
    position: 'Finance Member',
    parent: 7,
    role: 'employee',
    role_id: 8,
  },
  {
    id: 'employee_9',
    name: 'Niharika',
    position: 'Growth Lead',
    parent: 19,
    role: 'employee',
    role_id: 9,
  },
  {
    id: 'employee_10',
    name: 'Mayank',
    position: 'Growth Member',
    parent: 9,
    role: 'employee',
    role_id: 10,
  },
  {
    id: 'employee_11',
    name: 'Anshvi',
    position: 'Internal Tools Lead',
    parent: 20,
    role: 'employee',
    role_id: 11,
  },
  {
    id: 'employee_12',
    name: 'Ujjwal',
    position: 'Internal Tools Member',
    parent: 11,
    role: 'employee',
    role_id: 12,
  },
  {
    id: 'employee_13',
    name: 'Vansh Sharma',
    position: 'UI/UX Lead',
    parent: 21,
    role: 'employee',
    role_id: 13,
  },
  {
    id: 'employee_14',
    name: 'Jay Patel',
    position: 'UI/UX Member',
    parent: 13,
    role: 'employee',
    role_id: 14,
  },
  {
    id: 'employee_15',
    name: 'Jubraj Dev',
    position: 'Graphics Lead',
    parent: 22,
    role: 'employee',
    role_id: 15,
  },
  {
    id: 'employee_16',
    name: 'Tushar',
    position: 'Graphics member',
    parent: 15,
    role: 'employee',
    role_id: 16,
  },
];

export const TEAMS = [
  {
    id: 'team_1',
    name: 'Business',
    parent: 2,
    role: 'team',
    role_id: 17,
  },
  {
    id: 'team_2',
    name: 'Finance',
    parent: 2,
    role: 'team',
    role_id: 18,
  },
  {
    id: 'team_3',
    name: 'Growth',
    parent: 3,
    role: 'team',
    role_id: 19,
  },
  {
    id: 'team_4',
    name: 'Internal Tools',
    parent: 3,
    role: 'team',
    role_id: 20,
  },
  {
    id: 'team_5',
    name: 'UI/UX',
    parent: 4,
    role: 'team',
    role_id: 21,
  },
  {
    id: 'team_6',
    name: 'Graphics',
    parent: 4,
    role: 'team',
    role_id: 22,
  },
]
