export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Test product A',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis leo quis est luctus, posuere tempor velit imperdiet. Donec pretium rhoncus leo vel faucibus. Donec consectetur enim quis posuere cursus. Sed turpis mi, faucibus sed urna vitae, convallis consectetur leo. Nunc malesuada, enim sed semper malesuada, erat erat fermentum lectus, eu fringilla tortor quam a justo. In non nisl eu risus tristique aliquam vel sit amet tellus. Sed pellentesque nisi urna, ac molestie mauris condimentum ac. Proin ligula felis, ultricies eget dignissim quis, tempor in elit. Quisque eleifend quam interdum neque ultrices eleifend. Cras sed nisl dui. Ut pellentesque risus vel congue hendrerit. Donec finibus eu elit ac sollicitudin. Quisque vitae efficitur nulla. Curabitur et augue dolor. Ut a lorem et erat feugiat semper eu quis ligula. Cras a vulputate nibh, non tincidunt urna.',
        date: '06.06.2021 17:54',
        lastUpdate: '08.06.2021 18:32',
        email: 'john@doe.com',
        status: 'published',
        image: '',
        price: 100,
        phone: '+99 123 456 789',
        city: 'Paris',
      },
      {
        id: '2',
        title: 'Test product B',
        content: 'Morbi blandit ut quam viverra finibus. Nulla turpis eros, feugiat vitae accumsan sed, porttitor nec purus. Sed at neque finibus, dictum felis vel, sagittis dui. Suspendisse volutpat nunc vel varius malesuada. Pellentesque quis lacus id ipsum sollicitudin luctus. Integer semper pulvinar tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum varius ante eu nisl vulputate, sit amet vulputate arcu tincidunt. Sed ac velit eu tortor vehicula finibus quis eu sem.',
        date: '07.06.2021 15:54',
        lastUpdate: '08.06.2021 23:32',
        email: 'jack@daniels.com',
        status: 'closed',
        image: '',
        price: 3568,
        phone: '+99 333 666 999',
        city: 'London',
      },
      {
        id: '3',
        title: 'Test product C',
        content: 'Etiam euismod varius iaculis. Vestibulum tristique libero ante, sed eleifend enim gravida nec. Aliquam eu commodo magna. Suspendisse sit amet efficitur risus, vitae ultrices odio. Integer ullamcorper mollis velit, sit amet imperdiet libero euismod vel. Nunc a lobortis purus. Mauris tincidunt ipsum eget egestas fermentum. Etiam condimentum augue sed lacus placerat mattis. Suspendisse consectetur elementum diam hendrerit pretium. Praesent rutrum imperdiet nisl. Fusce mollis placerat purus, iaculis ultricies quam convallis hendrerit. Nulla quis tristique enim. Sed aliquam quis lorem et iaculis. Morbi nec orci vitae ante lobortis posuere eget quis est. Aenean in nunc nec lorem rhoncus tempus eget non magna. Morbi facilisis, mi at laoreet feugiat, velit arcu tempus urna, id congue sapien erat nec lectus. Sed libero ligula, vulputate sed tincidunt non, interdum ac nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas maximus pretium massa, eget porttitor enim finibus et. Aenean mollis malesuada metus, et fringilla lectus varius at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lobortis est et dignissim egestas. Cras lacinia, urna eget pellentesque convallis, massa justo luctus dui, ac cursus arcu metus quis magna. Aenean dignissim eget neque accumsan sagittis. Vestibulum congue porta congue.',
        date: '08.06.2021 20:45',
        lastUpdate: '08.06.2021 20:45',
        email: 'johnny@walker.com',
        status: 'draft',
        image: '',
        price: '',
        phone: '',
        city: '',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    status: 'logged-in',
    email: 'jack@daniels.com',
  },
};
