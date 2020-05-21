const mockFunction = jest.fn();
export const recordsResponse = {
  data: {
    status: 200,
    data: [
      {
        id: '44874ff8-b14c-4276-8cb4-31482bc38c78',
        createdby: '4d745eb0-3c11-4074-9079-2083ab45f7ca',
        type: 'red flag',
        location: '7.222, 9.000',
        comment: 'this is a new comment',
        status: 'draft',
        firstname: 'admin',
        lastname: 'Eric'
      },
    ]
  }
};

export const data = [
  {
    id: '44874ff8-b14c-4276-8cb4-31482bc38c78',
    createdby: '4d745eb0-3c11-4074-9079-2083ab45f7ca',
    type: 'red flag',
    location: '7.222, 9.000',
    comment: 'this is a new comment',
    status: 'draft',
    firstname: 'admin',
    lastname: 'Eric'
  },
];

export const responsedata = [
  {
    id: '5ff5138b-002d-4603-a717-18b5c47494fb',
    createdby: 'b757acee-6288-44c5-9635-fa92c8ef7e1c',
    type: 'red flag',
    location: '6.0000, 8.09754',
    comment: 'ploom boo noom',
    status: 'draft',
    firstname: 'femi',
    lastname: 'kayode'
  },
  {
    id: '1b71293e-fed5-4be0-820b-343de31ab80d',
    createdby: '4d745eb0-3c11-4074-9079-2083ab45f7ca',
    type: 'red flag',
    location: '6.0000, 8.09754',
    comment: 'ploom boo noom',
    status: 'resolved',
    firstname: 'admin',
    lastname: 'Eric'
  },
  {
    id: 'd62f1c11-b2c2-49d2-9295-6461d84c48f6',
    createdby: '4cd9248a-0d71-4824-b871-0d0a556d6084',
    type: 'intervention',
    location: '4,6',
    comment: "Red Sea, we can't cross",
    status: 'under investigation',
    firstname: 'Moses',
    lastname: 'Abraham'
  },
  {
    id: 'd62f1c11-b2c2-49d2-9295-6461d84c48f6',
    createdby: '4cd9248a-0d71-4824-b871-0d0a556d6084',
    type: 'intervention',
    location: '4,6',
    comment: "Red Sea, we can't cross",
    status: 'rejected',
    firstname: 'Moses',
    lastname: 'Abraham'
  },
];
export const history = {
  action: 'PUSH',
  block: mockFunction,
  createHref: mockFunction,
  go: mockFunction,
  goBack: mockFunction,
  goForward: mockFunction,
  length: 1,
  listen: mockFunction,
  location: {},
  push: mockFunction,
  replace: mockFunction
};

export const match = {
  isExact: true,
  params: {},
  path: '/explore',
  url: '/explore'
};

export const user = {
  id: '4c438bc9-aa79-4a1e-8026-83e4d30e0ccd',
  firstname: 'Adaeze',
  lastname: 'Bhello',
  username: 'deebhello',
  status: true
};
