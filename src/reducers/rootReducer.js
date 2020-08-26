const initState = {
  posts: [
    {
      id: '1',
      title: 'Nullam scelerisque felis mauris',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fringilla eleifend. Maecenas ac venenatis nunc, scelerisque volutpat magna. In faucibus mollis ante nec euismod. Nullam eget congue orci, eget imperdiet ligula. Morbi nec mauris metus. Donec viverra enim odio, at vestibulum ante rhoncus semper. Pellentesque sem justo, bibendum et ullamcorper sit amet, aliquet id orci.',
    },
    {
      id: '2',
      title: 'Pellentesque non lacinia leo',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fringilla eleifend. Maecenas ac venenatis nunc, scelerisque volutpat magna. In faucibus mollis ante nec euismod. Nullam eget congue orci, eget imperdiet ligula. Morbi nec mauris metus. Donec viverra enim odio, at vestibulum ante rhoncus semper. Pellentesque sem justo, bibendum et ullamcorper sit amet, aliquet id orci.',
    },
    {
      id: '3',
      title: 'Nullam sit amet malesuada',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fringilla eleifend. Maecenas ac venenatis nunc, scelerisque volutpat magna. In faucibus mollis ante nec euismod. Nullam eget congue orci, eget imperdiet ligula. Morbi nec mauris metus. Donec viverra enim odio, at vestibulum ante rhoncus semper. Pellentesque sem justo, bibendum et ullamcorper sit amet, aliquet id orci.',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
