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

export interface Slug {
  // page_title: string;
  // slug: {
  //   current: string;
  // };
  pageTitle: string;
  link: string;
};

export interface ImageInterface {
  alt_text: string;
  asset: { 
    url: string;
  };
};