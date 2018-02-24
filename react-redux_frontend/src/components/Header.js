import React from 'react';
import ProjectPopoverAnimation from '../components/ProjectPopoverAnimation';
import HelpPopoverAnimation from '../components/HelpPopoverAnimation';

const Header = () => (
  <header>
    <table>
      <td>
        <ProjectPopoverAnimation />
      </td>
      <td>
        <HelpPopoverAnimation />
      </td>
    </table>
  </header>
);

export default Header;