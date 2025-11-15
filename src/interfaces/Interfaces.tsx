// ---------- Homepage ----------
export interface Homepage {
  audio: { 
    asset: { url: string }
  };
  image: { 
    alt_text: string,
    asset: { url: string }
  };
  page_title: string;
  short_description: string;
  slug: { current: string };
};

export interface HomePageData {
  homepage: Homepage[];
  slugs: Slug[];
};

export interface HomeContentProps {
  data: HomePageData;
};

// ---------- Slug ----------
export interface Slug {
  pageTitle: string;
  link: string;
};

export interface NavbarSlug {
  page_title: string;
  slug: {
    current: string;
  };
};

// ---------- ImageInterface ----------
export interface ImageInterface {
  alt_text: string;
  asset: { 
    url: string;
  };
};

// ---------- Pianist Props ----------
export interface PianistProps {
  data: {
    pianistPage: {
      heroImage: {
        hero_image: ImageInterface;
      };
      heroText: {
        page_title: string;
        short_description: string;
      };
      cds: {
        cd_image: ImageInterface;
        songs: {
          audio: {
            asset: {
              url: string;
            };
            title: string;
            _key: string;
          };
          title: string;
          _key: string;
        }[];
        title: string;
        _key: string;
      }[];
      performances: {
        title: string;
        youtube_share_link: string;
        _key: string;
      }[];
    }[];
  };
};

// ---------- About Props ----------
export interface AboutProps {
  data: {
    aboutPage: {
      aboutPageText: {
        page_title: string;
        quote: string;
        subsection1_description: string;
        subsection1_title: string;
        subsection2_description: string;
        subsection2_title: string;
        subsection3_description: string;
        subsection3_title: string;
      };
      gallery: ImageInterface[];
      heroImage: {
        hero_image: ImageInterface;
      };
      subsectionImages: ImageInterface[];
    }[];
  };
};

// ---------- Ethnomusicology Props ----------
export interface ItemInterface {
  description: string;
  title: string;
};

export interface EthnomusicologyProps {
  data: {
    ethnomusicologyPage: {
      heroImage: {
        hero_image: ImageInterface;
      };
      heroText: {
        page_title: string;
        short_description: string;
      };
      "section-1-title": string;
      "section-1-works": ItemInterface[];
      "section-2-title": string;
      "section-2-works": ItemInterface[];
      "section-3-title": string;
      "section-3-works": ItemInterface[];
      "section-4-title": string;
      "section-4-works": ItemInterface[];
    }[];
  };
};

// ---------- Events Props ----------
export interface EventsProps {
  data: {
    eventsPage: {
      heroImage: {
        hero_image: ImageInterface;
      };
      heroText: {
        page_title: string;
        short_description: string;
      };
      upcomingEvents: {
        event_name: string;
        date: string;
        description: string;
        link: string | null;
        location: string;
        time: string;
      }[];
    }[];
  };
};

// ---------- Contact Props ----------
export interface ContactProps {
  data: {
    contactPage: {
      heroText: {
        page_title: string;
        short_description: string;
      },
      socials: {
        href: string;
        social_media: string;
      }[]
    }[];
  };
};

// ---------- Compositions Props ----------
export interface CompositionsProps {
  data: {
    compositionsPage: {
      heroImage: {
        hero_image: ImageInterface
      };
      heroText: {
        page_title: string;
        short_description: string;
      };
      subsectionText: {
        subsection1_description: string;
        subsection1_title: string;
      };
      works: {
        audio_file: {
          asset: {
            url: string;
          }
        };
        date: string;
        description: string;
        title: string;
      }[];
    }[];
  };
};