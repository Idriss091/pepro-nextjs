import Link from "next/link";

const SocialShareV3 = () => {
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
      <li>
        <Link
          className="linkedin"
          href="mailto:contact@pepro.fr"
          aria-label="Envoyer un email à Pepro"
        >
          <i className="fas fa-envelope" aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          className="facebook"
          href="tel:+33781911992"
          aria-label="Appeler Pepro"
        >
          <i className="fas fa-phone" aria-hidden="true" />
        </Link>
      </li>
    </>
  );
};

export default SocialShareV3;
