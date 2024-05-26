/*
  The logic here is we will treat all the employees and teams as nodes connected in form of linked list 
  so basically for a certain employee or team which can be called a node will contain a reference to its 
  parent's id through which we can easily map in UI that who will come under who.
*/
export const Employees = [
  {
    id: 'employee_1',
    empName: 'Pratham',
    empPosition: 'CEO',
    empParent: '',
  },
  {
    id: 'employee_2',
    empName: 'Namandeep Singh',
    empPosition: 'Head of staff/HR',
    empParent: 'employee_1',
  },
  {
    id: 'employee_3',
    empName: 'Om Gupta',
    empPosition: 'Head of engineering',
    empParent: 'employee_1',
  },
  {
    id: 'employee_4',
    empName: 'Piyush Tewari',
    empPosition: 'Head of design',
    empParent: 'employee_1',
  },
  {
    id: 'employee_5',
    empName: 'Hardik',
    empPosition: 'Business lead',
    empParent: 'team_1',
  },
  {
    id: 'employee_6',
    empName: 'Sahil Ahuja',
    empPosition: 'Business Member',
    empParent: 'employee_5',
  },
  {
    id: 'employee_7',
    empName: 'Parivesh',
    empPosition: 'Finance Lead',
    empParent: 'team_2',
  },
  {
    id: 'employee_8',
    empName: 'Kapish Chawla',
    empPosition: 'Finance Member',
    empParent: 'employee_7',
  },
  {
    id: 'employee_9',
    empName: 'Niharika',
    empPosition: 'Growth Lead',
    empParent: 'team_3',
  },
  {
    id: 'employee_10',
    empName: 'Mayank',
    empPosition: 'Growth Member',
    empParent: 'employee_9',
  },
  {
    id: 'employee_11',
    empName: 'Anshvi',
    empPosition: 'Internal Tools Lead',
    empParent: 'team_4',
  },
  {
    id: 'employee_12',
    empName: 'Ujjwal',
    empPosition: 'Internal Tools Member',
    empParent: 'employee_11',
  },
  {
    id: 'employee_13',
    empName: 'Vansh Sharma',
    empPosition: 'UI/UX Lead',
    empParent: 'team_5',
  },
  {
    id: 'employee_14',
    empName: 'Jay Patel',
    empPosition: 'UI/UX Member',
    empParent: 'employee_13',
  },
  {
    id: 'employee_15',
    empName: 'Jubraj Dev',
    empPosition: 'Graphics Lead',
    empParent: 'team_6',
  },
  {
    id: 'employee_16',
    empName: 'Tushar',
    empPosition: 'Graphics member',
    empParent: 'employee_15',
  },
];

export const teams = [
  {
    id: 'team_1',
    teamName: 'Business',
    teamParent: 'employee_2',
  },
  {
    id: 'team_2',
    teamName: 'Finance',
    teamParent: 'employee_2',
  },
  {
    id: 'team_3',
    teamName: 'Growth',
    teamParent: 'employee_3',
  },
  {
    id: 'team_4',
    teamName: 'Internal Tools',
    teamParent: 'employee_3',
  },
  {
    id: 'team_5',
    teamName: 'UI/UX',
    teamParent: 'employee_4',
  },
  {
    id: 'team_6',
    teamName: 'Graphics',
    teamParent: 'employee_4',
  },
]
