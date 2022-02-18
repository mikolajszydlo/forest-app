const initialState = {
  tasks: [
    {
      id: 1,
      client: 'Abd Client',
      date: '2022-02-16',
      team: 1,
      plan: true,
      completed: false,
      dest: {
        city: 'Arvika',
        street: 'Tyrgatan',
        number: '12',
      },
    },
    {
      id: 2,
      client: 'Rds Client',
      date: '2022-02-17',
      team: 4,
      plan: false,
      completed: false,
      dest: {
        city: 'Borås',
        street: 'Andréegatan',
        number: '122',
      },
    },
    {
      id: 3,
      client: 'CHS Client',
      date: '2022-02-18',
      team: 3,
      plan: true,
      completed: false,
      dest: {
        city: 'Borås',
        street: 'Babordsgatan',
        number: '10',
      },
    },
  ],
  unplannedOrdersWindow: {
    open: true,
  },
};

export default initialState;
