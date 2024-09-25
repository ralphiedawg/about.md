import { FaGithub } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center space-x-4 py-4 bg-customLight">
      <a
        href="https://github.com/ralphiedawg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-customDark"
      >
        <FaGithub size={24} />
      </a>
      <a href="mailto:contact@russellwpage.com" className="text-customDark">
        <CiMail size={24} />
      </a>
    </footer>
  );
};

export default Footer;
