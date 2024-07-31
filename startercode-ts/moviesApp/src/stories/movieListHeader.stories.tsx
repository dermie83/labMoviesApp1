import type { Meta, StoryObj } from '@storybook/react';
import MovieListHeader from "../components/headerMovieList";
import { MemoryRouter } from "react-router";
import SiteContextProvider from "../contexts/siteContext";
// import React from 'react';

const meta = {
    title: 'Home Page/Header',
    component: MovieListHeader,
    decorators: [
      (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
      (Story) => <SiteContextProvider>{Story()}</SiteContextProvider>,
    ],
  } satisfies Meta<typeof MovieListHeader>;
  
  export default meta;

  type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args:{ title:'Discover Movies'}

};
Basic.storyName = "Default";

