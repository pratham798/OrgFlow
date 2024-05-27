/*
  The logic here is we will treat all the employees and teams as nodes connected in form of linked list 
  so basically for a certain employee or team which can be called a node will contain a reference to its 
  parent's id through which we can easily map in UI that who will come under who.
*/
export const EMPLOYEES = {
  'employee_1': {
    id: 'employee_1',
    name: 'Pratham',
    position: 'CEO',
    parent: '',
  },
  'employee_2': {
    id: 'employee_2',
    name: 'Namandeep Singh',
    position: 'Head of staff/HR',
    parent: 'employee_1',
  },
  'employee_3': {
    id: 'employee_3',
    name: 'Om Gupta',
    position: 'Head of engineering',
    parent: 'employee_1',
  },
  'employee_4': {
    id: 'employee_4',
    name: 'Piyush Tewari',
    position: 'Head of design',
    parent: 'employee_1',
  },
  'employee_5': {
    id: 'employee_5',
    name: 'Hardik',
    position: 'Business lead',
    parent: 'team_1',
  },
  'employee_6': {
    id: 'employee_6',
    name: 'Sahil Ahuja',
    position: 'Business Member',
    parent: 'employee_5',
  },
  'employee_7': {
    id: 'employee_7',
    name: 'Parivesh',
    position: 'Finance Lead',
    parent: 'team_2',
  },
  'employee_8': {
    id: 'employee_8',
    name: 'Kapish Chawla',
    position: 'Finance Member',
    parent: 'employee_7',
  },
  'employee_9': {
    id: 'employee_9',
    name: 'Niharika',
    position: 'Growth Lead',
    parent: 'team_3',
  },
  'employee_10': {
    id: 'employee_10',
    name: 'Mayank',
    position: 'Growth Member',
    parent: 'employee_9',
  },
  'employee_11': {
    id: 'employee_11',
    name: 'Anshvi',
    position: 'Internal Tools Lead',
    parent: 'team_4',
  },
  'employee_12': {
    id: 'employee_12',
    name: 'Ujjwal',
    position: 'Internal Tools Member',
    parent: 'employee_11',
  },
  'employee_13': {
    id: 'employee_13',
    name: 'Vansh Sharma',
    position: 'UI/UX Lead',
    parent: 'team_5',
  },
  'employee_14': {
    id: 'employee_14',
    name: 'Jay Patel',
    position: 'UI/UX Member',
    parent: 'employee_13',
  },
  'employee_15': {
    id: 'employee_15',
    name: 'Jubraj Dev',
    position: 'Graphics Lead',
    parent: 'team_6',
  },
  'employee_16': {
    id: 'employee_16',
    name: 'Tushar',
    position: 'Graphics member',
    parent: 'employee_15',
  },
};

export const TEAMS = {
  'team_1': {
    id: 'team_1',
    name: 'Business',
    parent: 'employee_2',
  },
  'team_2': {
    id: 'team_2',
    name: 'Finance',
    parent: 'employee_2',
  },
  'team_3': {
    id: 'team_3',
    name: 'Growth',
    parent: 'employee_3',
  },
  'team_4': {
    id: 'team_4',
    name: 'Internal Tools',
    parent: 'employee_3',
  },
  'team_5': {
    id: 'team_5',
    name: 'UI/UX',
    parent: 'employee_4',
  },
  'team_6': {
    id: 'team_6',
    name: 'Graphics',
    parent: 'employee_4',
  },
}
