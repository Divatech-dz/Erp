declare interface FooterProps {
    type?: 'mobile' | 'desktop';
  }

  declare interface HeaderBoxProps {
    type?: 'title' | 'greeting';
    title: string;
    subtext: string;
    user?: string;
  }