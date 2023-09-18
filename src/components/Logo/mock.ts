export default {
  setting: {
    data: {
      id: '1',
      attributes: {
        blogName: 'Evandro Calado',
        blogDescription: 'Blog para estudos e portifolio de projetos',
        logo: {
          data: {
            id: '1',
            attributes: {
              name: '110628201.jpeg',
              alternativeText: null,
              width: 460,
              url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1694217416/110628201_8f98b88d6a.jpg',
              formats: {
                thumbnail: {
                  ext: '.jpeg',
                  url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1694217416/thumbnail_110628201_8f98b88d6a.jpg',
                  hash: 'thumbnail_110628201_8f98b88d6a',
                  mime: 'image/jpeg',
                  name: 'thumbnail_110628201.jpeg',
                  path: null,
                  size: 5.96,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_110628201_8f98b88d6a',
                    resource_type: 'image',
                  },
                },
              },
            },
          },
        },
        menuLink: [
          {
            id: '1',
            link: '/',
            text: 'Home',
            newTab: false,
          },
          {
            id: '2',
            link: '/about',
            text: 'Sobre min',
            newTab: false,
          },
          {
            id: '3',
            link: '/projects',
            text: 'Projetos',
            newTab: false,
          },
          {
            id: '4',
            link: '/blog',
            text: 'Blog',
            newTab: false,
          },
          {
            id: '5',
            link: '/contact',
            text: 'Contato',
            newTab: false,
          },
        ],
        footer: '<p>Evandro Calado - Desenvolvedor Frontend</p>',
      },
    },
  },
};
