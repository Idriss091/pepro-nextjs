import Link from "next/link";

const FooterSocial = () => {
  return (
    <>
      <li>
        <Link
          href="https://www.linkedin.com/company/pepro-calligraphy-code/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in" />
        </Link>
      </li>
    </>
  );
};

export default FooterSocial;
