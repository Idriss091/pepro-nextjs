import Link from "next/link";

const SocialShareV2 = () => {
  return (
    <>
      <li>
        <Link
          className="linkedin"
          href="https://www.linkedin.com/company/pepro-calligraphy-code/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir la page LinkedIn de Pepro"
        >
          <i className="fab fa-linkedin-in" aria-hidden="true" />
        </Link>
      </li>
    </>
  );
};

export default SocialShareV2;
